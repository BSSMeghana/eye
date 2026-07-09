import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import BackChevron from '../components/BackChevron';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles, { DOT_SIZE } from './styles/FollowDotStyles';

const FollowDot: React.FC = () => {
  const router = useRouter();
  const {
    height,
    isCompact,
    isLargePhone,
    isTiny,
    screenPadding,
    width,
  } = useResponsiveLayout();
  const [started, setStarted] = useState(false);
  const navigationClearance = isTiny ? 98 : 106;
  const controlClearance = navigationClearance + (isCompact ? 72 : 82);

  // Keep a ref to latest 'started' state for animation loop
  const startedRef = useRef(started);
  useEffect(() => {
    startedRef.current = started;
  }, [started]);

  const animatedX = useRef(new Animated.Value(0)).current;
  const animatedY = useRef(new Animated.Value(0)).current;
  const animationTimeout = useRef<number | null>(null);
  const getRandomPosition = () => {
    const topLimit = isTiny ? 64 : 72;
    const maxX = Math.max(screenPadding, width - DOT_SIZE - screenPadding);
    const maxY = Math.max(topLimit, height - DOT_SIZE - controlClearance);

    const x = Math.random() * (maxX - screenPadding) + screenPadding;
    const y = Math.random() * (maxY - topLimit) + topLimit;

    return { x, y };
  };

  const animateToRandomPosition = () => {
    const { x, y } = getRandomPosition();

    Animated.parallel([
      Animated.timing(animatedX, {
        toValue: x,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedY, {
        toValue: y,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      animationTimeout.current = setTimeout(() => {
        if (startedRef.current) animateToRandomPosition();
      }, 300);
    });
  };

  const startAnimation = () => {
    setStarted(true);
    const { x, y } = getRandomPosition();
    animatedX.setValue(x);
    animatedY.setValue(y);
    animateToRandomPosition();
  };

  const stopAnimation = () => {
    setStarted(false);
    if (animationTimeout.current !== null) {
      clearTimeout(animationTimeout.current);
    }
  };

  useEffect(() => {
    return () => {
      if (animationTimeout.current !== null) clearTimeout(animationTimeout.current);
    };
  }, []);

  return (
    <View style={styles.container}>
      <BackChevron
        onPress={() => router.back()}
        style={{ left: screenPadding, position: 'absolute', top: isTiny ? 10 : 16 }}
      />
      {!started && (
        <Text
          style={[
            styles.instruction,
            isCompact && styles.instructionCompact,
            isLargePhone && styles.instructionLarge,
            { left: screenPadding + 50, right: screenPadding + 50, top: isTiny ? 18 : 24 },
          ]}
        >
          Follow the moving dot with your eyes
        </Text>
      )}

      <Animated.View
        style={[
          styles.dot,
          {
            left: animatedX,
            top: animatedY,
            opacity: started ? 1 : 0,
          },
        ]}
      />

      <TouchableOpacity
        style={[
          styles.controlButton,
          isCompact && styles.controlButtonCompact,
          isLargePhone && styles.controlButtonLarge,
          { bottom: navigationClearance },
        ]}
        onPress={started ? stopAnimation : startAnimation}
        activeOpacity={0.78}
        accessibilityRole="button"
        accessibilityLabel={started ? 'Stop moving dot' : 'Start moving dot'}
      >
        <Text
          style={[
            styles.controlButtonText,
            isCompact && styles.controlButtonTextCompact,
            isLargePhone && styles.controlButtonTextLarge,
          ]}
        >
          {started ? 'Stop' : 'Start'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FollowDot;
