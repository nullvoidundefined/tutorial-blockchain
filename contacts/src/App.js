import { CONTACT_ABI, CONTACT_ADDRESS } from "./config";
import { useEffect, useRef, useState } from "react";

import Web3 from "web3";

function App() {
  const hasLoaded = useRef(false);

  const [account, setAccount] = useState();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.requestAccounts();

      setAccount(accounts[0]);

      const contactListContract = new web3.eth.Contract(
        CONTACT_ABI,
        CONTACT_ADDRESS
      );

      const counter = await contactListContract.methods.count().call();

      for (var i = 1; i <= counter; i++) {
        const contact = await contactListContract.methods.contacts(i).call();
        setContacts((contacts) => [...contacts, contact]);
      }
    }
    
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      load();
    }
  }, []);

  return (
    <div>
      Your account is: {account}
      <h1>Contacts</h1>
      <ul>
        {Object.keys(contacts).map((contact, index) => {
          console.log(contacts);
          return (
            <li key={`${contacts[index].name}-${index}`}>
              <h4>{contacts[index].name}</h4>
              <span>
                <b>Phone: </b>
                {contacts[index].phone}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
