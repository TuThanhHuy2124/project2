import { useState } from 'react'
import './App.css'

var topic = "Pronoun";
const vietTopics = ["Pronoun", "Calendar", "School"]
const vietCards = {
  "Pronoun": [
    ["I", "Tôi"],
    ["You", "Bạn"],
    ["We", "Chúng ta, Chúng tôi"],
    ["They", "Họ, Bọn họ"],
    ["He", "Anh ấy, Anh ta"],
    ["She", "Cô ấy, Cô ta"],
    ["It", "Nó"],
    ["Brother", "Anh (older), Em (younger)"],
    ["Sister", "Chị (older), Em (younger)"],
    ["Father", "Ba, Cha"],
    ["Mother", "Mẹ, Má"],
    ["Grandfather", "Ông nội (paternal), Ông ngoại (maternal)"],
    ["Grandmother", "Bà nội (paternal), Bà ngoại (maternal)"],
    ["Uncle", "Chú, Cậu, Dượng, Bác trai"],
    ["Aunt", "Cô, Dì, Mợ, Bác gái"],
  ],
  "Calendar": [
    ["Monday", "Thứ hai"],
    ["Tuesday", "Thứ ba"],
    ["Wednesday", "Thứ tư"],
    ["Thursday", "Thứ năm"],
    ["Friday", "Thứ sáu"],
    ["Saturday", "Thứ bảy"],
    ["Sunday", "Chủ nhật"],
    ["January", "Tháng một"],
    ["February", "Tháng hai"],
    ["March", "Tháng ba"],
    ["April", "Tháng tư"],
    ["May", "Tháng năm"],
    ["June", "Tháng sáu"],
    ["July", "Tháng bảy"],
    ["August", "Tháng tám"],
    ["September", "Tháng chín"],
    ["October", "Tháng mười"],
    ["November", "Tháng mười một"],
    ["December", "Tháng mười hai"],
  ],
  "School": [
    ["Pen", "Bút bi"],
    ["Pencil", "Bút chì"],
    ["Eraser", "Gôm, Tẩy"],
    ["Pencil Case", "Hộp bút"],
    ["Pencil Sharpener", "Đồ chuốt"],
    ["Ruler", "Thước"],
  ]
}

function App() {
  const [card, setCard] = useState(0)
  const [face, setFace] = useState(0)

  const nextCard = () => {
    topic = shuffleTopic();
    setCard(Math.floor(Math.random()*vietCards[topic].length));
    setFace(0);
  };

  const flip = () => {
    setFace((face + 1) % 2);
  };
  
  const shuffleTopic = () => {
    return vietTopics[Math.floor(Math.random()*vietTopics.length)];
  };
  
  return (
    <>
      <h1>The Vietnamese Card Sets</h1>
      <h2>Learn Vietnamese through flashcards!</h2>
      <h3>Number of cards: {vietCards["Pronoun"].length + vietCards["Calendar"].length + vietCards["School"].length}</h3>
      <h3>Current topic: {topic}</h3>
      <div className={"display " + topic} onClick={flip}>{vietCards[topic][card][face]}</div>
      <button onClick={nextCard}>Next</button>
    </>
  )
}

export default App
