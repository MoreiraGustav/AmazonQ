#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const ai_assistant_1 = require("./ai-assistant");
const program = new commander_1.Command();
program
    .name('ai-assistant')
    .description('Assistente IA via terminal')
    .version('1.0.0');
program
    .command('chat')
    .description('Inicia chat interativo com IA')
    .action(async () => {
    const assistant = new ai_assistant_1.AIAssistant();
    await assistant.startChat();
});
program
    .command('ask')
    .description('Faz uma pergunta única à IA')
    .argument('<question>', 'sua pergunta')
    .action((question) => {
    const assistant = new ai_assistant_1.AIAssistant();
    console.log(`🤖 IA: ${assistant.processQuestion(question)}`);
});
program
    .command('calc')
    .description('Calculadora rápida')
    .argument('<expression>', 'expressão matemática')
    .action((expression) => {
    try {
        const result = eval(expression.replace(/[^0-9+\-*/().]/g, ''));
        console.log(`📊 Resultado: ${result}`);
    }
    catch {
        console.log('❌ Expressão inválida');
    }
});
program.parse();
