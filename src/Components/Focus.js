import React, { useRef } from "react";

function Focus() {
  // const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handlIncreament = () => {
    // setCount(count + 1);
    countRef.current++;

    // console.log("State:", count);
    console.log("Ref:", countRef.current);
  };

  return (
    <div className="text-black">
      {/* Count: {count} */}
      Count: {countRef.current}
      <button onClick={handlIncreament}>Increment</button>
    </div>
  );
}

export default Focus;

// 1) Agarda biz console ni koradigan bolsak useRef va useState bitta ga farq qilyapti
//  chunki useRef rerenderga muxtoj emas increament uchun lekin useState muxtoj
// 2) Agarda useStateni ochirib faqatqina useRef qoldirilsa
