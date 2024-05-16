import { Text } from "react-native"
import styles from "./styles";

const Title = ({ text = "Lorem Ipsum", style }) => {
    return (
        <Text style={[styles.title, style]}>{text}</Text>
    )
}


export default Title;