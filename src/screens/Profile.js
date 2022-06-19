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

import Header from "../reusables/Header"
import Gap from "../reusables/Gap"
import { IL_Brinjal } from '../assets/images/Images';
import { colors } from '../styles/Colors';
import { fonts } from '../styles/Fonts';

const Profile = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const onLogout = () => {
    console.log("logging out");
  }
  return (
    <SafeAreaView style={styles.screen("rgba(227,206,243,0.5)")}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <ScrollView>
          {/* header */}
          <Header onPress={() => navigation.goBack()} />
          {/* image */}
          <View style={styles.wrapperImg}>
            <View style={styles.image}>
              <Image source={IL_Brinjal} style={styles.image} />
            </View>
          </View>
          {/* content */}
          <View style={styles.content}>
            <View style={styles.rowTopContent}>
              <View style={[styles.subViews, {
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
              }]}>
                <Text style={styles.name}>Personal Details</Text>
                <Text style={{}}>Check your details</Text>
                <Gap height={6} />
                <View style={styles.lineStyle} />
                <Gap height={6} />
                <Text style={styles.name}>Your Orders</Text>
                <Text style={{}}>Check your order status</Text>
                <Gap height={6} />
                <View style={styles.lineStyle} />
                <Gap height={6} />
                <Text style={styles.name}>Your Addresses</Text>
                <Text style={{}}>Check and save your addresses for hasssel free checkout</Text>
                <Gap height={6} />
                <View style={styles.lineStyle} />
                <Gap height={6} />
                <Text style={styles.name}>Wishlist</Text>
                <Text style={{}}>Check your most loved items</Text>
              </View>

              <View style={styles.subViews}>
                <Text style={styles.name}>Refer & Earn</Text>
                <Text style={{}}>Invite friends and earn rewards</Text>
                <Gap height={6} />
                <View style={styles.lineStyle} />
                <Gap height={6} />
                <Text style={styles.name}>Help Centre</Text>
                <Text style={{}}>Get order related queries resolved</Text>
                <Gap height={6} />
                <View style={styles.lineStyle} />
                <Gap height={6} />
                <Text style={styles.name}>Coupons</Text>
                <Text style={{}}>Manage coupons for additional discounts</Text>
                <Gap height={6} />
                <View style={styles.lineStyle} />
                <Gap height={6} />
                <Text style={styles.name}>Settings</Text>
                <Text style={{}}>Manage notiication and app settings</Text>
              </View>

              <View style={styles.subViews}>
                <Text style={styles.center}>FAQS</Text>
                <Gap height={6} />
                <Text style={styles.center}>ABOUT US</Text>
                <Gap height={6} />
                <Text style={styles.center}>TERMS OF USE</Text>
                <Gap height={6} />
                <Text style={styles.center}>PRIVACY POLICY</Text>
              </View>

              <View style={[styles.subViews, { borderColor: colors.LIGHT_GREEN, borderWidth: 2 }]}>
                <Text onPress={onLogout} style={[styles.center, { color: colors.LIGHT_GREEN }]}>LOGOUT</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: bgColor => ({ flex: 1, backgroundColor: bgColor, }),
  wrapperImg: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:45
  },
  image: { height: 180, width: 180, borderRadius: 100, backgroundColor: colors.WHITE, resizeMode: "center" },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: "rgba(227,206,243,0.5)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -60,
  },
  subViews: {
    backgroundColor: colors.WHITE,padding: 20, marginBottom: 20
  },
  name: { fontWeight:"bold", fontSize: 19, },
  center: { textAlign: "center",fontSize: 19, fontFamily:fonts.SEMI_BOLD},
  lineStyle: {
    borderWidth: 0.5, borderColor: colors.LIGHT_GRAY, marginVertical: 10
  },
});
