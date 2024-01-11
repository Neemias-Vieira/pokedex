import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.4rem 3.2rem 3.2rem;
  box-shadow: 0px 0px 1px 1px #0004;
  width: 100%;

  img {
    width: 14rem;
    filter: drop-shadow(1px 1px 1px #000b);
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-top: 0.8rem;
  }

<<<<<<< HEAD
  input {
=======
  input{
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
    font-size: 1.2rem;
    border-radius: 0.8rem;
    padding: 0.8rem 1.6rem;
    box-shadow: 1px 1px 2px 0px #0008;
  }

<<<<<<< HEAD
  button {
=======
  button{
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
    font-size: 1.2rem;
    border-radius: 0.8rem;
    padding: 0.8rem 1.6rem;
    font-weight: 700;
<<<<<<< HEAD
    background: ${({ theme }) => theme.colors.complementary};
    color: ${({ theme }) => theme.colors.light};
    box-shadow: 1px 1px 2px 0px #0008;

    &:hover {
      cursor: pointer;
      filter: brightness(1.05);
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 2.4rem 3.2rem;

    img {
      width: 20rem;
    }

    input {
      font-size: 1.6rem;
    }

    button {
=======
    background: ${({theme}) => theme.colors.complementary};
    color: ${({theme}) => theme.colors.light};
  }

  &:hover {
    cursor: pointer;
    filter: brightness(1.05);
  }

  @media (min-width: 768px){
    flex-direction: row;
    padding: 2.4rem 3.2rem;

    img{
      width: 20rem;
    }

    input{
      font-size: 1.6rem;
    }

    button{
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
      font-size: 1.6rem;
    }
  }
`;
