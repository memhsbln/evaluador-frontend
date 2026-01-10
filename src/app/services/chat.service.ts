import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    // WARNING: Exposing API Key on frontend is not secure for production.
    // Ideally, this should be handled by a backend proxy.
    private apiUrl = 'https://api.openai.com/v1/chat/completions';
    private apiKey = 'INSERT_YOUR_API_KEY_HERE'; // TODO: Replace with environment variable or backend proxy

    constructor(private http: HttpClient) { }

    sendMessage(message: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`
        });

        const body = {
            model: 'gpt-4o', // Using gpt-4o as gpt-5 is not yet available via public API
            messages: [
                { role: 'system', content: 'You are a helpful assistant for a teacher evaluation system.' },
                { role: 'user', content: message }
            ],
            stream: false
        };

        return this.http.post(this.apiUrl, body, { headers });
    }
}
