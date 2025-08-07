import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import LinkCancelButton from "@/Components/LinkCancelButton.jsx";
import BaseCard from "@/Components/BaseCard.jsx";
import {ArrowLeft, InfoIcon} from "lucide-react";
import Table from "@/Components/Table.jsx";
import dayjs from "dayjs";
import Badge from "@/Components/Badge.jsx";
import RentaEditForm from "@/Pages/Renta/RentaEditForm.jsx";

export default function RentaEdit({ renta_por_dia, renta }) {
    const fecha_devolucion = renta.fecha_devolucion
        ? dayjs(renta.fecha_devolucion).format('YYYY-MM-DD')
        : dayjs(renta.fecha_renta).add(renta.cantidad_dias, 'day').format('YYYY-MM-DD');

    const kilometraje_llegada = renta.kilometraje_llegada
        ? renta.kilometraje_llegada
        : renta.kilometraje_salida;

    const { data, setData, put, errors, reset } = useForm({
        fecha_devolucion,
        kilometraje_llegada,
        cantidad_dias: renta.cantidad_dias,
        tanque_gasolina: 'lleno',
        observaciones_devolucion: '',
        importe_renta: renta.importe_renta,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('renta.update', renta.id), {
            data
        });
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Recepcion de Vehiculo
                    </h2>

                    <LinkCancelButton href={route('renta.index')} >
                        <ArrowLeft className="mr-2" /> Regresar
                    </LinkCancelButton>
                </div>
            }
        >
            <Head title="Nueva Renta Vehiculo" />

            <BaseCard>
                <div className="bg-gray-50 dark:bg-slate-700 px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Informacion de cliente
                </div>
                <div className="grid grid-cols-1 gap-2 p-6 text-sm">
                    <div>
                        Nombre: <strong>{ renta?.cliente?.nombre } { renta?.cliente?.apellido }</strong>
                    </div>
                    <div>
                        Direccion: <b>{ renta?.cliente?.direccion }</b>
                    </div>
                    <div>
                        Email: <strong>{ renta?.cliente?.email }</strong>
                    </div>
                    <div>
                        Identificacion: <strong>{ renta?.cliente?.tipo_documento }</strong> { renta?.cliente?.numero_documento }
                    </div>
                    <div>
                        Telefono: <strong>{ renta?.cliente?.telefono }</strong>
                    </div>
                    <div>
                        Numero de Licencia: <strong>{ renta?.cliente?.numero_licencia }</strong>
                    </div>
                </div>
            </BaseCard>

            <BaseCard className="mt-1">
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
                    rows={[renta]}
                />
            </BaseCard>

            <BaseCard>
                <div className="p-6">
                    <div className="mt-4 bg-blue-100 border-t-4 border-blue-500 rounded-b text-gray-900 px-4 py-3 shadow-md" role="alert">
                        <div className="flex gap-2">
                            <div className="py-1">
                                <InfoIcon />
                            </div>
                            <div>
                                <p className="font-bold">Renta Inicial</p>
                                <p className="text-sm">
                                    Inicialmente se rento por {renta.cantidad_dias} dias.
                                </p>
                            </div>
                        </div>
                    </div>

                    <RentaEditForm
                        data={data}
                        setData={setData}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        reset={reset}
                        renta_por_dia={renta_por_dia}
                        renta={renta}
                    />
                </div>
            </BaseCard>
        </AuthenticatedLayout>
    );
}
