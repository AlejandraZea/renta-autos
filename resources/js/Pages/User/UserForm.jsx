import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SelectOption from "@/Components/SelectOption.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {SaveIcon} from "lucide-react";

export default function UserForm({ data, setData, errors, reset, handleSubmit, ...props }) {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <InputLabel htmlFor="name" value="Name" />

                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />

                <InputError message={errors.name} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={(e) => setData('email', e.target.value)}
                    required
                />

                <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) => setData('password', e.target.value)}
                    required
                />

                <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel
                    htmlFor="password_confirmation"
                    value="Confirm Password"
                />

                <TextInput
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) =>
                        setData('password_confirmation', e.target.value)
                    }
                    required
                />

                <InputError
                    message={errors.password_confirmation}
                    className="mt-2"
                />
            </div>

            <div className="mt-4">
                <InputLabel
                    htmlFor="rol"
                    value="Rol"
                />

                <SelectOption
                    id="rol"
                    value={data.rol}
                    onChange={(e) => setData('rol', e.target.value)}
                    className="block w-full mt-1"
                >
                    <option value="empleado_mostrador">Empleado Mostrador</option>
                    <option value="encargado_autos">Encargado de autos</option>
                    <option value="propietario">Propietario</option>
                </SelectOption>
                <InputError message={errors.rol} className="mt-2" />
            </div>

            <div className="flex justify-between mt-4">
                <div>
                    { props.children }
                </div>

                <PrimaryButton type="submit">
                    <SaveIcon className="mr-2" /> Guardar
                </PrimaryButton>
            </div>
        </form>
    )
}
