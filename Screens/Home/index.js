import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function Home() {

    const Logo = require('../../assets/og1.png')

 return (
   <View>
    <View style={styles.containerMenu}>
        <TouchableOpacity style={styles.menuBurger}>
            <Text style={styles.menuBurgerText}>/</Text>
            <Text style={styles.menuBurgerText}>/</Text>
            <Text style={styles.menuBurgerText}> /</Text>
        </TouchableOpacity>
    </View>
    <Image source={Logo} style={styles.logoImage}/>
   </View>
  );
}

const styles = StyleSheet.create({
    menuBurger: {
        borderRadius: 10,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#000',
        height: 50,
        width: 50,
        padding: 10
    },
    menuBurgerText: {
        position: 'relative',
        borderRadius: 5,
        backgroundColor: '#000',
        height: 4,
        width: '100%',
        marginBottom: 7
    },
    containerMenu: {
        backgroundColor: '#EA5524'
    },
    logoImage: {
        alignSelf: 'center',
        marginTop: 250
    }
})