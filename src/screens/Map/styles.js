import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
    backContainer: {
        color: "#fff",
        position: "absolute",
        top: 40,
        left: 20,
        flexDirection: "row"
    },
    backImage: {
        width: 32,
        height: 32,
        marginRight: 50
    },
    backText: {
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.7)",
        padding: 10,
        fontWeight: "bold",
    }
});

export default styles;