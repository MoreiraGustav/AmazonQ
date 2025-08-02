import { QBusinessClient, ChatSyncCommand } from '@aws-sdk/client-qbusiness';

export class AmazonQService {
  private client: QBusinessClient;
  private applicationId: string;

  constructor() {
    this.client = new QBusinessClient({
      region: process.env.AWS_REGION || 'us-east-1'
    });
    this.applicationId = process.env.AMAZON_Q_APPLICATION_ID || '';
  }

  async askQuestion(question: string): Promise<string> {
    try {
      if (!this.applicationId) {
        return 'Amazon Q não configurado. Configure as variáveis de ambiente.';
      }

      const command = new ChatSyncCommand({
        applicationId: this.applicationId,
        userMessage: question,
        conversationId: undefined // Nova conversa a cada pergunta
      });

      const response = await this.client.send(command);
      
      return response.systemMessage || 'Não consegui processar sua pergunta.';
    } catch (error) {
      console.error('Erro ao consultar Amazon Q:', error);
      return 'Erro ao conectar com Amazon Q. Usando modo offline.';
    }
  }

  isConfigured(): boolean {
    return !!this.applicationId && !!process.env.AWS_ACCESS_KEY_ID;
  }
}