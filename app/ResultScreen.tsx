import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles from './styles/ResultScreenStyles';

const getVisionGuidance = (score: number, maxScore: number, isNearVision: boolean) => {
  const percentage = maxScore > 0 ? score / maxScore : 0;

  if (percentage >= 0.85) {
    return {
      heading: `Your ${isNearVision ? 'near' : 'distance'} vision looks good in this screening`,
      message: isNearVision
        ? 'No obvious near-vision difficulty was detected. Keep using your current reading glasses if they feel comfortable, and continue routine eye check-ups.'
        : 'No obvious change was detected. Keep using your current glasses if they feel comfortable, and continue routine eye check-ups.',
    };
  }

  if (percentage >= 0.5) {
    return {
      heading: 'Your vision may need a recheck',
      message: isNearVision
        ? 'If reading or other close-up work looks less clear than usual, your glasses prescription may have changed. Book an eye exam before changing your lenses.'
        : 'If distant objects look less clear than usual, your glasses prescription may have changed. Book an eye exam before changing your lenses.',
    };
  }

  return {
    heading: 'Please arrange a comprehensive eye exam',
    message: isNearVision
      ? 'This result suggests reduced near clarity. An optometrist or ophthalmologist can check whether you need reading glasses or an updated prescription.'
      : 'This result suggests reduced distance clarity. An optometrist or ophthalmologist can check whether you need glasses or an updated prescription.',
  };
};

export default function ResultScreen() {
  const { maxScore, score, testType } = useLocalSearchParams();
  const { contentMaxWidth, height, isTiny, screenPadding } = useResponsiveLayout();
  const rawScore = Array.isArray(score) ? score[0] : score;
  const rawMaxScore = Array.isArray(maxScore) ? maxScore[0] : maxScore;
  const rawTestType = Array.isArray(testType) ? testType[0] : testType;
  const parsedScore = Number.parseInt(rawScore ?? '0', 10);
  const parsedMaxScore = Number.parseInt(rawMaxScore ?? '10', 10);
  const safeMaxScore = Number.isFinite(parsedMaxScore) && parsedMaxScore > 0 ? parsedMaxScore : 10;
  const safeScore = Number.isFinite(parsedScore)
    ? Math.min(safeMaxScore, Math.max(0, parsedScore))
    : 0;
  const isNearVision = rawTestType === 'near';
  const guidance = getVisionGuidance(safeScore, safeMaxScore, isNearVision);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { minHeight: height, padding: screenPadding },
      ]}
    >
      <View style={{ maxWidth: contentMaxWidth, width: '100%' }}>
        <View style={styles.card}>
          <Text style={[styles.title, isTiny && { fontSize: 20, lineHeight: 26 }]}>Test Completed</Text>
          <Text style={styles.testName}>
            {isNearVision ? 'Near Vision Test' : 'Distance Vision Test'}
          </Text>
          <Text style={styles.scoreText}>Your Score: {safeScore} / {safeMaxScore}</Text>
          <View style={styles.guidance}>
            <Text style={styles.guidanceHeading}>{guidance.heading}</Text>
            <Text style={styles.guidanceText}>{guidance.message}</Text>
          </View>
          <Text style={styles.disclaimer}>
            This is a home screening only, and the result may not be 100% accurate.
            It cannot measure lens power or tell how many diopters your prescription
            changed. For the most reliable result, we recommend a comprehensive eye
            check-up with an eye-care professional.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
