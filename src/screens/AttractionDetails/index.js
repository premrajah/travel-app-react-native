import React from 'react'
import { SafeAreaView, Text } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native";


const AttractionDetailsScreen = ({ route }) => {
    const { item } = route?.params || {};
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text onPress={() => onBack()} style={{ margin: 34 }}>BACK</Text>
            <Text>{item.name}</Text>
        </SafeAreaView>
    )
}

export default React.memo(AttractionDetailsScreen)