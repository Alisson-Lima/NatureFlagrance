import api from "../../services/api"
import { useState, useEffect } from "react"
import Module from "../Module"
export default function CurseModules(){

    const [modules, setModules] = useState([])
    useEffect(()=>{
        api.get("/Modules")
        .then((res)=>{
            setModules(res.data)
        })
    }, [])

    return (
        <>
            <div className="container" id="Modules">
                <h2>Lorem ipsum dolor sit amet</h2>
                <div className="modules-container flex">
                    {
                        modules.map(module =>{
                            return(
                                <Module 
                                    moduleKey={module.moduleId}
                                    moduleName={module.moduleName}
                                    moduleTitle={module.moduleTitle}
                                    moduleDescription={module.moduleDescription}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}