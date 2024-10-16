import React from 'react'
import { useNavigate } from 'react-router-dom'
const Image = ({id,image}) => {
    const navigate =useNavigate()
    const moveTo=(id)=>{
        // مشكلة تظهر فى الصور المستخدمة فى كومبوننت سواجر عند السحب بسرعة تحدث مشكلة فى الايدى من الباك يضيف لل ايدى اكس وهذة الدالة لحل هذه المشكلة
        console.log(id);
        const num = +id
        if (isNaN(num)) {
            const x=[...id]
            x.pop()
            const newId=x.join("")
            console.log(newId);
            navigate(`/details/${newId}/`)
        }
        else{
            navigate(`/details/${id}/`)
        }
      }
  return (
    
    <div onClick={()=>moveTo(id)} style={{cursor: "pointer"}} >
                <img className='w-100 d-block 'style={{borderRadius:2}} src={image} alt='book'/>
                </div>  
  )
}

export default Image