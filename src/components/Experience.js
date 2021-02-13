import {View, Text, Image, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    view: {marginLeft: 5, width: 350, backgroundColor: "#fff"},    
    title: { fontSize: 18, fontWeight: "bold", alignSelf: "center", width: 225},
    subtitle: { fontSize: 12, fontWeight: "bold", color: "black", alignSelf: "center"},
    titleDateView: { alignItems: "flex-start", display: "flex", flexDirection: "row", width: 350},
    date: { fontSize: 8, color: "#777", alignSelf: "flex-end" },
    text: { fontSize: 10, width: 325, },
    cardView: { marginTop: 10 },
    image: { width: 12, height: 12, opacity: '0.5', marginRight: 5 },
    experienceTitle: { fontSize: 22, fontWeight: "bold", color: "dodgerblue", borderBottom: "1 solid black"},
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
                <BulletPoint>Building a new version of the Relatics-software from scratch using, React, MSSQL, C#/.NET(Core).</BulletPoint>
                <BulletPoint>Worked on Architecture, Authentication, Authorization, Data History, Data filtering / Management.</BulletPoint>
            </View>
            <View style={styles.cardView}>
                <View style={styles.titleDateView}>
                    <Text style={styles.title}>ING</Text>
                    <View style={styles.date}>
                        <Text>Feb 2019 - Aug 2019</Text>
                        <Text>Software Engineering Intern</Text>
                    </View>
                </View>
                <BulletPoint>Securing the endpoints of their IaaS software.</BulletPoint>
                <BulletPoint>Using .NET 4.7 and Angular, an authentication flow based on LDAP and ADFS was built.</BulletPoint>
                <BulletPoint>Built a system using attributes and reflection which allows the encryption of objects in memory and in storage.</BulletPoint>
                <BulletPoint>Additionally built an architecture for migration of current endpoints and creation of new endpoints.</BulletPoint>
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
                <BulletPoint>Giving classes in Cyber security for first year students and answering any question they have about the material</BulletPoint>
                <BulletPoint>
                     Taught first year students about Packet analysis, Attacks on Web applications (e.g. XSS, SQLI, CSRF, etc.) and log analysis.
                </BulletPoint>
                <BulletPoint>Guiding First year students and helping with any question they may have.</BulletPoint>
            </View>
            <View style={styles.cardView}>
            <View style={styles.titleDateView}>
                <Text style={styles.title}>Port-IT</Text>
                <View style={styles.date}>
                    <Text>Feb 2014 - Aug 2018</Text>
                    <Text>Laravel Developer (Back-end)</Text>
                </View>
            </View>
            <BulletPoint>Extending the features of their backoffice portal software and automating the process of their business logic.</BulletPoint>
            <BulletPoint>Completely rebuilt the portal to a new version with PHP 7 and laravel (From Fuel).</BulletPoint>
            <BulletPoint>Built a module for Wifi routers using PHP, MySQL, JS, and Radius. The software built would allow for remote management of the routers. This includes user management, data proxy (For data compression), black/whitelisting, etc.</BulletPoint>
            </View>
            <View style={styles.cardView}>
                <View style={styles.titleDateView}>
                    <Text style={styles.title}>Centric</Text>
                    <View style={styles.date}>
                        <Text>Sept 2016 - Feb 2017</Text>
                        <Text>Software Engineering Intern</Text>
                    </View>
                </View>
                <BulletPoint>Adding authentication and authorization to their boilerplate software.</BulletPoint>
                <BulletPoint>The architecture was built with various techniques including CQRS, IOC, DI among others.</BulletPoint>
                <BulletPoint>The modules were built in .NET, Angular and the entity framework.</BulletPoint>
            </View>
        </View>        
    );
}


function BulletPoint({children}) {
        return (<View style={{...styles.titleDateView, ...{marginTop: 5}}}><Image style={styles.image} src={"/images/gamepad.png"}/><Text style={styles.text}>{children}</Text></View>);
   }