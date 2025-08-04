import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion, foo }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="teste" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#00408b] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center">
                                <img
                                    src="img/RAG_rental_garage.png"
                                    alt="Renta_Autos"
                                    className="w-[100px] h-[100px] object-contain"
                                />
                            </div>
                            {/*si no estas iniciado te manda a login*/}
                            {/*Y si lo estas, te manda al dashboard*/}
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Inicie sesion aquí
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <a
                                    href=""
                                    id="docs-card"
                                    className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >

                                    <div className="relative flex items-center gap-6 lg:items-end">
                                        <div
                                            id="docs-card-content"
                                            className="flex items-start gap-6 lg:flex-col"
                                        >
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#00408b]/10 sm:size-16">
                                                <img src="img/db.png" alt="Jefe"
                                                     className="size-5 sm:size-6"
                                                     fill="none"
                                                     viewBox="0 0 24 24"/>
                                            </div>

                                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                                    Administración de Base de Datos
                                                </h2>
                                                <h1 className="text-mg font-semibold dark:text-white">Aplicación con acceso a BBDD no relacional</h1>

                                                <p className="mt-4 text-sm/relaxed">
                                                    Se realizó una aplicación con acceso a la BD no relacional
                                                    Mongo DB con el caso de estudio Renta de Autos tomando en cuenta
                                                    los siguientes requerimientos funcionales.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href=""
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#00408b]/10 sm:size-16">
                                        <img src="img/boss.png" alt="Jefe"
                                             className="size-5 sm:size-6"
                                             fill="none"
                                             viewBox="0 0 24 24"/>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Funciones de Dueño o Propietario
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            <li>El sistema debe permitir al Dueño obtener la información de reparaciones
                                                realizadas en un periodo de tiempo y por un monto determinado.</li>
                                        </p>
                                    </div>

                                    {/*<svg*/}
                                    {/*    className="size-6 shrink-0 self-center stroke-[#00408b]"*/}
                                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*    fill="none"*/}
                                    {/*    viewBox="0 0 24 24"*/}
                                    {/*    strokeWidth="1.5"*/}
                                    {/*>*/}
                                    {/*    <path*/}
                                    {/*        strokeLinecap="round"*/}
                                    {/*        strokeLinejoin="round"*/}
                                    {/*        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"*/}
                                    {/*    />*/}
                                    {/*</svg>*/}
                                </a>

                                <a
                                    href=""
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#00408b]/10 sm:size-16">
                                        <img src="img/customer.png" alt="Jefe"
                                             className="size-5 sm:size-6"
                                             fill="none"
                                             viewBox="0 0 24 24"/>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Funciones de Empleado de atención al público
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            <li>El sistema debe permitir al Empleado de atención al público, registrar y mantener los datos del cliente</li>
                                            <li>El sistema debe permitir al Empleado, la búsqueda de un vehículo disponible.</li>
                                            <li>El sistema debe permitir registrar y actualizar la renta de un auto.</li>
                                        </p>
                                    </div>

                                    {/*<svg*/}
                                    {/*    className="size-6 shrink-0 self-center stroke-[#00408b]"*/}
                                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*    fill="none"*/}
                                    {/*    viewBox="0 0 24 24"*/}
                                    {/*    strokeWidth="1.5"*/}
                                    {/*>*/}
                                    {/*    <path*/}
                                    {/*        strokeLinecap="round"*/}
                                    {/*        strokeLinejoin="round"*/}
                                    {/*        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"*/}
                                    {/*    />*/}
                                    {/*</svg>*/}
                                </a>

                                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#00408b]/10 sm:size-16">
                                        <img src="img/automobile.png" alt="auto"
                                             className="size-5 sm:size-6"
                                             fill="none"
                                             viewBox="0 0 24 24"/>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Funciones de Encargado de Autos
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            <li>El sistema debe permitir al Dueño obtener la información de reparaciones
                                                realizadas en un periodo de tiempo y por un monto determinado.</li>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
