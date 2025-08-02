"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAssistant = void 0;
const readline = __importStar(require("readline"));
class AIAssistant {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    async startChat() {
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
    askQuestion(prompt) {
        return new Promise((resolve) => {
            this.rl.question(prompt, (answer) => {
                resolve(answer);
            });
        });
    }
    processQuestion(question) {
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
            }
            catch {
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
exports.AIAssistant = AIAssistant;
