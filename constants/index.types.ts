export interface question {
    id: string;
    question: string;
    img?: string;
    anwsers: string[];
    right: number;
    category: string;//'ALKOOL' | 'TEST';
    QuestionID: number;
    anwser?: number;
}