import React from "react";
import { Image, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  image: { width: 12, height: 12, },
  imageHalf: { width: 6, height: 12, },
  view: { display: "flex", flexDirection: "row", justifyContent: "space-between"},
 });

function Rating({amount, half}) {
    var rating = [...Array(amount).keys()]
        .map((_,index) => (<Image key={index} style={styles.image} src="/images/console.png"></Image>));
    if(half)
    {
      rating = <>{rating}<Image style={styles.imageHalf} src="/images/halfconsole.png"></Image></>
    }

    return (<View style={{...styles.view, ...{width: (15*amount + (half ? 8:0))}}}>{rating}</View>);    
} 


export default Rating;