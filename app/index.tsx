import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Vibration,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AnimatedCircularProgress } from "react-native-circular-progress";

import InputModal from "@/components/shared/modal/InputModal";
import Colors from "@/utils/color";
import { buttonStyle } from "@/utils/styles";

const MantraCounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const [target, setTarget] = useState(108);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputTarget, setInputTarget] = useState("");

  useEffect(() => {
    const loadCounterData = async () => {
      const savedCounter = await AsyncStorage.getItem("counter");
      const savedTarget = await AsyncStorage.getItem("target");

      if (savedCounter) setCounter(parseInt(savedCounter));
      if (savedTarget) setTarget(parseInt(savedTarget));
    };

    loadCounterData();
  }, []);

  useEffect(() => {
    const saveCounterData = async () => {
      await AsyncStorage.setItem("counter", counter.toString());
      await AsyncStorage.setItem("target", target.toString());
    };

    saveCounterData();
  }, [counter, target]);

  const incrementCounter = () => {
    if (counter + 1 >= target) {
      setCounter(target);
      Vibration.vibrate();
      return Alert.alert(
        "Congratulations",
        `You've reached your target of ${target}!`
      );
    }
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const setNewTarget = () => {
    setIsModalVisible(true);
  };

  const handleTargetSubmit = () => {
    const newTarget = parseInt(inputTarget);
    if (!isNaN(newTarget) && newTarget > 0) {
      setTarget(newTarget);
      setInputTarget("");
      setIsModalVisible(false);
      setCounter(0);
    } else {
      Alert.alert("Invalid Input", "Please enter a valid number.");
    }
  };

  const progress = (counter / target) * 100;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Mantra Counter</Text>

        <View style={styles.circleContainer}>
          <AnimatedCircularProgress
            size={200}
            width={15}
            fill={progress}
            tintColor={Colors.tintColor}
            backgroundColor="#ccc"
            rotation={0}
          />
          <View style={styles.counterTextContainer}>
            <Text style={styles.counterText}>{counter}</Text>
          </View>
        </View>

        <Text style={styles.targetText}>Target: {target}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[buttonStyle, styles.incrementButton]}
            onPress={incrementCounter}
          >
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[buttonStyle, styles.resetButton]}
            onPress={resetCounter}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[buttonStyle, styles.setTargetButton]}
            onPress={setNewTarget}
          >
            <Text style={styles.buttonText}>Set Target</Text>
          </TouchableOpacity>
        </View>

        <InputModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          inputTarget={inputTarget}
          setInputTarget={setInputTarget}
          handleTargetSubmit={handleTargetSubmit}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2d2a32",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f5e6cc",
    marginBottom: 20,
  },
  circleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  counterTextContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#f5e6cc",
  },
  targetText: {
    fontSize: 20,
    color: "#f5e6cc",
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  buttonText: {
    color: Colors.textLight,
    fontSize: 16,
  },
  incrementButton: {
    backgroundColor: Colors.incrementButton,
  },
  resetButton: {
    backgroundColor: Colors.resetButton,
  },
  setTargetButton: {
    backgroundColor: Colors.targetButton,
  },
});

export default MantraCounterScreen;
