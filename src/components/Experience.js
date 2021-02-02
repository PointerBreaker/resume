import {View, Text, Image, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    view: {marginLeft: 5, width: 350, backgroundColor: "#fff"},    
    title: { fontSize: 18, fontWeight: "bold", color: "black", alignSelf: "center", width: 225},
    subtitle: { fontSize: 12, fontWeight: "bold", color: "black", alignSelf: "center"},
    titleDateView: { alignItems: "flex-start", display: "flex", flexDirection: "row", width: 350},
    date: { fontSize: 9, color: "#777", alignSelf: "flex-end" },
    text: { fontSize: 11, width: 335 },
    cardView: { marginTop: 5 },
    image: { width: 12, height: 12, opacity: '0.5', marginRight: 5 },
    experienceTitle: { fontSize: 22, fontWeight: "bold", borderBottom: "1 solid black"},
  });

export default function Experience() {
    
    return (
        <View style={styles.view}>
        <Text style={styles.experienceTitle}>Experience</Text>
            <View style={styles.cardView}>
                <View style={styles.titleDateView}>
                     <Text style={styles.title}>Relatics</Text>
                    <View style={styles.date}>
                        <Text>Sept 2019 - Current</Text>
                        <Text>Software Engineer</Text>
                    </View>
                </View>
                <BulletPoint> Phasellus a est mi. Suspendisse potenti. Nunc sapien libero,
                vulputate vitae condimentum et, auctor vitae tellus. Nam sed ligula eget eros pharetra aliquam 
                in sit amet arcu. Suspendisse potenti.</BulletPoint>
            <BulletPoint>Test Bullet point2</BulletPoint>
            </View>
            <View style={styles.cardView}>
                <View style={styles.titleDateView}>
                    <Text style={styles.title}>ING</Text>
                    <View style={styles.date}>
                        <Text>Feb 2019 - Aug 2019</Text>
                        <Text>Software Engineering Intern</Text>
                    </View>
                </View>
                <BulletPoint> Phasellus a est mi. Suspendisse potenti. Nunc sapien libero,
                vulputate vitae condimentum et, auctor vitae tellus. Nam sed ligula eget eros pharetra aliquam 
                in sit amet arcu. Suspendisse potenti.</BulletPoint>
            <BulletPoint>Test Bullet point2</BulletPoint>
            </View>
            <View style={styles.cardView}>
                <View style={styles.titleDateView}>
                <Text style={styles.title}>Hogeschool Rotterdam</Text>
                    <View style={styles.date}>
                        <Text>Sept 2015 - Aug 2016</Text>
                        <Text>Peercoach</Text>
                        <Text>Sept 2018 - Feb 2019</Text>
                        <Text>Student Assistant teacher</Text>
                    </View>
                </View>
                <BulletPoint> Phasellus a est mi. Suspendisse potenti. Nunc sapien libero,
                vulputate vitae condimentum et, auctor vitae tellus. Nam sed ligula eget eros pharetra aliquam 
                in sit amet arcu. Suspendisse potenti.</BulletPoint>
            <BulletPoint>Test Bullet point2</BulletPoint>
            </View>
            <View style={styles.cardView}>
            <View style={styles.titleDateView}>
                <Text style={styles.title}>Port-IT</Text>
                <View style={styles.date}>
                    <Text>Feb 2014 - Aug 2018</Text>
                    <Text>Laravel Developer (Back-end)</Text>
                </View>
            </View>
            <BulletPoint> Phasellus a est mi. Suspendisse potenti. Nunc sapien libero,
                vulputate vitae condimentum et, auctor vitae tellus. Nam sed ligula eget eros pharetra aliquam 
                in sit amet arcu. Suspendisse potenti.</BulletPoint>
            <BulletPoint>Test Bullet point2</BulletPoint>
            </View>
            <View style={styles.cardView}>
                <View style={styles.titleDateView}>
                    <Text style={styles.title}>Centric</Text>
                    <View style={styles.date}>
                        <Text>Sept 2016 - Feb 2017</Text>
                        <Text>Software Engineering Intern</Text>
                    </View>
                </View>
                <BulletPoint> Phasellus a est mi. Suspendisse potenti. Nunc sapien libero,
                vulputate vitae condimentum et, auctor vitae tellus. Nam sed ligula eget eros pharetra aliquam 
                in sit amet arcu. Suspendisse potenti.</BulletPoint>
            <BulletPoint>Test Bullet point2</BulletPoint>
            </View>
        </View>        
    );
}


function BulletPoint({children}) {
        return (<View style={{...styles.titleDateView, ...{marginTop: 5}}}><Image style={styles.image} src={"/images/gamepad.png"}/><Text style={styles.text}>{children}</Text></View>);
   }