import {useState} from 'react';
import { TiltCard } from './components/ui/tilt-card';
import '../css/newProject.css';
import Pageination from './components/pageination';
import Filter from './components/Filtering';


export const projects=[
    {
        id:1,
        name:"WhatsApp AI Agent",
        description:"Conversational customer support agent with Redis-backed long-term memory, 98% session retention.",
        typeid:2,
        tools:["OpenRouter (Gemma)","Redis","Webhooks","Conditional Routing"],
        srcProject:"#",
        iconTheam:"fas fa-robot"
    },
    {
        id:2,
        name:"AutoFlow - Order Intake",
        description:"n8n workflow capturing orders from WhatsApp/Telegram, 20+ orders per day with 90% accuracy.",
        typeid:3,
        tools:["n8n","Gemini AI","Webhooks","Arabic Text Extraction"],
        srcProject:"#",
        iconTheam:"fas fa-shopping-cart"
    },
    {
        id:3,
        name:"Islamatic Server API",
        description:"Node.js/Express backend with Google OAuth for secure audio uploads.",
        typeid:3,
        tools:["Google Auth","SQL","Node.js","Express"],
        srcProject:"https://github.com/MahmoudMostafa87/islamatic-server",
        iconTheam:"fas fa-server"

    },
    {
        id:4,
        name:"AI Chatbot API",
        description:"Scalable AI chatbot backend supporting 3 AI models with JWT+Cookie auth, rate limiting, <200ms response.",
        typeid:3,
        tools:["OpenAI","Gemini","JWT","Cookies","SQLite","Rate Limiting"],
        srcProject:"#",
        iconTheam:"fas fa-comments"
    },
    {
        id:5,
        name:"Tawiq Automation Workflows",
        description:"n8n workflows handling 50+ rider complaints daily via Telegram with 95% classification accuracy.",
        typeid:2,
        tools:["n8n","Telegram","LLM Integration","Auto-scaling"],
        srcProject:"#",
        iconTheam:"fas fa-bolt"
    },
    {
        id:6,
        name:"PDF Report Delivery",
        description:"Automatic PDF report delivery via Telegram and Gmail, saving 90% of manual reporting time.",
        typeid:2,
        tools:["Telegram","Gmail","PDF Generation","Automation"],
        srcProject:"#",
        iconTheam:"fas fa-file-pdf"
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
    <div className="portfolio-header px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-2">معرض أعمالي</h1>
        <h4 className="text-gray-600 text-sm sm:text-base">مجموعة مختارة من المشاريع والإنجازات في تطوير الأنظمة، تحليل الأعمال، والشبكات.</h4>
        
        <div className="page-indicator mt-4 flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <span>صفحة</span>
            <span>{page}</span>
        </div>
    </div>
    

    <Filter handelFilter={handleCategory}/>

    <hr className="my-8 border-gray-100" />
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            />
        )}
        </div>
        <div className="mt-8">
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

function CardOrProject({description,name,tools,showIt,iconTheam,srcProject}:{
    id:number,
    tools:string[],
    name:string,
    description:string,
    showIt:boolean,
    srcProject:string,
    iconTheam:string
}){
    if(!showIt)
        return null;

    return (
    <TiltCard maxTilt={6} hoverScale={1.02} glareOpacity={0.15} className="w-full h-full">
        <div className="project-card p-5 sm:p-6 h-full flex flex-col">
            <div className="project-image mb-3 sm:mb-4">
                <i className={iconTheam + " text-2xl sm:text-3xl text-[#1E90FF]"} />
            </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2">{name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 flex-grow">{description}</p>
            <div className="tags flex flex-wrap gap-2 mb-4">
                {tools.map((tool,index)=>
                    <span key={index} className="px-2.5 py-1 rounded-full bg-[#1E90FF]/10 text-[#1E90FF] text-xs font-medium border border-[#1E90FF]/20">
                        {tool}
                    </span>
                )}
            </div>
                <a 
                  href={srcProject}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#1E90FF] text-white font-semibold text-sm text-center transition-all hover:bg-[#1E90FF]/90 hover:shadow-[0_0_15px_rgba(30,144,255,0.4)]"
                  {...(srcProject === '#' ? { onClick: (e) => e.preventDefault() } : {})}
                >
                show more
                </a>
        </div>
    </TiltCard>
    );
}
