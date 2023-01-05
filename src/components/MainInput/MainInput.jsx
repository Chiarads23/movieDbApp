import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/MainInput.module.scss";

const MainInput = () => {
    const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(e.target.value);

  const navigate= useNavigate();
  
  useEffect(() => {
    inputRef.current.focus()
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
  navigate('/searched/'+inputValue)
  };

 

  return (
    <form className={styles.MainInput} onSubmit={onHandleSubmit}>
      <input 
      type="text" 
      ref= {inputRef}
      value={inputValue} 
      onChange={onHandleInput} />
      <button className={styles.searchBtn} type="submit"><FaSearch /></button>
    </form>
  );
};

export default MainInput;
