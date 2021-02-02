import { Document, Page, Image, View, Text, StyleSheet, Font} from "@react-pdf/renderer";
import Skills from "./SkillSection";
import Bio from "./Bio";
import Experience from "./Experience";
import Summary from "./Summary";
import Education from "./Education";

Font.register({family: "montserrat", src: "/fonts/Montserrat/Montserrat-Regular.ttf" }, )
Font.register({family: "montserrat", src: "/fonts/Montserrat/Montserrat-Bold.ttf", fontWeight: "bold" })
const styles = StyleSheet.create({
  page: {fontFamily: "montserrat"},
  summaryView: { marginTop: 6, alignSelf: "flex-end", display: "flex", flexDirection: "row", justifyContent: "space-between", width: 350},
  leftRightView: {display: "flex", flexDirection: "row", justifyContent: "space-between"},
  skills: { marginRight: 25, paddingRight: 15},
  rightView: { backgroundColor: "#CCC", height: 841}
});

// A4 595 x 
export default function PDF() {
  return (
    <Document author="Jeroen Kooiman">
      <Page style={{backgroundColor: "#FFF"}} size="A4">  

          {/* <Other /> */}
          <View style={styles.leftRightView}>
          <View>
            <View style={styles.summaryView}>
              <Image style={{width: 100, height: 100}}src="/images/pfp.jpg"/>
              <Summary />  
            </View>
            <Experience />
          </View>                    
          <View style={styles.rightView}>
            <View style={{marginLeft: 5}}>
              <Bio />
              <Skills />
              <Education />
            </View>
          </View>
          </View>
      </Page>
    </Document>
  );
}