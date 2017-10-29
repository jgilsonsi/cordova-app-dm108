# cordova-app-dm108

cordova platform add browser

cordova platform add android

cordova plugin add cordova-plugin-nativestorage

cordova plugin add cordova-plugin-splashscreen

cordova plugin add cordova-plugin-statusbar

cordova plugin add cordova-plugin-firebase@0.1.24 --save

-------------------------------------------------------------
To send notifications:

https://fcm.googleapis.com/fcm/send
	
{ "data": 
{ 
	"data1": "test1", 
	"data2": "test2", 
	"data3": "test3" 
}, 
"priority":"high", 
"notification" : { 
	"body" : "A tabela foi atualziada.", 
	"title" : "Olá!" 
}, 
"to" : "/topics/example" }
