import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdhdResultComponent } from "../adhd-result/adhd-result.component";

@Component({
  selector: 'app-adhd-quiz',
  standalone: true,
  imports: [CommonModule, AdhdResultComponent],
  templateUrl: './adhd-quiz.component.html',
  styleUrl: './adhd-quiz.component.css'
})

export class AdhdQuizComponent {
  questions = [
    { question: "Do you often have trouble paying attention?", answers: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Are you easily distracted?", answers: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you have trouble staying organized?", answers: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you have trouble following through on instructions?", answers: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you fidget or squirm a lot?", answers: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you have trouble sitting still?", answers: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you have trouble waiting your turn?", answers: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you often interrupt others?", answers: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you have trouble controlling your impulses?", answers: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you often feel restless or have trouble relaxing?", answers: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you have trouble paying attention to details?", answers: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
  ];

  score = 0;
  currentQuestion = 0;
  clickedOption = 0;
  showResult = false;

  // Fonction pour changer de question et mettre à jour le score
  changeQuestion() {
    this.updateScore();
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
      this.clickedOption = 0;
    } else {
      this.showResult = true;
    }
  }

  // Met à jour le score
  updateScore() {
    this.score += this.clickedOption;
  }

  // Fonction pour réinitialiser le quiz
  handleResetClick() {
    this.score = 0;
    this.currentQuestion = 0;
    this.showResult = false;
    this.clickedOption = 0;
  }

  // Vérifie si le quiz est terminé
  isQuizOver(): boolean {
    return this.currentQuestion === this.questions.length-1;
  }

  // Gérer l'affichage du bouton de soumission
  handleSubmit() {
    // Vous pouvez ajouter des logiques ici si vous voulez gérer l'envoi des résultats
    document.getElementById("submit-button")?.setAttribute('style', 'display: block;');
  }
}
