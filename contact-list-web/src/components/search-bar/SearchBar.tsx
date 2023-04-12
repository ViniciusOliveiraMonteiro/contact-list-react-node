import { FaSearch } from "react-icons/fa";
import style from './style.module.css';

export function SearchBar(){
  return (
    <div className={`ps-4 pe-4 ${style.inputSearchContainer}`}>
      <FaSearch 
        size={25} color="#6418C3" className={style.iconSearch}
      />
      <input type="text" placeholder="Pesquise aqui" className={`ms-3 ${style.inputSearch}`}/>
    </div>
  );
}