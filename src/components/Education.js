import {View, Text, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    view: {marginTop: 5, width: 225},    
    title: { fontSize: 15, fontWeight: "bold", color: "black", width: 125 },    
    titleDateView: { alignItems: "flex-start", display: "flex", flexDirection: "row", width: 225 },
    date: { fontSize: 9, color: "#777", alignSelf: "center", marginRight: 5 },    
    text: { marginTop: 5, fontSize: 11, width: 225, fontColor: "#777" },
    cardView: { marginTop: 8 },
    educationTitle: { fontSize: 22, fontWeight: "bold", borderBottom: "1 solid black"},
  });

export default function Education() {
    
    return (
        <View style={styles.view}>
            <Text style={styles.educationTitle}>Education</Text>
                <EducationItem institutionName={`Hogeschool \nRotterdam`} className="Computer Science" minor="Minor in Cyber Security" level="Bachelor's Degree" date="Sept 2014 - Jul 2019">
                    <Certificate name="Diploma" date="Jul 2019"/>
                    <Certificate name="Propaedeutics" date="Jul 2015" />
                    <Certificate name="Coaching Certification" date="Nov 2015" />
                </EducationItem>
                <EducationItem institutionName={`Albeda \n College`} className="IT Employee" date="Sept 2011 - Jul 2013">
                    <Certificate name={`Cisco CCNA Discovery Networking \n for Home & Small businesses`} date="Feb 2012" />
                    <Certificate name="Diploma" date="Jul 2013" />
                </EducationItem>
        </View>        
    );
}

function EducationItem({institutionName, className, level, minor, date, children})
{
    return(<View style={styles.cardView}>        
                <View style={styles.titleDateView}>
                    <Text style={styles.title}>{institutionName}</Text>
                    <View style={styles.date}>
                        <Text>{date}</Text>
                        <Text>{className}</Text>
                        {minor && (<Text>{minor}</Text>)}
                        {level && (<Text>{level}</Text>)}
                    </View>
                </View>
                <View style={styles.text}>
                    {children}
                </View>
            </View>);
}

function Certificate({ name, date})
{
    return(<View style={{...styles.titleDateView, ...{justifyContent: "space-between"}} }>
        <Text style={{...styles.date, ...{marginRight: 0, marginTop: 3}}}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
    </View>);
}