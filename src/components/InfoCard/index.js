import React from 'react'
import styles from "./styles";
import { Image, Text, View } from "react-native";


const InfoCard = ({ text, icon }) => {
    return (
        <View style={styles.container}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

export default InfoCard
