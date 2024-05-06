"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
function addTweetsToLinkedList(data) {
    var startTime = perf_hooks_1.performance.now();
    var tweetListLinkedList = new DoublyLinkedList_1.default();
    data.forEach(function (emotion) { return tweetListLinkedList.append(emotion); });
    var endTime = perf_hooks_1.performance.now();
    var timeTaken = endTime - startTime;
    return [tweetListLinkedList, timeTaken];
}
function addTweetsToArray(data) {
    var startTime = perf_hooks_1.performance.now();
    var dataArray = __spreadArray([], data, true);
    var endTime = perf_hooks_1.performance.now();
    var timeTaken = endTime - startTime;
    return [dataArray, timeTaken];
}
function deleteIdThreeTweetsLinkedList(data) {
    var _a = addTweetsToLinkedList(data), tweetListLinkedList = _a[0], addTime = _a[1];
    var startTime = perf_hooks_1.performance.now();
    var curr = tweetListLinkedList.head;
    while (curr) {
        if (curr.value.id === 3) {
            var next = curr.next;
            tweetListLinkedList.remove(curr.value);
            curr = next;
        }
        else {
            curr = curr.next;
        }
    }
    var endTime = perf_hooks_1.performance.now();
    var deleteTime = endTime - startTime;
    return addTime + deleteTime;
}
function deleteIdThreeTweetsArray(data) {
    var _a = addTweetsToArray(data), dataArray = _a[0], addTime = _a[1];
    var startTime = perf_hooks_1.performance.now();
    dataArray.filter(function (emotion) { return emotion.id !== 3; });
    var endTime = perf_hooks_1.performance.now();
    var deleteTime = endTime - startTime;
    return addTime + deleteTime;
}
var _a = addTweetsToLinkedList(data), linkedList = _a[0], addLinkedListTime = _a[1];
console.log("Time taken for adding to Doubly Linked List: ".concat(addLinkedListTime, " milliseconds"));
var _b = addTweetsToArray(data), array = _b[0], addArrayTime = _b[1];
console.log("Time taken for adding to Array: ".concat(addArrayTime, " milliseconds"));
var deleteLinkedListTime = deleteIdThreeTweetsLinkedList(data);
console.log("Time taken for deletion from Doubly Linked List: ".concat(deleteLinkedListTime, " milliseconds"));
var deleteArrayTime = deleteIdThreeTweetsArray(data);
console.log("Time taken for deletion from Array: ".concat(deleteArrayTime, " milliseconds"));
