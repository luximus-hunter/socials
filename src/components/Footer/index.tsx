import TextCard from '../TextCard';
import './styles.scss';

function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <TextCard className='footer'>
      <div>
        <div> &copy; Luximus {year}</div>
        <div>Made with 💜</div>
      </div>
      <div>
        <div>
          Source code: <a href='https://github.com/luximus-hunter/socials'>here</a>
        </div>
        <div>License: MIT</div>
      </div>
    </TextCard>
  );
}

export default Footer;
