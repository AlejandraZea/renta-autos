import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import LinkButton from "@/Components/LinkButton";
import EstatusBadge from "@/Components/EstatusBadge";
import {PlusIcon} from "lucide-react";
import Table from "@/Components/Table.jsx";
import BaseCard from "@/Components/BaseCard.jsx";

export default function ClienteCreate({ vehiculos }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Vehiculos de Renta
                    </h2>

                    <LinkButton href={route('vehiculo.create')} type="success">
                        <PlusIcon className="mr-2" /> Agregar
                    </LinkButton>
                </div>
            }
        >
            <Head title="Vehiculos en renta" />

            <BaseCard>
                <Table
                    columns={[
                        { label: 'Placa', name: 'placa' },
                        {
                            label: 'Vehiculo',
                            name: 'vehiculo',
                            render: (row) => {
                                return (
                                    <div>
                                        {row.marca} {row.modelo} {row.color}<br />
                                        <span className="text-xs text-gray-400 dark:text-gray-500">
                                                        {row.descripcion}
                                                </span>
                                    </div>
                                )
                            }
                        },
                        { label: 'Año', name: 'anio' },
                        { label: 'Estatus', name: 'estatus', render: (row) =>
                                <EstatusBadge estatus={ row.estatus } />
                        }
                    ]}
                    rows={vehiculos}
                    getRowDetailsUrl={row => route('vehiculo.edit', row.id)}
                />
            </BaseCard>
        </AuthenticatedLayout>
    );
}
