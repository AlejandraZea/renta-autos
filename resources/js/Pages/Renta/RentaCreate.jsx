import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import LinkCancelButton from "@/Components/LinkCancelButton.jsx";
import BaseCard from "@/Components/BaseCard.jsx";
import RentaCreateForm from "@/Pages/Renta/RentaCreateForm.jsx";
import {ArrowLeft} from "lucide-react";

export default function RentaCreate({ renta_por_dia, vehiculos, clientes }) {
    const { data, setData, post, errors, reset } = useForm({
        'vehiculo_id': '',
        'cliente_id': '',
        'fecha_renta': new Date().toISOString().split('T')[0],
        'cantidad_dias': 1,
        'kilometraje_salida': 0,
        'tanque_gasolina': 'lleno'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('renta.store'), {
            data,
            onFinish: () => reset('vehiculo_id', 'cantidad_dias')
        });
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Crear Renta
                    </h2>

                    <LinkCancelButton href={route('renta.index')} >
                        <ArrowLeft className="mr-2" /> Regresar
                    </LinkCancelButton>
                </div>
            }
        >
            <Head title="Nueva Renta Vehiculo" />

            <BaseCard>
                <div className="p-6">
                    <RentaCreateForm
                        vehiculos={vehiculos}
                        clientes={clientes}
                        data={data}
                        setData={setData}
                        errors={errors}
                        reset={reset}
                        handleSubmit={handleSubmit}
                        renta_por_dia={renta_por_dia}
                    />
                </div>
            </BaseCard>
        </AuthenticatedLayout>
    );
}
