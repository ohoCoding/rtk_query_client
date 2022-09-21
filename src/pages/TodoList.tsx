import { useState } from 'react';
import styled from 'styled-components';

const TodoList = () => {

  const [checkList, setCheckList] = useState([]);
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const onCreate = () => {
    console.log("1");
  }

  return (
    <TodoListTemplate>

      <Title>To Do List</Title>

      <FormWrapper>
        <StyledInput placeholder='할일을 적어주세요' />
        <AddButton onClick={onCreate}>추가</AddButton>
      </FormWrapper>

      <TodoWrapper>
        <TodoItem>
          <Remove></Remove>
          <Checked checked={isCheck} onClick={e => setIsCheck(true)}>
            <Text></Text>
          </Checked>
          {
            isCheck && <CheckMark />
          }
        </TodoItem>
      </TodoWrapper>
    </TodoListTemplate>
  )
}

const TodoListTemplate = styled.div`
  background: white;
  width: 512px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); /* 그림자 */ 
  margin: 0 auto; /* 페이지 중앙 정렬 */
  margin-top: 4rem;
`;

const Title = styled.div`
  padding: 2rem;
  font-size: 2.5rem;
  text-align: center;
  font-weight: 100;
  background: #22b8cf;;
  color: white;
`;

const FormWrapper = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #22b8cf;
`;

const StyledInput = styled.input`
  flex: 1; /* 버튼을 뺀 빈 공간을 모두 채워줍니다 */
  font-size: 1.25rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #c5f6fa;
`;
const AddButton = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 1rem;
  background: #22b8cf;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`
const TodoWrapper = styled.div`
  min-height: 5rem;
`;

const TodoItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;
  &:hover {
    background: #e3fafc;
  }
  &:hover .remove{
    opacity: 1;
  }
`;

const Remove = styled.div`
  margin-right: 1rem;
  color: #e64980;
  font-weight: 600;
  opacity: 0;
`;

type CheckedProps = {
  checked: boolean;
}
const Checked = styled.div<CheckedProps>`
  text-decoration: line-through;
  color: #adb5bd;
  text-decoration: ${({ checked }) => checked ? 'line-through' : null};
`;

const Text = styled.div`
   flex: 1; /* 체크, 엑스를 제외한 공간 다 채우기 */
  word-break: break-all;
`;

const CheckMark = styled.div`
   font-size: 1.5rem;
  line-height: 1rem;
  margin-left: 1rem;
  color: #3bc9db;
  font-weight: 800;
`
export default TodoList;