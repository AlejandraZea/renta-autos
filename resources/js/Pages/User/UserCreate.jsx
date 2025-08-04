import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import LinkCancelButton from "@/Components/LinkCancelButton.jsx";
import {ArrowLeft} from "lucide-react";
import UserForm from "@/Pages/User/UserForm.jsx";
import BaseCard from "@/Components/BaseCard.jsx";

export default function UserCreate() {

    const { data, setData, post, errors, reset } = useForm({
        name: '',
        email: '',
        rol: 'empleado_mostrador',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('user.store'), {
            onFinish: () => reset(),
            preserveScroll: true,
            preserveState: true,
        });
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Crear Usuario
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
                    />
                </div>
            </BaseCard>
        </AuthenticatedLayout>
    );
}
