import React from "react"
import { useStoreContext } from '../utils/GlobalStore';
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import { Box, Heading } from "rebass";
import HomePgBtn from "../components/HomePgBtn"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MembersHome from "./MembersHome";
import MembersNew from "./MembersNew";
import MembersRemedy from "./MembersRemedy";
// import MembersHistory from "./MembersHistory";
export default function Members(){
    const [state] = useStoreContext();
    const {nickname} = state;
    return (
      <>
        <Router>
          <Navbar />
          <Header />
          <Wrapper>
            <Switch>
              <Route exact path="/members" component={MembersHome} />
              <Route exact path="/members/new" component={MembersNew} />
              <Route exact path="/members/remedy" component={MembersRemedy} />
              {/* <Route exact path="/members/history" component={MembersHistory} /> */}
            </Switch>
          </Wrapper>
          <Footer />
        </Router>
      </>
    
  

      <div>
    <Box
      sx={{
        p: 4,
        color: 'black',
        bg: '#eee',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
        mx: 100,
        my: 70,
        height: 400,
        // width: 400,
        borderRadius: 40
      }}>
      <Heading
        sx={{
          textAlign: "center",
        }}>
        WELCOME, {nickname}!
      </Heading>
      <Box
        sx={{
          textAlign: "center",
          mt: 50,
          mx: 0,
          boxSizing: "border-box",
        }}>
      <HomePgBtn name="NEW SYMPTOM"
      link = "/symptoms" />
      <HomePgBtn name="YOUR HISTORY"
      link = "/history" />

    </Box>
    </Box>
    
  </div>
  )
}

