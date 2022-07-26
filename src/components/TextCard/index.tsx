import './styles.scss';

export interface SocialCardProps {
  children?: React.ReactNode;
  className?: string;
}

function SocialCard({ children, className }: SocialCardProps): JSX.Element {
  return <div className={`textCard ${className}`}>{children}</div>;
}

export default SocialCard;
