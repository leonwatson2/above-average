import React, { FC, useEffect, useState } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';
import PodcastStock from 'Assets/podcast-stock.jpg';
import { EpisodeType } from 'Shared/Types';
import { AudioPlayer } from './AudioPlayer';
import { getSheetData } from 'Shared/googleapi';
export const Podcast: FC = () => {
  const [playingEpisode, setEpisode] = useState<EpisodeType>(null);
  const [episodes, setEpisodes] = useState<Array<EpisodeType>>([]);
  useEffect(() => {
    getSheetData().then((episodes) => {
      setEpisodes(episodes);
    });
  }, []);

  return (
    <div className={styles.podcastContainer}>
      <h2>PODCAST</h2>
      <div className={styles.podcastEpisodes}>
        {episodes.map((ep) => (
          <div
            key={ep?.title}
            className={cx(styles.podcastEpisode, {
              [styles.selected]: ep?.title === playingEpisode?.title,
            })}
            onClick={() => {
              setEpisode(ep);
            }}
          >
            <div className={styles.thumbnail}>
              <img
                src={'http://192.168.254.11' + (ep?.image || PodcastStock)}
                alt=''
              />
            </div>
            <div className={styles.title}>
              <h4>{ep?.title}</h4>
            </div>
            <div className={styles.description}>{ep?.description}</div>
          </div>
        ))}
      </div>
      <AudioPlayer episode={playingEpisode} />
    </div>
  );
};
