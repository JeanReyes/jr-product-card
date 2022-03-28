declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.scss' {
    const css: { [key: string]: string };
    export default css;
  }
  declare module '*.sass' {
    const css: { [key: string]: string };
    export default css;
  }

declare module "*.jpg" {
    const value: any;
    export default value;
}

declare module 'file-saver';
