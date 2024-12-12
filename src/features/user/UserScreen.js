// Written by Amrik
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, updateUser } from "./userSlice";

const UserScreen = ({ route }) => {
  const { userId } = route.params;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    dispatch(fetchUserData(userId));
  }, [dispatch, userId]);

  if (status === "loading") {
    return <ActivityIndicator size="large" />;
  }

  if (status === "failed") {
    return <Text style={styles.error}>Failed to load user data</Text>;
  }

  console.log("Render UserScreen ...", user);
  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>Name: {user?.name}</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(
                updateUser({ name: "Happy", email: "amrik@gmail.com", id: "1" })
              );
            }}
          >
            <Text>Email: {user?.email}</Text>
            <Text>Street: {user?.address?.street}</Text>
            <Text>City: {user?.address?.city}</Text>
            <Text>Phone: {user?.phone}</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>No user data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  error: { color: "red" },
});

export default UserScreen;
