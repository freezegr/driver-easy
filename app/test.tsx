import React, { useState, useEffect } from 'react';
import { useLocalSearchParams, useRouter  } from "expo-router";
import { requestQuestions } from '../components';
import { question } from '../constants/index.types';
import { View, Text, Image, Button, StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import { COLORS } from '../constants/Colors';

export default function Test() {
    const router = useRouter();
    const { category }: { category: string} = useLocalSearchParams();
    const [questions, setQuestions] = useState<question[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchQuestions = async () => {
            const fetchedQuestions = await requestQuestions(category);
            setQuestions(fetchedQuestions);
            setLoading(false);
        };

        fetchQuestions();
    }, [category]);

    if (loading) {
        return (
            <SafeAreaView>
                <ActivityIndicator size="large" color={COLORS.white} />
            </SafeAreaView>
        );
    }

    const nextQuestion = (anwser: number) => {
        questions[currentQuestion].anwser = anwser
        console.log(questions[currentQuestion].right, anwser)
        const nextIndex = (currentQuestion + 1) % questions.length;

        if (nextIndex === 0) {
            //console.log(questions[currentQuestion].anwser)
            console.log(questions.filter(x => x.anwser == x.right).length)
            // router.push({ pathname: "/"})
            return (
                <SafeAreaView>
                    <Text>You are fucking awsome gay!!!</Text>
                </SafeAreaView>
            )
        } else {
            setCurrentQuestion(nextIndex);
        }
    };

    const { id, img, question, anwsers, right } = questions[currentQuestion];

    return (
        <SafeAreaView style={styles.area}>
            <Image source={{ uri: img || 'https://www.liaros-drive.gr/test/images/pic0484.jpg' }} style={{width: '80%', height: '30%'}} />
            <Text style={styles.title}>{question}</Text>
            <SafeAreaView>
                {
                    anwsers && anwsers.map((anwser, index) => (
                        <Button key={index} title={`${index+1}) (${anwser})`} onPress={() => nextQuestion(index)} />
                    ))
                }
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.darkGrey,
        alignItems: "center",
        justifyContent: "center"
    }, 
    title: {
        
    }
});