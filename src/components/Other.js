import {View, Text, Image, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    view: { marginTop: 5, width: 225},    
    title: { fontSize: 15, fontWeight: "bold", color: "black", alignSelf: "center", width:125 },
    titleDateView: { alignItems: "flex-start", display: "flex", flexDirection: "row", width: 175},
    date: { fontSize: 8, color: "#777", alignSelf: "flex-end" },
    text: { fontSize: 10, width: 215, marginTop: 5 },
    cardView: { marginTop: 5, marginBottom: 5 },
    otherTitle: { fontSize: 22, fontWeight: "Bold", borderBottom: "1 solid black", color: "dodgerblue"},
  });

export default function Other() {
    
    return (
        <View style={styles.view}>
        <Text style={styles.otherTitle}>Other</Text>
            <View style={styles.cardView}>
                <View style={styles.titleDateView}>
                     <Text style={styles.title}>Private server hosting</Text>
                    <View style={styles.date}>
                        <Text>2009 - Aug 2020</Text>
                        <Text>All-rounder</Text>
                    </View>
                </View>
                <Text style={styles.text}>Between 2011 and August 2020 I've been on and off hosting various private servers of a particular MMORPG. 
                The source code, written in C (Later migrated to C++), would be maintained by a large community.
                During this time I've managed communitiies, hosted events, written code, organised small marketing campaigns, gave masterclasses to staff, managed dedicated and Virtual Machines, kept finances among many other tasks.
                </Text>
            </View>        
        </View>        
    );
}