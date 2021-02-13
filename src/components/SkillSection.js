import Rating from "./Rating";
import {View, Text, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    block: { },
    text: { fontSize: 11, width: 125},
    view: { alignItems: "flex-start", display: "flex", flexDirection: "row", justifyContent: "start", width: 175, marginTop: 3.5},    
    title: { fontSize: 22, fontWeight: "bold", borderBottom: "1 solid black", color: "dodgerblue"},
  });

export default function Skills() {
    return (
           <View style={styles.block}>
            <Text style={styles.title}>Skills</Text>
            <SkillItem amount={4} skillName={".NET"} />
            <SkillItem amount={4} skillName={"Typescript"}/>
            <SkillItem amount={4} skillName={"MSSQL"} half/>
            <SkillItem amount={3} skillName={"Pen Testing"}/>
            <SkillItem amount={2} skillName={"C/C++"} half/>
            <SkillItem amount={3} skillName={"React"} half/>
            <SkillItem amount={4} skillName={"Middleware"} half/>
            <SkillItem amount={4} skillName={"Back-end"} half/>
            <SkillItem amount={2} skillName={"Server management"} half/>
            <SkillItem amount={3} skillName={"Git"} half/>
            <SkillItem amount={2} skillName={"DevOPS"}/>
            <SkillItem amount={4} skillName={"Dutch"}/>
            <SkillItem amount={4} skillName={"English"}/>
          </View>
    );
}

function SkillItem({amount, skillName, half})
{
    return (<>
                <View style={styles.view}><Text style={styles.text}>{skillName}</Text><Rating amount={amount} half={half}/></View>
            </>);
}