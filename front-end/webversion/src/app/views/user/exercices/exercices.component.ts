import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercices.component.html',
  styleUrl: './exercices.component.css'
})
export class ExercicesComponent {
  resources = [
    {
      type: 'article',
      title: 'Mindfulness Meditation: Benefits and Techniques',
      link: 'https://greatergood.berkeley.edu/article/item/five_ways_mindfulness_meditation_is_good_for_your_health',
      gifLink: 'https://skyogafoundation.org/assets/images/silence.gif',
    },
    {
      type: 'article',
      title: '16 Benefits of Yoga That Are Supported by Science',
      link: 'https://youtu.be/IlYREJ9uzSA?si=59zIRpkw1pd_1APx',
      gifLink: 'https://media2.giphy.com/media/lSodnhEO8lphSsxEUy/giphy.gif',
    },
    {
      type: 'article',
      title: 'Beginner Yoga Poses for Relaxation',
      link: 'https://youtu.be/nQwKKCqkJxg?si=k7892xpaY1wtuTg7',
      gifLink: 'https://media2.giphy.com/media/0YLKvc5TheGFh0GJXk/giphy.gif?cid=6c09b952qk938cnspzz9y9uizfrkj2pf750f3dvpmvpmag4p&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s',
    },
    {
      type: 'article',
      title: 'Meditation for Slowing Thoughts',
      link: 'https://youtu.be/ez3GgRqhNvA?si=CgsVrnqb32c8DGAW',
      gifLink: 'https://media4.giphy.com/media/Mb42X7rqa0H7YlJsiz/source.gif',
    },
    {
      type: 'article',
      title: '8 Simple Exercises for Stress Relief',
      link: 'https://youtu.be/LiUnFJ8P4gM?si=cenAzt-UOVDPAZ08',
      gifLink: 'https://d2f8l4t0zpiyim.cloudfront.net/000_clients/61768/page/61768yYxIEAka.gif',
    },
    {
      type: 'article',
      title: ' How Yoga Boosts Your Mental Health',
      link: 'https://youtu.be/COp7BR_Dvps?si=kw92G8uzUrOLeNZI',
      gifLink: 'https://media4.giphy.com/media/KDICL3psaxnoeUghMt/giphy.gif?cid=6c09b9525f4v3rtu08oa8spjfefqfmvdbxvlwsnvdzj8h5a1&ep=v1_stickers_related&rid=giphy.gif&ct=s',
    },
    {
      type: 'article',
      title: 'How Meditation strengthens Mental Health',
      link: 'https://youtu.be/mZxcw2rPWxU?si=crtoCsSiVCUFarRW',
      gifLink: 'https://media1.giphy.com/media/19ukzJdtWrkV2dy2eE/source.gif',
    },
    {
      type: 'article',
      title: 'Does Daily Meditation Really Help in Mental Health?',
      link: 'https://www.outlookindia.com/healths/world-mental-health-day-how-does-daily-meditation-really-help-us--news-219648',
      gifLink: 'https://media2.giphy.com/media/GD32HNX7JduZBfHIdZ/giphy.gif',
    },
  ];
}
