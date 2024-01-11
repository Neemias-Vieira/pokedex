import { AppTheme } from "./styles";

export type PokemonType = keyof AppTheme["colors"]["types"];

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: PokemonType;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
<<<<<<< HEAD
};
=======
};
>>>>>>> d60376b7e18ab040875416a39c3ae3856ca9e754
