
const SingleInfo = ({name,icon,value,Unit}:{name:string,icon:React.ReactNode,value:number|string,Unit:string|null}) => {
    return <>
        <div className=" col-span-12 md:col-span-6 mt-3  gap-4  bg-white dark:bg-slate-900/35 flex justify-between items-center mb-2 rounded-xl p-4 text-muted-foreground">
            <div className="w-1/3">
                    <span className="text-sm">{icon}</span>
            </div>
            <div className="flex flex-col justify-center items-center w-2/3">
                <span className="text-sm">{name} </span>
                <span className="text-sm">{value} {Unit}</span>
            </div>

        </div>
    </>
}

export default SingleInfo
