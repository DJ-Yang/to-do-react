import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'; //아이콘 이름을 {, } 안에 입력하면 원하는 아이콘을 긁어올 수 있다. https://react-icons.netlify.com/#/icons/md
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위한 코드
      e.preventDefault();
    },
    [onInsert, value],
  );

  // onSubmit 함수를 form 태그에 넣어줘야한다.. 이것 헷갈렸음..
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
