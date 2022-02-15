import { GoogleSpreadsheet } from 'google-spreadsheet';

export const getSheetData = async () => {
  const doc = new GoogleSpreadsheet(
    '1Uxv7C9f7S4bYqS3eOr6id3qLW4rwor20W6GjEY5UmQg'
  );
  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_EMAIL || '',
    private_key: process.env.REACT_APP_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
  });
  await doc.loadInfo();
  const rows = await doc.sheetsByIndex[0].getRows();
  return rows
    .filter((row) => row.show === 'TRUE')
    .map((row) => ({
      file: row.file,
      image: row.image,
      title: row.title,
      description: row.description,
      number: row['#'],
      show: true,
    }));
};
