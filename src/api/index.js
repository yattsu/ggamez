import axios from 'axios';
import { apiKeys } from '../config';

export class Rawg {
  constructor() {
    this.key = apiKeys.rawg;
    this.default = (endpoint) => { return `https://api.rawg.io/api/${endpoint + (endpoint.includes('?') ? '&' : '?')}key=${this.key}` };
  }

  async getGames() {
    const result = await axios.get(this.default('games?page_size=50'));

    return result.data.results;
  }
}
