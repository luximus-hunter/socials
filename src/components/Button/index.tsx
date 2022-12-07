import './styles.scss';
import React from 'react';

interface ButtonProps {
    link: string;
    children?: React.ReactNode;
}

const Button = ({ link, children }: ButtonProps): JSX.Element => (
    <a href={link}>
        <button className='button'>{children}</button>
    </a>
);

export default Button;
