import Rating from "./Rating";
import {View, Text, StyleSheet} from "@react-pdf/renderer";

const style = StyleSheet.create({
    text: { fontSize: 12, width: 100},
    view: { alignItems: "flex-start", display: "flex", flexDirection: "row", justifyContent: "start", width: 175},
  });

export default function Skills() {
    return (
           <>
            <Text>Skills</Text>
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
                <View style={style.view}><Text style={style.text}>{skillName}</Text><Rating amount={amount} half={half}/></View>
            </>);
}