import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Text, TouchableOpacity, Dimensions } from 'react-native';

const DOT_SIZE = 40;
const { width, height } = Dimensions.get('window');

const getRandomPosition = () => {
  const paddingTop = 100;      // space for instruction text or status
  const paddingBottom = 150;   // space for button at bottom

  const x = Math.random() * (width - DOT_SIZE);
  const y = Math.random() * (height - DOT_SIZE - paddingTop - paddingBottom) + paddingTop;

  return { x, y };
};

const FollowDot: React.FC = () => {
  const [started, setStarted] = useState(false);

  // Keep a ref to latest 'started' state for animation loop
  const startedRef = useRef(started);
  useEffect(() => {
    startedRef.current = started;
  }, [started]);

  const animatedX = useRef(new Animated.Value(0)).current;
  const animatedY = useRef(new Animated.Value(0)).current;
  const animationTimeout = useRef<number | null>(null);

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
      {!started && (
        <Text style={styles.instruction}>Follow the moving dot with your eyes</Text>
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
        style={styles.controlButton}
        onPress={started ? stopAnimation : startAnimation}
      >
        <Text style={styles.controlButtonText}>{started ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FollowDot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instruction: {
    position: 'absolute',
    top: 80,
    fontSize: 20,
    color: '#064578',
    fontWeight: '600',
  },
  dot: {
    position: 'absolute',
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: '#4CAF50',
  },
  controlButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#4fa9f6',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  controlButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
