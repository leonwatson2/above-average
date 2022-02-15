import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
import { isMobile } from 'Shared/utils';
import { toast } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';

export const links = [
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
  {
    href: 'https://discord.gg/PkJuM2JG',
    textContent: 'Discord',
  },
];
export const SocialButtons: FC = () => {
  const emailToast = () =>
    toast.info('Copied to Clipboard', {
      position: toast.POSITION.TOP_CENTER,
      className: styles.toast,
    });
  const emailAction = () => {
    if (isMobile()) {
      const email = document.createElement('a');
      email.href = 'mailto:us@aboveaveragescrubs.com';
      email.click();
    } else {
      navigator.clipboard.writeText('us@aboveaveragescrubs.com');
      emailToast();
    }
  };
  return (
    <Box
      flexBasis={{ xs: '55%' }}
      flexWrap={'wrap'}
      flexGrow={{ xs: '1' }}
      justifyContent={'end'}
      sx={{ display: { xs: 'flex' } }}
    >
      {links.map((prop, key) => {
        return (
          <Box
            tabIndex={0}
            title={prop.textContent}
            key={key}
            display={{ xs: 'flex' }}
            margin={'4px'}
            className={styles.socialButton}
          >
            <SocialIcon tabIndex={-1} url={prop.href} network={prop.network} />
          </Box>
        );
      })}

      <Box
        tabIndex={0}
        display={{ xs: 'flex' }}
        margin={'4px'}
        style={{ cursor: 'pointer' }}
        title={'us@aboveaveragescrubs.com'}
        onClick={() => {
          emailAction();
        }}
        onKeyPress={(e) => e.key === 'Enter' && emailAction()}
      >
        <SocialIcon network={'email'} />
      </Box>
      <Outlet />
    </Box>
  );
};
