import * as Speech from 'expo-speech';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import BackChevron from '../components/BackChevron';
import { useVoice } from '../context/VoiceProvider';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles from './styles/InformationStyles';

const informationSections = [
  {
    groups: [
      {
        heading: 'Causes',
        items: ['Diabetes', 'Eye injury', 'Long-term steroid use', 'Smoking or alcohol', 'Genetics', 'UV radiation'],
      },
      {
        heading: 'Symptoms',
        items: ['Blurry vision', 'Faded colors', 'Night vision difficulty', 'Frequent prescription changes'],
      },
    ],
    introduction:
      'Cataract is a condition where the eye’s lens becomes cloudy, causing blurred or dim vision.',
    title: 'Cataract',
  },
  {
    groups: [
      {
        heading: 'How it happens',
        items: ['Vessel leakage or swelling', 'Blocked blood supply', 'Abnormal vessel growth'],
      },
      {
        heading: 'Symptoms',
        items: ['Often no early symptoms', 'Blurry vision', 'Sudden vision loss'],
      },
    ],
    introduction:
      'Caused by diabetes, it damages the retina’s blood vessels and can lead to vision loss.',
    title: 'Diabetic Retinopathy',
  },
  {
    groups: [
      {
        heading: 'Causes',
        items: ['High eye pressure', 'Blocked fluid drainage', 'Injuries or genetics', 'Diabetes or hypertension'],
      },
      {
        heading: 'Symptoms',
        items: ['No early symptoms', 'Side vision loss', 'Tunnel vision', 'Eye pain or redness'],
      },
    ],
    introduction:
      'A group of eye conditions that damage the optic nerve due to increased pressure. If untreated, it can cause blindness.',
    title: 'Glaucoma',
  },
];

export default function Information() {
  const router = useRouter();
  const {
    contentMaxWidth,
    height,
    isCompact,
    isLargePhone,
    isTiny,
    screenPadding,
  } = useResponsiveLayout();
  const { voiceEnabled } = useVoice();

  useEffect(() => {
    if (voiceEnabled) {
      Speech.speak('Information');
    } else {
      Speech.stop();
    }

    return () => {
      Speech.stop();
    };
  }, [voiceEnabled]);

  const titleStyle = [
    styles.title,
    isCompact && styles.titleCompact,
    isLargePhone && styles.titleLarge,
  ];
  const headingStyle = [
    styles.heading,
    isCompact && styles.headingCompact,
    isLargePhone && styles.headingLarge,
  ];
  const paragraphStyle = [
    styles.paragraph,
    isCompact && styles.paragraphCompact,
    isLargePhone && styles.paragraphLarge,
  ];
  const subHeadingStyle = [
    styles.subHeading,
    isCompact && styles.subHeadingCompact,
    isLargePhone && styles.subHeadingLarge,
  ];
  const bulletStyle = [
    styles.bullet,
    isCompact && styles.bulletCompact,
    isLargePhone && styles.bulletLarge,
  ];

  return (
    <View style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          {
            minHeight: height,
            paddingBottom: isTiny ? 104 : 120,
            paddingHorizontal: screenPadding,
            paddingTop: isTiny ? 18 : 28,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ maxWidth: contentMaxWidth, width: '100%' }}>
          <View style={styles.header}>
            <BackChevron onPress={() => router.back()} />
            <Text style={titleStyle}>Information</Text>
            <View style={styles.headerSpacer} />
          </View>

          {informationSections.map((section, sectionIndex) => (
            <Animatable.View
              key={section.title}
              animation="fadeInUp"
              duration={800}
              delay={sectionIndex * 300}
              style={[styles.card, isCompact && styles.cardCompact]}
            >
              <Text style={headingStyle}>{section.title}</Text>
              <Text style={paragraphStyle}>{section.introduction}</Text>

              {section.groups.map((group) => (
                <View key={group.heading}>
                  <Text style={subHeadingStyle}>{group.heading}</Text>
                  <View style={styles.bulletContainer}>
                    {group.items.map((item) => (
                      <Text key={item} style={bulletStyle}>• {item}</Text>
                    ))}
                  </View>
                </View>
              ))}
            </Animatable.View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
