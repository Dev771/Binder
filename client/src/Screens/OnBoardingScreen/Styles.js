import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    OnBoarding: {
        flex: 1
    },
    Image: {
        borderWidth: 1,
        marginBottom: 30
    },
    OnBoardingBackgroundGradient: {
        flex: 1,
        padding: 40,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    ButtonGroup: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10, 
        marginVertical: 20,
        width: "100%"
    },
    SignInButton: {
        borderWidth: 2,
        borderColor: '#fff',
        paddingHorizontal: 'auto',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 20,
    }
})

export default styles;