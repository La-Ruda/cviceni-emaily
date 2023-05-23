console.log("This is the way");


window.onload = () => {

    fetch("https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread").then(
       (unopenedMails) => {
            return unopenedMails.json();
       })
       .then((unopenedMails) => {
            inboxUnopened.innerHTML = `<h2>Nepřečtené zprávy</h2>` + unopenedMails.emails.map(unopenedMail => `
                <div class="email">
                    <div class="email__head">
                      <button class="email__icon email__icon--closed"></button>
                      <div class="email__info">
                        <div class="email__sender">${unopenedMail.sender.name}</div>
                        <div class="email__subject">${unopenedMail.subject}</div>
                      </div>
                      <div class="email__time">${unopenedMail.time}</div>
                    </div>
                    <div class="email__body"></div>
                </div>`)
            .join(``);
        })
        .then(fetch("https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read").then(
          (openedMails) => {
             return openedMails.json();
          })
          .then((openedMails) => {
               inboxOpened.innerHTML = `<h2>Přečtené zprávy</h2>` + openedMails.emails.map(openedMail => `
                   <div class="email">
                       <div class="email__head">
                         <button class="email__icon email__icon--opened"></button>
                         <div class="email__info">
                           <div class="email__sender">${openedMail.sender.name}</div>
                           <div class="email__subject">${openedMail.subject}</div>
                         </div>
                         <div class="email__time">${openedMail.time}</div>
                       </div>
                       <div class="email__body"></div>
                   </div>`)
               .join(``);
        }))
};


const inboxUnopened = document.querySelector("#inbox__unopened");

const inboxOpened = document.querySelector("#inbox__opened");

