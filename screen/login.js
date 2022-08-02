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
                flex: 0.2,
                flexDirection: "column",
                backgroundColor: 'rgba(228,233,240,255)',
            }}
        >
            <View style={{ flex: 0.35 }} />
            <View
                style={{
                    flex: 0.5,
                    flexDirection: 'row',
                }}
            >
                <Image
                    source={require('../assets/totem.png')}
                    style={{
                        flex: 0.37,
                        resizeMode: 'center',
                        width: Dimensions.get('screen').width * 0.25,
                        height: Dimensions.get('screen').width * 0.25,
                    }}
                ></Image>
                <View style={{
                    flex: 0.63,
                }} >
                    <Text
                        style={{
                            color: "black",
                            fontSize: 55,
                            fontWeight: "bold",
                        }}
                    >
                        amor pet
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flex: 0.15,
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
                flex: 0.8,
                resizeMode: 'contain',
                flexDirection: 'column'
            }}
        >
            <View style={{ flex: 0.15 }} ></View>
            <View style={{
                flex: 0.15,
                justifyContent: 'flex-end',
            }} >
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "rgba(41,40,59,255)",
                        margin: 16,
                        padding: 17,
                        borderRadius: 30,
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
            <View style={{ flex: 0.1, flexDirection: 'row' }} >
                <View style={{
                    flex: 0.45,
                    height: 1,
                    width: 1,
                    margin: 15,
                    backgroundColor: 'black',
                    alignSelf: 'center',
                }} />
                <View style={{ flex: 0.1, justifyContent: 'center' }} >
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: 'center',
                        }}
                    > or </Text>
                </View>
                <View style={{
                    flex: 0.45,
                    height: 1,
                    width: 1,
                    margin: 15,
                    backgroundColor: 'black',
                    alignSelf: 'center',
                }} />
            </View>
            <View style={{
                flex: 0.15,
                justifyContent: 'flex-start',
            }} >
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "rgba(236,57,57,255)",
                        margin: 16,
                        padding: 17,
                        borderRadius: 30,
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
            <View
                style={{
                    flex: 0.1,
                    justifyContent: 'flex-start',
                }} >
                <Text
                    style={styles.text2}
                >
                    アカウントを作成すると,
                </Text>
                <Text
                    style={styles.text2}
                >
                    利用規約, に同意することになります
                </Text>
            </View>
            <View style={{ flex: 0.15 }} >
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        margin: 16,
                        padding: 17,
                        borderRadius: 30,
                        borderColor: 'white',
                        borderWidth: 1,
                    }}
                    onPress={null}
                >
                    <Text
                        style={styles.text2}
                    >
                        アカウント引き継ぎの方はこちら
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.2 }} ></View>
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
})

export default WelcomeScreen