require("dotenv").config();
import request from "request";


let handleSetupProfileAPI =()=> {

    return new Promise((resolve, reject) => {
        try {

            let url = `https://graph.facebook.com/v7.0/me/messenger_profile?access_token=${process.env.FB_PAGE_TOKEN}`;
            let request_body = {
                "get_started": {
                    "payload": "GET_STARTED"
                },
                "persistent_menu": [
                    {
                        "locale": "default",
                        "composer_input_disabled": false,
                        "call_to_actions": [
                            {
                                "type": "postback",
                                "title": "خدمه العملاء",
                                "payload": "TALK_AGENT"
                            },
                            {
                                "type": "postback",
                                "title": "بدايه المحادثه",
                                "payload": "RESTART_CONVERSATION"
                            },
                            {
                                "type": "nested",
                                "title": "المزيد من المعلومات",
                                "call_to_actions": [
                                    {
                                        "type": "web_url",
                                        "title": "View Facebook Fan Page",
                                        "url": "https://www.facebook.com/Electronic-shopping-Bot-103144111594255/",
                                        "webview_height_ratio": "full"
                                    },
                                    {
                                        "type": "web_url",
                                        "title": "View Youtube channel",
                                        "url": "https://www.youtube.com/channel/UCTA3zKJEn_ubhRjUavl05Jg?view_as=subscriber",
                                        "webview_height_ratio": "full"
                                    },
                                ]
                            }
                        ]
                    }
                ],
                "whitelisted_domains": [
                    "https://kholoudapp.herokuapp.com/"
                ]
            };
            // Send the HTTP request to the Messenger Platform
            request({
                "uri": url,
                "method": "POST",
                "json": request_body
            }, (err, res, body) => {
                if (!err) {
                    resolve("Done!")
                } else {
                    reject("Unable to send  k message:" + err);
                }
            });
        } catch (e) {
            reject(e);
        }
    });





};


let getFacebookUsername = (sender_psid) => {
    return new Promise((resolve, reject) => {
        try {
            //curl -X GET "https://graph.facebook.com/<PSID>?fields=first_name,last_name,profile_pic&access_token=<PAGE_ACCESS_TOKEN>"

            // Send the HTTP request to the Messenger Platform
            let url = `https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${process.env.FB_PAGE_TOKEN}`;
            request({
                "uri": url,
                "method": "GET",
            }, (err, res, body) => {
                if (!err) {
                    //convert string to json object
                    body = JSON.parse(body);
                    let username = `${body.last_name} ${body.first_name}`;
                    resolve(username);
                } else {
                    reject("Unable to send message:" + err);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

let sendTypingOn = (sender_psid) => {
    return new Promise((resolve, reject) => {
        try {
            let request_body = {
                "recipient": {
                    "id": sender_psid
                },
                "sender_action": "typing_on"
            };

            let url = `https://graph.facebook.com/v6.0/me/messages?access_token=${process.env.FB_PAGE_TOKEN}`;
            request({
                "uri": url,
                "method": "POST",
                "json": request_body

            }, (err, res, body) => {
                if (!err) {
                    resolve("done!");
                } else {
                    reject("Unable to send message:" + err);
                }
            });

        } catch (e) {
            reject(e);
        }
    });
};



let markMessageRead = (sender_psid) => {
    return new Promise((resolve, reject) => {
        try {
            let request_body = {
                "recipient": {
                    "id": sender_psid
                },
                "sender_action": "mark_seen"
            };

            let url = `https://graph.facebook.com/v6.0/me/messages?access_token=${process.env.FB_PAGE_TOKEN}`;
            request({
                "uri": url,
                "method": "POST",
                "json": request_body

            }, (err, res, body) => {
                if (!err) {
                    resolve("done!");
                } else {
                    reject("Unable to send message:" + err);
                }
            });
        } catch (e) {
            reject(e);
        }
    })
};



module.exports = {
    handleSetupProfileAPI: handleSetupProfileAPI ,
    getFacebookUsername :getFacebookUsername ,
    sendTypingOn :sendTypingOn ,
    markMessageRead :markMessageRead
};