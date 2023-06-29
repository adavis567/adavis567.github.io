var counter1 = 0
var counter2 = 0
var counter3 = 0
var counter4 = 0
var counter5 = 0
function likePhoto(counter) {

    if (counter === 'first') {
        counter1 = counter1 + 1;
        document.getElementById("likeCount1").innerHTML = counter1;;
    }
    else if (counter === 'second') {
        counter2 = counter2 + 1;
        document.getElementById("likeCount2").innerHTML = counter2;;
    }
    else if (counter === 'third') {
        counter3 = counter3 + 1;
        document.getElementById("likeCount3").innerHTML = counter3;;
    }
    else if (counter === 'fourth') {
        counter4 = counter4 + 1;
        document.getElementById("likeCount4").innerHTML = counter4;;
    }
    else if (counter === 'fifth') {
        counter5 = counter5 + 1;
        document.getElementById("likeCount5").innerHTML = counter5;;
    }

}
var user = {
    "name": "Anthony",
    "name_last": "Davis",
    "followers": ["Holdyn", "Johanna", "Heaven", "Halayna", "Villel", "Keith"],
    "profile_pic": "data:image/jpeg;base64,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"
}
setTimeout(function () { document.getElementById("name").innerHTML = user.name; }, 3000);
setTimeout(function () { document.getElementById("name_last").innerHTML = user.name_last; }, 3000);
setTimeout(function () { document.getElementById("followers").innerHTML = "Followers: " + user.followers.length; }, 3000);
setTimeout(function () { $("#profile_pic").attr("src", user.profile_pic); }, 3000);
