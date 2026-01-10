import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { ChatService } from '../../../app/services/chat.service';

@Component({
    selector: 'app-chatbot',
    templateUrl: './chatbot.component.html',
    styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements AfterViewChecked {
    @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

    isOpen = false;
    userInput = '';
    messages: { sender: 'user' | 'bot', text: string }[] = [
        { sender: 'bot', text: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?' }
    ];
    isLoading = false;

    constructor(private chatService: ChatService) { }

    toggleChat() {
        this.isOpen = !this.isOpen;
    }

    sendMessage() {
        if (!this.userInput.trim() || this.isLoading) return;

        const userMsg = this.userInput;
        this.messages.push({ sender: 'user', text: userMsg });
        this.userInput = '';
        this.isLoading = true;

        this.chatService.sendMessage(userMsg).subscribe({
            next: (response) => {
                const botReply = response.choices[0].message.content;
                this.messages.push({ sender: 'bot', text: botReply });
                this.isLoading = false;
            },
            error: (error) => {
                console.error('Chat error:', error);
                const errorMessage = error.error?.error?.message || 'Lo siento, hubo un error al conectar con el servidor.';
                this.messages.push({ sender: 'bot', text: `Error: ${errorMessage}` });
                this.isLoading = false;
            }
        });
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    scrollToBottom(): void {
        try {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        } catch (err) { }
    }
}
