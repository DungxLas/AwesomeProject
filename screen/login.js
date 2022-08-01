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
        style={styles.container}
    >
        <ImageBackground
            source={require('../assets/welcome.png')}
            style={styles.imageBG}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: "column"
                }}
            >
                <View style={{ flex: 0.05 }} ></View>
                <View
                    style={{
                        flex: 0.12,
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ flex: 0.35 }} >
                        <Image
                            source={require('../assets/totem.png')}
                            style={{
                                resizeMode: 'contain',
                                alignSelf: 'flex-end',
                                width: Dimensions.get('screen').width * 0.28,
                                height: Dimensions.get('screen').width * 0.28,
                            }}
                        ></Image>
                    </View>
                    <View style={{ flex: 0.65 }} >
                        <Text
                            style={styles.text1}
                        >
                            amor pet
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 0.03,
                    }}
                >
                    <Text
                        style={styles.text2}
                    >
                        これまでにない出会いを
                    </Text>
                </View>
                <View style={{ flex: 0.1 }}></View>
                <View style={{ backgroundColor: 'blue', flex: 0.1 }} >
                    <TouchableOpacity
                        style={styles.button1}
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
                <View style={{ backgroundColor: 'blue', flex: 0.1 }} >
                    <TouchableOpacity
                        style={styles.button1}
                        onPress={null}
                    >
                        <Text
                            style={styles.text2}
                        >
                            新規登録の方はこちら
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: 'red', flex: 0.1 }} >
                    <Text
                        style={styles.text2}
                    >
                        アカウントを作成すると, 利用規約, に同意することになります
                    </Text>
                </View>
                <View style={{ backgroundColor: 'blue', flex: 0.3 }} >
                    <TouchableOpacity
                        style={styles.button1}
                        onPress={null}
                    >
                        <Text
                            style={styles.text2}
                        >
                            アカウント引き継ぎの方はこちら
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },
    text2: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    button1: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
})

export default WelcomeScreen