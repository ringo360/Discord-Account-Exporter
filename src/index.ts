import consola from 'consola';
import { Client } from 'discord.js-selfbot-v13';

const token = await consola.prompt('Input token: ');
Runner(token as string);

async function Runner(token: string) {
    const client = new Client();
    client.login(token);
}
