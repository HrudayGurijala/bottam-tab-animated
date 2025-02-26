import { StyleSheet, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { icon } from '@/constant/icon'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'



const TabBarButton = ({
    onPress,
    onLongPress,
    routeName,
    label,
    isFocused
}: {
    onPress: Function,
    onLongPress: Function,
    routeName: string,
    label: any,
    isFocused: boolean
}) => {

    const scale = useSharedValue(0);
    useEffect(() => {
        scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused,
            { duration: 350 }
        );

    }, [scale, isFocused])

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaledValue = interpolate(scale.value, [0, 1], [1, 1.2]);
        const top = interpolate(scale.value,[0, 1], [0, 9])
        return{ 
            transform:[{scale: scaledValue}],
            top : top
        }
    });

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]);
        return {
            opacity
        }
    });

    return (
        <Pressable
            key={routeName}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
        >
            <Animated.View style={animatedIconStyle}>
                {icon[routeName]({
                    color: isFocused ? '#fff' : '#222'
                })}
            </Animated.View>
            <Animated.Text style={[{ color: isFocused ? '#673ab7' : '#222' }, animatedTextStyle]}>
                {label}
            </Animated.Text>
        </Pressable>
    )
}

export default TabBarButton

const styles = StyleSheet.create({
    tabBarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    }
})