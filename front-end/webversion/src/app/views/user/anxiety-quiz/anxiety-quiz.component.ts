import { Component } from '@angular/core';
import { AnxietyResultComponent } from "../anxiety-result/anxiety-result.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anxiety-quiz',
  standalone: true,
  imports: [CommonModule, AnxietyResultComponent],
  templateUrl: './anxiety-quiz.component.html',
  styleUrls: ['./anxiety-quiz.component.css']
})
export class AnxietyQuizComponent {
  questions = [
    { question: 'How often have you felt restless or fidgety?', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'How often have you been unable to concentrate or your mind has wandered?', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'How often have you been bothered by trouble falling or staying asleep?', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'How often have you been bothered by feeling tired or having low energy?', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'How often have you been bothered by feeling worthless or guilty?', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'How often have you been bothered by trouble making decisions?', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'How often have you been bothered by muscle tension?', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'How often have you been bothered by being easily startled?', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'How often have you been bothered by feeling afraid that something terrible might happen?', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { question: 'How often have you been bothered by having a racing heart?', answers: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
  ];

  score = 0;
  currentQuestion = 0;
  clickedOption = 0;
  showResult = false;

  // Log des informations chaque fois que la question change
  changeQuestion(): void {
    console.log(`Before change: Current Question: ${this.currentQuestion}, Score: ${this.score}, Clicked Option: ${this.clickedOption}`);

    // Vérifier si le quiz est terminé, et si oui, ne pas continuer
    if (this.isQuizOver()) {
      this.showResult = true;
      console.log('Quiz completed. Showing result.');
      return;
    }

    // Mettre à jour le score seulement si ce n'est pas la dernière question
    this.updateScore();
    
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
      this.clickedOption = 0;
      console.log(`Next question: ${this.questions[this.currentQuestion].question}`);
    } else {
      this.showResult = true;
      console.log('Quiz completed. Showing result.');
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



  isQuizOver(): boolean {
    
    const isOver = this.currentQuestion === this.questions.length - 1;
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
