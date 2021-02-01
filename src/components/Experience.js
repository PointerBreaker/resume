import {View, Text, Link, Image, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    title: { fontSize: 18, fontWeight: "bold", color: "black"},
    titleDateView: {  alignItems: "flex-start", display: "flex", flexDirection: "row", justifyContent: "space-between", width: 350},
    date: { fontSize: 9, color: "#777", alignSelf: "flex-end" },
    text: { fontSize: 11 },
    cardView: { marginTop: 3 },
    view: {marginLeft: 5, width: 350},
    // viewColumn: { display: "flex", flexDirection: "column", justifyContent: "space-between"},
  });

export default function Experience() {
    
    return (
        <View style={styles.view}>
            <View style={styles.cardView}>
                <View style={styles.titleDateView}>
                    <Text style={styles.title}>Relatics</Text>
                    <View style={styles.date}>
                        <Text>Sept 2019 - Current</Text>
                        <Text>Ridderkerk</Text>
                    </View>
                </View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper nisl et elit scelerisque, 
                    id finibus orci mollis. Praesent tincidunt, est sit amet aliquam gravida, quam velit congue ligula, 
                    venenatis accumsan orci odio a nibh. Phasellus a sest mi. Suspendisse potenti. Nunc sapien libero,
                    vulputate vitae condimentum et, auctor vitae tellus. Nam sed ligula eget eros pharetra aliquam 
                    in sit amet arcu. Suspendisse potenti. Aliquam faucibus faucibus odio, a porta mauris gravida id. 
                    In scelerisque viverra orci in lacinia. Aenean nec nunc tempus, facilisis nulla lobortis, scelerisque odio. 
                    Suspendisse ac pulvinar diam.
                </Text>
            </View>
            <View style={styles.cardView}>
                <View style={styles.titleDateView}>
                    <Text style={styles.title}>ING</Text>
                    <View style={styles.date}>
                        <Text>Feb 2019 - Aug 2019</Text>
                        <Text>Rotterdam</Text>
                    </View>
                </View>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper nisl et elit scelerisque, 
                id finibus orci mollis. Praesent tincidunt, est sit amet aliquam gravida, quam velit congue ligula, 
                venenatis accumsan orci odio a nibh. Phasellus a est mi. Suspendisse potenti. Nunc sapien libero,
                    vulputate vitae condimentum et, auctor vitae tellus. Nam sed ligula eget eros pharetra aliquam 
                    in sit amet arcu. Suspendisse potenti. Aliquam faucibus faucibus odio, a porta mauris gravida id. 
                    In scelerisque viverra orci in lacinia. Aenean nec nunc tempus, facilisis nulla lobortis, scelerisque odio. 
                    Suspendisse ac pulvinar diam.
            </Text>
            </View>
            <View style={styles.cardView}>
                <View style={styles.titleDateView}>
                <Text style={styles.title}>Hogeschool Rotterdam</Text>
                    <View style={styles.date}>
                        <Text>Sept 2015 - Aug 2016</Text>
                        <Text>Peercoach</Text>
                        <Text>Sept 2018 - Feb 2019</Text>
                        <Text>Student Assistant teacher</Text>
                        <Text>Rotterdam</Text>
                    </View>
                </View>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper nisl et elit scelerisque, 
                id finibus orci mollis. Praesent tincidunt, est sit amet aliquam gravida, quam velit congue ligula, 
                venenatis accumsan orci odio a nibh. Phasellus a est mi. Suspendisse potenti. Nunc sapien libero,
                vulputate vitae condimentum et, auctor vitae tellus. Nam sed ligula eget eros pharetra aliquam 
                in sit amet arcu. Suspendisse potenti. Aliquam faucibus faucibus odio, a porta mauris gravida id. 
                In scelerisque viverra orci in lacinia. Aenean nec nunc tempus, facilisis nulla lobortis, scelerisque odio. 
                Suspendisse ac pulvinar diam.
            </Text>
            </View>
            <View style={styles.cardView}>
            <View style={styles.titleDateView}>
                <Text style={styles.title}>Port-IT</Text>
                <View style={styles.date}>
                    <Text>Feb 2014 - Aug 2018</Text>
                    <Text>Laravel Developer (Back-end)</Text>
                    <Text>Barendrecht</Text>
                </View>
            </View>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper nisl et elit scelerisque, 
                id finibus orci mollis. Praesent tincidunt, est sit amet aliquam gravida, quam velit congue ligula, 
                venenatis accumsan orci odio a nibh. Phasellus a est mi. Suspendisse potenti. Nunc sapien libero,
                vulputate vitae condimentum et, auctor vitae tellus. Nam sed ligula eget eros pharetra aliquam 
                in sit amet arcu. Suspendisse potenti. Aliquam faucibus faucibus odio, a porta mauris gravida id. 
                In scelerisque viverra orci in lacinia. Aenean nec nunc tempus, facilisis nulla lobortis, scelerisque odio. 
                Suspendisse ac pulvinar diam.
            </Text>
            </View>
        </View>
    );
}


function ExperienceItem({src, text, url}) {
    // return(<View style={styles.view}>
    //     <Image style={styles.image} src={src}/>
    //     {url && (<Link src={url}><Text style={styles.text}>{text}</Text></Link>)}
    //     {!url && (<><Text style={styles.text}>{text}</Text></>)}
    //     </View>);
   }