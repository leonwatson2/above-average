import React, { useState, useEffect } from 'react';
// (audioElementRef:React?.RefObject<HTMLAudioElement>) => ({ curTime:number,
//   duration:number,
//   playing:boolean,
//   setPlaying:()=>void,
//   setClickedTime:()=>void })
const useAudioPlayer = (audioElementRef: React.RefObject<HTMLAudioElement>) => {
  const [duration, setDuration] = useState(1);
  const [curTime, setCurTime] = useState(0);
  const [error, setError] = useState<null | string>(null);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState<number | null>(0);
  const [volume, setVolume] = useState<number | null>(0);
  useEffect(() => {
    console.log({ playing, audioElementRef: audioElementRef.current });
    playing
      ? audioElementRef.current?.play()
      : audioElementRef.current?.pause();
  }, [playing, audioElementRef.current]);

  const setAudioData = () => {
    console.log('setAudio');
    audioElementRef.current?.volume != 0.4;
    setVolume(audioElementRef.current?.volume || 0);
    setDuration(audioElementRef.current?.duration || 0);
    setCurTime(audioElementRef.current?.currentTime || 0);
  };

  const setAudioTime = () =>
    setCurTime(audioElementRef.current?.currentTime || 0);

  useEffect(() => {
    // DOM listeners: update React state on DOM events
    console.log('listen');
    audioElementRef.current?.addEventListener('loadeddata', () => {
      setAudioData();
      setPlaying(true);
    });

    audioElementRef.current?.addEventListener('timeupdate', setAudioTime);
    audioElementRef.current?.addEventListener('error', () => {
      console.log(audioElementRef.current?.error);
      setError('Error happened');
    });

    // React state listeners: update DOM on React state changes

    if (clickedTime && clickedTime !== curTime) {
      if (audioElementRef?.current?.currentTime) {
        audioElementRef.current.currentTime = clickedTime;
      }
      setClickedTime(null);
    }
    const cleanup = () => {
      audioElementRef.current?.removeEventListener('loadeddata', setAudioData);
      audioElementRef.current?.removeEventListener('timeupdate', setAudioTime);
    };
    return cleanup;
  }, [audioElementRef.current]);

  return {
    curTime,
    duration,
    playing,
    error,
    setPlaying,
    setClickedTime,
    volume,
  };
};

export default useAudioPlayer;
