import React, { useEffect } from 'react'; 
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThreeDot from './ThreeDot';
import Post from './Post';
import indexStyles from './indexStyles';
import * as Speech from 'expo-speech';

export default function Index() {
  const router = useRouter();

useEffect(() => {
  Speech.speak("Home");

  return () => {
    Speech.stop();  // stops any ongoing speech when unmounting
  };
}, []);


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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqKXCUBIwC3ihMJvB3nz2YROTzKL0TWXpeLg&s",
   
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