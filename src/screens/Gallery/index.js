import React from 'react'
import { SafeAreaView, Text } from "react-native"
import styles from "./styles"


const GalleryScreen = ({ route }) => {
    const { images } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello Gallery</Text>
        </SafeAreaView>
    )
}

export default React.memo(GalleryScreen)