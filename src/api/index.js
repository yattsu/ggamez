import axios from 'axios';
import { apiKeys } from '../config';

export class Rawg {
  constructor() {
    this.key = apiKeys.rawg;
    this.default = (endpoint) => { return `https://api.rawg.io/api/${endpoint + (endpoint.includes('?') ? '&' : '?')}key=${this.key}` };
  }

  async getGames(genres, limit, page, ordering) {
    const result = await axios.get(this.default(`games?genres=${genres}&page_size=${limit}&page=${page}&ordering=${ordering}`));

    return result.data.results;
  }
  
  async getGame(slug) {
    const result = await axios.get(this.default(`games/${slug}`));

    return result.data;
  }

  async getGenres() {
    const result = await axios.get(this.default('genres'));

    return result.data.results;
  }
}
