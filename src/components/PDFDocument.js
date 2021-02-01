import { Document, Page, Image, View, Text, StyleSheet, Font} from "@react-pdf/renderer";
import Skills from "./SkillSection";
import Bio from "./Bio";
import Experience from "./Experience";

Font.register({family: "montserrat", src: "/fonts/Montserrat/Montserrat-Regular.ttf" })
const styles = StyleSheet.create({
  bioView: { marginTop: 6, alignSelf: "flex-end", display: "flex", flexDirection: "row", justifyContent: "space-between", width: 280},
  leftRightView: {  fontFamily: "montserrat", marginTop: 6, display: "flex", flexDirection: "row", justifyContent: "space-between"},
  skills: { marginTop: 5, borderTop: "1 solid black", marginRight: 25, paddingRight: 15 }
});

export default function PDF() {
  return (
    <Document author="Jeroen Kooiman">
      <Page style={{backgroundColor: "#EEE"}} size="A4"> 
        <View style={styles.bioView}>
            <Image style={{width: 100, height: 100}}src="/images/pfp.jpg"/>
            <Bio />
        </View>
          {/* <Summary /> */}  
          
          {/* <Education /> */}        
          {/* <Other /> */}
          <View style={styles.leftRightView}>
            <Experience />
            <View style={styles.skills}>
              <Skills />
            </View>
          </View>
      </Page>
    </Document>
  );
}