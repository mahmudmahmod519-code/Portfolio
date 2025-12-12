import { Link } from "react-router-dom";

export type Project={
    id:number,
    tools:string[],
    name:string,
    description:string,
    showIt:boolean,
    srcProject:string,
    iconTheam:string
}


export default function CardOrProject({description,name,tools,showIt,iconTheam,id}:Project){
    //send function and check if in button tool === tool in props show it
    // or can add pass in props true and false for component you need show it and other show null
    if(!showIt)
        return null;

    return <div className="project-card">
        <div className="project-image">
            <i className={iconTheam}></i>
        </div>
            <h3>{name}</h3>
            <p>{description}</p>
        <div className="tags" >
            {tools.map((tool,index)=>
                <span key={index}>{tool}</span>
            )}
        </div>
            <Link to={`/projects/${id}`} className="project-link">show more</Link>
    </div>;
}