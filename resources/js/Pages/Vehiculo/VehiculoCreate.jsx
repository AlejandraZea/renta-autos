import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import LinkCancelButton from "@/Components/LinkCancelButton.jsx";
import {ArrowLeft} from "lucide-react";
import VehiculoForm from "@/Pages/Vehiculo/VehiculoForm.jsx";

export default function VehiculoCreate() {

    const { data, setData, post, processing, errors, reset } = useForm({
        anio: '',
        marca: '',
        modelo: '',
        placa: '',
        descripcion: '',
        color: '',
        estatus: 'disponible',
        kilometraje_actual: 0
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('vehiculo.store'), {
            onFinish: () => reset(),
            preserveScroll: true,
            preserveState: true,
        });
    }

    return (
        <AuthenticatedLayout
            header={
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Crear Vehículo
                </h2>

                <LinkCancelButton href={route('vehiculos')}>
                    <ArrowLeft className="mr-2" /> Regresar
                </LinkCancelButton>
            </div>

            }
        >
            <Head title="Nueva Renta Vehiculo" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <VehiculoForm
                                data={data}
                                setData={setData}
                                errors={errors}
                                reset={reset}
                                handleSubmit={handleSubmit}
                           />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
