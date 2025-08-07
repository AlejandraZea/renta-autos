import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import BaseCard from "@/Components/BaseCard.jsx";
import Table from "@/Components/Table.jsx";
import dayjs from "dayjs";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {SaveIcon} from "lucide-react";

export default function ReporteIndex({ resultados }) {
    const {data, setData, get} = useForm({});

    const handleSubmit = () => {
        get(route('reporte_reparaciones.index'))
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Reporte Reparaciones
                </h2>
            }
        >
            <Head title="Reporte General" />
            <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mt-8 grid grid-cols-3 gap-4 py-4">
                        <div>
                            <InputLabel htmlFor="fecha_inicio" value="Fecha Inicial"/>
                            <TextInput
                                id="fecha_inicio"
                                type="date"
                                value={data.fecha_inicio}
                                onChange={(e) => setData('fecha_inicio', e.target.value)}
                                className="mt-1 w-full"
                                required
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="fecha_fin" value="Fecha Fin"/>
                            <TextInput
                                id="fecha_fin"
                                type="date"
                                value={data.fecha_fin}
                                onChange={(e) => setData('fecha_fin', e.target.value)}
                                className="mt-1 w-full"
                                required
                            />
                        </div>

                        <div className="flex items-end justify-end">
                            <PrimaryButton type="submit">
                                <SaveIcon className="mr-2"/> Guardar
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </form>

            <BaseCard className="mt-0">
                <Table
                    hideEdit
                    columns={[
                        {
                            label: 'Vehículo',
                            name: 'vehicle_id',
                            render: (row) => (
                                <span>{ row?.vehiculo ? `${row.vehiculo.marca} ${row.vehiculo.modelo} ${row.vehiculo.color} ${row.vehiculo.anio}` : 'N/A' }</span>
                            )
                        },
                        {
                            label: 'Motivo',
                            name: 'motivo',
                        },
                        {
                            label: 'Periodo en reparacion',
                            name: 'fecha_renta',
                            render: (row) => `${dayjs(row.fecha_inicio_reparacion).format('DD MMM YYYY')} - ${dayjs(row.fecha_fin_reparacion).format('DD MMM YYYY')}`
                        },
                        {
                            label: 'Costo',
                            name: 'costo_reparacion',
                            render: (row) => {
                                return (
                                    <div className="w-full text-right">
                                        ${row.costo_reparacion}
                                    </div>
                                );
                            }
                        },
                    ]}
                    rows={resultados}
                />
            </BaseCard>
        </AuthenticatedLayout>
    );
}
