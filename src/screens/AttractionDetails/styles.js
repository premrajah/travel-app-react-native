import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        margin: 32
    },
    mainImage: {
        width: '100%',
        height: height / 2,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    icon: {
        width: 26,
        height: 25,
        margin: 16
    },
    minImages: {
        width: 40,
        height: 40,
        margin: 8,
        borderRadius: 10
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(256, 256, 256, 0.35)",
        borderRadius: 15,
        margin: 16,
        paddingHorizontal: 8
    }
});

export default styles;