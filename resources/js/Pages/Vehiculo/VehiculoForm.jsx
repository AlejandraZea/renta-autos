import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SelectOption from "@/Components/SelectOption.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {SaveIcon} from "lucide-react";

export default function VehiculoForm({ data, setData, errors, reset, handleSubmit, ...props }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <InputLabel htmlFor="placa" value="Placa" />
                    <TextInput
                        type="text"
                        id="placa"
                        value={data.placa}
                        onChange={(e) => setData('placa', e.target.value)}
                        className="mt-1 block w-full"
                    />
                    <InputError message={errors.placa} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="marca" value="Marca" />
                    <TextInput
                        type="text"
                        id="marca"
                        value={data.marca}
                        onChange={(e) => setData('marca', e.target.value)}
                        className="mt-1 block w-full"
                    />
                    <InputError message={errors.marca} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="modelo" value="Modelo" />
                    <TextInput
                        type="text"
                        id="modelo"
                        value={data.modelo}
                        onChange={(e) => setData('modelo', e.target.value)}
                        className="mt-1 block w-full"
                    />
                    <InputError message={errors.modelo} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="anio" value="Año" />
                    <TextInput
                        type="text"
                        id="anio"
                        value={data.anio}
                        onChange={(e) => setData('anio', e.target.value)}
                        className="mt-1 block w-full"
                    />
                    <InputError message={errors.anio} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="color" value="Color" />
                    <TextInput
                        type="text"
                        id="color"
                        value={data.color}
                        onChange={(e) => setData('color', e.target.value)}
                        className="mt-1 block w-full"
                    />
                    <InputError message={errors.color} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="descripcion" value="Descripción" />
                    <TextInput
                        type="text"
                        id="descripcion"
                        value={data.descripcion}
                        onChange={(e) => setData('descripcion', e.target.value)}
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.descripcion} className="mt-2" />
                </div>

                <div>
                    <SelectOption
                        id="estatus"
                        value={data.estatus}
                        onChange={(e) => setData('estatus', e.target.value)}
                        className="mt-1 block w-full">
                        <option value="disponible">Disponible</option>
                        <option value="rentado">Rentado</option>
                        <option value="mantenimiento">Mantenimiento</option>
                    </SelectOption>
                    <InputError message={errors.estatus} className="mt-2" />
                </div>

                <div className="flex justify-between mt-4">
                    <div>
                        { props.children }
                    </div>

                    <PrimaryButton type="submit">
                        <SaveIcon className="mr-2" /> Guardar
                    </PrimaryButton>
                </div>
            </div>
        </form>
    )
}
