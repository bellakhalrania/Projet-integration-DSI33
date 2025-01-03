import { Component, OnInit } from '@angular/core';
import { ExerciceService } from '../../../services/exercice.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-ajouter-exercice',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajouter-exercice.component.html',
  styleUrl: './ajouter-exercice.component.css'
})
export class AjouterExerciceComponent implements OnInit {

  
    selectedFile: File | null = null;

    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {}
  
    onFileSelected(event: Event | undefined): void {
      if (event) {
        const input = event.target as HTMLInputElement;
        if (input?.files?.length) {
          this.selectedFile = input.files[0];
        }
      }
    }
  
    add(f: any): void {
      const formData = new FormData();
    
      // Ajout des champs texte
      formData.append('title', f.value.title);
      formData.append('type', f.value.type);
      formData.append('description', f.value.description);
      formData.append('duree', f.value.duree);
      formData.append('creationDate', f.value.creationDate);
      console.log('videourl:', f.value.videourl);
      formData.append('videoUrl', f.value.videoUrl);
      console.log('Valeurs du formulaire:', f.value);
      // Vérifie si un fichier a été sélectionné


     



      if (this.selectedFile) {
        formData.append('file', this.selectedFile, this.selectedFile.name);
        console.log(formData.get('file'));
      } else {
        console.error('Aucun fichier sélectionné');
        return;
      }
      console.log('FormData contenu:');
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      // Requête POST vers le backend
      console.log('FormData envoyé:', formData);
      this.http.post('http://localhost:8081/api/exercices', formData).subscribe({
        next: (response) => console.log('Exercice créé avec succès:', response),
        error: (error) => console.error('Erreur lors de la création:', error),
      });
      console.log('Valeurs du formulaire:', f.value);
    }
    
    



    
}

/*selectedFile: File | null = null;

 

  ngOnInit(): void {}
  constructor(private http: HttpClient) {}

  onFileSelected(event: Event | undefined): void {
    if (event) {
      const input = event.target as HTMLInputElement;
      if (input?.files?.length) {
        this.selectedFile = input.files[0];
      }
    }
  }
  add(f: any): void {
    const formData = new FormData();

    // Ajout des champs texte
    formData.append('title', f.value.title);
    formData.append('type', f.value.type);
    formData.append('description', f.value.description);
    formData.append('duree', f.value.duree);
    formData.append('creationDate', f.value.creationDate);
    formData.append('image_path', f.value.image_path);  // URL de l'image

    // Requête POST vers le backend
    this.http.post('http://localhost:8081/api/exercices', formData).subscribe({
      next: (response) => console.log('Exercice créé avec succès:', response),
      error: (error) => console.error('Erreur lors de la création:', error),
    });
  }*/
