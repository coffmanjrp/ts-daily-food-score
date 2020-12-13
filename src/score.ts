import { Scorable } from './interfaces';
import { Foods } from './foods';

export class Score implements Scorable {
  private static instance: Score;

  get totalScore() {
    const foods = Foods.getInstance();
    return foods.activeElementsScore.reduce((total, score) => total + score, 0);
  }

  render() {
    document.querySelector('.score__number')!.textContent = String(
      this.totalScore
    );
  }

  private constructor() {}

  static getInstance() {
    if (!Score.instance) {
      Score.instance = new Score();
    }

    return Score.instance;
  }
}