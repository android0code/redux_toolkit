// Written by Amrik
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { RouteConstants } from "../../routes/RouteConstants";
import { clearUser } from "../user/userSlice";
import api from "../../services/ApiService";

export default function MainScreen({ navigation }) {
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  const dispatch = useDispatch();

  console.log("Render main Screen ...", user);

  const handleUserScreen = () => {
    navigation.navigate(RouteConstants.AllUserScreen, {});
  };

  const handleCounterScreen = () => {
    navigation.navigate(RouteConstants.CounterScreen, {});
  };

  const handelLogout = () => {
    dispatch(clearUser());
  };

  const fetchData = async () => {
    try {
      // GET request
      const users = await api.get("/users");
      console.log("Users:", users);

      // POST request
      const newUser = await api.post("/users", {
        name: "John Doe",
        email: "john.doe@example.com",
      });
      console.log("New User:", newUser);

      // PUT request
      const updatedUser = await api.put("/users/1", { name: "John Updated" });
      console.log("Updated User:", updatedUser);

      // DELETE request
      const deletedUser = await api.delete("/users/1");
      console.log("Deleted User:", deletedUser);
    } catch (error) {
      console.log("API Error:", error.message);
    }
  };

  if (status === "loading") {
    return <ActivityIndicator size="large" />;
  }

  if (status === "failed") {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={{ margin: 50, alignItems: "center" }}>
      <View style={{ marginTop: 50 }}>
        <View style={{ marginVertical: 30 }}>
          <Text>Name: {user?.name}</Text>
          <Text>email: {user?.email}</Text>
        </View>

        <Button onPress={handleUserScreen} title="User List" />
        <Button onPress={handleCounterScreen} title="Counter" />
        <Button onPress={handelLogout} title="Logout" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, marginTop: 10 },
  item: { padding: 16 },
  error: { color: "red" },
});
