import React from 'react'
import "./sponsor.css";
import fibo from '../../img/fibo.png'
import nasha from '../../img/NashaTech_Logo-10.png'
import callpro from '../../img/callPro.png'
import sponser from '../../img/sponsers1.png'

function Sponsor() {
  return (
    <>
        <div className="contentSection">
            <img className='contentSection-img' src={sponser} alt=""/>
            <div className='sponsor-box'>
                <div className='sponsor-text-box'>
                    <div className='sponsor-text-h1'> DATABANK </div>
                    <small> PRJ CONCPT </small>
                    <p>Дата Бэйнк ХХК нь 2015 онд байгуулагдсан ба төлбөрийн системийн зах зээлд технологийн дэвшил дээр суурилсан ухаалаг шийдэл, үйлчилгээг нэвтрүүлэгч байгууллага юм. 
                    <br/>
                    Дата Бэйнк ХХК нь Монгол банкнаас олгосон төлбөрийн картын “Процессорын үйл ажиллагаа” эрхлэх тусгай зөвшөөрлийн дагуу үйл ажиллагаа явуулдаг ба картын процессингийн системийг бүхэлд нь дотооддоо хөгжүүлэн амжилттай нэвтрүүлсэн.
                    Энэ хүрээнд олон улсын төлбөрийн картын PCI DSS LEVEL 1 болон холбогдох стандартуудыг үйл ажиллагаандаа нэвтрүүлж, нууцлал аюулгүй байдлыг бүрэн хангасан өндөр хүчин чадал бүхий үндсэн болон нөөц дата төвийг бий болгон ажиллаж байна.
                    </p>
                </div>
                <div className='sponsor-img'>
                    <img src={callpro} alt=""/>
                </div>
            </div>
            <div className="mentors1" id='sponser'>
            <h5 class="text-slider">
                <span>- NASHATECH - DATABANK - NASHATECH - DATABANK - NASHATECH - DATABANK - NASHATECH - DATABANK - NASHATECH - DATABANK - NASHATECH - DATABANK - NASHATECH - DATABANK - NASHATECH - DATABANK -</span>
            </h5>
        </div>
            <div className='sponsor-box'>
                <div className='sponsor-img'>
                    <img src={callpro} alt=""/>
                </div>
                <div className='sponsor-text-box'>
                    <div className='sponsor-text-h1'> Nasha Tech </div>
                    <small> THE NEXT LEVEL </small>
                    <p>
                        Бид үйлчлүүлэгчдэд үнэ цэнийг бий болгодог, эрч хүчтэй, шинэлэг, тогтсон компани юм
                        <br/>
                        2018 онд байгуулагдсан цагаасаа хойш бид олон төрлийн төслүүдэд зориулсан програм хангамж хөгжүүлэх үйлчилгээг корпорациуд болон гарааны бизнесүүдэд санал болгож байна. Манай компани динамик, шинэлэг, тогтсон байр сууриараа газарзүйн хил хязгаарыг давж, өөр өөр байршил, улс орны үйлчлүүлэгчдэд үйлчлэх хамгийн сүүлийн үеийн шийдэл, үйлчилгээг хүргэх замаар үйлчлүүлэгчдэдээ үнэ цэнийг бий болгохыг эрмэлздэг. Бидний гол зорилго бол үйлчлүүлэгчдэдээ технологийн дэвшил, инновацийг нэвтрүүлэх явдал юм.
                        <br/>Алсын хараа<br/>
                        Асуудлыг шийдвэрлэх, нийгэмд эерэг нөлөө үзүүлэхийн тулд технологийг илүү хүртээмжтэй болгох.
                    </p>
                </div>
            </div>
        </div>
        <div className="mentors" id='sponser'>
            <h5 class="text-slider">
                <span>- NASHATECH - DATABANK - NASHATECH - DATABANK - NASHATECH - DATABANK - NASHATECH - DATABANK - NASHATECH - DATABANK - NASHATECH - DATABANK - NASHATECH - DATABANK - NASHATECH - DATABANK -</span>
            </h5>
        </div>
    </>
    )
}

export default Sponsor
