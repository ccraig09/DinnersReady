import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import React from "react";

const HeadCard = (props) => {
	console.log(">>props");
	return (
		<TouchableOpacity
			onPress={() =>
				props.navigation.navigate("Details", { mealId: props.id })
			}
		>
			<View style={styles.card}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>
						{props?.title?.length > 30
							? props.title.slice(0, 30) + "..."
							: props.title}
					</Text>
				</View>
				<View style={styles.imageContainer}>
					<ImageBackground
						source={{ uri: props.image }}
						style={styles.image}
					>
						{/* <View style={styles.year}>
							<Text style={styles.yearText}>
							{props.yearBuilt}
							</Text>
						</View> */}
					</ImageBackground>
				</View>
				<View style={styles.descriptionContainer}>
					<Text style={styles.prepTime}>
						Prep time: {props.prepTime} min
					</Text>
					<Text style={styles.prepTime}>
						Health ccore: {props.healthScore}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default HeadCard;

const styles = StyleSheet.create({
	card: {
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		borderRadius: 10,
		backgroundColor: "#ffffff",
		elevation: 5,
		height: 300,
		margin: 10,
	},
	titleContainer: {
		height: "15%",
		padding: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "gray",
	},
	imageContainer: {
		width: "100%",
		height: "65%",
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
	prepTime: {
		fontSize: 20,
		color: "black",
		margin: 10,
	},
	year: {
		margin: 10,
		backgroundColor: "#2652B0",
		height: 25,
		width: 80,
		borderRadius: 5,
	},
	yearText: {
		fontSize: 20,
		color: "#fff",
		textAlign: "center",
	},
	descriptionContainer: {
		flexDirection: "row",
		margin: 10,
	},
	descriptionText: {
		fontSize: 16,
		color: "gray",
	},
});