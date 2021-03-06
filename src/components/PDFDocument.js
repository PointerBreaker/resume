import { Document, Page, Image, View, Text, StyleSheet, Font} from "@react-pdf/renderer";
import Skills from "./SkillSection";
import Bio from "./Bio";
import Experience from "./Experience";
import Summary from "./Summary";
import Education from "./Education";
import Other from "./Other";

Font.register({family: "montserrat", src: "/fonts/Montserrat/Montserrat-Regular.ttf" }, );
Font.register({family: "montserrat", src: "/fonts/Montserrat/Montserrat-Bold.ttf", fontWeight: "bold" });

const styles = StyleSheet.create({
  summaryView: { marginTop: 6, alignSelf: "flex-end", display: "flex", flexDirection: "row", justifyContent: "space-between", width: 350, paddingBottom: 10 },
  leftRightView: {fontFamily: "montserrat", display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: 5 },
  skills: { marginRight: 25, paddingRight: 15},
  rightView: { backgroundColor: "#CCC", height: 841},
  profilePicture: { width: 100, height: 100, alignSelf: "center" },
  rightPanel: {marginLeft: 10},
  pageStyle: {backgroundColor: "#FFF"}
});

// A4 595 x 
export default function PDF() {
  return (
    <Document author="Jeroen Kooiman">
      <Page size="A4">  
          <View style={styles.leftRightView}>
            <View>
              <View style={styles.summaryView}>
                <Image style={styles.profilePicture}src="/images/pfp.jpg"/>
                <Summary />  
              </View>
              <Experience />
            </View>                    
            <View style={styles.rightView}>
              <View style={styles.rightPanel}>
                <Bio />
                <Skills />
                <Education />
                <Other />
              </View>
            </View>
          </View>
      </Page>
    </Document>
  );
}