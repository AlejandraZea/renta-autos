import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import LinkButton from "@/Components/LinkButton";
import {PlusIcon} from "lucide-react";
import Table from "@/Components/Table.jsx";
import Badge from "@/Components/Badge.jsx";
import BaseCard from "@/Components/BaseCard.jsx";

export default function UserIndex({ data }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Usuarios
                    </h2>

                    <LinkButton href={route('user.create')} type="success">
                        <PlusIcon className="mr-2" /> Agregar
                    </LinkButton>
                </div>
            }
        >
            <Head title="Usuarios" />

            <BaseCard>
                <Table
                    columns={[
                        { label: 'Name', name: 'name' },
                        { label: 'Email', name: 'email' },
                        {
                            label: 'Role',
                            name: 'rol',
                            render: (row) => (
                                <Badge type="blue">
                                    { row.rol }
                                </Badge>
                            )
                        }
                    ]}
                    rows={data}
                    getRowDetailsUrl={ row => route('user.edit', row.id) }
                />
            </BaseCard>
        </AuthenticatedLayout>
    );
}
