// == FONCTIONS ==

const URL = "touiteur.cefim-formation.org";

function getMsg(timestamp, callback){
	const request = new XMLHttpRequest();
	request.open('GET', 'http://' + URL + '/list?ts=' + encodeURIComponent(timestamp), true);
	request.addEventListener('readystatechange', function() {
		if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
			callback(JSON.parse(request.responseText));
		}
	});
	request.send();
}
	

function postMsg(name, message, callback){
	const request = new XMLHttpRequest();
	request.open('POST', 'http://' + URL + '/send', true);
	request.addEventListener('readystatechange', function() {
		if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
			callback(JSON.parse(request.responseText));
			console.log(request.responseText);
		}
	});
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send('name=' + encodeURIComponent(name) + '&message=' + encodeURIComponent(message));
	console.log("message envoyé");
}

function sendLike(message_id, callback) {
    const request = new XMLHttpRequest();
    // Il faut préparer le header
    request.open("PUT", "http://" + URL + "/likes/send", true);
 
    request.addEventListener("readystatechange", function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            let response = JSON.parse(request.responseText);
            callback(response);
        }
    });
 
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //Envoyer la requete
    request.send("message_id=" + encodeURIComponent(message_id)); // encodeURIComponent encode la valeur de message_id en UTF-8 
 }

 function getTrending(timestamp, callback){
	const request = new XMLHttpRequest();
	request.open('GET', 'http://' + URL + '/trending', true);
	request.addEventListener('readystatechange', function() {
		if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
			callback(JSON.parse(request.responseText));
		}
	});
	request.send();
}


export {getMsg, postMsg, sendLike, getTrending}