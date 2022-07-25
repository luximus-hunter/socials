import { ISocial } from '../../config/socials';
import Button from '../Button';
import './styles.scss';

export interface SocialCardProps {
  social: ISocial;
}

function SocialCard({ social }: SocialCardProps): JSX.Element {
  return (
    <div className='socialCard'>
      <div className='title'>
        <h1 className='platform'>{social.name}</h1>
        {social.icon}
      </div>
      <img className='icon' src={`/avatars/${social.pfp}`} />
      <code className='username'>{social.text}</code>
      <div className='buttons'>
        {social.url && <Button link={social.url}>View Profile</Button>}
        <Button link={`/avatars/${social.pfp}`}>View Avatar</Button>
      </div>
    </div>
  );
}

export default SocialCard;
