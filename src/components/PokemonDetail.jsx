import React from 'react';
import {getTypeColor, getStatColor} from "../utils/helpers";
import styles from "../styles/pokedexStyles";

function PokemonDetail({pokemon, isPokemonInCollection, addToCollection, removeFromCollection}) {
    return (
        <div style={styles.detailCard}>
            <div style={styles.detailHeader}>
                <h2 style={styles.detailTitle}>{pokemon.name.toUpperCase()}</h2>
                <p style={styles.pokemonId}>#{pokemon.id.toString().padStart(3, '0')}</p>
            </div>

            <div style={styles.detailContent}>
                <div style={styles.imageContainer}>
                    <img
                        src={pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default}
                        alt={pokemon.name}
                        style={styles.detailImage}
                    />
                </div>

                <div style={styles.infoContainer}>
                    <div style={styles.typeContainer}>
                        <h3 style={styles.sectionTitle}>Type</h3>
                        <div style={styles.typesList}>
                            {pokemon.types.map(t => (
                                <span
                                    key={t.type.name}
                                    style={{...styles.typeTag, backgroundColor: getTypeColor(t.type.name)}}
                                >
                                    {t.type.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 style={styles.sectionTitle}>Abilities</h3>
                        <div style={styles.abilitiesList}>
                            {pokemon.abilities.map(a => (
                                <span key={a.ability.name} style={styles.abilityTag}>
                                    {a.ability.name.replace('-', ' ')}
                                    {a.is_hidden && " (Hidden)"}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 style={styles.sectionTitle}>Base Stats</h3>
                        <div style={styles.statsList}>
                            {pokemon.stats.map((stat) => {
                                const statValue = Math.min(100, (stat.base_stat / 150) * 100);
                                return (
                                    <div key={stat.stat.name} style={styles.statItem}>
                                        <div style={styles.statNameValue}>
                                            <span style={styles.statName}>
                                                {stat.stat.name.replace('-', ' ')}
                                            </span>
                                            <span style={styles.statValue}>{stat.base_stat}</span>
                                        </div>
                                        <div style={styles.statBar}>
                                            <div
                                                style={{
                                                    ...styles.statFill,
                                                    width: `${statValue}%`,
                                                    backgroundColor: getStatColor(statValue)
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Add/Remove Button */}
                    <div style={styles.actionContainer}>
                        {isPokemonInCollection(pokemon.id) ? (
                            <button
                                onClick={() => removeFromCollection(pokemon.id)}
                                style={styles.removeButton}
                            >
                                Remove from Collection
                            </button>
                        ) : (
                            <button
                                onClick={() => addToCollection(pokemon)}
                                style={styles.addButton}
                            >
                                Add to Collection
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetail;