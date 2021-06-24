import React from 'react';

export type AppProps = Record<string, never>;

export enum RenderType {
  Functional = 1,
  Class,
}

export interface AppState {
  selectedRenderType: RenderType
}

export interface App extends React.Component<AppProps, AppState> {
  loggerOutputElement: React.RefObject<HTMLDivElement>;
}
