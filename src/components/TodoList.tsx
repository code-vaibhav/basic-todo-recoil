import * as React from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { List, Button } from "antd";
import * as Selectors from "../selectors/index";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(Selectors.filteredTodoListState);

  return (
    <div className="todoList" style={{marginBottom: '30px'}}>
      {todoList.length === 0 ? (
        <p>Empty to do list.</p>
      ) : (
        <List
          bordered
          dataSource={todoList}
          header={<h1>TodoList</h1>}
          renderItem={(todoItem) => (
            <List.Item
              actions={[
                todoItem.isCompleted ? <p>Completed</p> : <p>Incomplete</p>,
                <Link to={`/edit/${todoItem.id}`}>
                  <Button type="text" style={{ color: "blue" }}>
                    edit
                  </Button>
                </Link>
              ]}
            >
              <TodoItem key={todoItem.id} item={todoItem} />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default TodoList;
