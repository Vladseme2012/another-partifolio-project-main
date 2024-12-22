import React from 'react';
import { S } from './Logo_Styles';

export const Logo: React.FC<{ name?: string }> = (props) => {
    return (
        <a href="#">
            <S.LogoTitle>
                {!props.name ? 'Jayjay Dinero' : props.name}
            </S.LogoTitle>
        </a>
    );
};
