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
function createDoublyLinkedList(data) {
    var linkedList = new DoublyLinkedList_1.default();
    data.forEach(function (emotion) { return linkedList.append(emotion); });
    return linkedList;
}
function testDoublyLinkedList(data) {
    console.log('Testing insertion and deletion in the middle of a Doubly Linked List:');
    var linkedList = createDoublyLinkedList(data);
    var middleIndex = Math.floor(data.length / 2);
    // Insertion
    var startTimeInsertion = perf_hooks_1.performance.now();
    var nodeToInsert = { id: 99999, tweet: 'New Tweet', emotion: 1 };
    linkedList.insertAt(nodeToInsert, middleIndex);
    var insertionTime = perf_hooks_1.performance.now() - startTimeInsertion;
    // Deletion
    var startTimeDeletion = perf_hooks_1.performance.now();
    linkedList.removeAt(middleIndex);
    var deletionTime = perf_hooks_1.performance.now() - startTimeDeletion;
    console.log("Time taken for insertion: ".concat(insertionTime, " milliseconds"));
    console.log("Time taken for deletion: ".concat(deletionTime, " milliseconds"));
}
// Test insertion and deletion in the middle of an array
function testArray(data) {
    console.log('Testing insertion and deletion in the middle of an Array:');
    var array = __spreadArray([], data, true);
    var middleIndex = Math.floor(data.length / 2);
    // Insertion
    var startTimeInsertion = perf_hooks_1.performance.now();
    array.splice(middleIndex, 0, { id: 99999, tweet: 'New Tweet', emotion: 1 });
    var insertionTime = perf_hooks_1.performance.now() - startTimeInsertion;
    // Deletion
    var startTimeDeletion = perf_hooks_1.performance.now();
    array.splice(middleIndex, 1);
    var deletionTime = perf_hooks_1.performance.now() - startTimeDeletion;
    console.log("Time taken for insertion: ".concat(insertionTime, " milliseconds"));
    console.log("Time taken for deletion: ".concat(deletionTime, " milliseconds"));
}
function main() {
    var rawData = fs.readFileSync('emotions.csv', 'utf-8');
    var data = rawData
        .split('\n')
        .filter(function (line) { return line.trim() !== ''; })
        .map(function (line) {
        var _a = line.split(','), id = _a[0], tweet = _a[1], emotion = _a[2];
        return { id: parseInt(id), tweet: tweet, emotion: parseInt(emotion) };
    });
    testDoublyLinkedList(data);
    testArray(data);
}
main();
