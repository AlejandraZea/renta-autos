import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, useForm,} from '@inertiajs/react';
import LinkCancelButton from "@/Components/LinkCancelButton.jsx";
import {ArrowLeft, TrashIcon} from "lucide-react";
import DangerButton from "@/Components/DangerButton.jsx";
import UserForm from "@/Pages/User/UserForm.jsx";
import BaseCard from "@/Components/BaseCard.jsx";

export default function UserEdit({ user, auth }) {

    const { data, setData, put, processing, errors, reset } = useForm({
        name: '',
        email: '',
        rol: 'empleado_mostrador',
        password: '',
        password_confirmation: '',
        ...user
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('user.update', user.id), {
            onFinish: () => reset(),
            preserveScroll: true,
            preserveState: true,
        });
    }

    const handleDelete = (e) => {
        e.preventDefault();
        if (confirm('¿Estás seguro de que deseas eliminar el record?')) {
            router.delete(route('user.destroy', user.id));
        }
    }

    return (
        <AuthenticatedLayout
            header={
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Editar Usuario
                </h2>

                <LinkCancelButton href={route('user.index')} >
                    <ArrowLeft className="mr-2" /> Regresar
                </LinkCancelButton>
            </div>

            }
        >
            <Head title="Nueva Renta Vehiculo" />

            <BaseCard>
                <div className="p-6">
                    <UserForm
                        data={data}
                        setData={setData}
                        errors={errors}
                        reset={reset}
                        handleSubmit={handleSubmit}
                    >
                        { user.id && user.id !== auth.user.id &&
                            <DangerButton onClick={handleDelete} disabled={processing}>
                                <TrashIcon className="mr-2" /> Eliminar
                            </DangerButton>
                        }
                    </UserForm>
                </div>
            </BaseCard>
        </AuthenticatedLayout>
    );
}
