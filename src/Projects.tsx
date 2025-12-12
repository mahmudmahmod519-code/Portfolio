import {useState} from 'react';

import CardOrProject from './components/Project';
import '../css/newProject.css';
import Pageination from './components/pageination';
import Filter from './components/Filtering';


export const projects=[
    {
        id:1,
        name:"تحليل متطلبات مشروع",
        description:"دراسة حالة لجمع المتطلبات (Elicitation) ونمذجة العمليات.",
        typeid:2,
        tools:["UML","Process Modeling","Stakeholder Mgt"],
        srcProject:"#",
        iconTheam:"fas fa-chart-line"
    },
    {
        id:2,
        name:"Mini-CMS API",
        description:"نظام إداري مصغر باستخدام NestJS وقواعد بيانات علائقية.",
        typeid:3,
        tools:["RBAC","TypeORM","NestJS"],
        srcProject:"#",
        iconTheam:"fab fa-node-js"
    },
    {
        id:3,
        name:"Islamatic Server API",
        description:"منصة إدارة محتوى تعليمي آمن.",
        typeid:3,
        tools:["Google Auth","SQL","Node.js"],
        srcProject:"https://github.com/MahmoudMostafa87/islamatic-server",
        iconTheam:"fas fa-server"

    },
    {
        id:4,
        name:"تخطيط الشبكات الفرعية",
        description:"تنفيذ Subnetting مُحسن لشبكة كبيرة (Class A).",
        typeid:1,
        tools:["IP Addressing","Packet Tracer","CIDR"],
        srcProject:"#",
        iconTheam:"fas fa-network-wired"
    },
    {
        id:5,
        name:"تصميم UI/UX (موقع شخصي)",
        description:"نموذج تصميم نظيف ومُحرك مستوحى من اللوجو.",
        typeid:1,
        tools:["UX Principles","Wireframing","Figma"],
        srcProject:"#",
        iconTheam:"fas fa-palette"
    },
]



export default function Projects(){
    const [categreid,setCateogreId]=useState(0);
    let [page,setPage]=useState(1);

    const handlePage=(pagegetIt:number)=>{
        setPage(pagegetIt);
    }

    const handleCategory=(id:number)=>{
        setCateogreId(id);
    }
        
    return(
    <>
    <div className="portfolio-header">
        <h1>معرض أعمالي</h1>
        <h4>مجموعة مختارة من المشاريع والإنجازات في تطوير الأنظمة، تحليل الأعمال، والشبكات.</h4>
        
        <div className="page-indicator">
            <span>صفحة</span>
            <span>{page}</span>
        </div>
    </div>
    

    <Filter handelFilter={handleCategory}/>

    <hr />
        <div className="projects-grid">
            {projects.map(project=>
        <CardOrProject
            key={project.id} 
            id={project.id}
            description={project.description}
            name={project.name}
            tools={project.tools}
            showIt={categreid!==0 ? project.typeid===categreid : true}
            srcProject={project.srcProject}
            iconTheam={project.iconTheam}
            // image={image}
            />
        )}
        </div>
        <div>
            <Pageination 
            page={page}
            pagesize={15}
            lengthAllProducts={6}//all products for pagenation
            onClick={handlePage}
            />
        </div>
    </> 
    );
}

// must connect by backend for send query params in url send to backend