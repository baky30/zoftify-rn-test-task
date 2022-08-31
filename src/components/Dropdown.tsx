import React, { Dispatch, SetStateAction } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Image, StyleSheet } from "react-native";
import { TStatus } from "../commonInterfaces";

interface IDropdown {
  status: TStatus | "";
  onSelect: Dispatch<SetStateAction<TStatus | "">>;
}

const Dropdown: React.FC<IDropdown> = ({ status, onSelect }) => {
  return (
    <SelectDropdown
      defaultButtonText={"Status"}
      data={["Published", "Draft"]}
      buttonStyle={styles.dropdownBtnStyle}
      buttonTextStyle={
        status ? styles.dropdownBtnTxtStyle : styles.placeholderTxtStyle
      }
      onSelect={selectedItem => onSelect(selectedItem.toLowerCase())}
      buttonTextAfterSelection={selectedItem => selectedItem}
      rowTextForSelection={item => item}
      renderDropdownIcon={isOpened => (
        <Image
          source={require("../assets/icons/DropdownIcon.png")}
          resizeMode={"contain"}
          className={`w-6 h-6 ${isOpened ? "rotate-180" : ""}`}
        />
      )}
      dropdownIconPosition={"right"}
      rowStyle={styles.dropdownRowStyle}
      rowTextStyle={styles.dropdownRowTxtStyle}
      selectedRowTextStyle={styles.selectedRowTextStyle}
      dropdownStyle={styles.dropdownDropdownStyle}
    />
  );
};

const styles = StyleSheet.create({
  dropdownBtnStyle: {
    width: "100%",
    height: 58,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: "#F8F8F8",
  },
  placeholderTxtStyle: {
    color: "#8A8C90",
    textAlign: "left",
    fontFamily: "Lato-Regular",
    fontSize: 16,
  },
  dropdownBtnTxtStyle: {
    color: "#151C26",
    textAlign: "left",
    fontFamily: "Lato-Regular",
    fontSize: 16,
  },
  dropdownDropdownStyle: {
    borderRadius: 8,
  },
  dropdownRowStyle: {
    height: 58,
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdownRowTxtStyle: { color: "#151C26", textAlign: "left" },
  selectedRowTextStyle: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
    fontWeight: "bold",
    color: "#0071D8",
  },
});

export default Dropdown;
