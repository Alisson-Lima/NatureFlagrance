export default function Module({moduleName, moduleTitle, moduleDescription, moduleKey}){
    return(
        <div className="module" key={moduleKey.toString()}>
            <h5>{moduleName}</h5>
            <h4>{moduleTitle}</h4>
            <p>{moduleDescription}</p>
        </div>
    )
}