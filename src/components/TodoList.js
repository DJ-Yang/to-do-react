import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

// 리스트 관련 컴포넌트를 작성할 때는 리스트 아이테과 리스트는 꼭 최적화 해줘야한다.

// List를 사용할 때 코드
const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};

// List를 사용하지 않았을 때 코드
// const TodoList = ({ todos, onRemove, onToggle }) => {
//   return (
//     <div className="TodoList">
//       {todos.map((todo) => (
//         <TodoListItem
//           todo={todo}
//           key={todo.id}
//           onRemove={onRemove}
//           onToggle={onToggle}
//         />
//       ))}
//     </div>
//   );
// };

export default React.memo(TodoList);
