import Header from "./Components/Header";
import styled from "styled-components";
import Career from "./Components/Career";
import Theothers from "./Components/Theothers";

const App = () => {
    const Container = styled.div`
      width: 100%;
      max-width: 50rem;
      margin: auto;
    `;
    const UpperLine = styled.div`
      position: fixed;
      top: 0;
      height: 10px;
      background: blueviolet;
      width: 100%;
    `;

    return (
        <>
            <UpperLine />
            <Container>
                <Header/>
                <Career />
                <Theothers />
            </Container>
        </>
    );
}

export default App;