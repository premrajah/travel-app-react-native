import React from 'react'
import { Image, Text, View } from "react-native"
import styles from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"

const AttractionCard = ({ imageSrc, title, subtitle, style, onPress }) => {
    return <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
        <Image source={{ uri: imageSrc }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
            <Image source={require("../../assets/location.png")} style={styles.icon} />
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    </TouchableOpacity>
}

export default React.memo(AttractionCard)