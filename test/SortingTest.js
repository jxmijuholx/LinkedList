"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var DoublyLinkedList_1 = require("../DoublyLinkedList");
var rawData = fs.readFileSync('emotions.csv', 'utf-8');
var data = rawData
    .split('\n')
    .filter(function (line) { return line.trim() !== ''; })
    .map(function (line) {
    var _a = line.split(','), id = _a[0], tweet = _a[1], emotion = _a[2];
    return { id: parseInt(id), tweet: tweet, emotion: parseInt(emotion) };
});
function sortByIDLinkedList(data) {
    console.log('Sorting by ID using Doubly Linked List:');
    var startTime = performance.now();
    data.sort(function (a, b) { return b.id - a.id; });
    var linkedList = new DoublyLinkedList_1.default();
    data.forEach(function (emotion) { return linkedList.prepend(emotion); });
    var sortedData = [];
    for (var i = 0; i < data.length; i++) {
        sortedData.push(linkedList.get(i));
    }
    console.log("Time taken: ".concat(performance.now() - startTime, " milliseconds"));
}
function sortByIDArray(data) {
    console.log('Sorting by ID using Array:');
    var startTime = performance.now();
    data.sort(function (a, b) { return b.id - a.id; });
    console.log("Time taken: ".concat(performance.now() - startTime, " milliseconds"));
}
sortByIDLinkedList(data);
sortByIDArray(data);
