import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import React, { useEffect } from 'react';
import { ImageSourcePropType, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { colors, spacing } from '../constants/theme';
import { useVoice } from '../context/VoiceProvider';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import Post from './Post';
import ThreeDot from './ThreeDot';
import indexStyles from './indexStyles';

interface EyeCarePost {
  title: string;
  date: string;
  category: string;
  summary: string;
  image: ImageSourcePropType;
}

interface HomeHeaderProps {
  isCompact: boolean;
  isLargePhone: boolean;
  isTiny: boolean;
  onToggleVoice: () => void;
  voiceEnabled: boolean;
}

interface PostsSectionProps {
  isCompact: boolean;
  isLargePhone: boolean;
  isTiny: boolean;
  posts: EyeCarePost[];
}

const EYE_CARE_POSTS: EyeCarePost[] = [
  {
    title: "AP Starts AI Pilot for Diabetic Eye Screening",
    date: "June 10, 2026",
    category: "India",
    summary:
      "Andhra Pradesh has launched an AI-based pilot at Government General Hospitals to improve diabetic retinopathy screening and support faster referrals.",
    image: require('../assets/images/DR.png'),
  },
  {
    title: "AI Model Links Glaucoma Screening to Follow-Up",
    date: "January 26, 2026",
    category: "Research",
    summary:
      "Fair-Eye Net combines fundus photos, OCT, visual field data, and patient factors to support glaucoma screening, progression checks, and risk alerts.",
    image: require('../assets/images/glaucoma.png'),
  },
  {
    title: "3D OCT AI Shows Progress for Retinal Diagnosis",
    date: "February 3, 2026",
    category: "Technology",
    summary:
      "A foundation-model OCT workflow called FOCUS showed strong performance for image quality checks, abnormality detection, and multi-disease retinal diagnosis.",
    image: require('../assets/images/img1.png'),
  },
  {
    title: "Glaucoma Cases Expected to Rise Sharply",
    date: "January 20, 2026",
    category: "Public Health",
    summary:
      "New estimates warn glaucoma demand will grow as populations age, highlighting the need for routine eye checks and stronger diagnostic capacity.",
    image: require('../assets/images/glaucoma.png'),
  },
  {
    title: "Eye Videos May Help Screen for Anemia",
    date: "May 26, 2026",
    category: "Innovation",
    summary:
      "Researchers reported a noninvasive approach that films blood vessels in the eye and uses AI to flag possible anemia without a needle test.",
    image: require('../assets/images/eyeand.png'),
  },
  {
    title: "Bayer Expands Eye-Drug Pipeline",
    date: "May 6, 2026",
    category: "Treatment",
    summary:
      "Bayer agreed to acquire Perfuse Therapeutics, whose lead candidate targets glaucoma and diabetic retinopathy in mid-stage trials.",
    image: require('../assets/images/cataract.png'),
  },
  {
    title: "Mobile AI Screening Targets Five Eye Diseases",
    date: "July 16, 2025",
    category: "AI Screening",
    summary:
      "The InSight mobile screening pipeline combines retinal images and patient metadata to detect common eye diseases across smartphone and lab-captured images.",
    image: require('../assets/images/img2.jpg'),
  },
  {
    title: "AIIMS Diabetic Retinopathy App Moves Toward Scale",
    date: "November 17, 2025",
    category: "India",
    summary:
      "AIIMS and partners developed MadhuNETrAI, an AI screening app designed to flag diabetic retinopathy at primary and district health centers.",
    image: require('../assets/images/DR.png'),
  },
];

function HomeHeader({ isCompact, isLargePhone, isTiny, onToggleVoice, voiceEnabled }: HomeHeaderProps) {
  return (
    <View style={[indexStyles.header, isTiny && indexStyles.headerCompact]}>
      <View style={indexStyles.headerSide} />

      <View style={indexStyles.headerTitleWrap}>
        <Text
          style={[
            indexStyles.title,
            isCompact && indexStyles.titleCompact,
            isLargePhone && indexStyles.titleLarge,
          ]}
        >
          DRUSHTI
        </Text>
      </View>

      <View style={indexStyles.headerActions}>
        <TouchableOpacity
          onPress={onToggleVoice}
          style={indexStyles.headerIconButton}
          accessibilityLabel={voiceEnabled ? "Turn off voice" : "Turn on voice"}
          hitSlop={8}
        >
          <Ionicons
            name={voiceEnabled ? "volume-high" : "volume-mute"}
            size={isTiny ? 24 : 28}
            color={colors.primary}
          />
        </TouchableOpacity>

        <ThreeDot />
      </View>
    </View>
  );
}

function PostsSection({ isCompact, isLargePhone, isTiny, posts }: PostsSectionProps) {
  return (
    <View style={[indexStyles.postsSection, isTiny && indexStyles.postsSectionCompact]}>
      <Text
        style={[
          indexStyles.sectionTitle,
          isCompact && indexStyles.sectionTitleCompact,
          isLargePhone && indexStyles.sectionTitleLarge,
        ]}
      >
        {"What's New in Eye Care"}
      </Text>

      {posts.map((post) => (
        <Post
          key={`${post.category}-${post.date}-${post.title}`}
          title={post.title}
          date={post.date}
          category={post.category}
          summary={post.summary}
          image={post.image}
        />
      ))}
    </View>
  );
}

export default function Index() {
  const { contentMaxWidth, isCompact, isLargePhone, isTiny, screenPadding } = useResponsiveLayout();

  const { voiceEnabled, toggleVoice } = useVoice();

  useEffect(() => {
    if (voiceEnabled) {
      Speech.speak("Home");
    } else {
      Speech.stop();
    }

    return () => {
      Speech.stop();
    };
  }, [voiceEnabled]);

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <ScrollView
        contentContainerStyle={[
          indexStyles.container,
          {
            alignItems: 'center',
            paddingBottom: isTiny ? 104 : 120,
            paddingHorizontal: screenPadding,
            paddingTop: isTiny ? spacing.sm : spacing.md,
          },
        ]}
      >
        <View style={{ maxWidth: contentMaxWidth, width: '100%' }}>
          <HomeHeader
            isCompact={isCompact}
            isLargePhone={isLargePhone}
            isTiny={isTiny}
            onToggleVoice={toggleVoice}
            voiceEnabled={voiceEnabled}
          />

          <PostsSection
            isCompact={isCompact}
            isLargePhone={isLargePhone}
            isTiny={isTiny}
            posts={EYE_CARE_POSTS}
          />

          <View style={indexStyles.footerContainer}>
            <Text style={indexStyles.footerText}>Hackathon 2025 | Team Drushti</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
