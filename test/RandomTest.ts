import { performance } from 'perf_hooks';
import DoublyLinkedList from '../DoublyLinkedList';
import { Emotion } from './Emotion';

// Generate 5,000,000 new emotions
function generateNewEmotions(count: number): Emotion[] {
    const emotions: Emotion[] = [];
    for (let i = 0; i < count; i++) {
        emotions.push({ id: Math.floor(Math.random() * 10) + 1, tweet: `Tweet ${i + 1}`, emotion: Math.floor(Math.random() * 10) + 1 });
    }
    return emotions;
}

// Function to add tweets to array and measure time
function addTweetsToArray(data: Emotion[]): [Emotion[], number] {
    const dataArray: Emotion[] = [];
    const startTime = performance.now();

    data.forEach(emotion => {
        dataArray.push(emotion);
    });

    const endTime = performance.now();
    const addTime = endTime - startTime;
    return [dataArray, addTime];
}

// Function to add tweets to doubly linked list and measure time
function addTweetsToLinkedList(data: Emotion[]): [DoublyLinkedList<Emotion>, number] {
    const tweetList = new DoublyLinkedList<Emotion>();
    const startTime = performance.now();

    data.forEach(emotion => {
        tweetList.append(emotion);
    });

    const endTime = performance.now();
    const addTime = endTime - startTime;
    return [tweetList, addTime];
}

function delete3000000thElementFromArray(data: Emotion[]): number {
    const startTime = performance.now();
    data.splice(3000000, 1);
    const endTime = performance.now();
    return endTime - startTime;
}

function delete3000000thElementFromLinkedList(data: DoublyLinkedList<Emotion>): number {
    const startTime = performance.now();
    data.removeAt(3000000);
    const endTime = performance.now();
    return endTime - startTime;
}

function Delete300000ElementsFromArray(data: Emotion[]): number {
    const startTime = performance.now();
    data.splice(3000000, 300000);
    const endTime = performance.now();
    return endTime - startTime;
}

function Delete300000ElementsFromLinkedList(data: DoublyLinkedList<Emotion>): number {
    const startTime = performance.now();
    for (let i = 0; i < 300000; i++) {
        data.removeAt(3000000);
    }
    const endTime = performance.now();
    return endTime - startTime;
}

// Define your test sequence here
function runTestSequence(data: Emotion[]) {
    const [dataArray, addTimeArray] = addTweetsToArray(data);
    const [linkedList, addTimeLinkedList] = addTweetsToLinkedList(data);

    console.log("Test Sequence:");

    // Test 1: Time taken to add 5,000,000 emotions to Array
    console.log(`Test 1: Time taken to add 5,000,000 emotions to Array: ${addTimeArray} milliseconds`);

    // Test 2: Time taken to add 5,000,000 emotions to Doubly Linked List
    console.log(`Test 2: Time taken to add 5,000,000 emotions to Doubly Linked List: ${addTimeLinkedList} milliseconds`);

    // Test 3: Time taken to delete 3,000,000th element from Array
    const deleteTimeArray = delete3000000thElementFromArray(dataArray);
    console.log(`Test 3: Time taken to delete 3,000,000th element from Array: ${deleteTimeArray} milliseconds`);

    // Test 4: Time taken to delete 3,000,000th element from Doubly Linked List
    const deleteTimeLinkedList = delete3000000thElementFromLinkedList(linkedList);
    console.log(`Test 4: Time taken to delete 3,000,000th element from Doubly Linked List: ${deleteTimeLinkedList} milliseconds`);

    // Test 5: Time taken to delete 300,000 elements from Array
    const deleteTimeArray2 = Delete300000ElementsFromArray(dataArray);
    console.log(`Test 5: Time taken to delete 300,000 elements from Array: ${deleteTimeArray2} milliseconds`);

    // Test 6: Time taken to delete 300,000 elements from Doubly Linked List
    const deleteTimeLinkedList2 = Delete300000ElementsFromLinkedList(linkedList);
    console.log(`Test 6: Time taken to delete 300,000 elements from Doubly Linked List: ${deleteTimeLinkedList2} milliseconds`);
}

// Generate 5,000,000 random emotions
const emotionsData = generateNewEmotions(5000000);

// Run the test sequence
runTestSequence(emotionsData);
