import React, { FC } from 'react';
import { Box, Button } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
import styles from './styles.module.css';

const links = [
  {
    href: 'https://www.instagram.com/aboveavgscrubs/',
    textContent: 'Instagram',
  },
  {
    href: 'https://www.youtube.com/channel/UCkCuImQNa6cLfUjHQOgOHiA?sub_confirmation=1',
    textContent: 'YouTube',
  },
  {
    href: 'https://vm.tiktok.com/ZM87FypaJ/',
    textContent: 'TikTok',
  },
  {
    href: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hdmdzY3J1YnMucG9kb21hdGljLmNvbS9yc3MyLnhtbA',
    textContent: 'Google Podcast',
    network: 'google_play',
  },
  {
    href: 'https://podcasts.apple.com/us/podcast/the-above-average-scrubs-podcast/id1570977091',
    textContent: 'Apple Pocast',
    network: 'itunes',
  },
  {
    href: 'https://open.spotify.com/show/77jxcW6f9ToNSFXQRFB8kb',
    textContent: 'Spotify',
  },
];
export const SocialButtons: FC = () => {
  return (
    <Box
      gridTemplateColumns={{ xs: '1fr 1fr 1fr', md: 'repeat(6, 1fr)' }}
      gridGap={'5px 5px'}
      sx={{ display: { xs: 'grid' } }}
    >
      {links.map((prop, key) => {
        return (
          <Box
            key={key}
            display={{ xs: 'flex' }}

            // className={styles[prop.color]}
          >
            <SocialIcon url={prop.href} network={prop.network} />
          </Box>
        );
      })}
    </Box>
  );
};
