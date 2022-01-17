console.log("hello");

var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var domino = ['.com', '.net', '.us', '.io'];

function dNameG (pronoun, adj, noun, domino) {
    for (var p = 0; p < pronoun.length; p++) {
        for (var a = 0; a < adj.length; a++) {
            for (var n = 0; n < noun.length; n++) {
                for (var d = 0; d < domino.length; d++) {
                    console.log("www."+ pronoun[p] + adj[a] + noun[n] + domino[d]);
                }
            }
        }
    }
}
dNameG(pronoun,adj,noun,domino);



