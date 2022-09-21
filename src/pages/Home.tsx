import { darken, lighten } from "polished";
import styled from "styled-components";

const Home = () => {
  return (
    <MainWrapper>
      <StyledButton onClick={e => (window.location.href = '/todo')}>할일 만들러 가기</StyledButton>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
   display: flex;
   margin-top: 10rem;
   height: 100%;
   align-items: center;
   justify-content: center;
`
const StyledButton = styled.button`
  padding: 1rem;
  margin-left: 1rem;
  background: #22b8cf;
  border-radius: 10px;
  border: #22b8cf;
  color: white;
  cursor: pointer;
  &:hover {
        background: ${lighten(0.1, '#22b8cf')};
  }
  &:active {
        background: ${darken(0.05, '#22b8cf')};
  }
`
export default Home;