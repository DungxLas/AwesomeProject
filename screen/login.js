import React from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
} from "react-native";

const WelcomeScreen = () => {
    return <View
        style={{
            flex: 1,
            flexDirection: "column"
        }}
    >
        <View
            style={{
                flex: 0.3,
                flexDirection: "column",
                backgroundColor: 'rgba(225,225,225,255)',
            }}
        >
            <View style={{
                flex: 0.15,
            }} ></View>
            <View
                style={{
                    flex: 0.45,
                    flexDirection: 'row',
                }}
            >
                <Image
                    source={require('../assets/totem.png')}
                    style={{
                        flex: 0.37,
                        resizeMode: 'contain',
                        alignSelf: 'flex-end',
                        width: Dimensions.get('screen').width * 0.25,
                        height: Dimensions.get('screen').width * 0.25,
                    }}
                ></Image>
                <View style={{ flex: 0.63 }} >
                    <Text
                        style={styles.text1}
                    >
                        amor pet
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flex: 0.4,
                }}
            >
                <Text
                    style={styles.text3}
                >
                    これまでにない出会いを
                </Text>
            </View>
        </View>
        <ImageBackground
            source={require('../assets/welcome.png')}
            style={{
                flex: 0.7,
                justifyContent: "center",
                resizeMode: 'stretch',
                flexDirection: 'column'
            }}
        >
            <View style={{ flex: 0.15 }} >
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "rgba(41,40,59,255)",
                        margin: 16,
                        padding: 17,
                        borderRadius: 20,
                    }}
                    onPress={null}
                >
                    <Text
                        style={styles.text2}
                    >
                        ログイン
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'red', flex: 0.1 }} ></View>
            <View style={{ flex: 0.15 }} >
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "rgba(236,57,57,255)",
                        margin: 16,
                        padding: 17,
                        borderRadius: 20,
                    }}
                    onPress={null}
                >
                    <Text
                        style={styles.text2}
                    >
                        新規登録の方はこちら
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'red', flex: 0.15 }} >
                {/* <Text
                    style={styles.text2}
                >
                    アカウントを作成すると, 利用規約, に同意することになります
                </Text> */}
            </View>
            <View style={{ backgroundColor: 'blue', flex: 0.15 }} >
                {/* <TouchableOpacity
                    style={styles.button1}
                    onPress={null}
                >
                    <Text
                        style={styles.text2}
                    >
                        アカウント引き継ぎの方はこちら
                    </Text>
                </TouchableOpacity> */}
            </View>
            <View style={{ backgroundColor: 'red', flex: 0.3 }} ></View>
        </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBG: {
        flex: 1,
        justifyContent: "center",
        resizeMode: 'contain',
    },
    text1: {
        color: "black",
        fontSize: 55,
        lineHeight: 100,
        fontWeight: "bold",
        textAlign: "left",
        alignItems: 'flex-end'
    },
    text2: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    text3: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    button1: {
        alignItems: "center",
        backgroundColor: "rgba(41,40,59,255)",
        padding: 10,

    },
})

export default WelcomeScreen