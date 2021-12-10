import React, { useRef } from 'react';
import styles from './styles.module.css';
const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

const calcClickedVolume: (
  e: MouseEvent | React.MouseEvent,
  barVolumeRef: React.RefObject<HTMLDivElement>
) => number = (e, barVolumeRef) => {
  const clickPositionInPage = e.pageY;
  const barHeight = barVolumeRef.current?.offsetHeight || 0;
  const barStart =
    (barVolumeRef.current?.getBoundingClientRect().bottom || 0) +
    window.scrollY;
  const relativeClickInBar = barStart - clickPositionInPage;
  const clickPositionInBar =
    relativeClickInBar < 0
      ? 0
      : relativeClickInBar > barHeight
      ? barHeight
      : relativeClickInBar;

  const percent = clickPositionInBar / barHeight;
  return +percent.toFixed(2);
};
export const VolumeBar = ({
  volume,
  onChangeVolume,
}: {
  volume?: number;
  onChangeVolume: (newVolume: number) => void;
}) => {
  const barVolumeRef = useRef<HTMLDivElement>(null);

  const handleTimeDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onChangeVolume(calcClickedVolume(e, barVolumeRef));

    const updateTimeOnMove = (eMove: MouseEvent) => {
      onChangeVolume(calcClickedVolume(eMove, barVolumeRef));
    };

    window.addEventListener('mousemove', updateTimeOnMove);

    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', updateTimeOnMove);
    });
  };
  return (
    <div className={styles.volumeContainer} hidden={isMobile()}>
      <input type='checkbox' name='volume' id='volume' />
      <div
        style={{
          boxShadow: `50% ${(volume || 0) * 100}% orange`,
        }}
        className={styles.volumeBar}
        ref={barVolumeRef}
      >
        <div
          onMouseDown={(e) => handleTimeDrag(e)}
          className={styles.volumeBall}
          style={{
            bottom: `${(volume || 0) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};
export default VolumeBar;
