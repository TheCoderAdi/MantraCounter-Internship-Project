import Colors from "@/utils/color";
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { buttonStyle } from "@/utils/styles";

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
  inputTarget: string;
  setInputTarget: (input: string) => void;
  handleTargetSubmit: () => void;
}

const { width } = Dimensions.get("window");

const InputModal = ({
  isModalVisible,
  setIsModalVisible,
  inputTarget,
  setInputTarget,
  handleTargetSubmit,
}: Props) => {
  return (
    <Modal visible={isModalVisible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Set a new target</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter target repetitions"
            keyboardType="numeric"
            value={inputTarget}
            onChangeText={setInputTarget}
            placeholderTextColor={Colors.textLight}
          />
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={[buttonStyle, { backgroundColor: Colors.resetButton }]}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={{ color: Colors.textLight }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                buttonStyle,
                {
                  backgroundColor: Colors.targetButton,
                },
              ]}
              onPress={handleTargetSubmit}
            >
              <Text style={{ color: Colors.textLight }}>Set Target</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InputModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: width - 40,
    backgroundColor: Colors.background,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    gap: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: Colors.textLight,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    textAlign: "left",
    color: Colors.textLight,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
