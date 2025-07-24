import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Test = () => {
  const navigation = useNavigation()
  return <View>
    <FlatList
      data={Array.from({ length: 100 })}
      keyExtractor={(item, index) => index.toString()}
      refreshing={false}
      onRefresh={()=> {}}
      renderItem={()=> {
        return <View style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Text>暂无数据</Text>
        </View>
      }} />

  </View>
}

export default Test;



// import React, { useState } from 'react';
// import { FlatList, Text, View, ActivityIndicator, StyleSheet } from 'react-native';
//
// const Test = () => {
//   const [refreshing, setRefreshing] = useState(false);
//
//   const onRefresh = () => {
//     if (refreshing) return;
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 1000);
//   };
//
//   return (
//     <View style={{ flex: 1 }}>
//       {/* 自定义刷新头部 */}
//       <View style={styles.refreshHeader}>
//         {refreshing && <ActivityIndicator size="small" color="#000" />}
//         {!refreshing && <Text>下拉刷新</Text>}
//       </View>
//
//       <FlatList
//         data={Array.from({ length: 100 })}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={() => <View style={{ width: '100vw', height: 40, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>暂无数据</Text>
//         </View>}
//         onScroll={(e) => {
//           const offsetY = e.nativeEvent.contentOffset.y;
//           console.log('offsetY', offsetY)
//           if (offsetY <= 0 && !refreshing) {
//             onRefresh();
//           }
//         }}
//       />
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   refreshHeader: {
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
// });
//
// export default Test;