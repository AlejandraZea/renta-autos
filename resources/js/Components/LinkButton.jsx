import { Link } from '@inertiajs/react';

export default function LinkButton({
    className = '',
    children,
    type = 'primary',
    ...props
}) {
    let classType = {
        'warning': 'bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-700 focus:border-yellow-700 focus:ring ring-yellow-200',
        'danger': 'bg-red-600 hover:bg-red-500 active:bg-red-700 focus:border-red-700 focus:ring ring-red-200',
        'success': 'bg-green-600 hover:bg-green-500 active:bg-green-700 focus:border-green-700 focus:ring ring-green-200',
        'info': 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 focus:border-blue-700 focus:ring ring-blue-200',
        'primary': 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 focus:border-blue-700 focus:ring ring-blue-200',
        'secondary': 'bg-gray-600 hover:bg-gray-500 active:bg-gray-700 focus:border-gray-700 focus:ring ring-gray-200',
    }[type];

    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest disabled:opacity-25 transition ease-in-out duration-150' +
                ' ' + classType +
                className
            }
        >
            {children}
        </Link>
    );
}
