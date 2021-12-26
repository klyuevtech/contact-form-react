import './App.css';
import ContactForm from "./components/contact-form/ContactForm";
import {useState} from "react";

function App() {
    const [contactFormFields, setContactFormFields] = useState({});
    function contactFormSubmitHandler(event) {
        event.preventDefault();
        console.log(contactFormFields);

        shadeForm();
        postData('https://msbconsulting.ru/ecwid-test/mailer.php', contactFormFields)
            .then(data => {
                if (data.result) {
                    topMessage('Your question has been sent!');
                } else {
                    topMessage(`Sorry, we couldn't send your message.`);
                }
            }).catch(error=>{
                console.error(`Couldn't send the form. Error: ${error}`);
                topMessage(`Sorry, we couldn't send your message.`);
            })
            .finally(() => unShadeForm());
    }
    function shadeForm() {
        const overlay = document.getElementById('form_overlay');
        if (overlay) {
            overlay.classList.add('overlay-show');
        }
    }
    function unShadeForm() {
        const overlay = document.getElementById('form_overlay');
        if (overlay) {
            overlay.classList.remove('overlay-show');
        }
    }

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });

        return response.json(); // parses JSON response into native JavaScript objects
    }

    function topMessage(messageText) {
        const messageContainer = document.getElementById('top_message');
        messageContainer.innerHTML = messageText;
        messageContainer.style.opacity = 1;

        (new Promise((resolve, reject) => {
            setTimeout(() => {
                messageContainer.style.opacity = 0;
                resolve();
            }, 5000);
        })).then((value) => {
            setTimeout(() => {
                messageContainer.innerHTML = '';
            }, 1000);
        });
    }

    return (
      <div className="app">
          <div className="top-message-container">
            <div className="top-message" id="top_message"></div>
          </div>
          <div className="main-container">
            <div className="content-container">
              <header>
                  <h1>Contact Us</h1>
              </header>
              <main>
                <ContactForm onSubmit={contactFormSubmitHandler} passthroughFormFields={setContactFormFields}/>
                <div id="form_overlay">
                  <div className="spinner"></div>
                  <div>Please wait..</div>
                </div>
              </main>
            </div>
          </div>
      </div>
    );
}

export default App;
