import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import React from 'react';

const buttonStyle = tv({
    base: 'block border text-sm px-3 py-2 fount-medium transition duration-200',
    variants: {
        variant: {
            primary: 'bg-primary-500 border-primary-600 text-white hover:bg-primary-400 active:bg-primary-600',
            secondary: 'bg-secondary-100 border-secondary-100 text-black hover:bg-primary-200 active:bg-primary-300',
            outline: 'text-slate-700 hover:border-slate-500 shadow-sm',
        },
        size: {
            small: 'text-xs px-2 py-1 rounded-md',
            medium: 'text-sm px-4 py-2 rounded-lg',
            large: 'text-base px-6 py-3 rounded-xl',
        },
        iconOnly: {
            true: 'p-2',
        },
        isFullWidth: {
            true: 'w-full flex justify-center'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
        iconOnly: false,
        isFullWidth: false
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