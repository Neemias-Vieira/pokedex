import styled from "styled-components";

<<<<<<< HEAD
export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
=======
export const Container = styled.footer`
  background: ${({theme}) => theme.colors.primary};
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
  padding: 2.4rem 3.2rem;
  width: 100%;
  text-align: center;
  font-weight: 700;
  text-shadow: 1px 1px 2px #0004;
  box-shadow: 0px 0px 1px 1px #0004;

<<<<<<< HEAD
  a {
    font-size: 1.2rem;
    border-radius: 0.8rem;
    padding: 1.2rem;
    background: #eee2; /* # eee2 */
    display: block;
    color: ${({ theme }) => theme.colors.light};
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 2.4rem 3.2rem;

    a {
=======
  a{
    font-size: 1.2rem;
    border-radius: 0.8rem;
    padding:  1.2rem;
    background: #eee2;
    display: block;
    color: ${({ theme}) => theme.colors.light};
    text-align: center;
  }

  @media (min-width: 768px){
    padding: 2.4rem 3.2rem;

    a{
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
      font-size: 2.4rem;
      padding: 3.2rem;
    }
  }
`;
