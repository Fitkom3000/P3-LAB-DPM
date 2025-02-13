import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

export default function ProfileNavBar({ onRefresh }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onRefresh}>
        <Feather name="refresh-cw" size={24} />
      </TouchableOpacity>
      <Text style={styles.text}>Profile</Text>
      <TouchableOpacity>
        <Feather name="menu" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
