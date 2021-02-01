import {View, Text, Link, Image, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    text: { fontSize: 12, width: 160},
    view: { alignItems: "flex-start", display: "flex", flexDirection: "row", justifyContent: "space-between", width: 175},
    image: { width: 12, height: 12, },
  });

export default function Bio() {
    
    return (
           <>
            <BioItem src={"/images/name.png"} text={"Jeroen Kooiman"}/>
            <BioItem src={"/images/home.png"} text={"Sliedrecht, Zuid-Holland"}/>
            <BioItem src={"/images/cake.png"} text={"19 Feb 1993"}/>
            <BioItem src={"/images/email.png"} text={"jeroen@jeroenkooiman.net"} url={"mailto:jeroen@jeroenkooiman.net"}/>
            <BioItem src={"/images/phone.png"} text={"06 45 65 27 54"} url={"tel:+31645652754"}/>
            <BioItem src={"/images/globe.png"} text={"jeroenkooiman.net"} url={"https://jeroenkooiman.net"}/>
          </>
    );
}


function BioItem({src, text, url}) {
    return(<View style={styles.view}>
        <Image style={styles.image} src={src}/>
        {url && (<Link src={url}><Text style={styles.text}>{text}</Text></Link>)}
        {!url && (<><Text style={styles.text}>{text}</Text></>)}
        </View>);
   }