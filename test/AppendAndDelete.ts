import * as fs from 'fs';
import { performance } from 'perf_hooks';
import DoublyLinkedList from '../DoublyLinkedList';
import { Emotion } from './Emotion';


const rawData: string = fs.readFileSync('emotions.csv', 'utf-8');
const data: Emotion[] = rawData
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => {
        const [id, tweet, emotion] = line.split(',');
        return { id: parseInt(id), tweet, emotion: parseInt(emotion) };
    });

function addTweetsToLinkedList(data: Emotion[]): [DoublyLinkedList<Emotion>, number] {
    const startTime = performance.now();
    const tweetListLinkedList = new DoublyLinkedList<Emotion>();
    data.forEach(emotion => tweetListLinkedList.append(emotion));
    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    return [tweetListLinkedList, timeTaken];
}

function addTweetsToArray(data: Emotion[]): [Emotion[], number] {
    const startTime = performance.now();
    const dataArray = [...data];
    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    return [dataArray, timeTaken];
}

function deleteIdThreeTweetsLinkedList(data: Emotion[]): number {
    const [tweetListLinkedList, addTime] = addTweetsToLinkedList(data);
    const startTime = performance.now();

    let curr = tweetListLinkedList.head;
    while (curr) {
        if (curr.value.id === 3) {
            const next = curr.next;
            tweetListLinkedList.remove(curr.value);
            curr = next;
        } else {
            curr = curr.next;
        }
    }

    const endTime = performance.now();
    const deleteTime = endTime - startTime;
    return addTime + deleteTime;
}

function deleteIdThreeTweetsArray(data: Emotion[]): number {
    const [dataArray, addTime] = addTweetsToArray(data);
    const startTime = performance.now();
    dataArray.filter(emotion => emotion.id !== 3);
    const endTime = performance.now();
    const deleteTime = endTime - startTime;
    return addTime + deleteTime;
}

const [linkedList, addLinkedListTime] = addTweetsToLinkedList(data);
console.log(`Time taken for adding to Doubly Linked List: ${addLinkedListTime} milliseconds`);

const [array, addArrayTime] = addTweetsToArray(data);
console.log(`Time taken for adding to Array: ${addArrayTime} milliseconds`);

const deleteLinkedListTime = deleteIdThreeTweetsLinkedList(data);
console.log(`Time taken for deletion from Doubly Linked List: ${deleteLinkedListTime} milliseconds`);

const deleteArrayTime = deleteIdThreeTweetsArray(data);
console.log(`Time taken for deletion from Array: ${deleteArrayTime} milliseconds`);
