import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface ContactForm {
  from_name: FormControl<string | null>;
  to_name: FormControl<string | null>;
  from_email: FormControl<string | null>;
  message: FormControl<string | null>;
}
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  contactForm: FormGroup<ContactForm>;

  constructor(private fb: FormBuilder) {
    // Définir chaque champ comme un FormControl et initialiser avec des valeurs par défaut
    this.contactForm = this.fb.group({
      from_name: new FormControl<string | null>('', [Validators.required]), // Le nom est obligatoire
      to_name: new FormControl<string | null>('Admin'),
      from_email: new FormControl<string | null>('', [Validators.required, Validators.email]), // L'email est requis et doit être valide
      message: new FormControl<string | null>('', [Validators.required]) // Le message est obligatoire
    });
  }
  get formControls() {
    return this.contactForm.controls;
  }

  // Fonction d'envoi
  async send() {
    // Si le formulaire est invalide, on n'envoie pas le message
    if (this.contactForm.invalid) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }

    try {
      emailjs.init('ZEnJorNMlwN4TWzyB');
      const response = await emailjs.send("service_otlg6cp", "template_95evwzw", {
        from_name: this.contactForm.value.from_name,
        to_name: this.contactForm.value.to_name,
        from_email: this.contactForm.value.from_email,
        message: this.contactForm.value.message
      });
      alert("Le message a été envoyé !");
      this.contactForm.reset(); // Réinitialiser le formulaire après envoi
    } catch (error) {
      alert("Une erreur est survenue lors de l'envoi du message.");
    }
  }

}
 






