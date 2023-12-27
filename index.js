import React, { useState } from "react";
import {
  Center,
  HStack,
  Pressable,
  Stack,
  Text,
  VStack,
  Box,
  Actionsheet,
  FormControl,
} from "native-base";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MaskInput, { Masks } from "react-native-mask-input";
import { useForm, Controller } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";

const DialPad = () => {
  const [isActionSheet, setActionSheet] = React.useState(false);

  const {
    control,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

  const [inputValue, setInputValue] = useState("");

  const maxLength = 10;

  const handleNumberClick = (number) => {
    if (inputValue.length < maxLength) {
      setInputValue((prevValue) => prevValue + number);
    }
  };

  const handleBackspaceClick = () => {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };

  const sendCall = async (data) => {
    if (inputValue === "" || (inputValue && inputValue.length < 10)) {
      return;
    }
    console.log(inputValue);
    setInputValue("");
    setActionSheet(false);
  };

  return (
    <Stack>
      <Center>
        <Pressable
          zIndex={9999}
          onPress={() => {
            setActionSheet(true);
          }}
          style={{
            shadowOffset: { width: 1, height: 2 },
            shadowColor: "#7D2BE9",
            shadowOpacity: 0.5,
          }}
        >
          <LinearGradient
            colors={["#C047F3", "#7D2BE9"]}
            start={{ x: 0, y: 0 }}
            style={{
              borderRadius: 100,
              padding: 11,
              shadowColor: "#7D2BE9",
              shadowRadius: 20,
              shadowRadius: 4,
              elevation: 10,
              borderColor: "#7D2BE9",
              borderWidth: 0,
            }}
          >
            <MaterialIcons name="dialpad" size={22} color={"white"} />
          </LinearGradient>
        </Pressable>
      </Center>

      <Actionsheet
        isOpen={isActionSheet}
        onClose={() => {
          setActionSheet(false);
        }}
        size="full"
      >
        <Actionsheet.Content
          _dragIndicator={{
            width: 36,
            bottom: 1.5,
            bg: "#c7c3c6",
            borderRadius: "full",
          }}
          borderTopRadius={15}
          height={500}
        >
          <VStack width={"80%"}>
            <Box height={70} justifyContent={"center"}>
              <FormControl>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <MaskInput
                      type="phone"
                      id="Phone"
                      name="Phone"
                      value={inputValue}
                      onChangeText={(m, um) => {
                        setRefresh((r) => !r);
                        setValue("phone", um, { shouldValidate: true });
                        onChange(um);
                      }}
                      mask={Masks.USA_PHONE}
                      maxLength={14}
                      style={{
                        textAlign: "center",
                        top: 5,
                        width: "100%",
                        height: "80%",
                        opacity: 0.9,
                        fontSize: 25,
                        color: "#000000",
                      }}
                      onEndEditing={onBlur}
                      onKeyPress={onBlur}
                      placeholder={""}
                      placeholderTextColor={"#000000"}
                      selectionColor={"#7D2BE9"}
                      editable={false}
                    />
                  )}
                />
              </FormControl>
            </Box>

            <VStack alignSelf={"center"} space={4} mt={2}>
              <HStack space={12}>
                {items.slice(0, 3).map((item, index) => (
                  <Pressable
                    key={index}
                    backgroundColor={"#cccccc"}
                    width={16}
                    height={16}
                    borderRadius={"full"}
                    justifyContent={"center"}
                    onPress={() => handleNumberClick(item)}
                  >
                    <Text
                      key={index}
                      fontWeight={600}
                      fontSize={20}
                      position={"absolute"}
                      alignSelf={"center"}
                      color={"black"}
                    >
                      {item}
                    </Text>
                  </Pressable>
                ))}
              </HStack>
              <HStack space={12}>
                {items.slice(3, 6).map((item, index) => (
                  <Pressable
                    key={index}
                    backgroundColor={"#cccccc"}
                    width={16}
                    height={16}
                    borderRadius={"full"}
                    justifyContent={"center"}
                    onPress={() => handleNumberClick(item)}
                  >
                    <Text
                      key={index}
                      fontWeight={600}
                      fontSize={20}
                      position={"absolute"}
                      alignSelf={"center"}
                      color={"black"}
                    >
                      {item}
                    </Text>
                  </Pressable>
                ))}
              </HStack>
              <HStack space={12}>
                {items.slice(6, 9).map((item, index) => (
                  <Pressable
                    key={index}
                    backgroundColor={"#cccccc"}
                    width={16}
                    height={16}
                    borderRadius={"full"}
                    justifyContent={"center"}
                    onPress={() => handleNumberClick(item)}
                  >
                    <Text
                      key={index}
                      fontWeight={600}
                      fontSize={20}
                      position={"absolute"}
                      alignSelf={"center"}
                      color={"black"}
                    >
                      {item}
                    </Text>
                  </Pressable>
                ))}
              </HStack>
              <HStack space={12}>
                {items.slice(9, 12).map((item, index) => (
                  <Pressable
                    key={index}
                    backgroundColor={"#cccccc"}
                    width={16}
                    height={16}
                    borderRadius={"full"}
                    justifyContent={"center"}
                    onPress={() => handleNumberClick(item)}
                  >
                    <Text
                      key={index}
                      fontWeight={600}
                      fontSize={20}
                      position={"absolute"}
                      alignSelf={"center"}
                      color={"black"}
                    >
                      {item}
                    </Text>
                  </Pressable>
                ))}
              </HStack>
              <HStack
                space={12}
                justifyContent={"center"}
                alignSelf={"flex-end"}
              >
                <Pressable
                  onPress={() => {
                    setActionSheet(false);
                  }}
                  width={16}
                  height={16}
                  borderRadius={"full"}
                  justifyContent={"center"}
                >
                  <MaterialIcons
                    name="dialpad"
                    size={22}
                    color={"#000000"}
                    style={{
                      position: "absolute",
                      alignSelf: "center",
                    }}
                  />
                </Pressable>
                <Pressable
                  onPress={sendCall}
                  backgroundColor={"#7D2BE9"}
                  width={16}
                  height={16}
                  borderRadius={"full"}
                  justifyContent={"center"}
                  alignSelf={"center"}
                >
                  <Feather
                    name="phone"
                    size={20}
                    color={"white"}
                    alignSelf={"center"}
                  />
                </Pressable>
                <Pressable
                  onPress={handleBackspaceClick}
                  width={16}
                  height={16}
                  borderRadius={"full"}
                  justifyContent={"center"}
                >
                  <MaterialCommunityIcons
                    name="backspace"
                    size={24}
                    color={"#000000"}
                    style={{
                      position: "absolute",
                      alignSelf: "center",
                    }}
                  />
                </Pressable>
              </HStack>
            </VStack>
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    </Stack>
  );
};
export default DialPad;
