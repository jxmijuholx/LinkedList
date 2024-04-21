interface ListNode<T> {
    value: T;
    next: ListNode<T> | undefined;
    prev: ListNode<T> | undefined;
}

export default class DoublyLinkedList<T> {
    public head: ListNode<T> | undefined;
    public tail: ListNode<T> | undefined;
    public length: number;

    constructor() {
        this.head = undefined;
        this.length = 0;
        this.tail = undefined;
    }

    // Lisätään uusi solmu listan alkuun
    prepend(value: T): void {
        const node: ListNode<T> = { value: value, next: undefined, prev: undefined };
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
    }

    // Lisää uuden solmun annettuun indeksiin
    insertAt(value: T, index: number): void {
        if (index > this.length) {
            throw new Error("Index out of range");
        } else if (index === this.length) {
            this.append(value);
            return;
        } else if (index === 0) {
            this.prepend(value);
            return;
        }
        let curr = this.head;

        for (let i = 0; curr && i < index; i++) {
            curr = curr.next!;
        }

        const node: ListNode<T> = { value: value, next: curr, prev: curr!.prev };
        curr!.prev!.next = node;
        curr!.prev = node;

        this.length++;
    }

    // Lisää uusi solmu listan loppuun
    append(value: T): void {
        const node: ListNode<T> = { value: value, next: undefined, prev: undefined };
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail!.next = node;
            this.tail = node;
        }
        this.length++;
    }

    // Poista solmu
    remove(value: T): T | void {
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                if (curr.prev) curr.prev.next = curr.next;
                if (curr.next) curr.next.prev = curr.prev;
                if (curr === this.head) this.head = curr.next;
                if (curr === this.tail) this.tail = curr.prev;
                this.length--;
                return curr.value;
            }
            curr = curr.next;
        }
        return undefined;
    }

    // Poista solmu annetusta indeksistä
    removeAt(index: number): void {
        if (index < 0 || index >= this.length) {
            return;
        }
        if (index === 0) {
            this.head = this.head?.next || undefined;
        } else {
            let prev = this.head;
            let curr = prev?.next;
            for (let i = 1; curr && i < index; i++) {
                prev = curr;
                curr = curr.next;
            }
            if (curr) {
                prev!.next = curr.next;
            }
        }
        this.length--;
    }

    // Hae solmu annetusta indeksistä
    get(index: number): T | void {
        if (index < 0 || index >= this.length) {
            return;
        }
        let curr = this.head;
        for (let i = 0; curr && i < index; i++) {
            curr = curr.next;
        }
        return curr?.value;
    }
}
