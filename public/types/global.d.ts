interface IClassName {
  [className: string]: string
}

declare module '*.module.css' {
  const classNames: IClassName;
  export = classNames;
}

declare module '*.module.scss' {
  const classNames: IClassName;
  export = classNames;
}
