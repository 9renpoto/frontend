/// <reference types="react" />
import * as React from 'react';
export interface Props {
    Logo: Function;
    titles: Array<string>;
    baseUrl: string;
}
export interface State {
}
export declare class Header extends React.Component<Props, State> {
    render(): JSX.Element;
}
