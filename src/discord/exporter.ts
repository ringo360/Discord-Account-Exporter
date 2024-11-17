import type { Client } from 'discord.js-selfbot-v13';

export async function Export(client: Client<true>) {
    const userClan = {
        is: client.user.clan,
    };
    const userData = {
        username: client.user.username,
        displayname: client.user.displayName,
        avatarURL: client.user.displayAvatarURL(),
    };
}
