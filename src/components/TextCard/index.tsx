import './styles.scss';

interface SocialCardProps {
    children?: React.ReactNode;
    className?: string;
}

const SocialCard = ({ children, className }: SocialCardProps): JSX.Element => (
    <div className={`textCard ${className}`}>{children}</div>
);

export default SocialCard;
