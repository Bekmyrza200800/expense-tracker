import React, { useState } from "react";
import styled from "styled-components";

export default function Text() {
  const [color, setColor] = useState("false");

  const heandleColor = (props) => {
    setColor((prev) => !prev);
  };

  return (
    <Main>
      <button onClick={heandleColor}>Change color</button>
      <Heading color>Hello Style in React</Heading>

      <LoremText chagecolor={color}>
        Далеко-далеко за словесными горами в стране гласных и согласных живут,
        рыбные тексты. На берегу знаках жаренные семь текстами строчка свой ему
        языкового пустился несколько, она переписывается что о города, речью
        встретил снова щеке.
      </LoremText>
    </Main>
  );
}

const Main = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  color: ${(props) => (props.color ? "red" : "blue")};
`;

const LoremText = styled.p`
  color: ${(props) => (props.chagecolor ? "red" : "blue")};
`;
