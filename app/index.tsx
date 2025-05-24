import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-reanimated';
import ThreeDot from './ThreeDot';
import Post from './Post';
import DiseaseCarousel from './styles/DiseaseCarousel';
import indexStyles from './indexStyles';

export default function Index() {
  const router = useRouter();

  const posts = [
    {
      title: "New AI Tech for Early Cataract Detection",
      date: "May 20, 2025",
      category: "Technology",
      summary: "Researchers have developed an AI-powered system that detects cataracts with 95% accuracy using smartphone images.",
      image: "https://www.theengineer.co.uk/media/juhfuzps/42-technology_neocam_right-first-time-image-capture.jpg?width=1002&height=564&v=1dbade75be9ef30",
    },
    {
      title: "Community Eye Health Camp Announced",
      date: "May 18, 2025",
      category: "Event",
      summary: "Join us for a free eye health screening camp focusing on diabetic retinopathy awareness on June 5th at City Hall.",
      image: "data:image/jpeg;base64,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",
   
    },
    {
      title: "Daily Eye Exercises for Glaucoma Patients",
      date: "May 15, 2025",
      category: "Social Activity",
      summary: "Learn simple eye exercises designed to improve eye health and slow glaucoma progression.",
      image: "https://www.aao.org/image.axd?id=15399d7c-3a23-4791-8c2a-b5af8def4482&t=636868199208170000",
   
    },
    {
  title: "Breakthrough Gene Therapy Restores Vision",
  date: "May 10, 2025",
  category: "Technology",
  summary: "A new gene therapy shows promise in restoring partial vision in patients with inherited retinal diseases.",
  image: "https://news.ufl.edu/media/newsufledu/images/2024/09/gene-wide.jpg",
},
{
  title: "Mobile Eye Clinic Launches in Rural Andhra",
  date: "May 12, 2025",
  category: "Event",
  summary: "A state-sponsored mobile van will provide free glaucoma and cataract screening in underserved villages.",
  image: "https://www.sarkaritel.com/wp-content/uploads/2024/03/hpcl_csr.jpg",
},
{
  title: "AI App Spots Retinopathy in Pregnant Women",
  date: "May 8, 2025",
  category: "Technology",
  summary: "An AI app developed in India now helps screen for retinal issues in high-risk pregnancies using smartphone images.",
  image: "https://www.reviewofoptometry.com/CMSImagesContent/2023/07/RO%20News/07122023%20NPDR.jpg",
},
{
  title: "Eye Yoga Sessions Launched at IT Companies",
  date: "May 4, 2025",
  category: "Social Activity",
  summary: "Companies adopt 10-minute eye yoga routines during work hours to combat digital eye strain.",
  image: "https://images.onlymyhealth.com/imported/images/2024/April/29_Apr_2024/Main-yogaexercisesforeyes.jpg",
},
{
  title: "World Glaucoma Day Celebrations at Sankar Foundation",
  date: "March 12, 2025",
  category: "Event",
  summary: "Sankar Foundation hosted a mass awareness campaign with posters, screenings, and doctor talks.",
  image: "https://sankarfoundation.org/wp-content/uploads/2024/03/Rally-1-1.jpg",
},
{
  title: "Smart Contact Lenses Monitor Eye Pressure",
  date: "May 1, 2025",
  category: "Technology",
  summary: "New wearable lenses track intraocular pressure in real time, offering hope for glaucoma patients.",
  image: "https://assets.newatlas.com/dims4/default/7f2eb7b/2147483647/strip/true/crop/1205x678+0+63/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F41%2Ff2%2Fab365aa045e6b3f97d8c01da50cb%2F영문그림-녹내장안압렌즈.jpeg",
},
{
  title: "Students Lead Vision Screening Drive",
  date: "April 28, 2025",
  category: "Social Activity",
  summary: "NSS volunteers in Visakhapatnam trained to conduct basic vision tests for school children.",
  image: "https://www.icarevision.com/wp-content/uploads/2020/09/Optometrist-Examining-Child.jpg",
},
{
  title: "Low-Cost Eye Drop Shows Cataract Reversal Signs",
  date: "April 25, 2025",
  category: "Technology",
  summary: "Clinical trials of an experimental eye drop hint at non-surgical treatment possibilities for early cataract.",
  image: "https://dayaleyecentre.in/wp-content/uploads/2025/02/ucsf_eye_drops_istock-1170x694.jpg",
},

  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={[indexStyles.container, { paddingBottom: 120 }]}>
        {/* Header */}
        <View style={indexStyles.header}>
          {/* Back Button */}
          <TouchableOpacity
            style={{ position: 'absolute', left: 0, padding: 8, marginTop: -40 }}
            onPress={() => router.push('./quiz')}>
            <Ionicons name="arrow-back" size={24} color="#007AFF" />
          </TouchableOpacity>

          {/* Title */}
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={indexStyles.title}>DRUSHTI </Text>
          </View>
        </View>

           <View style={{ position: 'absolute', right: 0, padding: 8, marginTop: 20 }}>
         <ThreeDot />
        </View>

        {/* Posts Section */}
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 12, color: 'black',textAlign: 'center' }}>
            Latest Posts & News
          </Text>
          {posts.map((post, i) => (
            <Post
              key={i}
              title={post.title}
              date={post.date}
              category={post.category}
              summary={post.summary}
              image={post.image}
            />
          ))}
        </View>
<View style={indexStyles.footerContainer}>
          <Text style={indexStyles.footerText}>Hackathon 2025 | Team Drushti</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}