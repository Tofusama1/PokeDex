import {useState, useEffect} from "react";
import {getPokemon, getMultiplePokemon} from "../utils/api";
import {getTypeColor, getStatColor} from "../utils/helpers";
import styles from "../styles/pokedexStyles";
import PokemonDetail from "./PokemonDetail";
import PokemonCollection from "./PokemonCollection";
import SuggestedPokemon from "./SuggestedPokemon";

function Pokedex() {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState(null);
    const [collectionPokemon, setCollectionPokemon] = useState([]);
    const [suggestedPokemon, setSuggestedPokemon] = useState([]);
    const [loading, setLoading] = useState(false);
    const [suggestionsLoading, setSuggestionsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [suggestionsError, setSuggestionsError] = useState(null);

    // Load collection from localStorage on initial render
    useEffect(() => {
        const savedCollection = localStorage.getItem('pokedexCollection');
        if (savedCollection) {
            try {
                setCollectionPokemon(JSON.parse(savedCollection));
            } catch (err) {
                console.error("Failed to load saved collection:", err);
                // If parse fails, start with empty collection
                setCollectionPokemon([]);
            }
        }

        // Load suggested Pokémon
        loadSuggestedPokemon();

        // Add responsive styling keyframes for loading spinner
        const styleSheet = document.styleSheets[0];
        try {
            styleSheet.insertRule(`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `, styleSheet.cssRules.length);
        } catch (err) {
            console.error("Could not insert keyframe rule:", err);
        }
    }, []);

    // Save to localStorage whenever collection changes
    useEffect(() => {
        if (collectionPokemon.length > 0) {
            localStorage.setItem('pokedexCollection', JSON.stringify(collectionPokemon));
        }
    }, [collectionPokemon]);

    const loadSuggestedPokemon = async () => {
        setSuggestionsLoading(true);
        setSuggestionsError(null);

        try {
            const pokemons = await getMultiplePokemon(6);
            setSuggestedPokemon(pokemons);
        } catch (err) {
            console.error("Failed to load suggested Pokémon:", err);
            setSuggestionsError("Failed to load Pokémon suggestions.");
        } finally {
            setSuggestionsLoading(false);
        }
    };

    const handleSearch = async () => {
        if (search.trim() === "") return;

        setLoading(true);
        setError(null);

        try {
            const data = await getPokemon(search);
            setPokemon(data);
        } catch (err) {
            console.error("Search failed:", err);
            setError(err.message || "Failed to find Pokémon");
            setPokemon(null);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const addToCollection = (poke) => {
        // Check if Pokémon is already in collection
        if (!collectionPokemon.some(p => p.id === poke.id)) {
            setCollectionPokemon(prev => [...prev, poke]);
        }
    };

    const removeFromCollection = (pokeId) => {
        setCollectionPokemon(prev => prev.filter(p => p.id !== pokeId));

        // If collection becomes empty after removal, clear localStorage
        if (collectionPokemon.length === 1) {
            localStorage.removeItem('pokedexCollection');
        }
    };

    const isPokemonInCollection = (pokeId) => {
        return collectionPokemon.some(p => p.id === pokeId);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Pokédex</h1>

            {/* Search Bar with improved visibility */}
            <div style={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Enter Pokémon name or ID..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                    style={styles.input}
                />
                <button
                    onClick={handleSearch}
                    style={styles.button}
                    disabled={loading}
                >
                    {loading ? "Searching..." : "Search"}
                </button>
            </div>

            {/* Error Message */}
            {error && (
                <div style={styles.error}>
                    {error}
                </div>
            )}

            {/* Display Single Pokémon with Add/Remove Button */}
            {pokemon && (
                <PokemonDetail
                    pokemon={pokemon}
                    isPokemonInCollection={isPokemonInCollection}
                    addToCollection={addToCollection}
                    removeFromCollection={removeFromCollection}
                />
            )}

            {/* Your Collection Section */}
            <PokemonCollection
                collectionPokemon={collectionPokemon}
                removeFromCollection={removeFromCollection}
                setSearch={setSearch}
                setPokemon={setPokemon}
            />

            {/* Suggested Pokémon Section */}
            <SuggestedPokemon
                suggestedPokemon={suggestedPokemon}
                suggestionsLoading={suggestionsLoading}
                suggestionsError={suggestionsError}
                loadSuggestedPokemon={loadSuggestedPokemon}
                isPokemonInCollection={isPokemonInCollection}
                addToCollection={addToCollection}
                setSearch={setSearch}
                setPokemon={setPokemon}
            />
        </div>
    );
}

export default Pokedex;