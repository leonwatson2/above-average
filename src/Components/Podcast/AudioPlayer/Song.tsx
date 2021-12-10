import React, { FC } from 'react';
import styles from './styles.module.css';

const Song: FC<{ songName: string; songArtist: string }> = ({
  songName,
  songArtist,
}) => (
  <div className={styles.info}>
    <h3 className={styles.songTitle}>{songName}</h3>
    <p className={styles.songArtist}>{songArtist}</p>
  </div>
);

export default Song;
