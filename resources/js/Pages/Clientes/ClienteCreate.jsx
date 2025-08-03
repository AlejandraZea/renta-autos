import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';


export default function ClienteCreate() {
    const { data, setData, post, processing, errors, reset } = useForm({
        apellido: '',
        nombre: '',
        direccion: '',
        tipo_documento: '',
        numero_documento: '',
        numero_licencia: '',
        email: '',
        telefono: '',
        estatus: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('clientes.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Crear Cliente
                </h2>
            }
        >
            <Head title="Crear Cliente" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit} className="space-y-6">
                                {/* Nombre */}
                                <div>
                                    <label className="block mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-white"
                                        value={data.nombre}
                                        onChange={(e) => setData('nombre', e.target.value)}
                                    />
                                    {errors.nombre && <div className="text-red-500">{errors.nombre}</div>}
                                </div>

                                {/* Apellido */}
                                <div>
                                    <label className="block mb-1">Apellido</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-white"
                                        value={data.apellido}
                                        onChange={(e) => setData('apellido', e.target.value)}
                                    />
                                    {errors.apellido && <div className="text-red-500">{errors.apellido}</div>}
                                </div>

                                {/* Dirección */}
                                <div>
                                    <label className="block mb-1">Dirección</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-white"
                                        value={data.direccion}
                                        onChange={(e) => setData('direccion', e.target.value)}
                                    />
                                    {errors.direccion && <div className="text-red-500">{errors.direccion}</div>}
                                </div>

                                {/* Tipo de Documento */}
                                <div>
                                    <label className="block mb-1">Tipo de Documento</label>
                                    <select
                                        className="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-white"
                                        value={data.tipo_documento}
                                        onChange={(e) => setData('tipo_documento', e.target.value)}
                                    >
                                        <option value="">Seleccionar...</option>
                                        <option value="dni">DNI</option>
                                        <option value="pasaporte">Pasaporte</option>
                                        <option value="cedula">Cédula</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                    {errors.tipo_documento && <div className="text-red-500">{errors.tipo_documento}</div>}
                                </div>

                                {/* Número de Documento */}
                                <div>
                                    <label className="block mb-1">Número de Documento</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-white"
                                        value={data.numero_documento}
                                        onChange={(e) => setData('numero_documento', e.target.value)}
                                    />
                                    {errors.numero_documento && <div className="text-red-500">{errors.numero_documento}</div>}
                                </div>

                                {/* Número de Licencia */}
                                <div>
                                    <label className="block mb-1">Número de Licencia</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-white"
                                        value={data.numero_licencia}
                                        onChange={(e) => setData('numero_licencia', e.target.value)}
                                    />
                                    {errors.numero_licencia && <div className="text-red-500">{errors.numero_licencia}</div>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block mb-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-white"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                                </div>

                                {/* Teléfono */}
                                <div>
                                    <label className="block mb-1">Teléfono</label>
                                    <input
                                        type="tel"
                                        className="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-white"
                                        value={data.telefono}
                                        onChange={(e) => setData('telefono', e.target.value)}
                                    />
                                    {errors.telefono && <div className="text-red-500">{errors.telefono}</div>}
                                </div>

                                {/* Estatus */}
                                <div>
                                    <label className="block mb-1">Estatus</label>
                                    <select
                                        className="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-white"
                                        value={data.estatus}
                                        onChange={(e) => setData('estatus', e.target.value)}
                                    >
                                        <option value="activo">Activo</option>
                                        <option value="suspendido">Suspendido</option>
                                        <option value="suspendido por mal uso">Suspendido por mal uso</option>
                                        <option value="inactivo">Inactivo</option>
                                    </select>
                                    {errors.estatus && <div className="text-red-500">{errors.estatus}</div>}
                                </div>

                                {/* Botón */}
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
                                        disabled={processing}
                                    >
                                        Guardar Cliente
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
