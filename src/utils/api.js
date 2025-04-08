// API utility functions for fetching Pokémon data

/**
 * Fetch a single Pokémon by name or ID
 * @param {string|number} nameOrId - The name or ID of the Pokémon to fetch
 * @returns {Promise<Object>} - Promise resolving to Pokémon data
 */
export async function getPokemon(nameOrId) {
    try {
        // Convert nameOrId to lowercase if it's a string
        const query = typeof nameOrId === 'string' ? nameOrId.toLowerCase() : nameOrId;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

        if (!response.ok) {
            throw new Error(`Pokémon not found. Please check the name or ID.`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching Pokémon:", error);
        throw error;
    }
}

/**
 * Fetch multiple random Pokémon
 * @param {number} count - Number of Pokémon to fetch
 * @returns {Promise<Array>} - Promise resolving to array of Pokémon data
 */
export async function getMultiplePokemon(count = 6) {
    try {
        // There are approximately 898 Pokémon in the PokeAPI
        const maxPokemonId = 898;
        const randomIds = [];

        // Generate random unique IDs
        while (randomIds.length < count) {
            const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
            if (!randomIds.includes(randomId)) {
                randomIds.push(randomId);
            }
        }

        // Fetch all Pokémon in parallel
        const pokemonPromises = randomIds.map(id => getPokemon(id));
        return await Promise.all(pokemonPromises);
    } catch (error) {
        console.error("Error fetching multiple Pokémon:", error);
        throw error;
    }
}