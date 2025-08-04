

export default function BaseCard({
    children,
    className = 'py-12'
}){
    return (
        <div className={
            `text-white ` + className
        }>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                    { children }
                </div>
            </div>
        </div>
    )
}
