import { Pokemon } from "../../@types/pokemon";
import { CardType } from "../CardType";
<<<<<<< HEAD
import { Container } from "./styles";

type Props = {
  pokemon: Pokemon;
};
=======
import { Container } from "./style";

type Props = {
  pokemon: Pokemon
}
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754

export function PokemonCard({ pokemon }: Props) {
  return (
    <Container>
      <img src={pokemon.sprites.other["official-artwork"].front_default} />
<<<<<<< HEAD

=======
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
      <strong>
        #{pokemon.id} {pokemon.name}
      </strong>

      <div className="boxTypes">
        {pokemon.types.map((type) => {
<<<<<<< HEAD
          return <CardType type={type.type.name} key={type.type.name} />;
=======
          return <CardType type={type.type.name} key={type.type.name}></CardType>
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
        })}
      </div>
    </Container>
  );
}
