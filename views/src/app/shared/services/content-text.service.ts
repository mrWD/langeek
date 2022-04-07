import { SettingsFormService } from './settings-form.service';
import { Injectable } from '@angular/core';

const mapLanguageToConstitutionTranslation: Record<string, string> = {
  english: 'constitution',
  german: 'Constitution',
  russian: 'конституция',
  polish: 'konstytucja',
  italian: 'constituzione',
  french: 'constitution',
}

const mapLanguageToLatinNounEnd: Record<string, string> = {
  english: 'tion',
  german: 'tion',
  russian: 'ция',
  polish: 'cja',
  italian: 'zione',
  french: 'tion',
}

const mapLanguageToText: Record<string, string> = {
  english: 'for example',
  german: 'zum Beispiel',
  russian: 'например',
  polish: 'na przykład',
  italian: 'per esempio',
  french: 'par exemple',
}

const getLatinWordsSimilarity = (originLang: string, lang: string) => {
  const exampleWord = mapLanguageToText[originLang];
  const nounOrigin = mapLanguageToConstitutionTranslation[originLang];
  const noun = mapLanguageToConstitutionTranslation[lang];
  const nounEndOrigin = mapLanguageToLatinNounEnd[originLang];
  const nounEnd = mapLanguageToLatinNounEnd[lang];
  return `"${nounEndOrigin}" = "${nounEnd}", ${exampleWord} "${nounOrigin}" = "${noun}"`;
}

const mapLangToContent = (lang: string): any => ({
  english: {
    homePage: {
      mainTitle: 'Welcome to the mini course for basic knowledge of language',
      mainText: 'First, answer yourself why do you need this language and how do you want to use it?',
      title: 'Some Tips',
      list: [
        'Do not perceive language as an exact science in which there is no room for error. Language is, first of all, not a science, it is a means for communication, for some kind of communication.',
        'Stop being afraid of him. You don\'t have to think that if you make a mistake, something bad will happen. No one will laugh, no one will yell at you, and no one will judge you. Foreigners like to hear when someone tries to speak their language.',
        'Bringing a number of basic structures to automatism is the core of the language on which you can string new words and structures even to infinity.',
      ],
      text: 'What is this language for you? What pleasant image do you have when you hear about it or when someone speaks it? It can be a place, a person, a character, an animal, an event, a movie, or a landscape. Anything!',
      navLinkText: 'Let\'s start!',
    },
    baseConjugations: {
      mainTitle: 'Part 1',
      textList: [
        'The most commonly used things are personal pronouns and verbs. Approximately 60 verbs are used most often, we need to remember how they interact with each other.',
        'The most commonly used tenses are 3. To say what you or someone else did in the past, what you are doing in the present and what you will do in the future.',
        'In the first lesson we will take 10 verbs, present tense and negation.',
      ],
      title1: 'First verbs',
      textForFirstVerb: 'Here is the first verb and how it is used with pronouns. Listen to them, remember the image and say each connection, indicating who we are talking about.',
      textForRestVerbs: 'Now do the same with other verbs and try to find a pattern. She eats often.',
      title2: 'Negation',
      textForNegativeSentence: 'If you need to say that you are NOT doing something, then say it like this.',
    },
    futureTensAndQuestions: {
      mainTitle: 'Part 2',
      text1: 'Two more important verbs in all languages are the verbs to be and to have. Here is their conjugation in the present tense and in the negative:',
      text2: 'Learn a few phrases to start a conversation:',
      text3: 'Now we will learn how to say that we once did or did not do something:',
      subtitle1: 'Past Tense:',
      subtitle2: 'Negative Past Tense:',
      subtitle3: 'Future Tense:',
      subtitle4: 'Negative Future Tense:',
      text4: 'Now we will learn how to say that we once did or didn’t do something And a few more useful words:',
    },
    profession: {
      mainTitle: 'Part 3',
      text1: 'Let\'s look at a few more important verbs:',
      text2: 'And three important structures:',
      subtitle1: 'A question in the present',
      subtitle2: 'A question in the past',
      subtitle3: 'Question in the future',
      text3: 'Today we will start talking about our profession, for this we will learn several names of professions:',
      text4: 'And ask around and, at the same time, answer a couple of questions, for this we will learn question words:',
      text5: 'With these words and knowing how questions are "assembled" we can ask and answer something.:',
    },
    tellAboutYourself: {
      mainTitle: 'Part 4',
      text1: 'Conjugate new verbs:',
      text2: 'Ask questions:',
      text3: 'And answer them:',
      listTitle: 'How to learn more than a thousand words in a couple of minutes?',
      listDescription: 'Many languages have similar words, but with different endings, and to say this word in another language, we only need to change the ending:',
      list: [
        [
          getLatinWordsSimilarity('english', lang),
          'Translate: revolution, abstraction, correction',
        ],
      ],
      text4: 'Some more new words:',
      pluralText: '',
      articlesText: '',
      text5: 'Sometimes you want to generalize and say that something is everywhere or no one is doing anything. For this we need the following words:',
    },
    moveVerbsPastTense: {
      mainTitle: 'Part 5',
      text1: 'In some languages, verbs of motion are conjugated in a special way. Maybe this language is not one of them, but we still need to learn these verbs, so look at the conjugations and repeat:',
      text2: 'And plus new verbs:',
      text3: 'And useful phrases and words:',
      text4: 'Answer the questions in the past tense:',
      text5: 'Answer questions in the future tense:',
    },
    pronounDeclension: {
      mainTitle: 'Part 6',
      text1: 'Sometimes we want to say that you see SOMEONE or that SOMEONE liked it. This can be said with the following pronouns:',
      text2: 'There is something else important - these are unions (and a couple of words):',
      text3: 'Translate:',
      text4: 'Here are a couple more adjectives:',
      text5: 'Answer the questions:',
    },
    possessivePronouns: {
      mainTitle: 'Part 7',
      text1: 'Sometimes, you need to say that something is yours or not yours. Of course, this can be done using special pronouns. Here they are, in the last column:',
      text2: 'Important Suggestions:',
      text3: 'New verbs:',
      text4: 'Translate:',
      text5: 'New words and phrases:',
      text6: 'Tell me what did you do:',
      text7: 'Days of the week:',
      text8: 'Tell me what you did this week and will do next (you can think of it).',
    },
    family: {
      mainTitle: 'Part 8',
      text1: 'New words and phrases:',
      text2: 'Pronouns indicating position in space:',
      text3: 'A few more verbs, you\'ll know what to do:',
      text4: 'And let\'s take one of the most important topics - NUMBERS:',
      text5: 'Translate:',
      text6: 'Words about family:',
      text7: 'Answer the questions:',
    },
    food: {
      mainTitle: 'Part 9',
      text1: 'Answer the questions:',
      text2: 'New verbs:',
      text3: 'New words:',
      text4: 'Translate:',
      text5: 'Answer the questions:',
      text6: 'Food:',
      text7: 'Finance:',
    },
    numbers: {
      mainTitle: 'Part 10',
      text1: 'Numbers:',
      text2: 'Adjectives:',
      text3: 'Verbs:',
      text4: 'Translate:',
      text5: 'Months and time:',
      text6: 'Words:',
      text7: 'Ordinals:',
      text8: 'Answer the questions:',
    },
    imperativeForm: {
      mainTitle: 'Part 11',
      text1: 'Tell about yourself:',
      text2: 'Translate:',
      text3: 'Verbs:',
      text4: 'Words:',
      text5: 'Sometimes you need to forcefully ask, just don\'t abuse it:',
    },
    pastEventsAndAdjectives: {
      mainTitle: 'Part 12',
      text1: 'Translate:',
      text2: 'Verbs:',
      text3: 'Answer the questions:',
      text4: 'Phrases:',
      text5: 'Words:',
    },
    cases: {
      mainTitle: 'Part 13',
      text1: 'Tell about yourself:',
      text2: 'Words:',
      text3: 'Verbs:',
      text4: 'Translate:',
    },
    bodyParts: {
      mainTitle: 'Part 14',
      text1: 'Body parts:',
      text2: 'Colors:',
      text3: 'Cloth:',
      text4: 'Answer the questions:',
      text5: 'Translate:',
      text6: 'Words:',
      text7: 'Verbs:',
    },
    ordinalNumbers: {
      mainTitle: 'Part 15',
      text1: 'Ordinals:',
      text2: 'Seasons:',
      text3: 'Phrases:',
      text4: 'Verbs:',
      text5: 'Сardinal directions:',
      text6: 'Answer the questions:',
    },
    directions: {
      mainTitle: 'Part 16',
      text1: 'Words:',
      text2: 'Verbs:',
      text3: 'Answer the questions:',
      text4: 'Direction:',
      text5: 'Phrases:',
      text6: 'Translate:',
    },
  },
  german: {
    homePage: {
      mainTitle: 'Willkommen zum Minikurs für Grundkenntnisse der Sprache',
      mainText: 'Antworten Sie sich zuerst selbst, warum Sie diese Sprache brauchen und wie Sie sie verwenden wollen?',
      title: 'Einige Tipps',
      list: [
        'Begreifen Sie die Sprache nicht als eine exakte Wissenschaft, in der es keinen Platz für Fehler gibt. Sprache ist zunächst einmal keine Wissenschaft, sie ist ein Kommunikationsmittel, für irgendeine Art von Kommunikation..',
        'Hör auf, Angst vor ihm zu haben. Sie müssen nicht glauben, dass etwas Schlimmes passieren wird, wenn Sie einen Fehler machen. Niemand wird lachen, niemand wird dich anschreien und niemand wird dich verurteilen. Ausländer hören gerne zu, wenn jemand versucht, ihre Sprache zu sprechen.',
        'Eine Reihe von Grundstrukturen in den Automatismus zu bringen, ist der Kern der Sprache, auf der Sie neue Wörter und Strukturen bis ins Unendliche aneinanderreihen können.',
      ],
      text: 'Was ist diese Sprache für dich? Welches angenehme Bild haben Sie, wenn Sie davon hören oder wenn jemand es spricht? Es kann ein Ort, eine Person, eine Figur, ein Tier, ein Ereignis, ein Film oder eine Landschaft sein. Irgendetwas!',
      navLinkText: 'Lasst uns beginnen!',
    },
    baseConjugations: {
      mainTitle: 'Teil 1',
      textList: [
        'Die am häufigsten verwendeten Dinge sind Personalpronomen und Verben. Ungefähr 60 Verben werden am häufigsten verwendet, wir müssen uns daran erinnern, wie sie miteinander interagieren.',
        'Die am häufigsten verwendeten Zeitformen sind 3. Um zu sagen, was Sie oder jemand anderes in der Vergangenheit getan hat, was Sie in der Gegenwart tun und was Sie in Zukunft tun werden.',
        'In der ersten Lektion nehmen wir 10 Verben, Präsens und Verneinung.',
      ],
      title1: 'Erste Verben',
      textForFirstVerb: 'Hier ist das erste Verb und wie es mit Pronomen verwendet wird. Hören Sie ihnen zu, merken Sie sich das Bild und sagen Sie jede Verbindung, um anzugeben, über wen wir sprechen.',
      textForRestVerbs: 'Machen Sie jetzt dasselbe mit anderen Verben und versuchen Sie, ein Muster zu finden. Sie isst oft.',
      title2: 'Negation',
      textForNegativeSentence: 'Wenn Sie sagen müssen, dass Sie etwas NICHT tun, dann sagen Sie es so.',
    },
    futureTensAndQuestions: {
      mainTitle: 'Teil 2',
      text1: 'Zwei wichtigere Verben in allen Sprachen sind die Verben sein und haben. Hier ist ihre Konjugation im Präsens und im Negativ:',
      text2: 'Lernen Sie ein paar Sätze, um ein Gespräch zu beginnen:',
      text3: 'Jetzt lernen wir, wie man sagt, dass wir etwas einmal getan oder nicht getan haben:',
      subtitle1: 'Vergangenheit:',
      subtitle2: 'Negative Vergangenheitsform:',
      Untertitel3: 'Future Tense:',
      subtitle4: 'Negative Futur:',
      text4: 'Jetzt lernen wir, wie man sagt, dass wir einmal etwas getan oder nicht getan haben Und noch ein paar nützliche Wörter:',
    },
    profession: {
      mainTitle: 'Teil 3',
      text1: 'Schauen wir uns ein paar weitere wichtige Verben an:',
      text2: 'Und drei wichtige Strukturen:',
      Untertitel1: 'Eine Frage in der Gegenwart',
      Untertitel2: 'Eine Frage in der Vergangenheit',
      Untertitel3: 'Frage in die Zukunft',
      text3: 'Heute werden wir anfangen, über unseren Beruf zu sprechen, dafür werden wir einige Berufsbezeichnungen lernen:',
      text4: 'Und fragen Sie herum und beantworten Sie gleichzeitig ein paar Fragen, dazu lernen wir Fragewörter:',
      text5: 'Mit diesen Worten und dem Wissen, wie Fragen "zusammengebaut" werden, können wir etwas fragen und beantworten:',
    },
    tellAboutYourself: {
      mainTitle: 'Teil 4',
      text1: 'Neue Verben konjugieren:',
      text2: 'Fragen stellen:',
      text3: 'Und antworte ihnen:',
      listTitle: 'Wie lernt man mehr als tausend Wörter in ein paar Minuten?',
      listDescription: 'Viele Sprachen haben ähnliche Wörter, aber mit unterschiedlichen Endungen, und um dieses Wort in einer anderen Sprache zu sagen, müssen wir nur die Endung ändern:',
      list: [
        [
          getLatinWordsSimilarity('german', lang),
          'Übersetze: Revolution, Abstraktion, Korrektur',
        ],
      ],
      text4: 'Noch ein paar neue Wörter:',
      pluralText: '',
      articlesText: '',
      text5: 'Manchmal möchte man verallgemeinern und sagen, dass überall etwas ist oder niemand etwas tut. Dazu brauchen wir folgende Wörter:',
    },
    moveVerbsPastTense: {
      mainTitle: 'Teil 5',
      text1: 'In manchen Sprachen werden Bewegungsverben auf besondere Weise konjugiert. Vielleicht gehört diese Sprache nicht dazu, aber wir müssen diese Verben noch lernen, also schau dir die Konjugationen an und wiederhole:',
      text2: 'Und plus neue Verben:',
      text3: 'Und nützliche Sätze und Wörter:',
      text4: 'Beantworte die Fragen im Präteritum:',
      text5: 'Fragen im Futur beantworten:',
    },
    pronounDeclension: {
      mainTitle: 'Teil 6',
      text1: 'Manchmal möchten wir sagen, dass Sie JEMANDEN sehen oder dass es JEMANDEM gefallen hat. Dies kann mit den folgenden Pronomen gesagt werden:',
      text2: 'Da ist noch etwas Wichtiges - das sind Gewerkschaften (und ein paar Worte):',
      text3: 'Übersetzen:',
      text4: 'Hier sind noch ein paar Adjektive:',
      text5: 'Beantworte die Fragen:',
    },
    possessivePronouns: {
      mainTitle: 'Teil 7',
      text1: 'Manchmal musst du sagen, ob etwas dir gehört oder nicht. Dies kann natürlich mit speziellen Pronomen geschehen. Hier sind sie, in der letzten Spalte:',
      text2: 'Wichtige Hinweise:',
      text3: 'Neue Verben:',
      text4: 'Übersetzen:',
      text5: 'Neue Wörter und Sätze:',
      text6: 'Sag mir, was hast du gemacht:',
      text7: 'Wochentage:',
      text8: 'Sagen Sie mir, was Sie diese Woche gemacht haben und was Sie als nächstes tun werden (Sie können es sich vorstellen).',
    },
    family: {
      mainTitle: 'Teil 8',
      text1: 'Neue Wörter und Sätze:',
      text2: 'Pronomen, die die Position im Raum angeben:',
      text3: 'Noch ein paar Verben, dann wissen Sie, was zu tun ist:',
      text4: 'Und nehmen wir eines der wichtigsten Themen - ZAHLEN:',
      text5: 'Übersetzen:',
      text6: 'Worte über Familie:',
      text7: 'Beantworte die Fragen:',
    },
    food: {
      mainTitle: 'Teil 9',
      text1: 'Answer the questions:',
      text2: 'New verbs:',
      text3: 'New words:',
      text4: 'Translate:',
      text5: 'Answer the questions:',
      text6: 'Food:',
      text7: 'Finance:',
    },
    numbers: {
      mainTitle: 'Teil 10',
      text1: 'Zahlen:',
      text2: 'Adjektive:',
      text3: 'Verben:',
      text4: 'Übersetzen:',
      text5: 'Monate und Zeit:',
      text6: 'Wörter:',
      text7: 'Ordnungszahlen:',
      text8: 'Beantworte die Fragen:',
    },
    imperativeForm: {
      mainTitle: 'Teil 11',
      text1: 'Erzähl von dir:',
      text2: 'Übersetzen:',
      text3: 'Verben:',
      text4: 'Wörter:',
      text5: 'Manchmal müssen Sie nachdrücklich fragen, aber missbrauchen Sie es nicht:',
    },
    pastEventsAndAdjectives: {
      mainTitle: 'Teil 12',
      text1: 'Übersetzen:',
      text2: 'Verben:',
      text3: 'Beantworte die Fragen:',
      text4: 'Phrasen:',
      text5: 'Wörter:',
    },
    cases: {
      mainTitle: 'Teil 13',
      text1: 'Erzähl von dir:',
      text2: 'Wörter:',
      text3: 'Verben:',
      text4: 'Übersetzen:',
    },
    bodyParts: {
      mainTitle: 'Teil 14',
      text1: 'Körperteile:',
      text2: 'Farben:',
      text3: 'Stoff:',
      text4: 'Beantworte die Fragen:',
      text5: 'Übersetzen:',
      text6: 'Wörter:',
      text7: 'Verben:',
    },
    ordinalNumbers: {
      mainTitle: 'Teil 15',
      text1: 'Ordnungszahlen:',
      text2: 'Jahreszeiten:',
      text3: 'Phrasen:',
      text4: 'Verben:',
      text5: 'Himmelsrichtungen:',
      text6: 'Beantworte die Fragen:',
    },
    directions: {
      mainTitle: 'Teil 16',
      text1: 'Wörter:',
      text2: 'Verben:',
      text3: 'Beantworte die Fragen:',
      text4: 'Richtung:',
      text5: 'Phrasen:',
      text6: 'Übersetzen:',
    },
  },
  russian: {
    homePage: {
      mainTitle: 'Добро пожаловать на мини курс базовых знаний языка.',
      mainText: 'Для начала ответьте себе для чего Вам этот язык и как Вы хотите его использовать?',
      title: 'Несколько советов',
      list: [
        'Не воспринимать язык как точную науку, в которой нет права на ошибку. Язык - это, в первую очередь, не наука, это средство для общения, для какой-то коммуникации.',
        'Перестать его бояться. Не нужно думать что если вы ошибетесь, то произойдет что-то плохое. Никто не будет смеяться, никто не будет на Вас кричать и никто Вас не осудит. Иностранцам нравится слышать когда кто-то пытается говорить на их языке.',
        'Довести до автоматизма ряд базовых структур - это стержень языка на который можно нанизывать новые слова и структуры хоть до бесконечности.',
      ],
      text: 'Что для Вас этот язык? Какой приятный образ у Вас возникает когда Вы слышите о нем или когда кто-то говорит на нем? Это может быть какое-то место, личность, персонаж, животное, событие, фильм или пейзаж. Что угодно!',
      link: 'Перейти к первому уроку',
      navLinkText: 'Начнем!',
    },
    baseConjugations: {
      mainTitle: 'Часть 1',
      textList: [
        'Самые часто используемые вещи - это личные местоимения и глаголы. Примерно 60 глаголов используются чаще всех, нам нужно запомнить как они взаимодействуют друг с другом.',
        'Самых часто используемых времен - 3. Чтобы сказать что Вы или кто-то еще делали в прошлом, что делаете в настоящем и что будете делать в будущем.',
        'В первом уроке мы возьмем 10 глаголов, время о настоящем и отрицание.',
      ],
      title1: 'Первые глаголы',
      textForFirstVerb: 'Вот первый глагол и как он употребляется с местоимениями. Прослушайте их, вспомните образ и проговорите каждую связь, указывая о ком идем речь',
      textForRestVerbs: 'А теперь проделайте то же самое с другими глаголами и попробуйте найти закономерность. Она часто есть.',
      title2: 'Отрицание',
      textForNegativeSentence: 'Если Вам нужно сказать что вы что то НЕ делаете, то скажите это следующим образом.',
    },
    futureTensAndQuestions: {
      mainTitle: 'Часть 2',
      text1: 'Еще два важных глагола во всех языках - глаголы быть и иметь. Вот их спряжение в настоящем времени и в отрицании:',
      text2: 'Изучим несколько фраз для начала разговора:',
      text3: 'Теперь узнаем как сказать что мы что-то когда-то делали или не делали:',
      subtitle1: 'Прошедшее:',
      subtitle2: 'Прошедшее отрицательное:',
      subtitle3: 'Будущее:',
      subtitle4: 'Будущее отрицательное:',
      text4: 'И еще несколько полезных слов:',
    },
    profession: {
      mainTitle: 'Часть 3',
      text1: 'Рассмотрим еще несколько важных глаголов:',
      text2: 'И три важных структуры:',
      subtitle1: 'Вопрос в настоящем',
      subtitle2: 'Вопрос в прошедшем',
      subtitle3: 'Вопрос в будущем',
      text3: 'Сегодня начнем рассказывать о своей профессии, для этого выучим несколько названий профессий:',
      text4: 'И поспрашиваем и, заодно, ответим на пару вопросов, для этого выучим вопроситльные слова:',
      text5: 'С этими словами и зная как "собираются" вопросы мы можем что-то спросить и ответить:',
    },
    tellAboutYourself: {
      mainTitle: 'Часть 4',
      text1: 'Проспрягайте новые глаголы:',
      text2: 'Задайте вопросы:',
      text3: 'И ответьте на них:',
      listTitle: 'Как выучить больше тысячи слов за пару минут?',
      listDescription: 'Во многих языках есть похожие слова, но с разными окончаниями и чтобы сказать это слово на другом языке, нам нужно лишь изменить окончание:',
      list: [
        [
          getLatinWordsSimilarity('russian', lang),
          'Переведите: революция, абстракция, коррекция',
        ],
      ],
      text4: 'Еще немного новых слов:',
      pluralText: '',
      articlesText: '',
      text5: 'Иногда хочется обобщить и сказать, что что-то есть везде или никто ничего не делает. Для этого нам нужны следующие слова:',
    },
    moveVerbsPastTense: {
      mainTitle: 'Часть 5',
      text1: 'В некоторых языках глаголы движения спрягаются по особому. Возможно этот язык не из таких, но нам все равно нужно выучить эти глаголы, так что посмотрите на спряжения и повторите:',
      text2: 'И плюс новые глаголы:',
      text3: 'И полезные фразы и слова:',
      text4: 'Ответьте на вопросы в прошедшем времени:',
      text5: 'Ответьте на вопросы в будущем времени:',
    },
    pronounDeclension: {
      mainTitle: 'Часть 6',
      text1: 'Иногда мы хотим сказать что вы видите КОГО-ТО или что понравилось КОМУ-ТО. Это можно сказать с помощью следующих местоимений:',
      text2: 'Есть еще кое-что важное - это союзы (и пара слов):',
      text3: 'Переведите:',
      text4: 'Вот вам еще пара прилагательных:',
      text5: 'Ответьте на вопросы:',
    },
    possessivePronouns: {
      mainTitle: 'Часть 7',
      text1: 'Порою, нужно сказать что что-то ваше или не ваше. Конечно это можно сделать с помощью специальных местоимений. Вот они, в последнем столбце:',
      text2: 'Важные предлоги:',
      text3: 'Новые глаголы:',
      text4: 'Переводы:',
      text5: 'Новые слова и фразы:',
      text6: 'Расскажите мне что вы делали:',
      text7: 'Дни недели:',
      text8: 'Расскажите мне что вы делали на этой неделе и будете делать на следующей (можете придумать).',
    },
    family: {
      mainTitle: 'Часть 8',
      text1: 'Новые слова и фразы:',
      text2: 'Местоимения, указывающие на положение в пространстве:',
      text3: 'Еще несколько глаголов, вызнаете что делать:',
      text4: 'И возьмем одну из самых важных тем - ЧИСЛА:',
      text5: 'Переведите:',
      text6: 'Слова о семье:',
      text7: 'Ответы на вопросы:',
    },
    food: {
      mainTitle: 'Часть 9',
      text1: 'Ответьте на вопросы:',
      text2: 'Новые глаголы:',
      text3: 'Новые слова:',
      text4: 'Переведите:',
      text5: 'Ответьте на вопросы:',
      text6: 'Еда:',
      text7: 'Финансы:',
    },
    numbers: {
      mainTitle: 'Часть 10',
      text1: 'Числа:',
      text2: 'Прилагательные:',
      text3: 'Глаголы:',
      text4: 'Переведите:',
      text5: 'Месяца и время:',
      text6: 'Слова:',
      text7: 'Порядковые числительные:',
      text8: 'Ответьте на вопросы:',
    },
    imperativeForm: {
      mainTitle: 'Часть 11',
      text1: 'Рассказ о себе:',
      text2: 'Перевод:',
      text3: 'Глаголы:',
      text4: 'Слова:',
      text5: 'Иногда нужно настоятельно попросить, только не злоупотребляйте этим:',
    },
    pastEventsAndAdjectives: {
      mainTitle: 'Часть 12',
      text1: 'Перевод:',
      text2: 'Глаголы:',
      text3: 'Ответьте на вопросы:',
      text4: 'Фразы:',
      text5: 'Слова:',
    },
    cases: {
      mainTitle: 'Часть 13',
      text1: 'Рассказ о себе:',
      text2: 'Слова:',
      text3: 'Глаголы:',
      text4: 'Перевод:',
    },
    bodyParts: {
      mainTitle: 'Часть 14',
      text1: 'Части тела:',
      text2: 'Цвета:',
      text3: 'Одежда:',
      text4: 'Ответьте на вопросы:',
      text5: 'Перевести:',
      text6: 'Слова:',
      text7: 'Глаголы:',
    },
    ordinalNumbers: {
      mainTitle: 'Часть 15',
      text1: 'Порядковые числительные:',
      text2: 'Времена года:',
      text3: 'Фразы:',
      text4: 'Глаголы:',
      text5: 'Стороны света:',
      text6: 'Ответы на вопросы:',
    },
    directions: {
      mainTitle: 'Часть 16',
      text1: 'Слова:',
      text2: 'Глаголы:',
      text3: 'Ответы на вопросы:',
      text4: 'Направление:',
      text5: 'Фразы:',
      text6: 'Перевести:',
    },
  },
  polish: {
    homePage: {
      mainTitle: 'Zapraszamy na mini kurs podstawowej znajomości języka',
      mainText: 'Przede wszystkim zadaj sobie pytanie, do czego służy ten język i jak chcesz go używać?',
      title: 'Kilka wskazówek',
      list: [
        'Nie postrzegaj języka jako nauki ścisłej, w której nie ma miejsca na błędy. Język to przede wszystkim nie nauka, to środek komunikacji, jakiś rodzaj komunikacji.',
        'Przestań się go bać. Nie musisz myśleć, że jeśli popełnisz błąd, stanie się coś złego. Nikt się nie śmieje, nikt nie będzie na ciebie krzyczeć i nikt cię nie osądzi. Cudzoziemcy lubią słyszeć, gdy ktoś próbuje mówić w ich języku.',
        'Doprowadzenie szeregu podstawowych struktur do automatyzmu jest rdzeniem języka, w którym można ciągnąć nowe słowa i struktury nawet w nieskończoność.',
      ],
      text: 'Co to za język dla ciebie? Jaki masz przyjemny obraz, gdy o tym słyszysz lub gdy ktoś to mówi? Może to być miejsce, osoba, postać, zwierzę, wydarzenie, film lub krajobraz. Wszystko!',
      navLinkText: 'Zaczynajmy!',
    },
    baseConjugations: {
      mainTitle: 'Część 1',
      textList: [
        'Najczęściej używanymi rzeczami są zaimki osobowe i czasowniki. Jest około 60 najczęściej używanych czasowników, musimy pamiętać, jak wchodzą ze sobą w interakcje.',
        'Najczęściej używane czasy to 3. Aby powiedzieć, co ty lub ktoś inny robiłeś w przeszłości, co robisz teraz i co będziesz robić w przyszłości.',
        'W pierwszej lekcji weźmiemy 10 czasowników w czasie teraźniejszym i negacji.',
      ],
      title1: 'Pierwsze czasowniki',
      textForFirstVerb: 'Oto pierwszy czasownik i jego użycie z zaimkami. Posłuchaj ich, zapamiętaj obraz i wypowiedz każde połączenie, wskazując, o kim mówimy',
      textForRestVerbs: 'Teraz zrób to samo z innymi czasownikami i spróbuj znaleźć wzorzec. Często je.',
      title2: 'Negatywne',
      textForNegativeSentence: 'Jeśli chcesz powiedzieć, że czegoś NIE robisz, powiedz to w ten sposób.',
    },
    futureTensAndQuestions: {
      mainTitle: 'Część 2',
      text1: 'Dwa ważniejsze czasowniki we wszystkich językach to czasowniki być i mieć. Oto ich obecna i negatywna koniugacja:',
      text2: 'Nauczmy się kilku zwrotów, aby rozpocząć rozmowę:',
      text3: 'Teraz nauczmy się mówić, że coś zrobiliśmy lub nie zrobiliśmy:',
      subtitle1: 'Czas przeszły:',
      subtitle2: 'Negatywne czasy przeszłe:',
      subtitle3: 'Czas przyszły:',
      subtitle4: 'Negatywny czas przyszły:',
      text4: 'I jeszcze kilka przydatnych słów:',
    },
    profession: {
      mainTitle: 'Część 3',
      text1: 'Przyjrzyjmy się kilku ważniejszym czasownikom:',
      text2: 'I trzy ważne struktury:',
      subtitle1: 'Pytanie w teraźniejszości',
      subtitle2: 'Pytanie z przeszłości',
      subtitle3: 'Pytanie w przyszłości',
      text3: 'Dziś zaczniemy rozmawiać o naszym zawodzie, do tego nauczymy się kilku nazw zawodów:',
      text4: 'I zapytajmy i jednocześnie odpowiedzmy na kilka pytań, w tym celu nauczymy się pytających słów:',
      text5: 'Z tymi słowami i wiedząc, jak pytania są "składane" możemy o coś zapytać i odpowiedzieć:',
    },
    tellAboutYourself: {
      mainTitle: 'Część 4',
      text1: 'Odmień nowe czasowniki:',
      text2: 'Zadawaj pytania:',
      text3: 'I odpowiedz im:',
      listTitle: 'Jak mogę nauczyć się więcej niż tysiąca słów w kilka minut?',
      listDescription: 'Wiele języków ma podobne słowa, ale z różnymi zakończeniami i aby wypowiedzieć to słowo w innym języku, wystarczy zmienić końcówkę:',
      list: [
        [
          getLatinWordsSimilarity('polish', lang),
          'Tłumacz: rewolucja, abstrakcja, korekta',
        ],
      ],
      text4: 'Więcej nowych słów:',
      pluralText: '',
      articlesText: '',
      text5: 'Czasami chcesz uogólnić i powiedzieć, że coś jest wszędzie lub nikt nic nie robi. Potrzebujemy do tego następujących słów:',
    },
    moveVerbsPastTense: {
      mainTitle: 'Część 5',
      text1: 'W niektórych językach czasowniki ruchu mają specjalną odmianę. Może to nie jest jeden z tych języków, ale wciąż musimy nauczyć się tych czasowników, więc spójrz na koniugacje i powtórz:',
      text2: 'I plus nowe czasowniki:',
      text3: 'I przydatne zwroty i słowa:',
      text4: 'Odpowiedz na pytania w czasie przeszłym:',
      text5: 'Odpowiedz na pytania w czasie przyszłym:',
    },
    pronounDeclension: {
      mainTitle: 'Część 6',
      text1: 'Czasami chcemy powiedzieć, że widzisz KOGOŚ lub KTOŚ to polubił. Można to powiedzieć za pomocą następujących zaimków:',
      text2: 'Jest jeszcze coś ważnego - spójniki (i kilka słów):',
      text3: 'Tłumacz:',
      text4: 'Oto jeszcze kilka przymiotników:',
      text5: 'Odpowiedz na pytania:',
    },
    possessivePronouns: {
      mainTitle: 'Część 7',
      text1: 'Czasami musisz powiedzieć, że coś jest twoje lub nie. Oczywiście można to zrobić za pomocą specjalnych zaimków. Oto one, w ostatniej kolumnie:',
      text2: 'Ważne przyimki:',
      text3: 'Nowe czasowniki:',
      text4: 'Tłumaczenia:',
      text5: 'Nowe słowa i wyrażenia:',
      text6: 'Powiedz mi, co zrobiłeś:',
      text7: 'Dni tygodnia:',
      text8: 'Powiedz mi, co zrobiłeś w tym tygodniu i co będziesz robić w przyszłym (możesz o tym pomyśleć).',
    },
    family: {
      mainTitle: 'Część 8',
      text1: 'Nowe słowa i wyrażenia:',
      text2: 'Zaimki wskazujące pozycję w przestrzeni:',
      text3: 'Kilka czasowników więcej, będziesz wiedział, co robić:',
      text4: 'I weź jeden z najważniejszych tematów - LICZBY:',
      text5: 'Tłumacz:',
      text6: 'Rodzinne słowa:',
      text7: 'Odpowiedzi na pytania:',
    },
    food: {
      mainTitle: 'Część 9',
      text1: 'Odpowiedz na pytania:',
      text2: 'Nowe czasowniki:',
      text3: 'Nowe słowa:',
      text4: 'Tłumacz:',
      text5: 'Odpowiedz na pytania:',
      text6: 'Jedzenie:',
      text7: 'Finanse:',
    },
    numbers: {
      mainTitle: 'Część 10',
      text1: 'Liczby:',
      text2: 'Przymiotniki:',
      text3: 'Czasowniki:',
      text4: 'Tłumacz:',
      text5: 'Miesiące i godziny:',
      text6: 'Słowa:',
      text7: 'Liczby porządkowe:',
      text8: 'Odpowiedz na pytania:',
    },
    imperativeForm: {
      mainTitle: 'Część 11',
      text1: 'O mnie:',
      text2: 'Tłumaczenie:',
      text3: 'Czasowniki:',
      text4: 'Słowa:',
      text5: 'Czasami trzeba mocno prosić, tylko nie przesadzaj:',
    },
    pastEventsAndAdjectives: {
      mainTitle: 'Część 12',
      text1: 'Tłumaczenie:',
      text2: 'Czasowniki:',
      text3: 'Odpowiedz na pytania:',
      text4: 'Zwroty:',
      text5: 'Słowa:',
    },
    cases: {
      mainTitle: 'Część 13',
      text1: 'O mnie:',
      text2: 'Słowa:',
      text3: 'Czasowniki:',
      text4: 'Tłumaczenie:',
    },
    bodyParts: {
      mainTitle: 'Część 14',
      text1: 'Części ciała:',
      text2: 'Kolory:',
      text3: 'Ubrania:',
      text4: 'Odpowiedz na pytania:',
      text5: 'Tłumacz:',
      text6: 'Słowa:',
      text7: 'Czasowniki:',
    },
    ordinalNumbers: {
      mainTitle: 'Część 15',
      text1: 'Liczby porządkowe:',
      text2: 'Pory roku:',
      text3: 'Zwroty:',
      text4: 'Czasowniki:',
      text5: 'Wymiary:',
      text6: 'Odpowiedzi na pytania:',
    },
    directions: {
      mainTitle: 'Część 16',
      text1: 'Słowa:',
      text2: 'Czasowniki:',
      text3: 'Odpowiedzi na pytania:',
      text4: 'Kierunek:',
      text5: 'Zwroty:',
      text6: 'Tłumacz:',
    },
  },
  italian: {
    homePage: {
      mainTitle: 'Benvenuti in un mini corso sulla conoscenza della lingua di base.',
      mainText: 'Prima di tutto, chiediti a cosa serve questa lingua e come vuoi usarla?',
      title: 'Alcuni consigli',
      list: [
        'Non percepire il linguaggio come una scienza esatta in cui non c\'è spazio per l\'errore. La lingua, prima di tutto, non è una scienza, è un mezzo di comunicazione, per un qualche tipo di comunicazione.',
        'Smettila di aver paura di lui. Non devi pensare che se commetti un errore, accadrà qualcosa di brutto. Nessuno riderà, nessuno urlerà contro di te e nessuno ti giudicherà. Agli stranieri piace sentire quando qualcuno cerca di parlare la loro lingua.',
        'Portare un certo numero di strutture di base all\'automatismo è il fulcro del linguaggio su cui puoi infilare nuove parole e strutture anche all\'infinito.',
      ],
      text: 'Cos\'è questa lingua per te? Che immagine piacevole hai quando ne senti parlare o quando qualcuno ne parla? Può essere un luogo, una persona, un personaggio, un animale, un evento, un film o un paesaggio. Nulla!',
      navLinkText: 'Iniziamo!',
    },
    baseConjugations: {
      mainTitle: 'Parte 1',
      textList: [
        'Le cose più comunemente usate sono i pronomi personali ei verbi. Ci sono circa 60 verbi che vengono usati di più, dobbiamo ricordare come interagiscono tra loro.',
        'I tempi più comunemente usati sono 3. Per dire cosa avete fatto tu o qualcun altro in passato, cosa stai facendo ora e cosa farai in futuro.',
        'Nella prima lezione prenderemo 10 verbi, presente e negazione.',
      ],
      title1: 'Primi verbi',
      textForFirstVerb: 'Ecco il primo verbo e come viene usato con i pronomi. Ascoltali, ricorda l\'immagine e pronuncia ogni connessione, indicando di chi stiamo parlando',
      textForRestVerbs: 'Ora fai lo stesso con altri verbi e prova a trovare uno schema. Mangia spesso.',
      title2: 'Negativo',
      textForNegativeSentence: 'Se devi dire che NON stai facendo qualcosa, allora dillo in questo modo.',
    },
    futureTensAndQuestions: {
      mainTitle: 'Parte 2',
      text1: 'Due verbi più importanti in tutte le lingue sono i verbi essere e avere. Ecco la loro coniugazione presente e negativa:',
      text2: 'Impariamo alcune frasi per iniziare una conversazione:',
      text3: 'Ora impariamo a dire che abbiamo fatto o non fatto qualcosa:',
      subtitle1: 'Passato:',
      subtitle2: 'Passato negativo:',
      subtitle3: 'Futuro:',
      subtitle4: 'Tempo futuro negativo:',
      text4: 'E qualche altra parola utile:',
    },
    profession: {
      mainTitle: 'Parte 3',
      text1: 'Diamo un\'occhiata ad alcuni verbi più importanti:',
      text2: 'E tre importanti strutture:',
      subtitle1: 'Una domanda nel presente',
      subtitle2: 'Una domanda nel passato',
      subtitle3: 'Domanda in futuro',
      text3: 'Oggi inizieremo a parlare della nostra professione, per questo impareremo diversi nomi di professioni:',
      text4: 'E chiediamo in giro e, allo stesso tempo, rispondiamo a un paio di domande, per questo impareremo le parole interrogative:',
      text5: 'Con queste parole e sapendo come vengono "assemblate" le domande possiamo chiedere e rispondere a qualcosa:',
    },
    tellAboutYourself: {
      mainTitle: 'Parte 4',
      text1: 'Coniuga nuovi verbi:',
      text2: 'Fai domande:',
      text3: 'E rispondi loro:',
      listTitle: 'Come posso imparare più di mille parole in un paio di minuti?',
      listDescription: 'Molte lingue hanno parole simili ma con finali differenti e per pronunciare questa parola in un\'altra lingua dobbiamo solo cambiare la desinenza:',
      list: [
        [
          getLatinWordsSimilarity('italian', lang),
          'Traduci: rivoluzione, astrazione, correzione',
        ],
      ],
      text4: 'Altre nuove parole:',
      pluralText: '',
      articlesText: '',
      text5: 'A volte vuoi generalizzare e dire che qualcosa è ovunque o che nessuno sta facendo nulla. Per questo abbiamo bisogno delle seguenti parole:',
    },
    moveVerbsPastTense: {
      mainTitle: 'Parte 5',
      text1: 'In alcune lingue, i verbi di movimento hanno una coniugazione speciale. Potrebbe non essere una di quelle lingue, ma abbiamo ancora bisogno di imparare questi verbi, quindi guarda le coniugazioni e ripeti:',
      text2: 'E più nuovi verbi:',
      text3: 'E frasi e parole utili:',
      text4: 'Rispondi alle domande al passato:',
      text5: 'Rispondi alle domande al futuro:',
    },
    pronounDeclension: {
      mainTitle: 'Parte 6',
      text1: 'A volte vogliamo dire che vedi QUALCUNO o che A QUALCUNO è piaciuto. Questo si può dire usando i seguenti pronomi:',
      text2: 'C\'è qualcos\'altro di importante - congiunzioni (e un paio di parole):',
      text3: 'Traduci:',
      text4: 'Ecco un altro paio di aggettivi per te:',
      text5: 'Rispondi alle domande:',
    },
    possessivePronouns: {
      mainTitle: 'Parte 7',
      text1: 'A volte devi dire che qualcosa è tuo o no. Naturalmente, questo può essere fatto usando pronomi speciali. Eccoli, nell\'ultima colonna:',
      text2: 'Preposizioni importanti:',
      text3: 'Nuovi verbi:',
      text4: 'Traduzioni:',
      text5: 'Nuove parole e frasi:',
      text6: 'Dimmi cosa hai fatto:',
      text7: 'Giorni della settimana:',
      text8: 'Dimmi cosa hai fatto questa settimana e cosa farai la prossima settimana (puoi pensarci).',
    },
    family: {
      mainTitle: 'Parte 8',
      text1: 'Nuove parole e frasi:',
      text2: 'Pronomi che indicano posizione nello spazio:',
      text3: 'Ancora qualche verbo, saprai cosa fare:',
      text4: 'E prendi uno degli argomenti più importanti - I NUMERI:',
      text5: 'Traduci:',
      text6: 'Parole di famiglia:',
      text7: 'Risposte alle domande:',
    },
    food: {
      mainTitle: 'Parte 9',
      text1: 'Rispondi alle domande:',
      text2: 'Nuovi verbi:',
      text3: 'Nuove parole:',
      text4: 'Traduci:',
      text5: 'Rispondi alle domande:',
      text6: 'Cibo:',
      text7: 'Finanza:',
    },
    numbers: {
      mainTitle: 'Parte 10',
      text1: 'Numeri:',
      text2: 'Aggettivi:',
      text3: 'Verbi:',
      text4: 'Traduci:',
      text5: 'Mesi e orari:',
      text6: 'Parole:',
      text7: 'Numeri ordinali:',
      text8: 'Rispondi alle domande:',
    },
    imperativeForm: {
      mainTitle: 'Parte 11',
      text1: 'Su di me:',
      text2: 'Traduzione:',
      text3: 'Verbi:',
      text4: 'Parole:',
      text5: 'A volte devi chiedere con forza, ma non esagerare:',
    },
    pastEventsAndAdjectives: {
      mainTitle: 'Parte 12',
      text1: 'Traduzione:',
      text2: 'Verbi:',
      text3: 'Rispondi alle domande:',
      text4: 'Frasi:',
      text5: 'Parole:',
    },
    cases: {
      mainTitle: 'Parte 13',
      text1: 'Su di me:',
      text2: 'Parole:',
      text3: 'Verbi:',
      text4: 'Traduzione:',
    },
    bodyParts: {
      mainTitle: 'Parte 14',
      text1: 'Parti del corpo:',
      text2: 'Colori:',
      text3: 'Vestiti:',
      text4: 'Rispondi alle domande:',
      text5: 'Traduci:',
      text6: 'Parole:',
      text7: 'Verbi:',
    },
    ordinalNumbers: {
      mainTitle: 'Parte 15',
      text1: 'Numeri ordinali:',
      text2: 'Stagioni:',
      text3: 'Frasi:',
      text4: 'Verbi:',
      text5: 'Dimensioni:',
      text6: 'Risposte alle domande:',
    },
    directions: {
      mainTitle: 'Parte 16',
      text1: 'Parole:',
      text2: 'Verbi:',
      text3: 'Risposte alle domande:',
      text4: 'Direzione:',
      text5: 'Frasi:',
      text6: 'Traduci:',
    },
  },
  french: {
    homePage: {
      mainTitle: 'Bienvenue dans un mini cours sur les connaissances linguistiques de base.',
      mainText: 'Tout d\'abord, demandez-vous à quoi sert ce langage et comment voulez-vous l\'utiliser ?',
      title: 'Quelques conseils',
      list: [
        'Ne percevez pas le langage comme une science exacte dans laquelle il n\'y a pas de place pour l\'erreur. La langue, tout d\'abord, n\'est pas une science, c\'est un moyen de communication, pour une sorte de communication.',
        'Arrête d\'avoir peur de lui. Vous n\'avez pas à penser que si vous faites une erreur, quelque chose de grave se produira. Personne ne rira, personne ne vous criera dessus et personne ne vous jugera. Les étrangers aiment entendre quand quelqu\'un essaie de parler leur langue.',
        'Apporter un certain nombre de structures de base à l\'automatisme est le pivot du langage sur lequel on peut enfiler de nouveaux mots et structures jusqu\'à l\'infini.',
      ],
      text: 'C\'est quoi cette langue pour toi? Quelle image agréable avez-vous quand vous en entendez parler ou quand quelqu\'un en parle? Il peut s\'agir d\'un lieu, d\'une personne, d\'un personnage, d\'un animal, d\'un événement, d\'un film ou d\'un paysage. Rien!',
      navLinkText: 'Commençons!',
    },
    baseConjugations: {
      mainTitle: 'Partie 1',
      textList: [
        'Les choses les plus couramment utilisées sont les pronoms personnels et les verbes. Il y a environ 60 verbes les plus utilisés, nous devons nous rappeler comment ils interagissent les uns avec les autres.',
        'Les temps les plus couramment utilisés sont 3. Pour dire ce que vous ou quelqu\'un d\'autre avez fait dans le passé, ce que vous faites maintenant et ce que vous ferez à l\'avenir.',
        'Dans la première leçon, nous prendrons 10 verbes, présent et négation.',
      ],
      title1 : 'Premiers verbes',
      textForFirstVerb: 'Voici le premier verbe et comment il est utilisé avec les pronoms. Écoutez-les, souvenez-vous de l\'image et prononcez chaque connexion en indiquant de qui nous parlons ',
      textForRestVerbs: 'Maintenant, faites la même chose avec d\'autres verbes et essayez de trouver un modèle. Mangez souvent. ',
      title2: 'Négatif',
      textForNegativeSentence: 'Si vous devez dire que vous ne faites PAS quelque chose, dites-le comme ceci.',
    },
    futureTensAndQuestions: {
      mainTitle: 'Partie 2',
      text1: 'Deux verbes les plus importants dans toutes les langues sont les verbes être et avoir. Voici leur conjugaison au présent et au négatif:',
      text2: 'Apprenons quelques phrases pour démarrer une conversation:',
      text3: 'Maintenant, apprenons à dire que nous avons fait ou n\'avons pas fait quelque chose:',
      subtitle1: 'Passé:',
      subtitle2: 'Passé négatif :',
      subtitle3: 'Futur:',
      subtitle4: 'Négatif Futur Négatif:',
      text4: 'Et quelques autres mots utiles:',
    },
    profession: {
      mainTitle: 'Partie 3',
      text1: 'Regardons quelques verbes plus importants:',
      text2: 'Et trois structures importantes:',
      subtitle1: 'Une question au présent',
      subtitle2: 'Une question dans le passé',
      subtitle3: 'Question dans le futur',
      text3: 'Aujourd\'hui nous allons commencer à parler de notre métier, pour cela nous allons apprendre différents noms de métiers:',
      text4: 'Et nous demandons autour de nous et, en même temps, nous répondons à quelques questions, pour cela nous apprendrons les mots interrogatifs:',
      text5: 'Avec ces mots et sachant comment les questions sont "assemblées", nous pouvons demander et répondre à quelque chose:',
    },
    tellAboutYourself: {
      mainTitle: 'Partie 4',
      text1: 'Conjuguez les nouveaux verbes:',
      text2: 'Poser des questions:',
      text3: 'Et répondez-leur:',
      listTitle: 'Comment puis-je apprendre plus de mille mots en quelques minutes?',
      listDescription: 'De nombreuses langues ont des mots similaires mais avec des terminaisons différentes et pour prononcer ce mot dans une autre langue, il suffit de changer la terminaison:',
      list: [
        [
          getLatinWordsSimilarity('french', lang),
          'Traduire: révolution, abstraction, correction',
        ],
      ],
      text4: 'Plus de nouveaux mots:',
      pluralText: '',
      articlesText: '',
      text5: 'Parfois, vous voulez généraliser et dire qu\'il y a quelque chose partout ou que personne ne fait rien. Pour cela nous avons besoin des mots suivants:',
    },
    moveVerbsPastTense: {
      mainTitle: 'Partie 5',
      text1: 'Dans certaines langues, les verbes de mouvement ont une conjugaison spéciale. Ce n\'est peut-être pas l\'une de ces langues, mais nous devons encore apprendre ces verbes, alors regardez les conjugaisons et répétez:',
      text2: 'Et encore de nouveaux verbes:',
      text3: 'Et des phrases et des mots utiles:',
      text4: 'Répondez aux questions au passé:',
      text5: 'Répondez aux questions sur le futur:',
    },
    pronounDeclension: {
      mainTitle: 'Partie 6',
      text1: 'Parfois, nous voulons dire que vous avez vu QUELQU\'UN ou que QUELQU\'UN a aimé. Cela peut être dit en utilisant les pronoms suivants:',
      text2: 'Il y a autre chose d\'important - les conjonctions (et quelques mots):',
      text3: 'Traduire:',
      text4: 'Voici quelques adjectifs supplémentaires pour vous:',
      text5: 'Répondez aux questions:',
    },
    possessivePronouns: {
      mainTitle: 'Partie 7',
      text1: 'Parfois, vous devez dire que quelque chose vous appartient ou non. Bien sûr, cela peut être fait en utilisant des pronoms spéciaux. Les voici, dans la dernière colonne:',
      text2: 'Prépositions importantes:',
      text3: 'Nouveaux verbes:',
      text4: 'Traductions:',
      text5: 'Nouveaux mots et expressions:',
      text6: 'Dis-moi ce que tu as fait:',
      text7: 'Jours de la semaine:',
      text8: 'Dites-moi ce que vous avez fait cette semaine et ce que vous ferez la semaine prochaine (vous pouvez y réfléchir).',
    },
    family: {
      mainTitle: 'Partie 8',
      text1: 'Nouveaux mots et expressions:',
      text2: 'Pronoms indiquant la position dans l\'espace:',
      text3: 'Encore quelques verbes, vous saurez quoi faire:',
      text4: 'Et prenez l\'un des arguments les plus importants - NUMBERS:',
      text5: 'Traduire:',
      text6: 'Mots de la famille:',
      text7: 'Réponses aux questions:',
    },
    food: {
      mainTitle: 'Partie 9',
      text1: 'Répondez aux questions:',
      text2: 'Nouveaux verbes:',
      text3: 'Nouveaux mots:',
      text4: 'Traduire:',
      text5: 'Répondez aux questions:',
      text6: 'Nourriture:',
      text7: 'Finances:',
    },
    numbers: {
      mainTitle: 'Partie 10',
      text1: 'Nombres:',
      text2: 'Adjectifs:',
      text3: 'Verbes:',
      text4: 'Traduire:',
      text5: 'Mois et heures:',
      text6: 'Mots:',
      text7: 'Nombres ordinaux:',
      text8: 'Répondez aux questions:',
    },
    imperativeForm: {
      mainTitle: 'Partie 11',
      text1: 'À propos de moi:',
      text2: 'Traduction:',
      text3: 'Verbes:',
      text4: 'Mots:',
      text5: 'Parfois, il faut demander fort, mais n\'en faites pas trop:',
    },
    pastEventsAndAdjectives: {
      mainTitle: 'Partie 12',
      text1: 'Traduction:',
      text2: 'Verbes:',
      text3: 'Répondez aux questions:',
      text4: 'Expressions:',
      text5: 'Mots:',
    },
    cases: {
      mainTitle: 'Partie 13',
      text1: 'À propos de moi:',
      text2: 'Mots:',
      text3: 'Verbes:',
      text4: 'Traduction:',
    },
    bodyParts: {
      mainTitle: 'Partie 14',
      text1: 'Parties du corps:',
      text2: 'Couleurs:',
      text3: 'Vêtements:',
      text4: 'Répondez aux questions:',
      text5: 'Traduire:',
      text6: 'Mots:',
      text7: 'Verbes:',
    },
    ordinalNumbers: {
      mainTitle: 'Partie 15',
      text1: 'Nombres ordinaux:',
      text2: 'Saisons:',
      text3: 'Expressions:',
      text4: 'Verbes:',
      text5: 'Taille:',
      text6: 'Réponses aux questions:',
    },
    directions: {
      mainTitle: 'Partie 16',
      text1: 'Mots:',
      text2: 'Verbes:',
      text3: 'Réponses aux questions:',
      text4: 'Direction:',
      text5: 'Expressions:',
      text6: 'Traduire:',
    },
  },
})

@Injectable({
  providedIn: 'root'
})
export class ContentTextService {

  constructor(private settingsFormService: SettingsFormService) { }

  private getText(contentName: string) {
    const originLanguage = this.settingsFormService.getForm().originLanguage
    const lanugage = this.settingsFormService.getForm().language
    return mapLangToContent(lanugage)[originLanguage][contentName]
  }

  get homePage() {
    return this.getText('homePage')
  }

  get baseConjugations() {
    return this.getText('baseConjugations')
  }

  get futureTensAndQuestions() {
    return this.getText('futureTensAndQuestions')
  }

  get profession() {
    return this.getText('profession')
  }

  get tellAboutYourself() {
    return this.getText('tellAboutYourself')
  }

  get moveVerbsPastTense() {
    return this.getText('moveVerbsPastTense')
  }

  get pronounDeclension() {
    return this.getText('pronounDeclension')
  }

  get possessivePronouns() {
    return this.getText('possessivePronouns')
  }

  get family() {
    return this.getText('family')
  }

  get food() {
    return this.getText('food')
  }

  get numbers() {
    return this.getText('numbers')
  }

  get imperativeForm() {
    return this.getText('imperativeForm')
  }

  get pastEventsAndAdjectives() {
    return this.getText('pastEventsAndAdjectives')
  }

  get cases() {
    return this.getText('cases')
  }

  get bodyParts() {
    return this.getText('bodyParts')
  }

  get ordinalNumbers() {
    return this.getText('ordinalNumbers')
  }

  get directions() {
    return this.getText('directions')
  }

}
