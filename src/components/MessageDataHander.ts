import fs from 'fs';
import { errorLogger } from '../utils/constants';

const currentFile = './messages.json';

export const readFromFile = (ticker: string) => {

  try {

    const messages: any = fs.readFileSync(currentFile, { encoding: 'utf8' });
    const discordMessages = JSON.parse(messages);


    if (discordMessages[ticker]) {
      return discordMessages[ticker];
    }

    return false;

  } catch (err) {
    errorLogger.error(err)
  }
}

export const writeToFile = (ticker: string, id: string | boolean) => {

  try {

    const messages: any = fs.readFileSync(currentFile, { encoding: 'utf8' });
    let discordMessages = JSON.parse(messages as unknown as string);

    discordMessages[ticker] = id;

    fs.writeFileSync(currentFile, JSON.stringify(discordMessages))

  } catch (err) {
    errorLogger.error(err)
  }

}