import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const TelaInicial = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TextInput value={login} onChangeText={setLogin} />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Detalhes")}
        >
          <Text style={styles.btnText}>Logar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TelaInicial;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#a3a3ff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: "#7d37ff",
    borderRadius: 15,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  main: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 15,
    height: "50%",
  },
});
