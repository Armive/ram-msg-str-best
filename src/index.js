const messages = [
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",
];

const encouragementMessages = [
    "You are a good programer ussing npm",
    "where did you learn how to program",
    "You're not a programer and you write code well",
    "You have a salary increase"
]

const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    const encouragementMessage = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
    console.log(`\x1b[34m${message} and ${encouragementMessage}\x1b[89m`);
}

module.exports = {
    funnyCommit
};