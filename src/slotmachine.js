import React, { useState } from 'react';
import './SlotMachine.css';
import { useNavigate } from "react-router-dom";

function SlotMachine() {
  const symbols = ['🍭', '🍒', '🍇',];
  const [slots, setSlots] = useState(Array(15).fill(0));
  const [isSpinning, setIsSpinning] = useState(Array(15).fill(false));
  const [message,setMessage] = useState('');

  const spin = () => {
    setMessage('');
    const newSlots = slots.map(() => Math.floor(Math.random() * symbols.length));
    setSlots(newSlots);
  
    let newIsSpinning = isSpinning.map(() => true);
    setIsSpinning(newIsSpinning);
  
    // Stop spinning one column at a time after 1, 2, 3, 4, and 5 seconds
    [1, 2, 3, 4, 5].forEach((delay, index) => {
      setTimeout(() => {
        newIsSpinning = newIsSpinning.map((spin, i) => (i % 5 === index ? false : spin));
        setIsSpinning([...newIsSpinning]);
      }, delay * 1000); // Increase this value to make the spinning last longer
    });
  
    setTimeout(() => {
      const win = checkWin(newSlots);
      if (win===5) {
        setMessage('Du vant! 10 000kr');
      } 
      else if (win===4) {
        setMessage('Du vant! 1000kr');
      }
      else if (win===3) {
        setMessage('Du vant! 100kr'); 
      }
    }, 2500); // This should be the same as the longest delay above
  };


    const checkWin = (slots) => {
      for (let i = 0; i < slots.length; i += 5) {
        if (slots[i] === slots[i + 1] && slots[i] === slots[i + 2] && slots[i] === slots[i + 3] && slots[i] === slots[i + 4]) {
          return 5;
        }
        else if (slots[i] === slots[i + 1] && slots[i] === slots[i + 2] && slots[i] === slots[i + 3]) {
          return 4;
        }
        else if (slots[i] === slots[i + 1] && slots[i] === slots[i + 2]) {
          return 3;
        }
      }
      return 0;
  };

  const navigate = useNavigate();

  return (
    <div className="slot-machine">
      <h1 className="title">Sondre Casino</h1>
      <button className="back-button" onClick={()=>navigate('/')}>Tilbake</button>
        <div className="slots">
          {slots.map((slot, index) => (
            <div className={`symbol ${isSpinning[index] ? 'spinning' : ''}`} key={index}>
              {symbols[slot]}
            </div>
          ))}
        </div>
      <button className="spin-button" onClick={spin}>Spinn</button>
      <div className="message">{message}</div>
    </div>
    
  );
}

export default SlotMachine;
