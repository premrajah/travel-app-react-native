import React from 'react'
import { SafeAreaView, Text } from "react-native"
import styles from "./styles"


const GalleryScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello Attraction</Text>
        </SafeAreaView>
    )
}

export default React.memo(GalleryScreen)