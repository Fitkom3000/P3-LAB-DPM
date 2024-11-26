import React, { useState } from "react";
import { ScrollView, StyleSheet, View, ActivityIndicator } from "react-native";
import ProfileNavBar from "../../components/navBarProfile";
import ProfileHeader from "../../components/headerProfile";

const ProfileScreen = () => {
  // Inisialisasi state untuk menyimpan data pengguna
  const [profileData, setProfileData] = useState({
    name: "Tikus Wanita",
    followers: 500,
    following: 180,
    posts: 80,
  });
  const [loading, setLoading] = useState(false);

  // Fungsi untuk increment followers
  const incrementFollowers = () => {
    return profileData.followers + 1; // Menambahkan satu setiap kali tombol refresh ditekan
  };

  // Fungsi untuk merefresh data followers
  const refreshFollowers = () => {
    setLoading(true); // Set loading true saat data sedang di-refresh
    setTimeout(() => {
      setProfileData(prevData => ({
        ...prevData,
        followers: incrementFollowers(), // Update followers dengan increment
      }));
      setLoading(false); // Set loading false setelah selesai
    }, 1000); // Simulasi delay
  };

  return (
    <View style={styles.container}>
      <ProfileNavBar onRefresh={refreshFollowers} /> {/* Pass onRefresh */}
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="gray" style={styles.loading} />
        ) : (
          <ProfileHeader data={profileData} />
        )}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  loading: {
    marginTop: 50,
  },
});
