import InputLabel from "@/Components/InputLabel.jsx";
import SelectOption from "@/Components/SelectOption.jsx";
import InputError from "@/Components/InputError.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {SaveIcon} from "lucide-react";

export default function MantenimientoForm({vehiculos, data, setData, errors, handleSubmit, children }) {
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <InputLabel htmlFor="vehiculo_id" value="Vehiculo"/>
                <SelectOption
                    id="vehiculo_id"
                    value={data.vehiculo_id}
                    onChange={(e) => setData('vehiculo_id', e.target.value)}
                    className="mt-1 block w-full"
                >
                    <option value="">Selecciona un vehiculo</option>
                    {vehiculos.map((vehiculo) => (
                        <option key={`vehiculo-${vehiculo.id}`} value={vehiculo.id}>
                            {vehiculo.marca} {vehiculo.modelo} - {vehiculo.placa}
                        </option>
                    ))}
                </SelectOption>

                <InputError message={errors.vehiculo_id} className="mt-2"/>
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="fecha_reparacion" value="Fecha de Reparación"/>
                <TextInput
                    id="fecha_reparacion"
                    type="date"
                    value={data.fecha_reparacion}
                    onChange={(e) => setData('fecha_reparacion', e.target.value)}
                    className="mt-1 block w-full"
                    required
                />
                <InputError message={errors.fecha_reparacion} className="mt-2"/>
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="motivo" value="Motivo"/>
                <TextInput
                    id="motivo"
                    value={data.motivo}
                    onChange={(e) => setData('motivo', e.target.value)}
                    className="mt-1 block w-full"
                    required
                />
                <InputError message={errors.motivo} className="mt-2"/>
            </div>


            <div className="mt-4">
                <InputLabel htmlFor="costo_reparacion" value="Costo de Reparación"/>
                <TextInput
                    id="motivo"
                    type="number"
                    min="1"
                    value={data.costo_reparacion}
                    onChange={(e) => setData('costo_reparacion', e.target.value)}
                    className="mt-1 block w-full"
                    required
                />
                <InputError message={errors.costo_reparacion} className="mt-2"/>
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="fecha_fin_reparacion" value="Fecha Fin de Reparación"/>
                <TextInput
                    id="fecha_fin_reparacion"
                    type="date"
                    value={data.fecha_fin_reparacion ?? ''}
                    onChange={(e) => setData('fecha_fin_reparacion', e.target.value)}
                    className="mt-1 block w-full"
                />
                <InputError message={errors.fecha_fin_reparacion} className="mt-2"/>
            </div>

            <div className="flex justify-between mt-4">
                <div>
                    {children}
                </div>

                <PrimaryButton type="submit">
                    <SaveIcon className="mr-2"/> Guardar
                </PrimaryButton>
            </div>
        </form>
    );
}
