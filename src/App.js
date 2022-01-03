//import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListServices from "./components/ListServices";
import { Grid, View, Image, Flex } from '@aws-amplify/ui-react';


//import Amplify, { Auth } from 'aws-amplify';
//import awsconfig from './aws-exports';
//import {withAuthenticator} from '@aws-amplify/ui-react';
//Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          OK!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }}>
      <Flex
        // backgroundColor={tokens.colors.background.secondary}
        justifyContent="center"
      >
        <div className='ListSercices'>
          test
          <ListServices />
        </div>
        </Flex>

      <View height="100vh">
        <Image
          src="https://images.unsplash.com/photo-1495954222046-2c427ecb546d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJzfHx8fHx8MTYzNzE5MzE2MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </View>
      
      </Grid>



    </div>
    
  );
}

export default App;
