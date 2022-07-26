import {
  Applearcade,
  Discord,
  Epicgames,
  Github,
  Oculus,
  Origin,
  Riotgames,
  Spotify,
  Steam
} from '@icons-pack/react-simple-icons';

export interface ISocial {
  name: string;
  text: string;
  pfp?: string;
  url?: string;
  icon?: any;
}

const Socials: ISocial[] = [
  {
    name: 'Discord',
    text: 'Luximus#2043',
    pfp: 'plague-doctor.png',
    icon: <Discord color='#5865F2' />
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/user/yxmq93tlmfomm2ir62cs0bq0u?si=6b5fbb8557c84fba',
    text: 'Lux',
    pfp: 'nostalgia.png',
    icon: <Spotify color='#1DB954' />
  },
  {
    name: 'Steam',
    url: 'https://steamcommunity.com/profiles/76561198393226059',
    text: 'Lux',
    pfp: 'panda.png',
    icon: <Steam color='#000000' />
  },
  {
    name: 'Epic',
    text: 'Luximus_LXMS',
    pfp: 'na.png',
    icon: <Epicgames color='#000000' />
  },
  {
    name: 'Origin',
    text: 'LXMS_SubSilence',
    pfp: 'na.png',
    icon: <Origin color='#F56C2D' />
  },
  {
    name: 'Riot',
    text: 'LuximusHunter',
    pfp: 'na.png',
    icon: <Riotgames color='#D32936' />
  },
  {
    name: 'Oculus',
    text: 'Luximus',
    pfp: 'panda.png',
    icon: <Oculus color='#1C1E20' />
  },
  {
    name: 'VRChat',
    url: 'https://vrchat.com/home/user/usr_d62468cf-a90b-4bc4-a4f9-c10133e35f2b',
    text: 'Luximus',
    pfp: 'mars.png',
    icon: <Applearcade color='#E40046' />
  },
  {
    name: 'Genshin',
    text: 'LuximusHunter',
    pfp: 'razor.png',
    icon: <Applearcade color='#E40046' />
  },
  {
    name: 'Github',
    url: 'https://github.com/luximus-hunter',
    text: 'luximus-hunter',
    pfp: 'catboy.png',
    icon: <Github color='#000000' />
  }
];

export default Socials;
