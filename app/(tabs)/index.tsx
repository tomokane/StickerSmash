import { Text, View , StyleSheet} from "react-native";
import { Link } from "expo-router";

import ImageViewer from "@/components/imageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
			<View style={styles.container}>
				<View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderImage} />
        </View>
				<Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
				<Link href="/about" style={styles.button}>
					Go to About
				</Link>
			</View>
		);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  text: {
    color: "#f00",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#0ff",
  }
});