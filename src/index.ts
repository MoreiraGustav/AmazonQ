#!/usr/bin/env node

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
  .action((question) => {
    const assistant = new AIAssistant();
    console.log(`🤖 IA: ${(assistant as any).processQuestion(question)}`);
  });

program
  .command('calc')
  .description('Calculadora rápida')
  .argument('<expression>', 'expressão matemática')
  .action((expression) => {
    try {
      const result = eval(expression.replace(/[^0-9+\-*/().]/g, ''));
      console.log(`📊 Resultado: ${result}`);
    } catch {
      console.log('❌ Expressão inválida');
    }
  });

program.parse();