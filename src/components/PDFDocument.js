import { Document, Page, View, Text, StyleSheet} from "@react-pdf/renderer";
import Rating from "./Rating";



export default function PDF() {
  return (
    <Document author="Jeroen Kooiman">
      <Page size="A4">    
          <Rating amount={4}>      </Rating>
          <Rating amount={5}/>
          <Rating amount={6} half/>
          <Rating amount={7} half/>
      </Page>
    </Document>
  );
}