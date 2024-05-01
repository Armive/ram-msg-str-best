import {data, encouragementMessageData} from './data.js'

const funnyCommit = () => {
    const message = data[Math.floor(Math.random() * data.length)];
    const encouragementMessage = encouragementMessageData[Math.floor(Math.random() * encouragementMessageData.length)];
    return (`\x1b[34m${message} and ${encouragementMessage}\x1b[89m`);
}

export {
    funnyCommit
};