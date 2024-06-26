import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        marginVertical: 20
    },
    backImage: {
        width: "100%",
    },
    text: {
        color: 'white'
    },
    ProfileUserName: {
        fontWeight: '500',
        fontSize: 50
    },
    ProfilleUserAge: {
        fontWeight: '300',
        fontSize: 35
    },  
    ProfileMislaniousInfo: {
        fontWeight: '400',
        fontSize: 17
    },  
    ButtonGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },
    ActionButtons: {
        borderRadius: 50,
        borderWidth: 1,
        padding: 10,
        width: 50,
        aspectRatio: 1/1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ScrollView: {
        width: '100%',
    },
    likedislikeDisplay: {
        position: 'absolute',
        top: 40,
        zIndex: 9990,
    },
    dislikeing: {
        padding: 10,
        transform: [{ rotate: '-20deg' }],
        borderColor: 'red',
        paddingHorizontal: 20,
        borderWidth: 5,
        borderRadius: 20
    },
    likeing: {
        padding: 10,
        paddingHorizontal: 20,
        transform: [{ rotate: '20deg' }],
        borderColor: 'green',
        borderWidth: 5,
        borderRadius: 20
    }
});

export default styles;