import React from 'react'
import { SafeAreaView, Text } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native";


const AttractionDetailsScreen = ({ route }) => {
    const { item } = route?.params || {};
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text onPress={() => navigation.goBack()} style={{ margin: 34 }}>BACK</Text>
            <Text>{item.name}</Text>
        </SafeAreaView>
    )
}

export default React.memo(AttractionDetailsScreen)