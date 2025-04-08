import React from 'react';
import {getTypeColor} from "../utils/helpers";
import styles from "../styles/pokedexStyles";

function SuggestedPokemon({
                              suggestedPokemon,
                              suggestionsLoading,
                              suggestionsError,
                              loadSuggestedPokemon,
                              isPokemonInCollection,
                              addToCollection,
                              setSearch,
                              setPokemon
                          }) {
    return (
        <div style={styles.suggestionsSection}>
            <div style={styles.suggestionHeader}>
                <h2 style={styles.sectionHeader}>Discover More Pokémon</h2>
                <button
                    onClick={loadSuggestedPokemon}
                    style={styles.refreshButton}
                    disabled={suggestionsLoading}
                >
                    {suggestionsLoading ? "Loading..." : "Refresh"}
                </button>
            </div>

            {suggestionsError && (
                <div style={styles.error}>
                    {suggestionsError}
                </div>
            )}

            {suggestionsLoading ? (
                <div style={styles.loadingContainer}>
                    <div style={styles.loadingSpinner}></div>
                    <p style={styles.loadingText}>Loading Pokémon...</p>
                </div>
            ) : (
                <div style={styles.grid}>
                    {suggestedPokemon.map((poke) => (
                        <div
                            key={poke.id}
                            style={styles.card}
                            onClick={() => {
                                setSearch(poke.name);
                                setPokemon(poke);
                            }}
                        >
                            <div style={styles.cardHeader}>
                                <h3 style={styles.cardTitle}>{poke.name.toUpperCase()}</h3>
                                {!isPokemonInCollection(poke.id) && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCollection(poke);
                                        }}
                                        style={styles.addCardButton}
                                    >
                                        +
                                    </button>
                                )}
                            </div>
                            <div style={styles.cardBody}>
                                <img
                                    src={poke.sprites.front_default}
                                    alt={poke.name}
                                    style={styles.cardImage}
                                />
                                <div style={styles.cardInfo}>
                                    <p style={styles.cardText}>#{poke.id.toString().padStart(3, '0')}</p>
                                    <div style={styles.cardTypes}>
                                        {poke.types.map(t => (
                                            <span
                                                key={t.type.name}
                                                style={{
                                                    ...styles.typeTagSmall,
                                                    backgroundColor: getTypeColor(t.type.name)
                                                }}
                                            >
                                                {t.type.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SuggestedPokemon;