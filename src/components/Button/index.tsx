import './styles.scss';

export interface ButtonProps {
  link: string;
  children?: React.ReactNode;
}

function Button({ link, children }: ButtonProps): JSX.Element {
  return (
    <a href={link}>
      <button className='button'>{children}</button>
    </a>
  );
}

export default Button;
