import React from 'react';
import iconsSprite from '../assets/images/icons-sprite.svg';
import { theme } from '../../styles/Theme';

type IconSpriteType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string;
};
export const Icon: React.FC<IconSpriteType> = (props) => {
    return (
        <svg
            width={props.width || '70'}
            height={props.height || '70'}
            viewBox={props.viewBox || '0 0 70 70'}
            fill={props.fill || `${theme.colors.colorText}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
    );
};
