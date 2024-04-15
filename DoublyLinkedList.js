"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = undefined;
        this.length = 0;
        this.tail = undefined;
    }
    // Lisätään uusi solmu listan alkuun
    DoublyLinkedList.prototype.prepend = function (value) {
        var node = { value: value, next: undefined, prev: undefined };
        if (!this.head) {
            this.head = this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
    };
    // Lisää uuden solmun annettuun indeksiin
    DoublyLinkedList.prototype.insertAt = function (value, index) {
        if (index > this.length) {
            throw new Error("Index out of range");
        }
        else if (index === this.length) {
            this.append(value);
            return;
        }
        else if (index === 0) {
            this.prepend(value);
            return;
        }
        var curr = this.head;
        for (var i = 0; curr && i < index; i++) {
            curr = curr.next;
        }
        var node = { value: value, next: curr, prev: curr.prev };
        curr.prev.next = node;
        curr.prev = node;
        this.length++;
    };
    // Lisää uusi solmu listan loppuun
    DoublyLinkedList.prototype.append = function (value) {
        var node = { value: value, next: undefined, prev: undefined };
        if (!this.head) {
            this.head = this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    };
    // Poista solmu
    DoublyLinkedList.prototype.remove = function (value) {
        var curr = this.head;
        while (curr) {
            if (curr.value === value) {
                if (curr.prev)
                    curr.prev.next = curr.next;
                if (curr.next)
                    curr.next.prev = curr.prev;
                if (curr === this.head)
                    this.head = curr.next;
                if (curr === this.tail)
                    this.tail = curr.prev;
                this.length--;
                return curr.value;
            }
            curr = curr.next;
        }
        return undefined;
    };
    // Poista solmu annetusta indeksistä
    DoublyLinkedList.prototype.removeAt = function (index) {
        var _a;
        if (index < 0 || index >= this.length) {
            return;
        }
        if (index === 0) {
            this.head = ((_a = this.head) === null || _a === void 0 ? void 0 : _a.next) || undefined;
        }
        else {
            var prev = this.head;
            var curr = prev === null || prev === void 0 ? void 0 : prev.next;
            for (var i = 1; curr && i < index; i++) {
                prev = curr;
                curr = curr.next;
            }
            if (curr) {
                prev.next = curr.next;
            }
        }
        this.length--;
    };
    // Hae solmu annetusta indeksistä
    DoublyLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.length) {
            return;
        }
        var curr = this.head;
        for (var i = 0; curr && i < index; i++) {
            curr = curr.next;
        }
        return curr === null || curr === void 0 ? void 0 : curr.value;
    };
    return DoublyLinkedList;
}());
exports.default = DoublyLinkedList;
