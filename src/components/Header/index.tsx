import TextCard from '../TextCard';
import './styles.scss';
import header from '../../config/header';

const Header = (): JSX.Element => (
    <div className='header'>
        <img className='avatar' src={`/avatars/${header.avatar}`} alt='header avatar' />
        <TextCard className='info'>
            <h1 className='title'>{header.title}</h1>
            <h2 className='subtitle'>{header.subtitle}</h2>
            {header.contents.length > 0 && (
                <div className='contents'>
                    {header.contents.map((content, index) => (
                        <div key={index}>{content}</div>
                    ))}
                </div>
            )}
        </TextCard>
    </div>
);

export default Header;
