import styled from 'styled-components';
import { font } from '../styles/Common';
import { theme } from '../styles/Theme';

type SectionTitlePropsType = {
    marginBt?: string;
    colorTitle: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    ${font({ fontMax: 32, fontMin: 26 })}
    text-align: left;
    margin-bottom: ${(props) => props.marginBt || '16px'};
    color: ${(props) => props.color || theme.colors.colorText};
`;
