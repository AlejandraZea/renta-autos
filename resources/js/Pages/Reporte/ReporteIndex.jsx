import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import BaseCard from "@/Components/BaseCard.jsx";
import Table from "@/Components/Table.jsx";
import dayjs from "dayjs";

export default function ReporteIndex({ ultimasRentas, reparaciones, autosMasRentados3Meses, autosMasRentados2Meses }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Reporte General
                </h2>
            }
        >
            <Head title="Reporte General" />

            <div>

                <div className="mt-8">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Últimas Rentas de Autos
                        </h3>
                    </div>
                    <BaseCard className="mt-0">
                        <Table
                            hideEdit
                            columns={[
                                {
                                    label: 'Nombre',
                                    name: 'client_id',
                                    render: (row) => (
                                        <span>{ row?.cliente ? `${row.cliente.nombre} ${row.cliente.apellido}` : 'N/A' }</span>
                                    )
                                },
                                {
                                    label: 'Vehículo',
                                    name: 'vehicle_id',
                                    render: (row) => (
                                        <span>{ row?.vehiculo ? `${row.vehiculo.marca} ${row.vehiculo.modelo} ${row.vehiculo.color} ${row.vehiculo.anio}` : 'N/A' }</span>
                                    )
                                },
                                {
                                    label: 'Fecha de Renta',
                                    name: 'fecha_renta',
                                    render: (row) => dayjs(row.fecha_renta).format('DD MMM YYYY')
                                },
                                {
                                    label: 'Fecha de Devolución',
                                    name: 'fecha_devolucion',
                                    render: (row) => dayjs(row.fecha_devolucion).format('DD MMM YYYY')
                                },
                            ]}
                            rows={ultimasRentas}
                        />
                    </BaseCard>
                </div>

                <div className="mt-8 mb-16">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Autos Más Rentados (Últimos 2 meses)
                        </h3>
                    </div>
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
                                { label: 'Veces Rentado', name: 'total_rentas' },
                            ]}
                            rows={autosMasRentados2Meses}
                        />
                    </BaseCard>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
