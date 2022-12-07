import socials from '../../config/socials';
import SocialCard from '../../components/SocialCard';
import './styles.scss';

const SocialCards = (): JSX.Element => (
    <div className='socialCards'>
        {socials.map((social, index) => (
            <SocialCard key={index} social={social} />
        ))}
    </div>
);

export default SocialCards;
