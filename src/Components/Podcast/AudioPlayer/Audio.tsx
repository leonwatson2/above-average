import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { EpisodeType } from 'Shared/Types';

import Song from './Song';
import Play from './Play';
import Pause from './Pause';
import Bar from './Bar';
import VolumeBar from './VolumeBar';

import useAudioPlayer from './useAudioPlayer';

export const Audio = ({ episode }: { episode: EpisodeType }) => {
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    volume,
    error,
  } = useAudioPlayer(audioElementRef);
  useEffect(() => {
    setPlaying(true);
  }, [episode]);
  if (error) return <h2>No Audio Selected</h2>;
  return (
    <div className={styles.player}>
      <audio ref={audioElementRef} src={episode?.file}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Song
        songName={episode?.title || ''}
        songArtist={episode?.description || ''}
      />
      <div className={styles.playPause}>
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
      </div>
      <div className={styles.controls}>
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
        <VolumeBar volume={volume} />
      </div>
    </div>
  );
};

export default Audio;
