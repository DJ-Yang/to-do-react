import React from 'react';
import { MdAdd } from 'react-icons/md'; //아이콘 이름을 {, } 안에 입력하면 원하는 아이콘을 긁어올 수 있다. https://react-icons.netlify.com/#/icons/md
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
