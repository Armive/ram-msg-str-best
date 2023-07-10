#!/usr/bin/env node
import ora from "ora";
import { funnyCommit } from "../src/index.js"

const spinner = ora().start()
let message = funnyCommit()
let length = 0

const interval = setInterval(() => {
    length += 1

    spinner.text = message.substring(0, length);
    if (length == message.length) {
        spinner.stop()
        clearInterval(interval)
        console.log(message)
    }
}, 100);