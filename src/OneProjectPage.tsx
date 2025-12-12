import {useParams,Link} from 'react-router-dom';
import {projects} from './Projects';
import { useEffect, useState } from 'react';
import '../css/oneProject.css'
// import type { Project } from './components/Projects';
import { categores } from './components/Filtering';

export default function OneProjectPage(){
    const {id}=useParams();

    const [project,setProject]=useState<any>(null);
    const [newcategory,setCategory]=useState<any>(null);
    
    
    
    useEffect(()=>{
        const project=projects.find(project=>project.id===Number(id));
        const category=categores.find(category=>category.id===Number(project?.typeid))
            setProject(project);
            setCategory(category);
    },[id])

    if (!project) return <p>Loading...</p>;

    
    return (
<>

    <nav className="product-nav">
        <Link to="/projects" className="back-btn">
            <i className="fas fa-arrow-right"></i>
            <span>العودة للمعرض</span>
        </Link>
        <div className="nav-actions">
            <button>
                <i className="far fa-heart"></i>
                <span>المفضلة</span>
            </button>
            <button>
                <i className="fas fa-share-alt"></i>
                <span>مشاركة</span>
            </button>
        </div>
    </nav>

    <main className="product-container">
        <section className="product-header">
            <div className="product-icon">
                <i className={project.iconTheam}></i>
            </div>
            
            <div className="product-title-section">
                <h1>{project.name}</h1>
                <p className="category-tag">{newcategory.name}</p>
            </div>
        </section>

        <section className="product-description">
            <h2 className="section-title">
                <i className="fas fa-file-alt"></i>
                وصف المشروع
            </h2>
            <p className="description-text">
                {project.description}
            </p>
        </section>

        <section className="tools-container">
            <h2 className="section-title">
                <i className="fas fa-tools"></i>
                الأدوات والتقنيات المستخدمة
            </h2>
            <div className="tools-grid">
                    {project.tools.map(tool=>
                    <div className="tool-tag">
                        <span>{tool}</span>
                    </div>
                    )}
            </div>
        </section>

        <section className="product-description">
            <h2 className="section-title">
                <i className="fas fa-star"></i>
                المميزات الرئيسية
            </h2>
            <div className="features-grid">
                <div className="feature-card">
                    <i className="fas fa-tachometer-alt"></i>
                    <h3>لوحة تحكم تفاعلية</h3>
                    <p>عرض إحصاءات حية وأداء المشاريع في الوقت الفعلي</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-tasks"></i>
                    <h3>إدارة المهام الذكية</h3>
                    <p>توزيع المهام وتتبع التقدم تلقائياً</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-chart-pie"></i>
                    <h3>تقارير متقدمة</h3>
                    <p>تحليلات مفصلة وأداء الفرق والمشاريع</p>
                </div>
            </div>
        </section>
    </main>

    <span><i classNameName={project.iconTheam}></i></span>
</>
    );
}