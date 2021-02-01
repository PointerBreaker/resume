import { Document, Page, Image, View, Text, StyleSheet} from "@react-pdf/renderer";
import Skills from "./SkillSection";
import Bio from "./Bio";

const styles = StyleSheet.create({
  bioView: { marginTop: 6, alignSelf: "flex-end", display: "flex", flexDirection: "row", justifyContent: "space-between", width: 280},
  skills: { marginTop: 5, alignSelf: "flex-end", borderTop: "1 solid black" }
});

export default function PDF() {
  return (
    <Document author="Jeroen Kooiman">
      <Page size="A4"> 
        <View style={styles.bioView}>
            <Image style={{width: 100, height: 100}}src="/images/pfp.jpg"/>
            <Bio />
        </View>
          {/* <Summary /> */}  
          {/* <Experience /> */}
          {/* <Education /> */}        
          {/* <Other /> */}
          <View style={styles.skills}>
            <Skills />
          </View>
      </Page>
    </Document>
  );
}