import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { DevCommunityArticle } from './dev-community-article';

const BASE_URL = 'https://dev.to/api';

@Injectable({ providedIn: 'root' })
export class DevCommunityService {
  readonly #http = inject(HttpClient);

  getWrittenArticles(count: number): Observable<DevCommunityArticle[]> {
    return this.#http.get<DevCommunityArticle[]>(
      `${BASE_URL}/articles?username=abhishek_sah_8406&per_page=${count}`,
    );
  }
}
