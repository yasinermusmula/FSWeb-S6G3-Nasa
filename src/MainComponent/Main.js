import Image from "./Image";
import Video from "./Video";
import "./Main.css";
import styled from "styled-components";

const Container = styled.div`
  width: 60vw;
  margin: 2rem auto;
  border: 2px solid black;
  padding: 1rem;
  border-radius: 10px;
`;

const Title = styled.h1`
  color: ${(props) => (props.type === "image" ? "red" : "green")};
`;

const Info = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const CriticalInfo = styled(Info)`
  color: red;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: gray;
  }
`;

const Main = (props) => {
  const { data } = props;

  return (
    data && (
      <Container>
        <Title type={data.media_type}>{data.title}</Title>
        {data.media_type === "image" ? (
          <Image url={data.url} />
        ) : (
          <Video url={data.url} />
        )}
        <DetailsContainer>
          <Info>{data.copyright}</Info>
          <CriticalInfo>{data.date}</CriticalInfo>
        </DetailsContainer>
        <p>{data.explanation}</p>
      </Container>
    )
  );
};

export default Main;
