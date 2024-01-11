import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";
import pokemonLogo from "../../assets/pokemon-logo.png";
import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  inputSearch: string;
};

export function Header() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
<<<<<<< HEAD
    navigate(`/search?q=${data.inputSearch}`);
=======
    navigate(`/search?q=${data.inputSearch}`)
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
    reset();
  };

  return (
    <Container>
      <Link to={"/"}>
<<<<<<< HEAD
        <img src={pokemonLogo} alt="logo com texto pokemon" />
=======
        <img src={pokemonLogo} alt="Logo com texto pokemon" />
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="inputSearch" className="srOnly">
            Pesquisar Pokémon
          </label>
<<<<<<< HEAD

=======
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
          <input
            type="text"
            id="inputSearch"
            placeholder="Pesquisar Pokémon"
            {...register("inputSearch", {
              required: "Preencha o nome do Pokémon",
            })}
          />
          <span className="inputError">{errors.inputSearch?.message}</span>
        </section>

        <button type="submit">Pesquisar</button>
      </form>
    </Container>
  );
}
