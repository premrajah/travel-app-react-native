import { Text } from "react-native"
import styles from "./styles";

const Title = ({ text = "Default Text1", style }) => {
    return (
        <Text style={[styles.title, style]}>{text}</Text>
    )
}


export default Title;