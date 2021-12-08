import React from 'react';
export const VolumeBar = ({
  volume,
}: {
  volume: number | null;
  changeVolume?: (newVolume: number) => void;
}) => {
  return <div>{(volume || 0) * 100}/100</div>;
};
export default VolumeBar;
