import React, { useState } from "react";
import styles from "./Faq.module.css";

const Faq = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "Программчлалын олимпиад хэзээ болох вэ?",
      answer: "11 сарын 23- ны өдөр ШУТИС-МХТС дээр зохион байгуулагдана.",
    },
    {
      id: 2,
      question: "Олимпиад хэр удаан үргэлжлэх вэ?",
      answer: "11 сарын 23 -ны өдөр 10:00 цагаас 16:00 цаг хүртэл үргэлжилнэ.",
    },
    {
      id: 3,
      question: "Олимпиадын өдөр ирэхдээ юу авчрах шаардлагатай вэ?",
      answer: "Иргэний үнэмлэх, оюутны үнэмлэх",
    },
    {
      id: 4,
      question: "Техникийн зөвлөгөөн хэзээ, хаана болох вэ?",
      answer:
        "11 сарын 22-ны өдөр 12:50 цагаас Google Meet - ээр явагдах болно. Бүртгүүлсэн цахим шуудан руу нь явуулна.",
    },
    // {
    //   id: 5,
    //   question: "Хувийн компьютероо авч очих шаардлагатай юу?",
    //   answer: "LAN-гийн утас ордог байвал боломжтой.",
    // },
  ];

  return (
    <div id="faq" className={styles.faq}>
      <div className={styles.header}>
        <h1>FAQ</h1>
        <h3>Түгээмэл асуулт хариулт</h3>
      </div>
      <div className={styles.main}>
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={styles.faqItem}
            onClick={() => toggleItem(index)}
          >
            <div className={styles.faqQuestion}>
              <span>{faq.question}</span>
              <span className={styles.faqToggle}>
                {activeItem === index ? "-" : "+"}
              </span>
            </div>
            {activeItem === index && (
              <div className={styles.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
