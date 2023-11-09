import React from 'react'
import "./sponsor.css";
import nasha from '../../img/NashaTech_Logo-10.png'
import databackLogo from '../../img/databackLogo.png'
import sponser from '../../img/sponsers1.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function Sponsor() {
  return (
    <>
        <div className="contentSection" id='sponser'>
            <h2 className='contentSection-h2'>Sponsor</h2>
            <div className='sponsor-box'>
                <div className='sponsor-text-box'>
                    <div className='sponsor-text-h1'> DATABANK </div>
                    <small> <a href="https://databank.mn" target="_blank"> Дэлхийн технологийг дэргэд тань <BsFillArrowRightCircleFill/></a></small>
                    <p>Дата Бэйнк ХХК нь 2015 онд байгуулагдсан ба төлбөрийн системийн зах зээлд технологийн дэвшил дээр суурилсан ухаалаг шийдэл, үйлчилгээг нэвтрүүлэгч байгууллага юм. 
                    <br/>
                    Дата Бэйнк ХХК нь Монгол банкнаас олгосон төлбөрийн картын “Процессорын үйл ажиллагаа” эрхлэх тусгай зөвшөөрлийн дагуу үйл ажиллагаа явуулдаг ба картын процессингийн системийг бүхэлд нь дотооддоо хөгжүүлэн амжилттай нэвтрүүлсэн.
                    Энэ хүрээнд олон улсын төлбөрийн картын PCI DSS LEVEL 1 болон холбогдох стандартуудыг үйл ажиллагаандаа нэвтрүүлж, нууцлал аюулгүй байдлыг бүрэн хангасан өндөр хүчин чадал бүхий үндсэн болон нөөц дата төвийг бий болгон ажиллаж байна.
                    </p>
                </div>
                <div className='sponsor-img'>
                    <img src={databackLogo} alt=""/>
                </div>
            </div>
            <div className='sponsor-box'>
                <div className='sponsor-img'>
                    <img src={nasha} alt=""/>
                </div>
                <div className='sponsor-text-box'>
                    <div className='sponsor-text-h1'> Nasha Tech </div>
                    <small>  <a href="https://nashatech.com" target="_blank">THE NEXT LEVEL <BsFillArrowRightCircleFill/></a></small>
                    <p>
                        Бид үйлчлүүлэгчдэд үнэ цэнийг бий болгодог, эрч хүчтэй, шинэлэг, тогтсон компани юм.
                        <br/>
                        2018 онд байгуулагдсан цагаасаа хойш бид олон төрлийн төслүүдэд зориулсан програм хангамж хөгжүүлэх үйлчилгээг корпорациуд болон гарааны бизнесүүдэд санал болгож байна. Манай компани динамик, шинэлэг, тогтсон байр сууриараа газарзүйн хил хязгаарыг давж, өөр өөр байршил, улс орны үйлчлүүлэгчдэд үйлчлэх хамгийн сүүлийн үеийн шийдэл, үйлчилгээг хүргэх замаар үйлчлүүлэгчдэдээ үнэ цэнийг бий болгохыг эрмэлздэг.
                        Бидний гол зорилго бол үйлчлүүлэгчдэдээ технологийн дэвшил, инновацийг нэвтрүүлэх явдал юм мөн бидний алсын хараа нь асуудлыг шийдвэрлэж, нийгэмд эерэг нөлөө үзүүлэхийн тулд технологийг илүү хүртээмжтэй болгох юм.

                    </p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Sponsor
