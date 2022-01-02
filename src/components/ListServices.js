//import React from "react";
//import reactDom from "react-dom";

import { Auth } from "aws-amplify";
import awsconfig from '../aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react';
Auth.configure(awsconfig);

const ListServices = () => {

    return (
        <div>
            test
        </div>
    )
}
export default withAuthenticator(ListServices);