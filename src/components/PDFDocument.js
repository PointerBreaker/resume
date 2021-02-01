import { Document, Page, View, Text, StyleSheet} from "@react-pdf/renderer";
import Skills from "./SkillSection";
import Bio from "./Bio";

export default function PDF() {
  return (
    <Document author="Jeroen Kooiman">
      <Page size="A4">    
          <Bio />
          {/* <Summary /> */}
          {/* <Experience /> */}
          {/* <Education /> */}        
          {/* <Other /> */}
          <Skills />
      </Page>
    </Document>
  );
}