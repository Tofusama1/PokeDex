import React from 'react';
import {getTypeColor} from "../utils/helpers";
import styles from "../styles/pokedexStyles";

function PokemonCollection({collectionPokemon, removeFromCollection, setSearch, setPokemon}) {
    return (
        <>
            <h2 style={styles.sectionHeader}>Your Pokémon Collection</h2>

            {collectionPokemon.length === 0 ? (
                <div style={styles.emptyCollection}>
                    <p>Your collection is empty. Search for Pokémon and add them to your collection!</p>
                </div>
            ) : (
                <div style={styles.grid}>
                    {collectionPokemon.map((poke) => (
                        <div key={poke.id} style={styles.card}>
                            <div style={styles.cardHeader}>
                                <h3 style={styles.cardTitle}>{poke.name.toUpperCase()}</h3>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFromCollection(poke.id);
                                    }}
                                    style={styles.removeCardButton}
                                >
                                    ×
                                </button>
                            </div>
                            <div
                                style={styles.cardBody}
                                onClick={() => {
                                    setSearch(poke.name);
                                    setPokemon(poke);
                                }}
                            >
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
        </>
    );
}

export default PokemonCollection;