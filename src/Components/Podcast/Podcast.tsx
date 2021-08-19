import React, { FC, useState } from 'react';

import styles from './styles.module.css';
import PodcastStock from 'Assets/podcast-stock.jpg';
import { EpisodeType } from 'Shared/Types';
import { AudioPlayer } from './AudioPlayer';

const episodes = [
  {
    title: 'Episode 1',
    file: 'Ep1.mp3',
    description: 'The best damn episode out there.',
    image: null,
  },
  {
    title: 'Episode 2',
    file: 'Ep2.mp3',
    description: 'The best damn episode out there.',
    image: null,
  },
];

export const Podcast: FC = () => {
  const [playingEpisode, setEpisode] = useState<EpisodeType>(null);

  return (
    <div className={styles.podcastContainer}>
      <h2>PODCAST</h2>
      <div className={styles.podcastEpisodes}>
        {episodes.map((ep) => {
          return (
            <div
              key={ep.title}
              className={styles.podcastEpisode}
              onClick={() => {
                setEpisode(ep);
              }}
            >
              <div className={styles.thumbnail}>
                <img src={ep.image || PodcastStock} alt='' />
              </div>

              <div className={styles.title}>{ep.title}</div>
              <div className={styles.description}>{ep.description}</div>
            </div>
          );
        })}
      </div>
      <AudioPlayer episode={playingEpisode} />
    </div>
  );
};
