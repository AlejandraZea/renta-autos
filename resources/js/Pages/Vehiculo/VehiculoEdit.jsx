import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, useForm,} from '@inertiajs/react';
import LinkCancelButton from "@/Components/LinkCancelButton.jsx";
import {ArrowLeft, TrashIcon} from "lucide-react";
import VehiculoForm from "@/Pages/Vehiculo/VehiculoForm.jsx";
import DangerButton from "@/Components/DangerButton.jsx";
import BaseCard from "@/Components/BaseCard.jsx";

export default function VehiculoEdit({ vehiculo }) {

    const { data, setData, put, processing, errors, reset } = useForm({
        anio: '',
        marca: '',
        modelo: '',
        placa: '',
        descripcion: '',
        color: '',
        estatus: '',
        kilometraje_actual: 0,
        ...vehiculo
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('vehiculo.update', vehiculo.id), {
            onFinish: () => reset(),
            preserveScroll: true,
            preserveState: true,
        });
    }

    const handleDelete = (e) => {
        e.preventDefault();
        if (confirm('¿Estás seguro de que deseas eliminar este vehículo?')) {
            router.delete(route('vehiculo.destroy', vehiculo.id));
        }
    }

    return (
        <AuthenticatedLayout
            header={
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Editar Vehículo
                </h2>

                <LinkCancelButton href={route('vehiculos')} >
                    <ArrowLeft className="mr-2" /> Regresar
                </LinkCancelButton>
            </div>

            }
        >
            <Head title="Nueva Renta Vehiculo" />


            <BaseCard>
                <div className="p-6">
                    <VehiculoForm
                        data={data}
                        setData={setData}
                        errors={errors}
                        reset={reset}
                        handleSubmit={handleSubmit}
                    >
                        { data.id &&
                            <DangerButton onClick={handleDelete} disabled={processing}>
                                <TrashIcon className="mr-2" /> Eliminar
                            </DangerButton>
                        }
                    </VehiculoForm>
                </div>
            </BaseCard>
        </AuthenticatedLayout>
    );
}
