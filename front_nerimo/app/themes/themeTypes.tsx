export interface TypographySize {
    large: {
        fontSize: number,
        fontFamily: string,
    };
    medium: {
        fontSize: number,
        fontFamily: string,
    };
    error: {
        fontSize: number,
        fontFamily: string,
    };
}

export interface Colors {
    background?: string,
    errorText?: string,
    primaryButton?: string, 
    secondaryButton?: string, 
    neutralButton?: string, 
    text?: string, 
}

export interface Theme {
    typographySize: TypographySize, 
    colors: Colors,
}