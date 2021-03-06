import {View, Text, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    view: {marginLeft: 5, width: 300},    
    title: { fontSize: 18, fontWeight: "Bold", fontFamily: "montserrat", color: "dodgerblue" },    
    text: { marginTop: 5, fontSize: 10, width: 235 },
    cardView: { marginTop: 5 },
    summaryTitle: { fontFamily: "montserrat", fontSize: 22, fontWeight: "Bold"},
  });

export default function Summary() {
    
    return (
        <View style={styles.view}>
            <Text style={styles.summaryTitle}>Jeroen Kooiman</Text>
            <Text style={styles.title}>Software Developer</Text>
                <View style={styles.cardView}>        
                    <Text style={styles.text}>
                        A (BSc) software engineer who enjoys building all kinds of software applications. With almost 6 years of professional experience in software development in various languages, I still manage to find enjoyment in my work.
                    </Text>
                </View>
        </View>        
    );
}

