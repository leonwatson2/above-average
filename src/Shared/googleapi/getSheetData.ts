import { GoogleSpreadsheet } from 'google-spreadsheet';
import { SocialLinkType } from 'Shared/Types';

export const getSheetData = async () => {
  const doc = new GoogleSpreadsheet(
    '1Uxv7C9f7S4bYqS3eOr6id3qLW4rwor20W6GjEY5UmQg'
  );
  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_EMAIL || '',
    private_key: process.env.REACT_APP_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
  });
  await doc.loadInfo();
  const episodeRows = await doc.sheetsByIndex[0].getRows();
  const socialRows = await doc.sheetsByTitle['Socials'].getRows();
  const socials = socialRows
    .filter((social) => social.link && social['Display Name'])
    .map((social) => ({
      textContent: social['Display Name'],
      href: social.link,
      ...(social.network ? { network: social.network } : {}),
    }));
  const episodes = episodeRows
    .filter((row) => row.show === 'TRUE')
    .map((row) => ({
      file: row.file,
      image: row.image,
      title: row.title,
      description: row.description,
      number: row['#'],
      show: true,
    }));

  return {
    episodes,
    socials,
  };
};
