// sdk metamap
import { useEffect } from "react";
import { Button, NativeEventEmitter, NativeModules, View } from "react-native";
import { MetaMapRNSdk } from "react-native-expo-metamap-sdk";

export default function App() {
  useEffect(() => {
    const MetaMapVerifyResult = new NativeEventEmitter(
      NativeModules.MetaMapRNSdk
    );
    MetaMapVerifyResult.addListener("verificationSuccess", (data) =>
      console.log(data)
    );
    MetaMapVerifyResult.addListener("verificationCanceled", (data) =>
      console.log(data)
    );
  });
  const handleMetaMapClickButton = () => {
    console.log("entro", MetaMapRNSdk);
    //set 3 params clientId (cant be null), flowId, metadata
    var yourMetadata = { param1: "value1", param2: "value2" };
    MetaMapRNSdk.showFlow(
      "610b96fb7cc893001b135505",
      "611101668083a1001b13cc80",
      yourMetadata
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "powderblue",
      }}
    >
      <Button onPress={() => handleMetaMapClickButton()} title="Click here" />
    </View>
  );
}
