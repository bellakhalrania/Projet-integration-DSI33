import { Component } from '@angular/core';
import { DepressionResultComponent } from "../depression-result/depression-result.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-depression-quiz',
  standalone: true,
  imports: [DepressionResultComponent, CommonModule],
  templateUrl: './depression-quiz.component.html',
  styleUrls: ['./depression-quiz.component.css']
})
export class DepressionQuizComponent {
  questions = [
    { question: 'I have lost interest in activities I used to enjoy.', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'I have difficulty concentrating or making decisions.', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'I have feelings of worthlessness or guilt.', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'I have thoughts of death or suicide.', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'I have changes in my appetite.', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'I have changes in my sleep patterns.', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'I have decreased energy levels.', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'I have difficulty controlling my emotions.', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'I have physical aches and pains.', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'I have withdrawn from social activities.', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] }
  ];

  score = 0;
  currentQuestion = 0;
  clickedOption = 0;
  showResult = false;

  // Log des informations chaque fois que la question change
  changeQuestion(): void {
    console.log(`Before change: Current Question: ${this.currentQuestion}, Score: ${this.score}, Clicked Option: ${this.clickedOption}`);

    // Mettre à jour le score avant de changer la question
    this.updateScore();

    if (this.isQuizOver()) {
      this.showResult = true;
      console.log('Quiz completed. Showing result.');
    } else {
      this.currentQuestion++;
      this.clickedOption = 0;
      console.log(`Next question: ${this.questions[this.currentQuestion].question}`);
    }
  }

  // Mettre à jour le score
  updateScore() {
    console.log(`Updating score: Current score: ${this.score}, Clicked option value: ${this.clickedOption}`);
    this.score += this.clickedOption;
    console.log(`New score: ${this.score}`);
  }

  // Fonction pour réinitialiser le quiz
  handleResetClick() {
    console.log('Resetting quiz...');
    this.score = 0;
    this.currentQuestion = 0;
    this.showResult = false;
    this.clickedOption = 0;
    console.log(`After reset: Score: ${this.score}, Current Question: ${this.currentQuestion}`);
  }

  // Fonction pour vérifier si le quiz est terminé
  isQuizOver(): boolean {
    const isOver = this.currentQuestion === this.questions.length;
    console.log(`Is quiz over? ${isOver}`);
    return isOver;
  }

  // Gérer l'affichage du bouton de soumission
  handleSubmit() {
    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
      submitButton.setAttribute('style', 'display: block');
      console.log('Submit button displayed.');
    }
  }
}
