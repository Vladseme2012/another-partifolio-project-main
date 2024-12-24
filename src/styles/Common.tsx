type FontPropsType = {
    lineHeight?: number;
    fontMin?: number;
    fontMax?: number;
};

export const font = ({ lineHeight, fontMin, fontMax }: FontPropsType) => `
line-height: ${lineHeight || 1.2};
font-size: clamp(${fontMin}px, calc( (100vw - 360)/(1360 - 360) * (${fontMax} - ${fontMin}) + ${fontMin}px), ${fontMax}px);
`;