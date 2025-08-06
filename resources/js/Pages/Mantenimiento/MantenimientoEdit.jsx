import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import LinkCancelButton from "@/Components/LinkCancelButton.jsx";
import {ArrowLeft, CarIcon, TrashIcon} from "lucide-react";
import MantenimientoForm from "@/Pages/Mantenimiento/MantenimientoForm.jsx";
import DangerButton from "@/Components/DangerButton.jsx";
import BaseCard from "@/Components/BaseCard.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function MantenimientoEdit({ mantenimiento, vehiculos }) {

    const { data, setData, put, processing, errors, reset } = useForm({
        fecha_reparacion: '',
        motivo: '',
        costo_reparacion: '',
        fecha_fin_reparacion: '',
        ...mantenimiento
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('mantenimiento.update', mantenimiento.id), {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const handleFinishMatenimiento = (e) => {
        e.preventDefault();
        if (confirm('¿Estás seguro de que deseas terminar el mantenimiento?')) {
            router.put(route('mantenimiento.finish', mantenimiento.id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Editar Mantenimiento
                    </h2>

                    <LinkCancelButton href={route('mantenimiento.index')}>
                        <ArrowLeft className="mr-2" /> Regresar
                    </LinkCancelButton>
                </div>
            }
        >
            <Head title="Editar Mantenimiento" />

            <BaseCard>
                <div className="p-6">
                    <MantenimientoForm
                        data={data}
                        setData={setData}
                        errors={errors}
                        reset={reset}
                        handleSubmit={handleSubmit}
                        vehiculos={vehiculos}
                    >
                        {data.id && (
                            <PrimaryButton onClick={handleFinishMatenimiento} disabled={processing}>
                                <CarIcon className="mr-2" /> Finalizar Mantenimiento
                            </PrimaryButton>
                        )}
                    </MantenimientoForm>
                </div>
            </BaseCard>
        </AuthenticatedLayout>
    );
}
