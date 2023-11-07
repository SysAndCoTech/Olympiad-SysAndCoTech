import React, { useState } from 'react'
import styles from './Faq.module.css'

const Faq = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (itemId) => {
    setHoveredItem(itemId);
  };

  const faqs = [
    {
      id: 1,
      question: 'Програмчлалын олимпиад хэзээ болох вэ?',
      answer: '11 сарын 18- ны өдөр ШУТИС-МХТС дээр зохион байгуулагдана.'
    },
    {
      id: 2,
      question: 'Олимпиад хэр удаан үргэлжлэх вэ?',
      answer: '11 сарын 18 -ны өдөр 10:30 цагаас 16:00 цаг хүртэл үргэлжлэнэ. '
    },
    {
      id: 3,
      question: ' Олимпиадны өдөр ирэхдээ юу авчрах шаардлагатай вэ?',
      answer: 'Иргэний үнэмлэх, оюутны үнэмлэх'
    },
    {
      id: 4,
      question: 'Техникийн зөвлөгөөн хэзээ, хаана болох вэ?',
      answer: '11 сарын 16-ны өдөр 12:50 цагаас Google Meet - ээр явагдах болно. Бүртгүүлсэн мейл хаяг руу нь явуулна.'
    },
    {
      id: 5,
      question: 'Хувийн компьютероо авч очих шаардлагатай юу? ',
      answer: 'Лангийн утас ордог байвал боломжтой.'
    }
  ]

  return (
    <div id='faq'>
      <div className={styles.faq}>
        <div className={styles.header}>
          <h1>Faq</h1>
          <h3>Түгээмэл асуулт хариулт</h3>
        </div>
        <div className={styles.main}>
          <div className={styles.top}>
            {faqs.map((faq, index) => (
              <div 
                className={styles.box}
                style={{ 
                  backgroundColor: hoveredItem === index ? '#70FFCB' : '',
                  color: hoveredItem === index ? '#fff' : '',
                }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                ?
              </div>
            ))}
          </div>
          <div className={styles.bottom}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.card} style={{ display: hoveredItem === index ? 'block' : 'none' }}>
                <p className='question'>{faq.question}</p>
                <p className='answer'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq