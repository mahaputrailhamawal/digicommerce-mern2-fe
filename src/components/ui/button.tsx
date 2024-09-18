import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import React from 'react';

const buttonStyle = tv({
    base: 'border px-3 py-2 fount-medium transition duration-200',
    variants: {
        variant: {
            primary: 'bg-primary-500 border-primary-600 text-white hover:bg-primary-400 active:bg-primary-600',
            secondary: 'bg-secondary-100 border-secondary-100 text-black hover:bg-primary-200 active:bg-primary-300',
            outline: 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white active:bg-primary-600',
        },
        size: {
            small: 'text-sm px-2 py-1 rounded-md',
            medium: 'text-base px-4 py-2 rounded-lg',
            large: 'text-lg px-6 py-3 rounded-xl',
        },
        iconOnly: {
            true: 'p-2',
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
        iconOnly: false,
    },
});

type TButton = VariantProps<typeof buttonStyle>;
interface ButtonProps extends TButton, React.ComponentPropsWithRef<'button'> {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
}


export const Button = (props: ButtonProps) => {
    return (
        <button {...props} className={twMerge(buttonStyle({...props}), props.className)}>
            <div className='flex items-center gap-2'>
                {props.startContent}
                <div>{props.children}</div>
                {props.endContent}
            </div>
        </button>
    );
};