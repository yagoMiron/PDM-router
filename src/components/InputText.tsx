import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  setter: (text: string) => void;
  placeholder: string;
  title: string;
  value: string;
  password?: boolean;
};

const InputText = ({ value, setter, placeholder, title, password }: Props) => {
  return (
    <View>
      <Text style={styles.title}>{title}:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setter}
        placeholder={placeholder}
        secureTextEntry={password}
        placeholderTextColor={"#3a00a552"}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: "#8848ff",
    borderRadius: 15,
    fontSize: 28,
    color: "#3a00a5",
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: "#3a00a5",
    fontWeight: 600,
  },
});
