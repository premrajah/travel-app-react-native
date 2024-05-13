import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 32
    },
    subtitle: {
        fontSize: 20,
        color: "#000000",
        marginTop: 30,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    emptyText: {
        textAlign: "center",
        fontSize: 12,
        marginTop: 24,
        color: "rgba(0,0,0,0.5)"
    }
});

export default styles;