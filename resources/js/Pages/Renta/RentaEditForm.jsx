import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SelectOption from "@/Components/SelectOption.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {FuelIcon, InfoIcon, SaveIcon} from "lucide-react";

export default function RentaEditForm({
    renta_por_dia,
    data,
    setData,
    errors,
    reset,
    handleSubmit,
    renta,
    ...props
}) {

    const changeFechaDevolucion = (date) => {
        const fechaRenta = new Date(renta.fecha_renta);
        const fechaDevolucion = new Date(date);

        // Calcular la diferencia en días
        const diffTime = Math.abs(fechaDevolucion - fechaRenta);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        setData('fecha_devolucion', date);
        setData('cantidad_dias', diffDays);
        setData('importe_renta', diffDays * renta_por_dia);
    }

    const changeDias = (dias) => {
        const fechaRenta = new Date(renta.fecha_renta);
        const fechaDevolucion = new Date(fechaRenta);
        fechaDevolucion.setDate(fechaDevolucion.getDate() + parseInt(dias));

        setData('cantidad_dias', dias);
        setData('fecha_devolucion', fechaDevolucion.toISOString().split('T')[0]);
        setData('importe_renta', dias * renta_por_dia);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-4">
                <InputLabel htmlFor="fecha_devolucion" value="Fecha Devolucion" />
                <TextInput
                    id="fecha_devolucion"
                    type="date"
                    value={data.fecha_devolucion}
                    onChange={(e) => changeFechaDevolucion(e.target.value)}
                    className="mt-1 block w-full"
                    required
                />
                <InputError message={errors.fecha_devolucion} className="mt-2"/>
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="cantidad_dias" value="Cantidad Dias"/>
                <TextInput
                    id="cantidad_dias"
                    type="number"
                    min="1"
                    value={data.cantidad_dias}
                    onChange={(e) => changeDias(e.target.value)}
                    className="mt-1 block w-full"
                    required
                />
                <InputError message={errors.cantidad_dias} className="mt-2"/>
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="kilometraje_llegada" value="Kilometraje de llegada"/>
                <TextInput
                    id="kilometraje_llegada"
                    type="number"
                    value={data.kilometraje_llegada}
                    onChange={(e) => setData('kilometraje_llegada', e.target.value)}
                    className="mt-1 block w-full"
                    required
                />
                <InputError message={errors.kilometraje_llegada} className="mt-2"/>
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

            <div className="mt-4">
                <InputLabel htmlFor="importe_renta" value="Importe Renta"/>
                <TextInput
                    id="importe_renta"
                    type="number"
                    min="0"
                    value={data.importe_renta}
                    onChange={(e) => setData('importe_renta', e.target.value)}
                    className="mt-1 block w-full"
                    required
                />
                <InputError message={errors.importe_renta} className="mt-2"/>
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="observaciones_devolucion" value="Observaciones de Devolucion"/>
                <TextInput
                    id="observaciones_devolucion"
                    type="text"
                    value={data.observaciones_devolucion}
                    onChange={(e) => setData('observaciones_devolucion', e.target.value)}
                    className="mt-1 block w-full"
                />
                <InputError message={errors.observaciones_devolucion} className="mt-2"/>
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
