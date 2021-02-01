import { Document, Page, Image, View, Text, StyleSheet, Font} from "@react-pdf/renderer";
import Skills from "./SkillSection";
import Bio from "./Bio";
import Experience from "./Experience";
import Summary from "./Summary";

Font.register({family: "montserrat", src: "/fonts/Montserrat/Montserrat-Regular.ttf" }, )
Font.register({family: "montserrat", src: "/fonts/Montserrat/Montserrat-Bold.ttf", fontWeight: "bold" })
const styles = StyleSheet.create({
  page: {fontFamily: "montserrat"},
  bioView: { marginTop: 6, alignSelf: "flex-end", display: "flex", flexDirection: "row", justifyContent: "space-between", width: 595},
  leftRightView: { marginTop: 6, display: "flex", flexDirection: "row", justifyContent: "space-between"},
  skills: { marginRight: 25, paddingRight: 15 }
});

export default function PDF() {
  return (
    <Document author="Jeroen Kooiman">
      <Page style={{backgroundColor: "#EEE"}} size="A4"> 
        <View style={styles.bioView}>
            <Summary />  
            <Image style={{width: 100, height: 100}}src="/images/pfp.jpg"/>
            <Bio />
        </View>          
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