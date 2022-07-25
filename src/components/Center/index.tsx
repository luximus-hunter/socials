import './styles.scss';

export interface CenterProps {
  children?: React.ReactNode;
}

function Center({ children }: CenterProps): JSX.Element {
  return <div className='center'>{children}</div>;
}

export default Center;
