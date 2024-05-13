import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
    card: {
        marginRight: 16,
        padding: 4,
        borderWidth: 1,
        borderColor: "#e2e2e2",
        borderRadius: 15
    },
    image: {
        width: (width - 96) / 2,
        height: 100,
        borderRadius: 15
    },
    title: {
        fontSize: 12,
        fontWeight: 500,
        marginTop: 4,
        paddingLeft: 4,
    },
    row: {
        flexDirection: "row",
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 6,
    },
    subtitle: {
        fontSize: 10,
        fontWeight: 300,
        color: "rgba(0, 0, 0, 0.5)"
    },
    icon: {
        width: 10,
        height: 10,
        marginRight: 6
    }

})

export default styles;