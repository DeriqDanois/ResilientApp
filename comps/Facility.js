import React from 'react'
import { View, Text, ScrollView} from 'react-native';
import DetailsCardStyles from '../styles/ComponentStyles/DetailsCardStyles';


//  Overview tab below
function Facility(props){

    return(

    <View style={{flex:1}}>
        <ScrollView style={{flex:1}}>
            {/* First row */}
            <View style={{flex:0.8}}>
            <Text style={DetailsCardStyles.facilityTextHeader}>Types</Text>
                <View style={DetailsCardStyles.rowViews}>
                    <View style={DetailsCardStyles.rowColumnViews}>
                        <Text style={DetailsCardStyles.facilitiesText}>Outpatient Rehab</Text>
                        <Text style={DetailsCardStyles.facilitiesText}>Sober Living</Text>
                        <Text style={DetailsCardStyles.facilitiesText}>Family Support</Text>
                    </View>
                    <View style={DetailsCardStyles.rowColumnViews}>
                        <Text style={DetailsCardStyles.facilitiesText}>Inpatient Rehab</Text>
                        <Text style={DetailsCardStyles.facilitiesText}>Detox Centre</Text>
                        <Text style={DetailsCardStyles.facilitiesText}>Therapy Programs</Text>
                    </View>
                </View>
            </View>
            {/* Second row */}
            <View style={{flex:0.5}}>
            <Text style={DetailsCardStyles.facilityTextHeader}>Core Practices</Text>
                <View style={DetailsCardStyles.rowViews}>
                    <View style={DetailsCardStyles.rowColumnViews}>
                        <Text style={DetailsCardStyles.facilitiesText}>Smart Recovery</Text>
                    </View>
                    <View style={DetailsCardStyles.rowColumnViews}>
                        <Text style={DetailsCardStyles.facilitiesText}>12 Step</Text>
                    </View>
                </View>
            </View>
            {/* third row */}
            <View style={{flex:0.5}}>
            <Text style={DetailsCardStyles.facilityTextHeader}>Average Price Range</Text>
                <View style={DetailsCardStyles.rowViews}>
                    <View style={DetailsCardStyles.rowColumnViews}>
                        <Text style={DetailsCardStyles.facilitiesText}>8,000-10,000</Text>
     
                    </View>
                    <View style={DetailsCardStyles.rowColumnViews}>
                        <Text style={DetailsCardStyles.facilitiesText}>/Month</Text>
 
                    </View>
                </View>
            </View>
            {/* fourth row */}
            <View style={{flex:0.5}}>
            <Text style={DetailsCardStyles.facilityTextHeader}>Program Length</Text>
                <View style={DetailsCardStyles.rowViews}>
                    <View style={DetailsCardStyles.rowColumnViews}>
                        <Text style={DetailsCardStyles.facilitiesText}>2 Weeks</Text>
                    </View>
                    <View style={DetailsCardStyles.rowColumnViews}>
                        <Text style={DetailsCardStyles.facilitiesText}>Three Months</Text>
                    </View>
                </View>
            </View>
            {/* fifth row */}
            <View style={{flex:0.5}}>
            <Text style={DetailsCardStyles.facilityTextHeader}>Substance Treatments</Text>
                <View style={DetailsCardStyles.rowViews}>
                    <View style={DetailsCardStyles.rowColumnViews}>
                        <Text style={DetailsCardStyles.facilitiesText}>Stimulants</Text>
                        <Text style={DetailsCardStyles.facilitiesText}>Alchohal</Text>
                    </View>
                    <View style={DetailsCardStyles.rowColumnViews}>
                        <Text style={DetailsCardStyles.facilitiesText}>Opiates</Text>
                    </View>
                </View>
            </View>
            {/* sixth row */}
            <View style={{flex:0.5}}>
            <Text style={DetailsCardStyles.facilityTextHeader}>Additional Services</Text>
            {/* bottom row has no border bottom therfore I did not style in in detals style */}
                <View style={{flex:1, flexDirection:"row",  alignItems:"center"}}>
                    <View style={DetailsCardStyles.rowColumnViews}>
                        <Text style={DetailsCardStyles.facilitiesText}>PTSD Therapy</Text>
                        <Text style={DetailsCardStyles.facilitiesText}>Neurofeedback</Text>
                        <Text style={DetailsCardStyles.facilitiesText}>Art Therapy</Text>
                        <Text style={DetailsCardStyles.facilitiesText}>Acupunture</Text>
                        <Text style={DetailsCardStyles.facilitiesText}>Hockey Program</Text>
                    </View>
                    <View style={DetailsCardStyles.rowColumnViews}>
                        <Text style={DetailsCardStyles.facilitiesText}>Veterans Services</Text>
                        <Text style={DetailsCardStyles.facilitiesText}>Aftercare counseling</Text>
                        <Text style={DetailsCardStyles.facilitiesText}>Music Therapy</Text>
                        <Text style={DetailsCardStyles.facilitiesText}>Mindfulness Class</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
     </View>  
  
  
    )
   }



   export default Facility;