import React, { ReactElement } from 'react';
import { S } from './Link_Styles';

type LinkPropsType = {
    children: ReactElement;
};
export const Link: React.FC<LinkPropsType> = ({ children }) => {
    return <S.Link>{children}</S.Link>;
};
