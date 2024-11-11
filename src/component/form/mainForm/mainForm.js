import React, { useState } from "react";
import "./mainForm.css";
// import { HiMail } from "react-icons/hi";
import { db } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { formData } from "../../../data/formData";

const MainFormSecond = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gmail, setGmail] = useState("");
  const [number, setNumber] = useState("");
  const [course, setCourse] = useState("");
  const [profession, setProfession] = useState("Программ хангамж");
  const [studentCode, setStudentCode] = useState("");

  const usersCollectionRef = collection(db, "contact");

  function handleSelect(event) {
    setProfession(event.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(usersCollectionRef, {
      firstName: firstName,
      lastName: lastName,
      gmail: gmail,
      number: number,
      course: course,
      profession: profession,
      studentCode: studentCode,
    }).then(() => {
      setFirstName("");
      setLastName("");
      setGmail("");
      setNumber("");
      setCourse("");
      setProfession("");
      setStudentCode("");
      alert("Амжилттай бүртгэгдлээ 👍");
    });
  };

  return (
    <div className="contentFrame" id="form">
      <div className="contentSection">
        <h1>Бүртгүүлэх</h1>

        <div className="infoSection">
          <form className="form" onSubmit={handleSubmit}>
            <div className="mainForm">
              <input
                className="formDiv"
                required="required"
                value={firstName}
                placeholder="Овог"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                id="fname"
              />
              <input
                className="formDiv"
                required="required"
                placeholder="Нэр"
                value={lastName}
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                id="fname"
              />
              <input
                className="formDiv"
                required="required"
                placeholder="Gmail"
                value={gmail}
                type="email"
                onChange={(e) => setGmail(e.target.value)}
                id="fname"
              />
              <input
                className="formDiv"
                required="required"
                placeholder="Утасны дугаар"
                value={number}
                type="number"
                onChange={(e) => setNumber(e.target.value)}
                id="fname"
              />
            </div>
            <div className="mainFormSentButton">
              <button className="sentButton" type="submit"></button>
            </div>
            <div className="mainForm">
              <input
                className="formDiv"
                required="required"
                placeholder="Курс"
                value={course}
                type="number"
                onChange={(e) => setCourse(e.target.value)}
                id="fname"
              />
              <select className="formDiv" id="fname" onChange={handleSelect}>
                {formData.map((data, index) => {
                  return (
                    <option key={index} value={data.text}>
                      {data.text}
                    </option>
                  );
                })}
              </select>
              {/* <input className='formDiv' required="required" placeholder='Анги' value={profession} onChange={(e)=>setProfession(e.target.value)} id="fname"/>   */}
              <input
                className="formDiv"
                required="required"
                placeholder="Оюутны код"
                value={studentCode}
                type="text"
                onChange={(e) => setStudentCode(e.target.value)}
                id="fname"
              />
            </div>
            <div className="litleButtonFrame">
              <button className="litleButton" type="submit">
                Илгээх
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainFormSecond;
