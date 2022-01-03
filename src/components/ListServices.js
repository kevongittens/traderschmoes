//import React from "react";
//import reactDom from "react-dom";

import { Amplify } from "aws-amplify";
import {withAuthenticator} from '@aws-amplify/ui-react';


import '@aws-amplify/ui-react/styles.css';

import awsconfig from '../aws-exports';
import React from "react";
Amplify.configure(awsconfig);



const ListServices = () => {

    return (
        <div ListServices>
            test
        </div>
    )
}

export default withAuthenticator(ListServices);