import React, { FC } from 'react';
import { Box, Button } from '@material-ui/core';
import { YouTube, Twitter, Instagram } from '@material-ui/icons';
import styles from './styles.module.css';

const socialButtonColors = [
  {
    icon: Twitter,
    text: 'Twitter',
    color: 'buttonContainedTwitter',
  },
  {
    icon: Instagram,
    text: 'Instagram',
    color: 'buttonContainedInstagram',
  },

  {
    icon: YouTube,
    text: 'Youtube',
    color: 'buttonContainedYoutube',
  },
];

export const SocialButtons: FC = () => {
  return (
    <>
      {socialButtonColors.map((prop, key) => {
        return (
          <Box
            key={key}
            display='inline-block'
            marginRight='1rem'
            marginBottom='1rem'
            className={styles[prop.color]}
          >
            <Button
              variant='contained'
              className={styles.socialButton}
              // onClick={}
            >
              <prop.icon />
            </Button>
          </Box>
        );
      })}
    </>
  );
};
