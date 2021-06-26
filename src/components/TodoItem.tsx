import * as React from "react";
import { useRecoilState } from "recoil";
import { Checkbox, Row, Col, List } from "antd";
import * as Atoms from "../atoms/index";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

const TodoItem = ({ item }: { item: Atoms.Item }) => {
  const [todoList, setTodoList] = useRecoilState(Atoms.todoListState);
  const index = todoList.findIndex((listItem: Atoms.Item) => listItem === item);

  const toggleItemCompletion = (e: CheckboxChangeEvent) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isCompleted: !item.isCompleted,
    });
    setTodoList(newList);
  };

  return (
    <List.Item
      actions={[
        <Checkbox
          checked={item.isCompleted}
          onChange={toggleItemCompletion}
          style={{ outlineColor: "black" }}
        />
      ]}
    >
      <Row>
        <Col>
          <h2>{item.text}</h2>
        </Col>
      </Row>
    </List.Item>
  );

  function replaceItemAtIndex(
    arr: Atoms.Item[],
    index: number,
    newValue: Atoms.Item
  ) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
};

export default TodoItem;
