import { Link } from '@inertiajs/react';

export default function LinkCancelButton({
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-700 focus:outline-none focus:border-gray-700 focus:ring ring-gray-200 disabled:opacity-25 transition ease-in-out duration-150' +
                className
            }
        >
            {children}
        </Link>
    );
}
