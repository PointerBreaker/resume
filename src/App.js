
import { Document, Page, Text, PDFDownloadLink} from "@react-pdf/renderer";
import PDF from "./components/PDFDocument";
function App() {
  return (
    <>
    <PDFDownloadLink document={<PDF/>} fileName="resume.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </>
  );
}

export default App;
