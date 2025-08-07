import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import BaseCard from "@/Components/BaseCard.jsx";
import Table from "@/Components/Table.jsx";
import dayjs from "dayjs";
import 'dayjs/locale/es';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {SaveIcon} from "lucide-react";

dayjs.locale('es');
export default function ReporteIndex({ resultados, fecha_inicio, fecha_fin }) {
    const {data, setData, get} = useForm({
        fecha_inicio: fecha_inicio? fecha_inicio : '',
        fecha_fin: fecha_fin? fecha_fin : ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fecha_incio, fecha_fin } = data;


        get(route('reporte_reparaciones.index'), {
            params: { fecha_incio, fecha_fin }
        });
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
                            label: 'Fin Reparacion',
                            name: 'fecha_renta',
                            render: (row) => `${dayjs(row.fecha_fin_reparacion).format('DD MMM YYYY')}`
                        },
                        {
                            label: 'Costo',
                            name: 'costo_reparacion',
                            render: (row) => {
                                let costo = parseFloat(row.costo_reparacion).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

                                return (
                                    <div className="w-full text-right">
                                        {costo}
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
