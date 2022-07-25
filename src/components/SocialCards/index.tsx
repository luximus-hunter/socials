import socials from '../../config/socials';
import SocialCard from '../../components/SocialCard';
import './styles.scss';

function SocialCards(): JSX.Element {
  return (
    <div className='socialCards'>
      {socials.map((social, index) => (
        <SocialCard key={index} social={social} />
      ))}
    </div>
  );
}

export default SocialCards;
