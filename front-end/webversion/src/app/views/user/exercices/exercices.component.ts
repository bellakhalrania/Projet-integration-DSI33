import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExerciceService } from '../../../services/exercice.service';
import { SafeUrlPipe } from '../../../safe-url.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [CommonModule,SafeUrlPipe],
  templateUrl: './exercices.component.html',
  styleUrl: './exercices.component.css'
})
export class ExercicesComponent {

  dataArray : any=[];
  selectedVideoUrl: string | null = null;
  dataExercice={ 
    title:'',
    type:'',
    description:'',
    duree:'',
    creationDate:'',
    imagePath:'',
    videourl:'',
    id:''
  }



 
  messageErr=''

  messageSuccess=''
 





  
  constructor(private ds: ExerciceService, private router: Router) {
    this.ds.getAllExercices().subscribe(data => {
      this.dataArray = data;
      console.log(data);
    });
  }

   getdata(title: string, type: string, description: string, duree: string, creationDate: string,videourl:string, imagePath: string, id: any) {
    console.log('Data passed to getdata:', { title, type, description, duree, creationDate,videourl, imagePath, id });
    this.messageSuccess = '';
    this.dataExercice.title = title;
    this.dataExercice.type = type;
    this.dataExercice.description = description;
    this.dataExercice.duree = duree;
    this.dataExercice.creationDate = creationDate;
    this.dataExercice.imagePath = imagePath;
    this.dataExercice.videourl = videourl;
    this.dataExercice.id = id;

    if (videourl) {
      window.open(videourl, '_blank');
    }

  }

 
  /*onSelectVideo(url: string): void {
    console.log('Selected video URL:', url);
    
    // Vérifier si l'URL est un lien YouTube
    if (url.includes('youtu.be') || url.includes('youtube.com')) {
      let videoId = '';
      if (url.includes('youtu.be')) {
        // Lien YouTube court
        videoId = url.split('youtu.be/')[1].split('?')[0];
      } else if (url.includes('youtube.com/watch')) {
        // Lien YouTube complet
        videoId = url.split('v=')[1].split('&')[0];
      }
  
      // Construire l'embed URL
      this.selectedVideoUrl = `https://www.youtube.com/embed/${videoId}`;
    } else {
      // Si l'URL n'est pas YouTube, utilisez-la directement
      this.selectedVideoUrl = url;
    }
  
    console.log('Converted video URL for iframe:', this.selectedVideoUrl);
  }*/
    onSelectVideo(url: string): void {
      console.log('Navigating to video player with URL:', url);
    
    
      let videoId = '';
      if (url.includes('youtu.be')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
      } else if (url.includes('youtube.com/watch')) {
        videoId = url.split('v=')[1].split('&')[0];
      }
    
      const embedUrl = videoId 
        ? `https://www.youtube.com/embed/${videoId}` 
        : url;
    
      this.router.navigate(['/client/video-player'], { queryParams: { url: embedUrl } });
    }
    
  
  

  ngOnInit(): void {
    
  }
}

 