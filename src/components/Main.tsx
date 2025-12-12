import '../../css/portfolio.css';
import {Link} from 'react-router-dom';
import hero from '../../public/IMG-20251030-WA0009-removebg-preview.png';

// import {ReactNode} from 'react';

// interface Props{
//     props:ReactNode
// }

export default function Main(){

    return(
         <section id="hero" className="hero-section">
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            
            <div className="hero-container">
                <div className="hero-image-container">
                    <img 
                        src={hero}
                        alt="صورة شخصية" 
                        className="hero-image"
                    />
                </div>
                
                <div className="hero-content">
                    <h1>مطور تطبيقات متكامل (Full-Stack Developer)</h1>
                    <p>تصميم أنظمة قوية وفعالة، مدعومة بالمنطق والدقة.</p>
                    <Link to="/projects" className="cta-primary">استكشف المشاريع</Link>
                </div>
            </div>
        </section>
    )

}