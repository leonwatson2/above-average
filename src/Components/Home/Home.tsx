import React, { FC, useState } from 'react';
import { Box, IconButton, Toolbar } from '@material-ui/core';
import styles from './styles.module.css';
import Logo from 'Assets/Logo.png';
import GroupPhoto from 'Assets/GroupPhotoSimone.png';
import { Podcast } from 'Components/Podcast';
import { ThemeContext } from 'Shared/Context';
import { SocialButtons } from 'Components/SocialButtons';

export const Home: FC = () => {
  const [theme] = useState(true);
  return (
    <ThemeContext.Provider value={{ light: theme }}>
      <Toolbar>
        <IconButton
          edge='start'
          className={styles.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <img src={Logo} alt='Group Photo'></img>
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />

        <SocialButtons />
      </Toolbar>

      <div className={styles.container}>
        <div className={styles.pictureContainer}>
          <div className={styles.imageContainer}>
            <img src={GroupPhoto} alt='Group Photo'></img>
          </div>
        </div>
        <Podcast />
      </div>
    </ThemeContext.Provider>
  );
};
