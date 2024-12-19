import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="video-player">
      <iframe 
        *ngIf="safeVideoUrl" 
        [src]="safeVideoUrl" 
        width="800" 
        height="450" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  `,
  styles: [`
    .video-player {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
    }
  `]
})
export class VideoPlayerComponent {
  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    const videoUrl = this.route.snapshot.queryParamMap.get('url');
    if (videoUrl) {
    
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    }
  }

  goBack(): void {
    window.history.back();
  }
}
