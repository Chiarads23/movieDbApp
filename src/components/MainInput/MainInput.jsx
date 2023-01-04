import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../../styles/MainInput.module.scss";

const MainInput = () => {
    const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    inputRef.current.focus()
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
  
  };

  const onHandleInput = (e) => setInputValue(e.target.value);

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
