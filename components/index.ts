import { sampleSize } from 'lodash';
import { questions } from './questions.json'
import { question } from '../constants/index.types';

export const requestQuestions = (category = "random"): question[]  => {
    console.log('test')
    if(category == "random"){
        return sampleSize(questions, 10)
    } else {
        return sampleSize(questions.filter(x => x.category == category), 10)
    }
}