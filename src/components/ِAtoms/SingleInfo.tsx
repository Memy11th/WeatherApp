
const SingleInfo = ({name,icon,value}:{name:string,icon:React.ReactNode,value:number}) => {
    return <>
        <div className="  bg-blue-400/35 dark:bg-slate-900/35 flex justify-between items-center mb-2 rounded-xl p-4 text-muted-foreground">
            <p>{name}</p>
            <span>{icon}</span>
            <span>{value}</span>
        </div>
    </>
}

export default SingleInfo
