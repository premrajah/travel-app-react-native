import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, View } from "react-native"
import Title from "../../components/Title"
import styles from "./styles"
import Categories from "../../components/Categories"
import AttractionCard from "../../components/AttractionCard"
import jsonData from "../../data/attractions.json";

const HomeScreen = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(jsonData)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={2}
                style={{ flexGrow: 1 }}
                ListHeaderComponent={(
                    <>
                        <View style={{ margin: 32 }}>
                            <Title text="Where do" style={{ fontWeight: "normal" }} />
                            <Title text="you want to go?" />

                            <Title text="Explore Attractions" style={styles.subtitle} />
                        </View>

                        <Categories
                            selectedCategory={selectedCategory}
                            categories={["All", "Popular", "Historical", "Tourist", "Low Cost", "Exclusive", "Random"]}
                            onCategoryPress={setSelectedCategory} />
                    </>
                )}
                keyExtractor={(item) => String(item?.id)}
                renderItem={({ item, index }) => (
                    < AttractionCard
                        style={(index % 2 === 0) ? { marginRight: 20 } : {}}
                        imageSrc={item.images?.length ? item.images[0] : null}
                        title={item.name}
                        subtitle={item.city} />
                )}
            />
        </SafeAreaView>
    )
}

export default HomeScreen