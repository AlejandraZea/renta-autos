import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SelectOption from "@/Components/SelectOption.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {FuelIcon, SaveIcon} from "lucide-react";

export default function RentaCreateForm({
    vehiculos,
    clientes,
    renta_por_dia,
    data,
    setData,
    errors,
    reset,
    handleSubmit,
    ...props
}) {
    return (
        <form onSubmit={handleSubmit}>
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
                <InputLabel htmlFor="cliente_id" value="Cliente"/>
                <SelectOption
                    id="cliente_id"
                    value={data.cliente_id}
                    onChange={(e) => setData('cliente_id', e.target.value)}
                    className="mt-1 block w-full"
                >
                    <option value="">Selecciona un cliente</option>
                    {clientes.map((cliente) => (
                        <option key={`cliente-${cliente.id}`} value={cliente.id}>
                            {cliente.nombre} {cliente.apellido} - {cliente.numero_licencia}
                        </option>
                    ))}
                </SelectOption>

                <InputError message={errors.cliente_id} className="mt-2"/>
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="fecha_renta" value="Fecha Renta"/>
                <TextInput
                    id="fecha_renta"
                    type="date"
                    value={data.fecha_renta}
                    onChange={(e) => setData('fecha_renta', e.target.value)}
                    className="mt-1 block w-full"
                    required
                />
                <InputError message={errors.fecha_renta} className="mt-2"/>
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="cantidad_dias" value="Cantidad Dias"/>
                <TextInput
                    id="cantidad_dias"
                    type="number"
                    min="1"
                    value={data.cantidad_dias}
                    onChange={(e) => setData('cantidad_dias', e.target.value)}
                    className="mt-1 block w-full"
                    required
                />
                <InputError message={errors.cantidad_dias} className="mt-2"/>
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="kilometraje_salida" value="Kilometraje de salida"/>
                <TextInput
                    id="kilometraje_salida"
                    type="number"
                    value={data.kilometraje_salida}
                    onChange={(e) => setData('kilometraje_salida', e.target.value)}
                    className="mt-1 block w-full"
                    required
                />
                <InputError message={errors.kilometraje_salida} className="mt-2"/>
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="tanque_gasolina" value="Tanque Gasolina"/>
                <SelectOption
                    id="tanque_gasolina"
                    value={data.tanque_gasolina}
                    onChange={(e) => setData('tanque_gasolina', e.target.value)}
                    className="mt-1 block w-full"
                >
                    <option value="lleno">Lleno</option>
                    <option value="medio">Medio</option>
                    <option value="vacío">Vacío</option>
                </SelectOption>
                <InputError message={errors.tanque_gasolina} className="mt-2"/>
            </div>

            { data.tanque_gasolina === 'lleno' && (
                <div className="mt-4 bg-teal-300 border-t-4 border-teal-500 rounded-b text-gray-900 px-4 py-3 shadow-md"
                     role="alert">
                    <div className="flex gap-2">
                        <div className="py-1">
                            <FuelIcon />
                        </div>
                        <div>
                            <p className="font-bold">Politica gasolina</p>
                            <p className="text-sm">
                                El tanque de gasolina debe ser devuelto en el mismo estado en que se entregó. Si el tanque
                                no está lleno, se cobrará una tarifa adicional por el combustible faltante.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-4 bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-gray-900 px-4 py-3 shadow-md"
                    role="alert">
                <div className="flex gap-2">
                    <div className="py-1">
                        <SaveIcon />
                    </div>
                    <div>
                        <p className="font-bold">Costo de renta</p>
                        <p className="text-sm">
                            El costo de la renta es de ${renta_por_dia} por día. El total es ${ data.cantidad_dias * renta_por_dia }.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <div>
                    {props.children}
                </div>

                <PrimaryButton type="submit">
                    <SaveIcon className="mr-2"/> Guardar
                </PrimaryButton>
            </div>
        </form>
    )
}
