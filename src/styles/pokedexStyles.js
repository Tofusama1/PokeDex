// Styles for the Pokedex application

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "white",
        backgroundColor: "#1e1e1e",
        width: "100vw", // Full viewport width
        minHeight: "100vh", // Full viewport height
        boxSizing: "border-box",
        overflowX: "hidden", // Prevent horizontal scrolling
    },
    title: {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "#FF5350",
        marginBottom: "20px",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    },
    searchContainer: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "30px",
        flexWrap: "wrap",
        gap: "10px",
    },
    input: {
        padding: "12px 16px",
        fontSize: "16px",
        width: "60%", // Percentage-based width
        maxWidth: "600px",
        borderRadius: "4px",
        border: "1px solid #444",
        backgroundColor: "#333",
        color: "white",
        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)",
    },
    button: {
        padding: "12px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "#3498db",
        color: "white",
        border: "none",
        borderRadius: "4px",
        transition: "background-color 0.3s",
        fontWeight: "bold",
        minWidth: "120px",
    },
    error: {
        backgroundColor: "rgba(231, 76, 60, 0.2)",
        color: "#e74c3c",
        padding: "12px",
        borderRadius: "5px",
        marginBottom: "20px",
        border: "1px solid rgba(231, 76, 60, 0.5)",
        maxWidth: "100%", // Ensure error fits within container
    },
    sectionHeader: {
        fontSize: "1.8rem",
        textAlign: "left",
        color: "#3498db",
        marginTop: "30px",
        marginBottom: "20px",
        paddingBottom: "8px",
        borderBottom: "2px solid #333",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Dynamic grid columns
        gap: "20px",
        marginBottom: "40px",
        width: "100%", // Full width
    },
    detailCard: {
        backgroundColor: "#2d2d2d",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        marginBottom: "40px",
        width: "100%", // Full width
    },
    detailHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#333",
        padding: "16px 24px",
        borderBottom: "2px solid #444",
    },
    detailTitle: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        color: "white",
        margin: 0,
    },
    pokemonId: {
        fontSize: "1.4rem",
        color: "#888",
        margin: 0,
    },
    detailContent: {
        display: "flex",
        flexWrap: "wrap", // Allow wrapping for different screen sizes
        gap: "20px",
        padding: "20px",
    },
    imageContainer: {
        flex: "1 1 250px", // Flexible basis with minimum size
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Center vertically
        padding: "20px",
        backgroundColor: "#333",
        borderRadius: "8px",
        minHeight: "250px", // Minimum height
    },
    detailImage: {
        maxWidth: "100%",
        maxHeight: "300px",
    },
    infoContainer: {
        flex: "2 1 400px", // Flexible basis with minimum size
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "20px",
        backgroundColor: "#333",
        borderRadius: "8px",
    },
    typeContainer: {
        marginBottom: "10px",
    },
    sectionTitle: {
        fontSize: "1.2rem",
        color: "#3498db",
        marginBottom: "12px",
    },
    typesList: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
    },
    typeTag: {
        padding: "6px 12px",
        borderRadius: "16px",
        color: "white",
        fontWeight: "bold",
        textTransform: "capitalize",
    },
    typeTagSmall: {
        padding: "3px 8px",
        borderRadius: "12px",
        color: "white",
        fontWeight: "bold",
        fontSize: "12px",
        textTransform: "capitalize",
    },
    abilitiesList: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
    },
    abilityTag: {
        backgroundColor: "#444",
        padding: "6px 12px",
        borderRadius: "16px",
        color: "white",
        textTransform: "capitalize",
    },
    statsList: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    statItem: {
        display: "flex",
        flexDirection: "column",
        gap: "4px",
    },
    statNameValue: {
        display: "flex",
        justifyContent: "space-between",
    },
    statName: {
        color: "#ccc",
        textTransform: "capitalize",
    },
    statValue: {
        color: "white",
        fontWeight: "bold",
    },
    statBar: {
        backgroundColor: "#444",
        height: "10px",
        borderRadius: "5px",
        overflow: "hidden",
    },
    statFill: {
        height: "100%",
        transition: "width 0.5s ease-out",
    },
    actionContainer: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "flex-end",
    },
    addButton: {
        backgroundColor: "#2ecc71",
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background-color 0.2s",
    },
    removeButton: {
        backgroundColor: "#e74c3c",
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background-color 0.2s",
    },
    card: {
        backgroundColor: "#2d2d2d",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
        transition: "transform 0.2s, box-shadow 0.3s",
        height: "100%", // Full height
        display: "flex",
        flexDirection: "column",
    },
    cardHeader: {
        backgroundColor: "#333",
        padding: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #444",
    },
    cardTitle: {
        margin: 0,
        fontSize: "1rem",
        fontWeight: "bold",
        color: "white",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        flex: 1,
    },
    cardBody: {
        cursor: "pointer",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1, // Take up available space
    },
    cardImage: {
        width: "120px",
        height: "120px",
    },
    cardInfo: {
        width: "100%",
        textAlign: "center",
    },
    cardText: {
        color: "#888",
        margin: "8px 0",
    },
    cardTypes: {
        display: "flex",
        gap: "6px",
        justifyContent: "center",
        marginTop: "8px",
        flexWrap: "wrap",
    },
    removeCardButton: {
        backgroundColor: "#e74c3c",
        color: "white",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        padding: 0,
    },
    addCardButton: {
        backgroundColor: "#2ecc71",
        color: "white",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        padding: 0,
    },
    emptyCollection: {
        backgroundColor: "#333",
        padding: "30px",
        borderRadius: "8px",
        marginBottom: "40px",
        width: "100%", // Full width
    },
    suggestionsSection: {
        marginTop: "30px",
        width: "100%", // Full width
    },
    suggestionHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
    },
    refreshButton: {
        backgroundColor: "#7f8c8d",
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    loadingContainer: {
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    loadingSpinner: {
        width: "40px",
        height: "40px",
        border: "4px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "50%",
        borderTopColor: "#3498db",
        animation: "spin 1s linear infinite"
    },
// Any other style objects would go here
};

export default styles;