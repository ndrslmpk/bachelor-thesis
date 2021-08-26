import React from 'react';

function SmartContractManagementComponent(props, className) {
    return (
        <div id="sc-dashboard" className={{className}}>
          <p>Contract Name: String</p>
          <button className="border rounded-md p-2 hover:bg-primary"> More details</button>
          <div id="sc-details" className="flex my-5 p-5">
            <ul className="flex flex-col list-disc">
              <li className="w-full list-disc text-left"><p> Contract Value: </p></li>
              <li className="w-full list-disc text-left">Contract Name:</li>
              <li className="w-full list-disc text-left">Contract Phase:</li>
              <li className="w-full list-disc text-left">Contract created at:</li>
              <li className="w-full list-disc text-left">Contract creator/importer: Address</li>
              <li className="w-full list-disc text-left">Contract contrahent/exporter: Address</li>
            </ul>
          </div>
        </div>
    );
}

export default SmartContractManagementComponent;