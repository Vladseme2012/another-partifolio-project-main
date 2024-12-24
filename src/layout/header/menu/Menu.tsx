import React from 'react';
import { Link } from '../../../components/link/Link';
import { S } from './HeaderMenuStyles';

export const Menu: React.FC<{ items: Array<string> }> = (props) => {
    return (
        <S.List>
            {items.map((item, index) => (
                <S.ListItem key={index}>
                    <Link children={item} />
                </S.ListItem>
            ))}
        </S.List>
    );
};
