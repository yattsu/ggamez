import axios from 'axios';
import { apiKeys } from '../config';

export class Rawg {
  constructor() {
    this.key = apiKeys.rawg;
    this.default = (endpoint) => { return `https://api.rawg.io/api/${endpoint + (endpoint.includes('?') ? '&' : '?')}key=${this.key}` };
  }

  async getGames(limit, ordering) {
    const result = await axios.get(this.default(`games?page_size=${limit}&ordering=${ordering}`));

    return result.data.results;
  }

  async getGenres() {
    const result = await axios.get(this.default('genres?count=1'));

    return result.data.results;
  }
}
