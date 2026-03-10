// Bulk Email sending simulation whit parallel promises and error handling
// think of a scanario where you must simulate sending bulk emails to 5 users.
// Treat eace email-sending operation as aPromise(you may simulate it using setTimeout).

// All emails must be sent in parallel using Promise.all.

// If any email fails(for example, due to a random failure condition), you must catch the error and clearly show which specific email filed.
// In addition, use a finally block to display a message indicating that the "Email process is complete."

// ek array hoga of emails

const users = [
    "akarsh@female.com",
    "satwik@male.com",
    "sonali@mail.com"
];

function sendEmail(email){
    return new Promise((resolve, reject)=>{
        let time = Math.floor(Math.random() * 5)
        setTimeout(() => {
            let probability = Math.floor(Math.random() * 10);
            if(probability <=5 ) resolve("Email successfully sent.");
            else reject("Email not sent..");
        },time * 1000);
    })
}

// sendEmail("harsh@mail.com")
// .then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
// })

async function sendEmails(userlist){
    let allresponses = userlist.map(function(email){
     return sendEmail(email)
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    });
    let ans = await Promise.all(allresponses);
    ans.forEach(function(status){
        console.log(status)
    })
}
sendEmails(users)