import * as readline from 'readline';

export class AIAssistant {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async startChat(): Promise<void> {
    console.log('🤖 Assistente IA iniciado! Digite "sair" para encerrar.\n');
    
    while (true) {
      const question = await this.askQuestion('Você: ');
      
      if (question.toLowerCase() === 'sair') {
        console.log('👋 Até logo!');
        break;
      }

      const response = this.processQuestion(question);
      console.log(`🤖 IA: ${response}\n`);
    }
    
    this.rl.close();
  }

  private askQuestion(prompt: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(prompt, (answer) => {
        resolve(answer);
      });
    });
  }

  private processQuestion(question: string): string {
    const q = question.toLowerCase();

    // Programação
    if (q.includes('javascript') || q.includes('js')) {
      return 'JavaScript é uma linguagem versátil para web e backend. Posso ajudar com sintaxe, conceitos ou exemplos específicos!';
    }
    
    if (q.includes('typescript') || q.includes('ts')) {
      return 'TypeScript adiciona tipagem ao JavaScript. Oferece melhor IntelliSense e detecção de erros em tempo de compilação.';
    }

    if (q.includes('node') || q.includes('nodejs')) {
      return 'Node.js permite executar JavaScript no servidor. Ideal para APIs, CLIs e aplicações backend.';
    }

    // Comandos/Ajuda
    if (q.includes('como') && q.includes('funciona')) {
      return 'Sou um assistente IA simples. Faça perguntas sobre programação, tecnologia ou peça ajuda com código!';
    }

    if (q.includes('ajuda') || q.includes('help')) {
      return 'Posso ajudar com: JavaScript, TypeScript, Node.js, programação em geral, conceitos de desenvolvimento.';
    }

    // Cálculos simples
    if (q.includes('+') || q.includes('-') || q.includes('*') || q.includes('/')) {
      try {
        const result = eval(q.replace(/[^0-9+\-*/().]/g, ''));
        return `Resultado: ${result}`;
      } catch {
        return 'Não consegui calcular isso. Use apenas números e operadores básicos (+, -, *, /).';
      }
    }

    // Respostas gerais
    if (q.includes('olá') || q.includes('oi')) {
      return 'Olá! Como posso ajudar você hoje?';
    }

    if (q.includes('obrigado') || q.includes('valeu')) {
      return 'De nada! Estou aqui para ajudar sempre que precisar.';
    }

    // Resposta padrão
    return 'Interessante pergunta! Embora eu seja um assistente simples, posso ajudar com programação, cálculos básicos e conceitos de desenvolvimento. Seja mais específico!';
  }
}