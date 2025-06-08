import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// Form Validation
import * as Yup from "yup";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  // password Schema using Yup
  const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .min(4, "Should be min of 4 characters")
      .max(16, "Should be max of 16 characters")
      .required("Length is required"),
  });

  const generatePasswordString = (passwordLength: number) => {
    let characterList = "";

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789";
    const specialchars = "!@#$%^&*()_+";
    if (upperCase) {
      characterList += upperCase;
    }
    if (lowerCase) {
      characterList += lowerCase;
    }
    if (numbers) {
      characterList += numbers;
    }
    if (symbols) {
      characterList += symbols;
    }

    const passwordResult = createPassword(characterList, passwordLength)

    setPassword(passwordResult)
    setIsPassGenerated(true)

  };
  const createPassword = (characters: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result = characters.charAt(characterIndex);
    }
    return result;
  };
  const resetPassword = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  };

  return (
    <View>
      <Text>Password Generator</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
