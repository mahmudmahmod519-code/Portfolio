import "../App.css"
export type pageinationCompenent={
    lengthAllProducts:number;
    page:number;
    pagesize:number;  
    onClick:Function;  
}

//  1...19 >
// < 1...19 >
// < 1...19 



export default function Pageination({lengthAllProducts,page,pagesize,onClick}:pageinationCompenent){
    const number_of_pages=Math.ceil(lengthAllProducts/pagesize);

    if(page===number_of_pages && page===1){
        return(
        <div className="pagination">
             <button 
                 className={page === 1 ? 'active' : ''}
             onClick={(e)=>onClick(+e.currentTarget.innerText)}>{number_of_pages}</button>
        </div>
        )
    }else{
        
        return(
                <div className="pagination">
            {page!==number_of_pages && <button onClick={()=>{onClick(page+1)}}>→</button>}
            
            <button 
            className={page === number_of_pages ? 'active' : ''}
            onClick={(e)=>onClick(+e.currentTarget.innerText)}>{number_of_pages}</button>
            
            <div>....</div>
            
            <button 
            className={page === 1 ? 'active' : ''}
            onClick={(e)=>onClick(+e.currentTarget.innerText)}>1</button>
            
            {page!==1 &&<button onClick={()=>{onClick(page-1)}}>←</button>}
        </div>
        )
    }
}