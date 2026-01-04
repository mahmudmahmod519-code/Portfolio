export const categores=[
    {id:0,name:'الكل'},
    {id:1,name:'التصميم والشبكات'},
    {id:2,name:'تحليل الأعمال (BA)'},
    {id:3,name:'تطوير الـ Backend'},
]

export default  function Filter({handelFilter}:any){

    
    return(
    <div className="filter-bar">
        {categores.map(category=>
            <button 
            className='filter-btn'
            key={category.id} 
            value={category.name}
            onClick={(e)=>{
                const cateogry=categores.find(category=>e.currentTarget.value===category.name)
                if(cateogry)
                    handelFilter(cateogry.id)
                
            }}
            >{category.name}</button>
        )}
    </div>
    )
}