import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';

export default function ClienteCreate({ cliente }) {
    const handleDelete = async () => {
        route('clientes.destroy', cliente.id);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Eliminar Cliente
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="mb-4">
                                Esta seguro que desea eliminar a:
                                <h1 className="text-3xl font-semibold text-[#06c]">
                                {cliente.nombre + ' ' + cliente.apellido}
                                </h1>

                                <div className="mt-4 flex gap-4">
                                    <button
                                        onClick={handleDelete}
                                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                    >
                                        Confirmar eliminación
                                    </button>
                                    <button
                                        onClick={() => router.visit(route('clientes.index'))}
                                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                                    >
                                        Cancelar
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </AuthenticatedLayout>
    );
}
