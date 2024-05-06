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
function insertAtBeginningLinkedList(data, numInsertions) {
    var startTime = perf_hooks_1.performance.now();
    var list = new DoublyLinkedList_1.default();
    for (var i = 0; i < numInsertions; i++) {
        list.prepend(data[i % data.length]);
    }
    var endTime = perf_hooks_1.performance.now();
    return endTime - startTime;
}
function insertAtBeginningArray(data, numInsertions) {
    var startTime = perf_hooks_1.performance.now();
    var array = [];
    for (var i = 0; i < numInsertions; i++) {
        array.unshift(data[i % data.length]);
    }
    var endTime = perf_hooks_1.performance.now();
    return endTime - startTime;
}
var numInsertions = 200000;
var timeLinkedList = insertAtBeginningLinkedList(data, numInsertions);
console.log("Time taken for inserting at the beginning of Doubly Linked List: ".concat(timeLinkedList, " milliseconds"));
var timeArray = insertAtBeginningArray(data, numInsertions);
console.log("Time taken for inserting at the beginning of Array: ".concat(timeArray, " milliseconds"));
function removeFromBeginningLinkedList(data, numRemovals) {
    var list = new DoublyLinkedList_1.default();
    data.forEach(function (emotion) { return list.append(emotion); });
    var startTime = perf_hooks_1.performance.now();
    for (var i = 0; i < numRemovals; i++) {
        list.removeAt(0);
    }
    var endTime = perf_hooks_1.performance.now();
    return endTime - startTime;
}
function removeFromBeginningArray(data, numRemovals) {
    var array = __spreadArray([], data, true);
    var startTime = perf_hooks_1.performance.now();
    for (var i = 0; i < numRemovals; i++) {
        array.shift();
    }
    var endTime = perf_hooks_1.performance.now();
    return endTime - startTime;
}
var numRemovals = 100000;
var timeRemoveLinkedList = removeFromBeginningLinkedList(data, numRemovals);
console.log("Time taken for removing from the beginning of Doubly Linked List: ".concat(timeRemoveLinkedList, " milliseconds"));
var timeRemoveArray = removeFromBeginningArray(data, numRemovals);
console.log("Time taken for removing from the beginning of Array: ".concat(timeRemoveArray, " milliseconds"));
