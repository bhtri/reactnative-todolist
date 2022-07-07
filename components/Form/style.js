import { StyleSheet } from 'react-native';
import color from './../../contains/color';

export default styles = StyleSheet.create({
    addTask: {
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        height: 44,
        width: '85%',
        backgroundColor: color.white,
        borderWidth: 1,
        borderColor: color.primary,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: color.text,
    },
    iconWrapper: {
        width: 44,
        height: 44,
        backgroundColor: color.primary,
        borderRadius: 44,
        borderWidth: 2,
        borderColor: color.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 24,
        color: color.white,
    },
});

