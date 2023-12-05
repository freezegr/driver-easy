export interface question {
    id: string;
    question: string;
    img?: string;
    anwsers: string[];
    right: number;
    category: 'ALKOOL' | 'TEST';
    QuestionID: number;
}