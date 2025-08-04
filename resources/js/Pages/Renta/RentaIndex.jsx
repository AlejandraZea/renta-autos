import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import LinkButton from "@/Components/LinkButton.jsx";
import BaseCard from "@/Components/BaseCard.jsx";
import Table from "@/Components/Table.jsx";
import {PlusIcon} from "lucide-react";
import Badge from "@/Components/Badge.jsx";
import dayjs from "dayjs";

export default function RentaIndex({ rentas }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Rentas
                    </h2>

                    <LinkButton href={route('renta.create')} type="success">
                        <PlusIcon className="mr-2" /> Agregar
                    </LinkButton>
                </div>
            }
        >
            <Head title="Rentas" />

            <BaseCard>
                <Table
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
                            render: (row) => (
                                <span>
                                    { dayjs(row.fecha_renta).format('DD/MM/YYYY') }
                                </span>
                            )
                        },
                        {
                            label: 'Fecha de Devolución',
                            name: 'return_date',
                            render: (row) => (
                                <>
                                    {row?.fecha_devolucion
                                            ? <span>{ dayjs(row.fecha_devolucion).format('DD/MM/YYYY') }</span>
                                            : (
                                                <span className="text-gray-500">
                                                    { dayjs(row.fecha_renta).add(row.cantidad_dias, 'day').format('DD/MM/YYYY') }<br/>
                                                    <small>Tentativamente</small>
                                                </span>
                                            )
                                    }
                                </>
                            )
                        },
                        {
                            label: 'Renta',
                            name: 'importe_renta',
                            render: (row) => (
                                <span>${ row.importe_renta.toFixed(2) }</span>
                            )
                        },
                        {
                            label: 'Regresado',
                            name: 'regresado',
                            render: (row) => (
                                <Badge type={ row.regresado? 'green' : 'blue' }>
                                    {row.regresado ? 'si' : 'no'}
                                </Badge>
                            )
                        }
                    ]}
                    rows={rentas}
                    getRowDetailsUrl={ row => route('renta.edit', row.id) }
                />
            </BaseCard>
        </AuthenticatedLayout>
    );
}
