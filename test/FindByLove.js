"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var perf_hooks_1 = require("perf_hooks");
var DoublyLinkedList_1 = require("../DoublyLinkedList");
var rawData = fs.readFileSync('emotions.csv', 'utf-8');
var data = rawData
    .split('\n')
    .filter(function (line) { return line.trim() !== ''; })
    .map(function (line) {
    var _a = line.split(','), id = _a[0], tweet = _a[1], emotion = _a[2];
    return { id: parseInt(id), tweet: tweet, emotion: parseInt(emotion) };
});
function findLoveTweetsLinkedList(data) {
    console.log('Finding tweets containing the word "love" using Doubly Linked List:');
    var startTime = perf_hooks_1.performance.now();
    var loveTweetsLinkedList = new DoublyLinkedList_1.default();
    data.forEach(function (emotion) {
        if (emotion.tweet.toLowerCase().includes('love')) {
            loveTweetsLinkedList.append(emotion);
        }
    });
    console.log("Time taken: ".concat(perf_hooks_1.performance.now() - startTime, " milliseconds"));
}
function findLoveTweetsArray(data) {
    console.log('Finding tweets containing the word "love" using Array:');
    var startTime = perf_hooks_1.performance.now();
    var loveTweetsArray = [];
    data.forEach(function (emotion) {
        if (emotion.tweet.toLowerCase().includes('love')) {
            loveTweetsArray.push(emotion);
        }
    });
    console.log("Time taken: ".concat(perf_hooks_1.performance.now() - startTime, " milliseconds"));
}
findLoveTweetsLinkedList(data);
findLoveTweetsArray(data);
