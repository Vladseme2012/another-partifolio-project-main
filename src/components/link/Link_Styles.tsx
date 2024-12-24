import styled from 'styled-components';

const Link = styled.a`
    & + & {
        gap: 16px;
    }
`;

export const S = {
    Link,
};
