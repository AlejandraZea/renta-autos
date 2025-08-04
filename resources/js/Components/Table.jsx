import { Link } from '@inertiajs/react';
import get from 'lodash/get';
import {ChevronRight, SettingsIcon} from 'lucide-react';
export default function Table({
    columns = [],
    rows = [],
    getRowDetailsUrl,
    hideEdit = false
}) {

    return (
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-slate-700">
                <tr>
                    {columns?.map(column => (
                        <th
                            key={column.label}
                            colSpan={column.colSpan ?? 1}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                        >
                            {column.label}
                        </th>
                    ))}
                    {!hideEdit && (
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            <SettingsIcon size={22} className="text-gray-400" />
                        </td>
                    )}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {/* Empty state */}
                {rows?.length === 0 && (
                    <tr>
                        <td
                            className="px-6 py-24 text-center text-gray-900 dark:text-gray-600"
                            colSpan={columns.length+1}
                        >
                            No hay registros disponibles.
                        </td>
                    </tr>
                )}
                {rows?.map((row, index) => {
                    return (
                        <tr
                            key={index}
                            className="hover:bg-gray-100 focus-within:bg-gray-100 dark:hover:bg-gray-700 dark:focus-within:bg-gray-800 focus:outline-none"
                        >
                            {columns.map(column => {
                                return (
                                    <td key={column.name}>
                                        { hideEdit
                                            ? (
                                                <span className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none">
                                                    {column.render?.(row) ??
                                                        get(row, column.name) ??
                                                        'N/A'}
                                                </span>
                                            )
                                            : (
                                                <Link
                                                    tabIndex={-1}
                                                    href={getRowDetailsUrl?.(row)}
                                                    className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                >
                                                    {column.render?.(row) ??
                                                        get(row, column.name) ??
                                                        'N/A'}
                                                </Link>
                                            )
                                        }
                                    </td>
                                );
                            })}

                            {!hideEdit && (
                                <td  className="text-center">
                                    <Link
                                        href={getRowDetailsUrl?.(row)}
                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                    >
                                        <ChevronRight size={24} className="text-gray-400" />
                                    </Link>
                                </td>
                            )}

                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
