import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';

type ButtonPropsType = {
    widthBtn?: string;
    heightBtn?: string;
    paddingBtn?: string;
    typeBtn?: 'primary' | 'outlined';
};

export const Button = styled.button<ButtonPropsType>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: ${(props) => props.widthBtn || '174px'};
    height: ${(props) => props.heightBtn || '50px'};
    padding: ${(props) => props.paddingBtn || '12px 22px'};
    border: 2px solid ${theme.colors.primary};
    font-size: 16px;
    line-height: 1.5;

    ${(props) =>
        props.typeBtn === 'primary' &&
        css<ButtonPropsType>`
            background-color: ${theme.colors.primary};

            &:hover {
                background-color: ${theme.colors.secondary};
            }
        `};

    ${(props) =>
        props.typeBtn === 'outlined' &&
        css<ButtonPropsType>`
            background-color: ${theme.colors.secondary};

            &:hover {
                background-color: ${theme.colors.primary};
            }
        `}
`;
