import { View, Text, StyleSheet, StatusBar, SafeAreaView, FlatList, TouchableOpacity, Animated, Button } from 'react-native'
import React,{useState, useEffect, useRef} from 'react'
import data from '../utils/fakeData.json'
import { Fab, WarningTwoIcon } from 'native-base';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <Animated.View>
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title} {item.id}</Text>
    </TouchableOpacity>
  </Animated.View>
);

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);
  const flatRef = useRef(null);

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], { useNativeDriver: true });

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "gray" : "lightgray";
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        style={styles.item}
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  const foonction = () => {
    flatRef.current.scrollToIndex({animated: true, index: 200});
  }


  return (
    <SafeAreaView style={styles.container}>
      <Button title="scroll to end" onPress={()=> foonction()}/>
      <AnimatedFlatList
        contentContainerStyle={styles.flatContainer}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => <Text style={styles.footerText}>No Data</Text>}
        ListFooterComponent={() => <Text style={styles.footerText}>End of Data</Text>}
        ListFooterComponentStyle={styles.footer}
        ListHeaderComponent={() => <Text style={styles.headerText}>Start of Data</Text>}
        onEndReached={() => alert('end reached')}
        oneEndReachedThreshold={0.7}
        removeClippedSubviews
        flashScrollIndicators
        getItemLayout={(data, index) => ({length: 91, offset: 91 * index, index})}
        ref={flatRef}
        scrollEventThrottle={16} 
        {...{ onScroll }}
      /> 
      <Fab position="absolute" size="sm" icon={<WarningTwoIcon/>} onPress={()=> flatRef.current.scrollToOffset({animated: true, offset: 0})}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    width: '90%',
  },
  title: {
    fontSize: 16,
    color: 'black'
  },
  separator: {
    backgroundColor: '#e2e2e2',
    height: 1,
    width:'80%',
    alignSelf: 'center',
  },
  footer:{
    alignSelf: 'center',
     fontSize: 20,
     color: 'white',
     backgroundColor: 'black',
     width: '100%',
  },
  footerText:{
    alignSelf: 'center', 
    fontSize: 20,
    color: 'white',
  },
  headerText:{
    alignSelf: 'center', 
    fontSize: 20,
    color: 'black',
  },
  item: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: '100%',
    marginVertical: 5,
    borderRadius: 8,
  }
});
