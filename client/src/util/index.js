import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../components'

export function getRandomPrompt (prompt) {
    // get random index 1-49
    const randomIndex = Math.floor(Math.random() *
    surpriseMePrompts.length);

    // retrieve random prompt
    const randomPrompt = surpriseMePrompts[randomIndex];

    // makes sure to not get the same prompt in a row
    if(randomPrompt === prompt) 
    return getRandomPrompt(prompt);


    return randomPrompt;
}
export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
  }