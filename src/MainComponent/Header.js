import styled from "styled-components";
import "./Header.css";
import { Button } from "reactstrap";
const StyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
`;

const StyImg = styled.img`
  width: 4rem;
`;

const Header = (props) => {
  const { date, setDate, setIsRandom } = props;

  const changeHandler = (e) => {
    setIsRandom(false);
    setDate(e.target.value);
  };

  const changHandleClick = () => {
    setIsRandom(true);
  };

  return (
    <StyHeader>
      <StyImg src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" />
      <Button color="primary" onClick={changHandleClick}>
        Random Pick
      </Button>
      <input type="date" onChange={changeHandler} value={date} />
    </StyHeader>
  );
};

export default Header;
