import React, { useState } from 'react'
import { SafeAreaView, View, Text } from "react-native"
import Title from "../../components/Title"
import styles from "./styles"
import Categories from "../../components/Categories"

const HomeScreen = () => {

    const [selectedCategory, setSelectedCategory] = useState("All")

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Title text="Where do" style={{ fontWeight: "normal" }} />
                <Title text="you want to go?" />

                <Title text="Explore Attractions" style={styles.subtitle} />

                <Categories
                    selectedCategory={selectedCategory}
                    categories={["All", "Popular", "Historical", "Tourist", "Low Cost", "Exclusive"]}
                    onCategoryPress={setSelectedCategory} />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen