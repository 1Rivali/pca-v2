import { type ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'outline' | 'light'
    onClick?: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
}

export default function Button({
    children,
    variant = 'primary',
    onClick,
    className = '',
    type = 'button',
}: ButtonProps) {
    const baseStyles = 'px-6 py-2.5 rounded-lg font-medium transition-colors'

    const variants = {
        primary: 'bg-pca-primary text-white hover:bg-pca-primary-hover',
        secondary: 'bg-pca-cream text-pca-primary hover:bg-white',
        outline: 'bg-pca-cream border-2 border-pca-primary text-pca-primary hover:bg-pca-primary hover:text-white',
        light: 'bg-pca-cream text-pca-primary hover:bg-white',
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    )
}
