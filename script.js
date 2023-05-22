console.log("This is the way");


const fetchMails = () => {

    fetch("https://apps.kodim.cz/daweb/trening-api/apis/emails").then(
       (mails) => {
            return mails.json();
       })
       .then((mails) => {
            console.log(mails)
            inbox.innerHTML = mails.emails.map(mail => `
                <div class="email">
                    <div class="email__head">
                      <button class="email__icon email__icon--closed"></button>
                      <div class="email__info">
                        <div class="email__sender">${mail.sender}</div>
                        <div class="email__subject">${mail.subject}</div>
                      </div>
                      <div class="email__time">${mail.time}</div>
                    </div>
                    <div class="email__body"></div>
                </div>`)
            .join(``);
        });
};

let loadInbox = document.querySelector(".loadInbox").addEventListener("click", fetchMails);

let inbox = document.querySelector("#inbox");