declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.scss' {
    const content: any;
    export default content;
}
  
declare module '*.less' {
    const content: any;
    export default content;
}

declare module '*.sass' {
    const content: any;
    export default content;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}

declare module 'file-saver';
