import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Keyboard,
    TouchableWithoutFeedback,
    Image,
} from "react-native";

function Login({ navigation }) {
    return <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
            style={{
                flex: 1,
                flexDirection: "column"
            }}
        >
            <View style={{ flex: 0.04, }} />
            <View style={{ flex: 0.05, flexDirection: 'row', }}>
                <TouchableOpacity
                    style={{
                        flex: 0.15,
                    }}
                    onPress={() => navigation.goBack()}>
                    <Image
                        style={{
                            resizeMode: 'center',
                            height: 50,
                            width: 50,
                            alignSelf: 'flex-end',
                        }}
                        source={require('../assets/back.png')}
                    />
                </TouchableOpacity>
                <View style={{
                    flex: 0.85,
                }} ></View>
            </View>
            <View
                style={{
                    flex: 0.07,
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={styles.text1}
                >
                    電話番号の入力
                </Text>
            </View>
            <View
                style={{
                    flex: 0.06,
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={styles.text2}
                >
                    まず、携帯番号を入力してください。{'\n'}入力した電話番号に認証コードを通知します。
                </Text>
            </View>
            <View
                style={{
                    flex: 0.08,
                    justifyContent: 'flex-end',
                }}
            >
                <Text
                    style={styles.text2}
                >
                    携帯電話番号
                </Text>
            </View>
            <View
                style={{
                    flex: 0.1,
                    justifyContent: "center",
                }}
            >
                <TextInput
                    placeholder="ハイフンなし"
                    style={styles.text2}
                    keyboardType="number-pad"
                />
                <View
                    style={{
                        flex: 0.02,
                        backgroundColor: 'red',
                        marginLeft: Dimensions.get("screen").width * 0.03,
                        marginRight: Dimensions.get("screen").width * 0.03,
                    }}
                />
            </View>
            <View style={{ flex: 0.5, }} />
            <View style={{ flex: 0.1, }}>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "red",
                        margin: 10,
                        padding: 17,
                        borderRadius: 30,
                    }}
                    onPress={null}
                >
                    <Text
                        style={styles.text3}
                    >
                        次へ
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableWithoutFeedback >
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    text1: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "left",
        paddingLeft: 15,
    },
    text2: {
        color: "black",
        fontSize: 15,
        fontWeight: "normal",
        textAlign: "left",
        paddingLeft: 15,
    },
    text3: {
        color: "white",
        fontSize: 15,
        fontWeight: "normal",
    },
})

export default Login