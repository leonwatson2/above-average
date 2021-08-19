import React, { FC, useEffect, useRef, useState } from 'react';
import { EpisodeType } from 'Shared/Types';
import styles from './styles.module.css';
import { Replay10 } from '@material-ui/icons';
import cx from 'classnames';

export const AudioPlayer: FC<{ episode: EpisodeType }> = ({ episode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (audioRef.current !== null && episode) {
      audioRef?.current?.load();
      audioRef?.current?.play();
    }
  }, [episode]);

  const playPause = () => {
    if (audioRef.current !== null && episode) {
      if(audioRef.current.paused){
        audioRef?.current?.play()
        setPlaying(true);

      } else {
        audioRef?.current?.pause();
        setPlaying(false);

      }
    }
  };
  return (
    <div className={styles.container}>
      <h4>{episode?.title}</h4>
      <button className={styles.playPauseButton}>
        <div
          className={cx(styles.playBtn, {
            [styles.playing]: playing,
          })}
          onClick={playPause}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'>
            <polygon
              className={styles.playBtn__svg}
              points='9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69'
            />
            <path
              className={styles.playBtn__svg}
              d='M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z'
            />
          </svg>
        </div>
      </button>
      <button className={styles.back15}>
        <Replay10 />
      </button>
      <input
        type='range'
        min={0}
        max={audioRef.current?.src.length}
        value={audioRef.current?.currentTime}
      />
      <audio ref={audioRef}>
        <source src={episode?.file} type='audio/mpeg' />
      </audio>
    </div>
  );
};
