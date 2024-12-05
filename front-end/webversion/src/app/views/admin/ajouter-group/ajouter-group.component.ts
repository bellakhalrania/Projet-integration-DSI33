import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroupService } from '../../../services/group.service';

@Component({
  selector: 'app-ajouter-group',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajouter-group.component.html',
  styleUrl: './ajouter-group.component.css'
})
export class AjouterGroupComponent  implements OnInit{

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
  formData.append('name', f.value.name);
  formData.append('groupUrl', f.value.groupUrl);
  console.log('Valeurs du formulaire:', f.value);

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
  this.http.post('http://localhost:8084/api/groups', formData).subscribe({
    next: (response) => console.log('Exercice créé avec succès:', response),
    error: (error) => console.error('Erreur lors de la création:', error),
  });
  console.log('Valeurs du formulaire:', f.value);
}
}























