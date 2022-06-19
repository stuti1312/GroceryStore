import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import BoxRelatedItems from "../reusables/BoxRelatedItem"
import Button from "../reusables/Button"
import Counter from "../reusables/Counter"
import Header from "../reusables/Header"
import Gap from "../reusables/Gap"
import { IC_Love } from '../assets/Icons/Icon';
import {
  IL_Grapes_PNG,
  IL_Greentea_PNG,
  IL_Tomato_PNG,
} from '../assets/images/Images';
import { colors } from '../styles/Colors';
import { fonts } from '../styles/Fonts';

const Detail = ({ route, navigation }) => {
  const dataParams = route.params;
  const bgColor = route.params.bgColor;
  const isDarkMode = useColorScheme() === 'dark';
  const [totalItem, setTotalItem] = useState(0);

  const dataRelatedItems = [
    {
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bgColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Tometo',
      icon: IL_Tomato_PNG,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Drinks',
      icon: IL_Greentea_PNG,
      bgColor: 'rgba(187, 208, 136, 0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const onCounterChange = value => {
    setTotalItem(value);
  };

  const onBuyNow = () => {
    console.log("BUY NOW");
  }

  const onAddToCart = () => {
    console.log("ADD TO CART");
  }

  const onAddToWishlist = () => {
    console.log("ADD TO WISHLIST");
  }

  return (
    <SafeAreaView style={styles.flex1(bgColor)}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <ScrollView>
          {/* header */}
          <Header onPress={() => navigation.goBack()} />
          {/* image */}
          <View style={styles.wrapperImg}>
            <Image source={dataParams.icon} style={styles.image} />
          </View>
          {/* content */}
          <View style={styles.content}>
            {/* top content */}
            <View style={styles.wrapperTopContent}>
              <View style={styles.rowTopContent}>
                <Text style={styles.name}>{dataParams.name}</Text>
                <Counter onValueChange={onCounterChange} />
              </View>
              <Text style={styles.price}>{dataParams.price} / kg</Text>
            </View>
            {/* description */}
            <Text style={styles.desc}>{dataParams.desc}</Text>

            {/* button add to cart */}
            <Gap height={20} />
            <View style={{ flexDirection: "row", justifyContent: "space-evenly",alignItems:"center" }}>
              <Button text="Buy now" onPress={onBuyNow} bgColor="#ff2e2e" />
              <Button text="Add to cart" onPress={onAddToCart} bgColor={colors.LIGHT_GREEN} />
              <TouchableOpacity>
                <IC_Love />
              </TouchableOpacity>
            </View>

            {/* related items */}
            <View style={styles.wrapperRelatedItems}>
              <Text style={styles.titleRelatedItems}>Related Items</Text>
              {/* scrollview */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.wrapperBoxRelatedItems}>
                  {/* boxrelateditems */}
                  {dataRelatedItems.map((item, index) => {
                    return (
                      <BoxRelatedItems
                        key={index}
                        image={item.icon}
                        name={item.name}
                        price={item.price}
                        bgColor={item.bgColor}
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  flex1: bgColor => ({
    flex: 1,
    backgroundColor: bgColor,
  }),
  wrapperImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 30,
    paddingTop: 34,
    // paddingHorizontal: 20
  },
  wrapperTopContent: {
    marginBottom: 28,
    paddingHorizontal: 20,
  },
  rowTopContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: fonts.SEMI_BOLD,
    fontSize: 20,
  },
  price: {
    fontFamily: fonts.REGULAR,
    fontSize: 14,
    color: colors.BLACK,
  },
  desc: {
    paddingHorizontal: 20,
  },
  wrapperRelatedItems: {
    marginTop: 25,
  },
  titleRelatedItems: {
    fontFamily: fonts.SEMI_BOLD,
    fontSize: 18,
    color: colors.LIGHT_GREEN,
    paddingHorizontal: 20,
  },
  wrapperBoxRelatedItems: {
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 20,
  },
});
