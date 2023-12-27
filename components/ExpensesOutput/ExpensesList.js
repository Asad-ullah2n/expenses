import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import ExpensesItem from "./ExpensesItem";
function renderExpenseItem(itemData) {
  return <ExpensesItem {...itemData.item} />;
}

const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  marginBottom: 10,
});
