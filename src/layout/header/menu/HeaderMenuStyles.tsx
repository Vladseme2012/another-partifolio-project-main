import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

// Menu
const List = styled.ul``;

const ListItem = styled.li``;

const Link = styled.a`
    font-weight: 600;
    font-size: 18px;
    text-align: center;

    & + & {
        gap: 50px;
    }

    &:hover {
        color: ${theme.colors.secondary};
    }
`;

export const S = {
    List,
    ListItem,
    Link,
};
