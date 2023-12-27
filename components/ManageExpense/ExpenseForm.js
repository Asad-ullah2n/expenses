import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "../UI/Button";

const ExpenseForm = ({
  submitButtonLabel,
  onCancel,
  onSubmit,
  //   defaultValue,
}) => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  function amoutChangeHandler(enteredAmount) {
    setAmount(enteredAmount);
  }
  function dateChangeHandler(enteredAmount) {
    setDate(enteredAmount);
  }
  function descriptionChangeHandler(enteredAmount) {
    setDescription(enteredAmount);
  }
  function submitHandler() {
    const expenseData = {
      amount: +amount,
      date: new Date(date),
      description: description,
    };
    const amountisValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    // Invalid Date is java scrript when date is incorrect that error is shown in consol
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (!amountisValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid Inputs", "Please check your inputs");
      return;
    }

    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          inputConfig={{
            keyboartType: "decimal-pad",
            onChangeText: amoutChangeHandler,
            value: amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          inputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: dateChangeHandler,
            value: date,
          }}
        />
      </View>

      <Input
        label="Description"
        inputConfig={{
          multiline: true,
          onChangeText: descriptionChangeHandler,
          value: description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>

        {/* the style is given to button componant from here  */}
        <Button style={styles.button} mode=" flat" onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
    fontWeight: "bold",
    color: "white",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
