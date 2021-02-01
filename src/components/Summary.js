import {View, Text, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    title: { fontSize: 18, fontWeight: "bold", color: "black", },    
    titleDateView: { alignItems: "flex-start", display: "flex", flexDirection: "row", justifyContent: "space-between", width: 350},
    date: { fontSize: 9, color: "#777", alignSelf: "flex-end" },
    text: { marginTop: 5, fontSize: 11, width: 300 },
    cardView: { marginTop: 5 },
    view: {marginLeft: 5, width: 300},    
    summaryTitle: { fontSize: 22, fontWeight: "bold"},
  });

export default function Summary() {
    
    return (
        <View style={styles.view}>
        <Text style={styles.summaryTitle}>Jeroen Kooiman</Text>
            <View style={styles.cardView}>        
                <Text style={styles.title}>Software Developer</Text>
                <Text style={styles.text}>
                    A (BSc) software engineer who enjoys building all kinds of software applications. With almost 6 years of professional experience in software development in various languages, I still manage to find enjoyment in my work.
                </Text>
            </View>
        </View>        
    );
}

