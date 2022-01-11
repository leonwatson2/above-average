import React, { FC, useEffect, useState } from 'react';
import cx from 'classnames';
import { PlayArrowRounded as PlayButton } from '@material-ui/icons';
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
      setEpisodes(episodes.sort((a, b) => b.number - a.number));
    });
  }, []);

  return (
    <div className={styles.podcastContainer}>
      <h2>PODCAST</h2>
      <div className={styles.podcastEpisodes}>
        {episodes.map((ep) => (
          <div
            tabIndex={0}
            aria-label={`Episode ${ep?.number}: ${ep?.title}`}
            key={ep?.title}
            className={cx(styles.podcastEpisode, {
              [styles.selected]: ep?.title === playingEpisode?.title,
            })}
            onClick={() => {
              if (playingEpisode?.file !== ep?.file) setEpisode(ep);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && playingEpisode?.file !== ep?.file)
                setEpisode(ep);
            }}
          >
            <div className={styles.equalizer}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
            <PlayButton />
            <div className={styles.thumbnail}>
              <img src={ep?.image || PodcastStock} alt='' />
            </div>
            <div className={styles.title}>
              <h4>{ep?.title}</h4>
            </div>
            <div className={styles.description}>{ep?.description}</div>
            <h2 aria-label={'Podcast number'} className={styles.number}>
              {ep?.number}
            </h2>
          </div>
        ))}
      </div>
      <AudioPlayer
        episode={playingEpisode}
        setLatestEpisode={() => {
          setEpisode(episodes[0]);
        }}
      />
    </div>
  );
};
