import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";

export default function ClienteEdit({ cliente }) {
    const { data, setData, put, processing, errors } = useForm({
        apellido: cliente.apellido || '',
        nombre: cliente.nombre || '',
        direccion: cliente.direccion || '',
        tipo_documento: cliente.tipo_documento || '',
        numero_documento: cliente.numero_documento || '',
        numero_licencia: cliente.numero_licencia || '',
        email: cliente.email || '',
        telefono: cliente.telefono || '',
        estatus: cliente.estatus || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cliente?.id) {
            console.error("No se encontró el ID del cliente.");
            return;
        }
        put(route('clientes.update', cliente.id), {
            data,
            preserveScroll: true,
            onFinish: () => {
                console.log("Cliente actualizado");
            },
            onError: (err) => {
                console.log(errors)
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-300 dark:text-gray-200">
                    Editar Cliente
                </h2>
            }
        >
            <Head title="Editar Cliente" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">

                            <div>
                                <InputLabel value="Nombre" />
                                <input
                                    type="text"
                                    id="nombre"
                                    value={data.nombre}
                                    onChange={(e) => setData('nombre', e.target.value)}
                                    className="w-full px-4 py-2 rounded border dark:bg-gray-700"
                                />
                                {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium">Apellido</label>
                                <input
                                    type="text"
                                    value={data.apellido}
                                    onChange={(e) => setData('apellido', e.target.value)}
                                    className="w-full px-4 py-2 rounded border dark:bg-gray-700"
                                />
                                {errors.apellido && <span className="text-red-500 text-sm">{errors.apellido}</span>}
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium">Dirección</label>
                                <input
                                    type="text"
                                    value={data.direccion}
                                    onChange={(e) => setData('direccion', e.target.value)}
                                    className="w-full px-4 py-2 rounded border dark:bg-gray-700"
                                />
                                {errors.direccion && <span className="text-red-500 text-sm">{errors.direccion}</span>}
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium">Tipo de Documento</label>
                                <input
                                    type="text"
                                    value={data.tipo_documento}
                                    onChange={(e) => setData('tipo_documento', e.target.value)}
                                    className="w-full px-4 py-2 rounded border dark:bg-gray-700"
                                />
                                {errors.tipo_documento && <span className="text-red-500 text-sm">{errors.tipo_documento}</span>}
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium">Número de Documento</label>
                                <input
                                    type="text"
                                    value={data.numero_documento}
                                    onChange={(e) => setData('numero_documento', e.target.value)}
                                    className="w-full px-4 py-2 rounded border dark:bg-gray-700"
                                />
                                {errors.numero_documento && <span className="text-red-500 text-sm">{errors.numero_documento}</span>}
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium">Número de Licencia</label>
                                <input
                                    type="text"
                                    value={data.numero_licencia}
                                    onChange={(e) => setData('numero_licencia', e.target.value)}
                                    className="w-full px-4 py-2 rounded border dark:bg-gray-700"
                                />
                                {errors.numero_licencia && <span className="text-red-500 text-sm">{errors.numero_licencia}</span>}
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full px-4 py-2 rounded border dark:bg-gray-700"
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium">Teléfono</label>
                                <input
                                    type="text"
                                    value={data.telefono}
                                    onChange={(e) => setData('telefono', e.target.value)}
                                    className="w-full px-4 py-2 rounded border dark:bg-gray-700"
                                />
                                {errors.telefono && <span className="text-red-500 text-sm">{errors.telefono}</span>}
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium">Estatus</label>
                                <select
                                    value={data.estatus}
                                    onChange={(e) => setData('estatus', e.target.value)}
                                    className="w-full px-4 py-2 rounded border dark:bg-gray-700"
                                >
                                    <option value="Activo">Activo</option>
                                    <option value="Inactivo">Inactivo</option>
                                </select>
                                {errors.estatus && <span className="text-red-500 text-sm">{errors.estatus}</span>}
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                                >
                                    Guardar Cambios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
