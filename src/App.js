import React, {useState, useEffect} from 'react';
import * as S from './assets/style/style';
import iggy from './assets/img/iggy.png';

export default function App(){
  const [dog, setDog] = useState([]);

  useEffect(() => {
    getDog();
  }, []);

  const getDog = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const data = await response.json();
    setDog(data.message)
  }

  return(
    <>
      <S.Wrapper>
        <S.GlobalStyle/>
        <S.Main>
          <S.Image src={dog} alt=''/>
          <S.Button onClick={() => getDog()}>Click me</S.Button>
          <S.IggyImage src={iggy} alt=''/>
        </S.Main>
      </S.Wrapper>
    </>
  );
}