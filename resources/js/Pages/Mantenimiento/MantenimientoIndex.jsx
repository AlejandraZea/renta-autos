import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, Link } from '@inertiajs/react';
import LinkButton from "@/Components/LinkButton";
import { PlusIcon } from "lucide-react";
import Table from "@/Components/Table.jsx";
import BaseCard from "@/Components/BaseCard.jsx";
import Badge from "@/Components/Badge.jsx";

export default function MantenimientoIndex({ mantenimientos }) {

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Lista de Mantenimientos
                    </h2>

                    <LinkButton href={route('mantenimiento.create')} type="success">
                        <PlusIcon className="mr-2" /> Agregar
                    </LinkButton>
                </div>
            }
        >
            <Head title="Mantenimientos" />

            <BaseCard>
                <Table
                    columns={[
                        { label: 'Fecha Reparación', name: 'fecha_reparacion' },
                        {
                            label: 'Vehiculo',
                            name: 'vehiculo_id',
                            render: (row) => {
                                return (
                                    <div>
                                        {row.vehiculo? `${row.vehiculo.marca} ${row.vehiculo.modelo} ${row.vehiculo.color}` : 'NA'}
                                    </div>
                                )
                            }
                        },
                        {
                            label: 'Ingresado por',
                            name: 'user_id',
                            render: (row) => {
                                return(
                                    <div>
                                        {row.user? row.user.name : 'NA'}
                                    </div>
                                )
                            }
                        },
                        { label: 'Motivo', name: 'motivo' },
                        { label: 'Costo', name: 'costo_reparacion' },
                        { label: 'Fecha Fin', name: 'fecha_fin_reparacion' },
                        {
                            label: 'Finalizado',
                            name: 'finalizado',
                            render: (row) => {
                                return (<>
                                    { row.finalizado
                                        ? <Badge type="green">Si</Badge>
                                        : <Badge type="blue">No</Badge>
                                    }
                                </>)
                            }
                        }
                    ]}
                    rows={mantenimientos}
                    getRowDetailsUrl={row => row.finalizado? '#' : route('mantenimiento.edit', row.id) }
                />
            </BaseCard>
        </AuthenticatedLayout>
    );
}
