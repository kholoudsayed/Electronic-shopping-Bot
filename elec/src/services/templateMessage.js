let sendCategoriesTemplate = () =>{
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "سماعات الرأس🎧",
                        "image_url": "https://bit.ly/imageHeadphones",
                        "subtitle": "Bose Noise Cancelling Wireless Bluetooth Headphones",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://bit.ly/webHeadphones",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://bit.ly/webHeadphones",
                                "title": "زياره الموقع📲"
                            },
                            {
                                "type": "postback",
                                "title": "عرض سماعات الرأس🎧",
                                "payload": "SHOW_HEADPHONES"
                            }
                        ]
                    },
                    {
                        "title": "تلفاز📺",
                        "image_url": "https://bit.ly/imageTV",
                        "subtitle": "Master of quality & Incredible clarity",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://bit.ly/webTelevision",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://bit.ly/webTelevision",
                                "title": "زياره الموقع📲"
                            }, {
                                "type": "postback",
                                "title": " عرض تلفاز📺",
                                "payload": "SHOW_TV"
                            }
                        ]
                    },
                    {
                        "title": "بلاي ستاشن🕹",
                        "image_url": "https://bit.ly/imagePlaystation",
                        "subtitle": "Incredible games & Endless entertainment",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://bit.ly/webPlaystation",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://bit.ly/webPlaystation",
                                "title": "زياره الموقع📲"
                            }, {
                                "type": "postback",
                                "title": "عرض بلاي ستاشن🕹",
                                "payload": "SHOW_PLAYSTATION"
                            }
                        ]
                    },
                    {
                        "title": "لاب توب💻",
                        "image_url": "https://images-na.ssl-images-amazon.com/images/I/51kbfGrA9YL._AC_SL1000_.jpg",
                        "subtitle": "Hp & Dell & lenovo laptop",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.amazon.com/s?k=laptop&rh=n%3A172282%2Cp_89%3AHP&dc&qid=1603280729&rnid=2528832011&ref=sr_nr_p_89_1",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.amazon.com/s?k=laptop&rh=n%3A172282%2Cp_89%3AHP&dc&qid=1603280729&rnid=2528832011&ref=sr_nr_p_89_1",
                                "title": "زياره الموقع📲"
                            },
                            {
                                "type": "postback",
                                "title": "عرض لاب توب💻",
                                "payload": "SHOW_LAPTOP"
                            }
                        ]
                    },
                ]
            }
        }
    };
};


let sendHeadphonesTemplate = () =>{
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Sony Noise Cancelling Headphones WH1000XM3",
                        "image_url": "https://bit.ly/imageHeadphone1a",
                        "subtitle": "$348.00",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://bit.ly/viewHeadphone1",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://bit.ly/viewHeadphone1",
                                "title": "اطلب الان🎉"
                            },
                            {
                                "type": "postback",
                                "title": "الرجوع الي قائمه الفئات",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "القائمه الرئيسيه🗓",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Sony WI-1000XM2 Industry Leading Noise Canceling Wireless Behind-Neck",
                        "image_url": "https://bit.ly/imageHeadphone1b",
                        "subtitle": "$298.00",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://bit.ly/viewHeadphone2",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://bit.ly/viewHeadphone2",
                                "title": "اطلب الان🎉"
                            },
                            {
                                "type": "postback",
                                "title": "الرجوع الي قائمه الفئات",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "القائمه الرئيسيه🗓",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Sony Wireless in-Ear Headset",
                        "image_url": "https://bit.ly/imageHeadphone1c",
                        "subtitle": "$38.00",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://bit.ly/viewHeadphone3",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://bit.ly/viewHeadphone3",
                                "title": "اطلب الان🎉"
                            },
                            {
                                "type": "postback",
                                "title": "الرجوع الي قائمه الفئات",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "القائمه الرئيسيه🗓",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                ]
            }
        }
    };
};



let sendTVTemplate = () =>{
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Sony X800H 49 Inch TV",
                        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71VC9cPNy6L._AC_SL1080_.jpg",
                        "subtitle": "$648.00",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.amazon.com/Sony-X800H-49-Inch-Compatibility/dp/B083R2VJSP?ref_=ast_sto_dp",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.amazon.com/Sony-X800H-49-Inch-Compatibility/dp/B083R2VJSP?ref_=ast_sto_dp",
                                "title": "اطلب الان🎉"
                            },
                            {
                                "type": "postback",
                                "title": "الرجوع الي قائمه الفئات",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "القائمه الرئيسيه🗓",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Sony X900H 65 Inch TV",
                        "image_url": "https://images-na.ssl-images-amazon.com/images/I/612U-Yeox0L._AC_SL1080_.jpg",
                        "subtitle": "1,398$",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.amazon.com/Sony-X900H-65-Inch-Compatibility/dp/B084KQLVFH?ref_=ast_sto_dp",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.amazon.com/Sony-X900H-65-Inch-Compatibility/dp/B084KQLVFH?ref_=ast_sto_dp",
                                "title": "اطلب الان🎉"
                            },
                            {
                                "type": "postback",
                                "title": "الرجوع الي قائمه الفئات",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "القائمه الرئيسيه🗓",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Sony A8H 65 Inch TV",
                        "image_url": "https://images-na.ssl-images-amazon.com/images/I/61F0MXKMLwL._AC_SL1080_.jpg",
                        "subtitle": "2,498$",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.amazon.com/Sony-A8H-65-Inch-Compatibility/dp/B084KQLVKH?ref_=ast_sto_dp",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.amazon.com/Sony-A8H-65-Inch-Compatibility/dp/B084KQLVKH?ref_=ast_sto_dp",
                                "title": "اطلب الان🎉"
                            },
                            {
                                "type": "postback",
                                "title": "الرجوع الي قائمه الفئات",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "القائمه الرئيسيه🗓",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                ]
            }
        }
    };
};




let sendplaystationTemplate = () =>{
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "DualShock 4 Wireless Controller for PlayStation 4 - Jet Black",
                        "image_url": "https://images-na.ssl-images-amazon.com/images/I/61IG46p-yHL._SL1500_.jpg",
                        "subtitle": "$17.00",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.amazon.com/DualShock-Wireless-Controller-PlayStation-Black-4/dp/B01LWVX2RG?ref_=ast_sto_dp",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.amazon.com/DualShock-Wireless-Controller-PlayStation-Black-4/dp/B01LWVX2RG?ref_=ast_sto_dp",
                                "title": "اطلب الان🎉"
                            },
                            {
                                "type": "postback",
                                "title": "الرجوع الي قائمه الفئات",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "القائمه الرئيسيه🗓",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "PlayStation 4 Pro 1TB Console",
                        "image_url": "https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg",
                        "subtitle": "1,398$",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.amazon.com/PlayStation-4-Pro-1TB-Console/dp/B01LOP8EZC?ref_=ast_sto_dp",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.amazon.com/PlayStation-4-Pro-1TB-Console/dp/B01LOP8EZC?ref_=ast_sto_dp",
                                "title": "اطلب الان🎉"
                            },
                            {
                                "type": "postback",
                                "title": "الرجوع الي قائمه الفئات",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "القائمه الرئيسيه🗓",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "PlayStation VR - Borderlands 2 and Beat Saber Bundle",
                        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71K7MYQcCbL._SL1500_.jpg",
                        "subtitle": "2,498$",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.amazon.com/PlayStation-VR-Borderlands-Saber-Bundle-4/dp/B07K9B6RK8?ref_=ast_sto_dp",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.amazon.com/PlayStation-VR-Borderlands-Saber-Bundle-4/dp/B07K9B6RK8?ref_=ast_sto_dp",
                                "title": "اطلب الان🎉"
                            },
                            {
                                "type": "postback",
                                "title": "الرجوع الي قائمه الفئات",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "القائمه الرئيسيه🗓",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                ]
            }
        }
    };
};




let sendLaptopTemplate = () =>{
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "2020 HP 14-inch HD Touchscreen Premium Laptop PC, AMD Ryzen 3 3200U Processor, 8GB DDR4 Memory, 256GB SSD, Bluetooth, Windows 10, Silver",
                        "image_url": "https://images-na.ssl-images-amazon.com/images/I/51B4zvRbRBL._AC_SL1000_.jpg",
                        "subtitle": "$109.46",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.amazon.com/Dell-3000-15-6-inch-Touchscreen-i3-1005G1/dp/B088K23635/ref=bmx_1/140-5924863-9940533?_encoding=UTF8&pd_rd_i=B088K23635&pd_rd_r=2b04c45c-1008-4f8f-b932-295666703c1d&pd_rd_w=KLQjF&pd_rd_wg=MGIl6&pf_rd_p=04f8298a-a324-416e-a108-788274fceb3a&pf_rd_r=K1Z39ME54K4BCG7HHHTY&psc=1&refRID=K1Z39ME54K4BCG7HHHTY",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.amazon.com/Dell-3000-15-6-inch-Touchscreen-i3-1005G1/dp/B088K23635/ref=bmx_1/140-5924863-9940533?_encoding=UTF8&pd_rd_i=B088K23635&pd_rd_r=2b04c45c-1008-4f8f-b932-295666703c1d&pd_rd_w=KLQjF&pd_rd_wg=MGIl6&pf_rd_p=04f8298a-a324-416e-a108-788274fceb3a&pf_rd_r=K1Z39ME54K4BCG7HHHTY&psc=1&refRID=K1Z39ME54K4BCG7HHHTY",
                                "title": "اطلب الان🎉"
                            },
                            {
                                "type": "postback",
                                "title": "الرجوع الي قائمه الفئات",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "القائمه الرئيسيه🗓",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Newest HP Pavilion Intel Pentium Silver N5000 4GB 128GB SSD Windows 10 Laptop Red",
                        "image_url": "https://images-na.ssl-images-amazon.com/images/I/717ywJDnAHL._AC_SL1500_.jpg",
                        "subtitle": "1,398$",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.amazon.com/Newest-HP-Pavilion-Pentium-Windows/dp/B0894DBTRV/ref=sr_1_6?dchild=1&keywords=laptop&qid=1603280729&refinements=p_89%3AHP&rnid=2528832011&s=electronics&sr=1-6",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.amazon.com/Newest-HP-Pavilion-Pentium-Windows/dp/B0894DBTRV/ref=sr_1_6?dchild=1&keywords=laptop&qid=1603280729&refinements=p_89%3AHP&rnid=2528832011&s=electronics&sr=1-6",
                                "title": "اطلب الان🎉"
                            },
                            {
                                "type": "postback",
                                "title": "الرجوع الي قائمه الفئات",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "القائمه الرئيسيه🗓",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "HP Chromebook 14-inch HD Laptop, Intel Celeron N4000, 4 GB RAM, 32 GB eMMC, Chrome (14a-na0010nr, Mineral Silver)",
                        "image_url": "https://images-na.ssl-images-amazon.com/images/I/91shKLxoedL._AC_SL1500_.jpg",
                        "subtitle": "2,498$",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.amazon.com/HP-Chromebook-14-inch-Celeron-14a-na0010nr/dp/B08529TZMC/ref=sr_1_1?dchild=1&keywords=laptop&qid=1603280736&refinements=p_89%3AHP%7CMicrosoft&rnid=2528832011&s=electronics&sr=1-1",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.amazon.com/HP-Chromebook-14-inch-Celeron-14a-na0010nr/dp/B08529TZMC/ref=sr_1_1?dchild=1&keywords=laptop&qid=1603280736&refinements=p_89%3AHP%7CMicrosoft&rnid=2528832011&s=electronics&sr=1-1",
                                "title": "اطلب الان🎉"
                            },
                            {
                                "type": "postback",
                                "title": "الرجوع الي قائمه الفئات",
                                "payload": "BACK_TO_CATEGORIES"
                            },
                            {
                                "type": "postback",
                                "title": "القائمه الرئيسيه🗓",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                ]
            }
        }
    };
};




let sendLookupOrderTemplate = () =>{
    return {
        "attachment":{
            "type":"template",
            "payload":{
                "template_type":"button",
                "text":"حسنا. دعنا نضع معلومات حول طلبك ، لذلك لن تحتاج إلى طلبها في المستقبل.",
                "buttons":[
                    {
                        "type": "web_url",
                        "url": `${process.env.URL_WEB_VIEW_ORDER}`,
                        "title": "اضف معلوماتكℹ",
                        "webview_height_ratio": "tall",
                        "messenger_extensions": false //false: open the webview in new tab
                    },
                    {
                        "type": "postback",
                        "title": "القائمه الرئيسيه🗓",
                        "payload": "BACK_TO_MAIN_MENU"
                    }
                ]
            }
        }
    };
};

let backToMainMenuTemplate = ()=>{
    return {
        "text": "كيف يمكنني مساعدتك عميلنا العزيز🤩",
        "quick_replies": [
            {
                "content_type": "text",
                "title": "فئات",
                "payload": "CATEGORIES",
            },
            {
                "content_type": "text",
                "title": "البحث عن طلب",
                "payload": "LOOKUP_ORDER",
            },
            {
                "content_type": "text",
                "title": "التحدث الي خدمه العملاء",
                "payload": "TALK_AGENT",
            },
        ]
    };
};

let setInfoOrderTemplate = ()=>{
    return {
        "attachment":{
            "type":"template",
            "payload":{
                "template_type":"button",
                "text":"نحن نتحقق من طلبك🎯. سنرسل لك رسالة عند اكتمال العملية. "+
                    "\ n شكرا لك🎉!",
                "buttons":[
                    {
                        "type": "postback",
                        "title": "القائمه الرئيسيه 🗓",
                        "payload": "BACK_TO_MAIN_MENU"
                    }
                ]
            }
        }
    };
};

module.exports = {
    sendCategoriesTemplate: sendCategoriesTemplate,
    sendHeadphonesTemplate: sendHeadphonesTemplate,
    sendLookupOrderTemplate: sendLookupOrderTemplate,
    backToMainMenuTemplate: backToMainMenuTemplate,
    setInfoOrderTemplate: setInfoOrderTemplate ,
    sendTVTemplate :sendTVTemplate ,
    sendplaystationTemplate :sendplaystationTemplate ,
    sendLaptopTemplate :sendLaptopTemplate
};