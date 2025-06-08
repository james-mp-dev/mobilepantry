// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }
// Example for apps/client-app/app/index.tsx
import { StyleSheet, View } from "react-native";
import { Card } from "@mobilepantry/ui";

export default function ClientHomeScreen() {
  return (
    <View style={styles.container}>
      <Card title="This is the Client App" />
      <Card title="It shares components with the Driver App" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
