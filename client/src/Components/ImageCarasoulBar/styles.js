import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ImageCarasoulBar: {
        height: 10,
        width: "95%",
        position: 'absolute',
        zIndex: 999,
        backgroundColor: 'transparent',
        top: 0,
        flexDirection: 'row',
        gap: 3,
        padding: 2
    },
    ImageTab: {
        backgroundColor: 'rgba(255,255,255, .5)',
        flexGrow: 1,
        borderRadius: 20,
    },
    active: {
        backgroundColor: 'white'
    }
});

export default styles;