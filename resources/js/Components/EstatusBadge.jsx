import Badge from "@/Components/Badge.jsx";

export default function EstatusBadge({
    estatus = 'disponible',
    ...props
}){
    const type = {
        disponible: 'green',
        activo: 'green',
        no_disponible: 'red',
        inactivo: 'red',
        mantenimiento: 'yellow',
        reservado: 'blue',
    }[estatus] || 'default';

    return (
        <Badge {...props } type={type}>
            { props.children || estatus.charAt(0).toUpperCase() + estatus.slice(1).replace(/_/g, ' ') }
        </Badge>
    );
}
