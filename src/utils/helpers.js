/**
 * Get color based on Pokémon type
 * @param {string} type - The Pokémon type
 * @returns {string} - Hex color code for the type
 */
export function getTypeColor(type) {
    const typeColors = {
        normal: "#A8A878",
        fire: "#F08030",
        water: "#6890F0",
        electric: "#F8D030",
        grass: "#78C850",
        ice: "#98D8D8",
        fighting: "#C03028",
        poison: "#A040A0",
        ground: "#E0C068",
        flying: "#A890F0",
        psychic: "#F85888",
        bug: "#A8B820",
        rock: "#B8A038",
        ghost: "#705898",
        dragon: "#7038F8",
        dark: "#705848",
        steel: "#B8B8D0",
        fairy: "#EE99AC"
    };

    return typeColors[type] || "#A8A878"; // Default to normal type color
}

/**
 * Get color based on stat value
 * @param {number} value - The stat value (0-100)
 * @returns {string} - Hex color code for the stat bar
 */
export function getStatColor(value) {
    if (value < 30) return "#FF5959"; // Low stat
    if (value < 60) return "#FFAA5A"; // Medium stat
    return "#5AC178"; // High stat
}