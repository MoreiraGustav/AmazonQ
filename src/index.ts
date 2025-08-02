#!/usr/bin/env node

import 'dotenv/config';
import { Command } from 'commander';
import { AIAssistant } from './ai-assistant';

const program = new Command();

program
  .name('ai-assistant')
  .description('Assistente IA via terminal')
  .version('1.0.0');

program
  .command('chat')
  .description('Inicia chat interativo com IA')
  .action(async () => {
    const assistant = new AIAssistant();
    await assistant.startChat();
  });

program
  .command('ask')
  .description('Faz uma pergunta única à IA')
  .argument('<question>', 'sua pergunta')
  .action(async (question) => {
    const assistant = new AIAssistant();
    const response = await assistant.processQuestion(question);
    console.log(`🤖 IA: ${response}`);
  });

program
  .command('calc')
  .description('Calculadora rápida')
  .argument('<expression>', 'expressão matemática')
  .action(async (expression) => {
    const assistant = new AIAssistant();
    const response = await assistant.processQuestion(`Calcule: ${expression}`);
    console.log(`📊 ${response}`);
  });

program.parse();