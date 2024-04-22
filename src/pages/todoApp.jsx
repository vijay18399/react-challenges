import { useState } from "react";
import styled from "styled-components";
import { FiMinus } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";

const Wrapper = styled.div`
     background-color: #ffffff;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: Arial, sans-serif;
    flex-direction: column;
`;

const InputContainer = styled.div`
    margin: 20px 40px;
    display: flex;
    align-items: center;
    padding: 4px 10px;
    border: 2px solid #ccc;
    border-radius: 10px;
    min-width: 780px;
    @media (max-width: 780px) {
        min-width: 95%;
    }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  color: black;
`;

const StyledButton = styled.button`
    background-color: #2C974B;
    color: white;
    font-size: 1rem;
    padding: 8px 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #2C974B;
    }
    &:disabled{
        background: #f7f7f7;
        color: #7a7a7a;
        cursor: not-allowed;
    }
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 780px;
  @media (max-width: 780px) {
    min-width: 95%;
  }

`;
const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F9F9F9;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  &.active,&:hover{
    background-color: #a0ffa3;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

const TodoName = styled.span`
     margin-left: 14px;
`;

const IconButton = styled.span`
  display: flex;
  cursor: pointer;
  margin-left: 5px;
  color: #090000;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

export default function TodoApp() {
    const [taskName, setTaskName] = useState("");
    const [todos, setTodos] = useState([
        {
            name: "Learn React Basics",
            isCompleted: true,
        },
        {
            name: "Completed All React Challenges",
            isCompleted: false,
        },
    ]);

    function addTask() {
        if (!taskName.trim()) return;
        setTodos((list) => [
            ...list,
            {
                name: taskName,
                isCompleted: false,
            },
        ]);
        setTaskName("");
    }

    function updateTask(index) {
        setTodos((list) => {
            const updatedTodos = [...list];
            updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
            return updatedTodos;
        });
    }

    function deleteTask(index) {
        setTodos((list) => list.filter((_, i) => i !== index));
    }

    return (
        <Wrapper>
            <InputContainer>
                <Input
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Start Typing"
                />
                <StyledButton disabled={!taskName} onClick={addTask}>Create</StyledButton>
            </InputContainer>
            <TodoListContainer>
        {todos.map((todo, index) => (
          <TodoItemContainer  className={`${todo.isCompleted ? 'active':''}`} key={index}>
            <div>
              <IconButton onClick={() => updateTask(index)}>
                {todo.isCompleted ? <IoMdCheckmark /> : <FiMinus />}
              </IconButton>
              <TodoName>{todo.name}</TodoName>
            </div>
  
              <IconButton onClick={() => deleteTask(index)}>
                <RxCross1 />
              </IconButton>
          </TodoItemContainer>
        ))}
      </TodoListContainer>
        </Wrapper>
    );
}
