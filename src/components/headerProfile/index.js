import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Gambar lokal yang diambil dari folder assets
const ProfileHeader = ({ data }) => {
  // State untuk followers (menggunakan data initial dari props)
  const [followers, setFollowers] = useState(data.followers);
  
  // State untuk status follow
  const [isFollowing, setIsFollowing] = useState(false);

  // Fungsi untuk increment followers (dijalankan saat refresh di kiri atas)
  const handleRefresh = () => {
    setFollowers(followers + 1); // Increment followers setiap kali tombol refresh ditekan
  };

  // Fungsi untuk toggle status follow
  const toggleFollow = () => {
    setIsFollowing(!isFollowing); // Ubah status follow
  };

  return (
    <View style={styles.container}>
      {/* Menggunakan gambar lokal dari folder assets */}
      <Image source={require("../../../assets/images/janeDoe.png")} style={styles.profilePic} />
      <Text style={styles.text}>{data.name}</Text>
      <View style={styles.counterContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>{followers}</Text>
          <Text style={styles.labelText}>Followers</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>{data.following}</Text>
          <Text style={styles.labelText}>Following</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>{data.posts}</Text>
          <Text style={styles.labelText}>Posts</Text>
        </View>
      </View>
      
      {/* Tombol Follow/Unfollow */}
      <TouchableOpacity
        onPress={toggleFollow}
        style={[styles.followButton, isFollowing && styles.followingButton]}>
        <Text style={styles.followButtonText}>{isFollowing ? "Sudah Follow" : "Follow"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50, // Membuat gambar menjadi bulat
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  counterContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 6,
    alignItems: "center",
  },
  itemContainer: {
    alignItems: "center",
    margin: 10,
    justifyContent: "space-between",
    width: 70,
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  labelText: {
    color: "gray",
    fontSize: 11,
    fontWeight: "bold",
  },
  followButton: {
    marginTop: 20,
    backgroundColor: "#007BFF", // Tombol Follow berwarna biru
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  followingButton: {
    backgroundColor: "gray", // Tombol Unfollow berwarna abu-abu
  },
  followButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
