import React, { FC, useState } from 'react';
import { IconButton, Toolbar } from '@material-ui/core';
import styles from './styles.module.css';
import Logo from 'Assets/Logo.png';
import GroupPhoto from 'Assets/GroupPhotoSimone.png';
import { Podcast } from 'Components/Podcast';
import { Footer } from 'Components/Footer';
import { ThemeToggle } from 'Components/ThemeToggle';
import { ThemeContext } from 'Shared/Context';

export const Home: FC = () => {
  const [theme, setTheme] = useState(true);
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
        <ThemeToggle onClick={() => setTheme((lastTheme) => !lastTheme)} />
      </Toolbar>

      <div className={styles.container}>
        <div className={styles.pictureContainer}>
          <div className={styles.imageContainer}>
            <img src={GroupPhoto} alt='Group Photo'></img>
          </div>
        </div>
      </div>
      <Podcast />
      <Footer />
    </ThemeContext.Provider>
  );
};
