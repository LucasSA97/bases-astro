import { createSignal, For } from 'solid-js';
import type { FavoritePokemon } from '../../interfaces/favorite-pokemon.interface';

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritesPokemons = JSON.parse(localStorage.getItem('favorites') ?? '[]')
    // FavoritePokemon
    return favoritesPokemons
}

export const FavoritesList = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons())
    return (
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            <For each={pokemons()}>
                {(pokemon) => <h1>{pokemon.name}</h1>}
                </For>
        </div>
    )
}