// Written by Amrik
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../user/userSlice";
import {
  Button,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";

const LoginPage = () => {
  const commaImageUrl = "https://i.ibb.co/nb8Hjms/quote.png";
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);

  const handleLogin = () => {
    dispatch(fetchUserData(1));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.testimonialContainer}>
        <View style={styles.singleTestimonial}>
          <Image source={{ uri: commaImageUrl }} style={styles.upperIcon} />

          <Text style={styles.testimonialText}>
            This is a simple and small app that uses two reducers: Counter and
            User
            {"\n"}Help to understand the concept of Redux Tool Kit(RTK)
            {"\n\n"} @Amrik Singh
          </Text>

          <Image source={{ uri: commaImageUrl }} style={styles.bottomIcon} />
        </View>
      </View>

      <View style={styles.main}>
        <Text>Login Screen...</Text>

        {status === "loading" ? (
          <ActivityIndicator size="large" />
        ) : (
          <Button onPress={handleLogin} title="Login" />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    backgroundColor: "#fff",
  },
  testimonialContainer: {
    marginTop: 20,
  },
  singleTestimonial: {
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  upperIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: "absolute",
    backgroundColor: "white",
    top: -30,
    left: 15,
  },
  bottomIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: "absolute",
    backgroundColor: "white",
    bottom: -20,
    right: 15,
  },
  testimonialText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 15,
  },
});

export default LoginPage;
