import React, { useRef } from "react";
import Remedies from "../components/remedyList";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import { Box } from "rebass";


import {Link, useParams} from "react-router-dom";


function MembersRemedy(props) {
  const {problemID} = useParams();

  const selectedRemedy = useRef();

  const postData = async (e) => {

    console.log(selectedRemedy +" was selected!")
    // const response = await fetch(`/api/symptom-remedy`, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   method: 'GET',
    //   //     body: JSON.stringify(dataToSend)
    //   //   });
    //   //   const json = await response.text()
    //   //   console.log(json);
    // }
  }





  return (<>

   <Header h1="REMEDIES"/>
   {/* <Remedies/>
   </>)
 }; */}

<Box
                sx={{
                    m: 70
                }}>
  <div>
    symptom selection goes here:{props.problemID}
  </div>
      <Remedies 
      selectedRemedy={selectedRemedy}
      />
      <button
        onClick={(e) => {
          console.log(selectedRemedy.current.state.selectedValues[0].foodGroupID)
          postData(e)
          
        }}
      >
        Find Natural Remedy
                </button>
                </Box>


                

    </>)
  };


  export default MembersRemedy;
