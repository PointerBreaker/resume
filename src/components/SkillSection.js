import Rating from "./Rating";
import {View, Text, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    text: { fontSize: 12, width: 100},
    view: { alignItems: "flex-start", display: "flex", flexDirection: "row", justifyContent: "start", width: 175},    
    title: { fontSize: 22, fontWeight: "bold", borderBottom: "1 solid black"},
  });

export default function Skills() {
    return (
           <>
            <Text style={styles.title}>Skills</Text>
            <SkillItem amount={4} skillName={".NET"} />
            <SkillItem amount={5} skillName={"Typescript"}/>
            <SkillItem amount={4} skillName={"MSSQL"} half/>
            <SkillItem amount={2} skillName={"Pen Testing"} half/>
          </>
    );
}

function SkillItem({amount, skillName, half})
{
    return (<>
                <View style={styles.view}><Text style={styles.text}>{skillName}</Text><Rating amount={amount} half={half}/></View>
            </>);
}