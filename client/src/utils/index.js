import { surpriseMePrompts } from '../components'

export function getRandomPrompt (prompt) {
    const randomIndex = Math.floor(Math.random() *
    surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];


    return randomPrompt;
}