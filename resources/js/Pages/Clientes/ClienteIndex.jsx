import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';

export default function ClienteCreate({ clientes }) {
    return (
        <AuthenticatedLayout
            header={
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Lista de Clientes
                </h2>

                <Link
                    href={route('clientes.create')}
                    className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                    + Nuevo Cliente
                </Link>
            </div>

            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="mb-4">
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full table-auto border-collapse">
                                    <thead className="bg-gray-200 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-4 py-2">Nombre</th>
                                        <th className="px-4 py-2">Apellido</th>
                                        <th className="px-4 py-2">Documento</th>
                                        <th className="px-4 py-2">Licencia</th>
                                        <th className="px-4 py-2">Email</th>
                                        <th className="px-4 py-2">Teléfono</th>
                                        <th className="px-4 py-2">Estatus</th>
                                        <th className="px-4 py-2">Acciones</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {clientes.map((cliente) => (
                                        <tr key={cliente.id} className="border-t dark:border-gray-700">
                                            <td className="px-4 py-2">{cliente.nombre}</td>
                                            <td className="px-4 py-2">{cliente.apellido}</td>
                                            <td className="px-4 py-2">{cliente.numero_documento}</td>
                                            <td className="px-4 py-2">{cliente.numero_licencia}</td>
                                            <td className="px-4 py-2">{cliente.email}</td>
                                            <td className="px-4 py-2">{cliente.telefono}</td>
                                            <td className="px-4 py-2">{cliente.estatus}</td>
                                            <td className="px-4 py-2 space-x-2">
                                                <Link
                                                    href={route('clientes.edit', cliente.id)}
                                                    className="px-3 py-1 text-sm text-white bg-green-600 rounded hover:bg-green-700"
                                                >
                                                    Editar
                                                </Link>
                                                <a href={route('clientes.delete', cliente.id)}
                                                    className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                                                >
                                                    Eliminar
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                    {clientes.length === 0 && (
                                        <tr>
                                            <td colSpan="8" className="px-4 py-2 text-center text-gray-400">
                                                No hay clientes registrados.
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
