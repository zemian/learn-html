// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
// function shuffle(a) {
//     var j, x, i;
//     for (i = a.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = a[i];
//         a[i] = a[j];
//         a[j] = x;
//     }
//     return a;
// }
// var letters='abcdefghijklmnopqrstuvwxyz0123456789'.split('');
//console.log(shuffle(letters));

function uniqueId() {
    var letters='abcdefghijklmnopqrstuvwxyz0123456789'.split('');
    var id = '';
    for (var i = 0; i < 16; i++) {
        var idx = Math.floor(Math.random() * (letters.length));
        id += letters[idx];
    }
    return id;
}


for (var i = 0; i < 30; i++) {
    console.log(uniqueId());
}
