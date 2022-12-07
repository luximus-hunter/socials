import './styles.scss';
import React from 'react';

interface CenterProps {
    children?: React.ReactNode;
}

const Center = ({ children }: CenterProps): JSX.Element => <div className='center'>{children}</div>;

export default Center;
