import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, View, Text } from "react-native"
import Title from "../../components/Title"
import styles from "./styles"
import Categories from "../../components/Categories"
import AttractionCard from "../../components/AttractionCard"
import jsonData from "../../data/attractions.json";
import categories from "../../data/categories.json"

const All = "All";

const HomeScreen = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(jsonData)
    }, [])

    useEffect(() => {
        if (selectedCategory === All) {
            setData(jsonData)
        } else {
            const filteredData = jsonData?.filter((item) => item?.categories.includes(selectedCategory))

            setData(filteredData)
        }
    }, [selectedCategory])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={2}
                style={{ flexGrow: 1 }}
                ListEmptyComponent={(<Text style={styles.emptyText}>No Categories Found</Text>)}
                ListHeaderComponent={(
                    <>
                        <View style={{ margin: 32 }}>
                            <Title text="Where do" style={{ fontWeight: "normal" }} />
                            <Title text="you want to go?" />

                            <Title text="Explore Attractions" style={styles.subtitle} />
                        </View>

                        <Categories
                            selectedCategory={selectedCategory}
                            categories={[All, ...categories]}
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

export default React.memo(HomeScreen)