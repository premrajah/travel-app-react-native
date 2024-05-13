import React from 'react'
import { Image, Text, View } from "react-native"
import styles from "./styles"

const AttractionCard = ({ imageSrc, title, subtitle, style }) => {
    return <View style={[styles.card, style]}>
        <Image source={{ uri: imageSrc }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
            <Image source={require("../../assets/location.png")} style={styles.icon} />
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    </View>
}

export default React.memo(AttractionCard)