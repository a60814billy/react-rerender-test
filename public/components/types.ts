import React from 'react';

export type AppProps = Record<string, never>;

export enum RenderType {
  Functional = 1,
  Class,
}

export interface AppState {
  selectedRenderType: RenderType
}

export declare class App extends React.Component<AppProps, AppState> {
  public readonly logEle: React.RefObject<HTMLDivElement>;
}
