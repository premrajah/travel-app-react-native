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
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(256, 256, 256, 0.35)",
        borderRadius: 15,
        margin: 16,
        paddingHorizontal: 8
    },
    miniImage: {
        width: 40,
        height: 40,
        margin: 8,
        borderRadius: 10,
        marginVertical: 10
    },
    moreImageWrapper: {
        position: "absolute",
        top: 14,
        left: 13,
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: 4,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"

    },
    moreImages: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 20,

    },
    headerContainer: {
        marginVertical: 14
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    title: {
        color: "#000",
        fontSize: 24
    },
    city: {
        fontSize: 18,
        fontWeight: "400",
        color: "#000",
        marginTop: 5
    }

});

export default styles;