import React from 'react'
import './title.css'
import Dev from'../../img/Dev comp logo.png'
import Power from '../../img/POWERED BY.png'

function Title() {
  
  
  return (
    <>
    
    <div className='titleback'>
      <div className="titleback-box">
        <div className="titleback-main">
            <img src={Dev} width={800} alt='syscotech'/>
            <div className='large-h2-span'>
              <h2>
                Dev Comp 2023 "Програмчлалын олимпиад" Оюутан залуусын чөлөөт цагийг зөв боловсон үр дүнтэй өнгөрүүлэх, мэдлэг боловсрол бүтээлч сэтгэлгээг хөгжүүлэх, ажлын байранд бэлтгэх, улмаар улс орны хөгжилд нөлөөлөхүйц бүтээлүүдийг технологийн шийдлээр бий болгох зорилготойгоор "..." сэдвийн хүрээнд зохион байгуулагдаж байна
              </h2>
            </div>
        </div>
        <div className='titleback-section'>
          <img src={Power}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Title