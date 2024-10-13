import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        style={styles.background}
      />
      <View style={styles.logo}>
        <Text style={styles.logoText}>Logo</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Register</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.triangle} />
        <TouchableOpacity style={styles.buttonClient}><Text style={styles.mainTextClient}>Client</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonCleaner}><Text style={styles.mainTextCleaner}>Cleaner</Text></TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.loginButton}><Text style={styles.footerText}>Already have an account?</Text></TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  logo:{
    alignSelf: "center",
    width: 160,
    height: 160,
    backgroundColor: "#bbb",
    borderRadius: 120,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  logoText:{
    fontSize: 34,
    color: "black",
  },
  container: {
    flex: 1,
    backgroundColor: '#444',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  title:{
    alignSelf: "center",
    marginTop: 100,
  },
  titleText: {
    marginBottom: 5,
    color: "white"
  },
  main:{
    height: 450,
    width: wp("100%"),  
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: wp("100%"),
    borderTopWidth: 450,
    borderRightColor: "transparent",
    borderTopColor: "#1B7B82",
  },
  mainTextClient: {
    color: 'black',
    fontSize: 28,
  },
  buttonClient:{
    padding: 5,
    position: 'absolute',
    top: '10%',
    left: '12%',
  },
  buttonCleaner:{
    padding: 5,
    position: 'absolute',
    top: '75%',
    left: '60%',
  },
  mainTextCleaner: {
    color: '#ddd',
    fontSize: 28,
  },
  footer:{
    alignSelf: "center"
  },
  footerText:{
    color: "white",
    fontStyle: "italic",
    textDecorationLine: "underline"
  },
  loginButton:{
    padding: 10,
  }
});
