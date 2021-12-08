import React, { FC } from 'react';
import styles from './styles.module.css';

const Song: FC<{ songName: string; songArtist: string }> = ({
  songName,
  songArtist,
}) => (
  <div className={styles.info}>
    <h3 className={styles.songTitle}>{songName}</h3>
    <h4 className={styles.songArtist}>{songArtist}</h4>
  </div>
);

export default Song;
