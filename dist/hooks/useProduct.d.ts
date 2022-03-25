import { onChangeArgs, Product } from '../interfaces/interfaces';
export declare const useProduct: ({ product, onChange, values }: {
    product: Product;
    onChange?: ((args: onChangeArgs) => void) | undefined;
    values?: number | undefined;
}) => {
    counter: number;
    increaseBy: (value: number) => void;
};
