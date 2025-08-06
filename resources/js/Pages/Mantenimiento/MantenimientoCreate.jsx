import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import LinkCancelButton from "@/Components/LinkCancelButton.jsx";
import { ArrowLeft } from "lucide-react";
import MantenimientoForm from "@/Pages/Mantenimiento/MantenimientoForm.jsx";
import BaseCard from "@/Components/BaseCard.jsx";

export default function MantenimientoCreate({ vehiculos }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        fecha_reparacion: '',
        motivo: '',
        costo_reparacion: '',
        fecha_fin_reparacion: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('mantenimiento.store'), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Nuevo Mantenimiento
                    </h2>

                    <LinkCancelButton href={route('mantenimiento.index')}>
                        <ArrowLeft className="mr-2" /> Regresar
                    </LinkCancelButton>
                </div>
            }
        >
            <Head title="Nuevo Mantenimiento" />

            <BaseCard>
                <div className="p-6">
                    <MantenimientoForm
                        data={data}
                        setData={setData}
                        errors={errors}
                        handleSubmit={handleSubmit}
                        vehiculos={vehiculos}
                    />
                </div>
            </BaseCard>
        </AuthenticatedLayout>
    );
}
