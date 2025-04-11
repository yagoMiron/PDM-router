import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import InputText from "../components/InputText";
import { Ionicons } from "@expo/vector-icons";

const TelaInicial = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.logo}>Placeholder.App</Text>
        <View style={styles.inputArea}>
          <InputText
            setter={setLogin}
            value={login}
            title="Login"
            placeholder="Digite seu login"
          />
          <InputText
            setter={setSenha}
            value={senha}
            title="Senha"
            placeholder="Digite sua senha"
            password
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Detalhes")}
          >
            <Text style={styles.btnText}>Logar</Text>
            <Ionicons name="arrow-forward" size={32} color="#ffffff" />
          </TouchableOpacity>
        </View>
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
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#7d37ff",
    borderRadius: 15,
    marginTop: 16,
    gap: 8,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
  main: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    minHeight: "50%",
    borderBottomWidth: 4,
    borderEndWidth: 4,
    borderColor: "#160033c3",
  },
  inputArea: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 16,
    gap: 8,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 32,
    padding: 12,
    textAlign: "center",
    color: "#4c08ca",
  },
});
