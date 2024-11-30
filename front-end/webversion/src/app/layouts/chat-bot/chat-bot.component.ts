import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../gemini.service';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from "../skeleton/skeleton.component";

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [FormsModule, CommonModule, SkeletonComponent],
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent {

  title = 'gemini-inte';

  prompt: string = '';

  geminiService: GeminiService = inject(GeminiService);

  loading: boolean = false;

  chatHistory: any[] = [];
  constructor() {
    this.geminiService.getMessageHistory().subscribe((res) => {
      if(res) {
        this.chatHistory.push(res);
      }
    })
  }

  async sendData() {
    if(this.prompt && !this.loading) {
      this.loading = true;
      const data = this.prompt;
      this.prompt = '';
      await this.geminiService.generateText(data);
      this.loading = false;
    }
  }

  formatText(text: string) {
    const result = text.replaceAll('*', '');
    return result;
  }
}
