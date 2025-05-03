import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { first } from 'rxjs';

import { BootstrapIconDirective } from '../../../utils/icons';
import { TrackSectionVisibilityDirective } from '../../../utils/track-section-visibility';
import { DevCommunityArticle } from './dev-community-article';
import { DevCommunityArticleComponent } from './dev-community-article.component';
import { DevCommunityService } from './dev-community.service';

@Component({
    selector: 'app-articles',
    standalone: true,
    imports: [
        BootstrapIconDirective,
        DevCommunityArticleComponent,
        TrackSectionVisibilityDirective,
    ],
    template: `
    <section
      trackSectionVisibility
      id="articles"
      class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:text-lg"
    >
      <div
        class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0"
      >
        <h2 class="text-sm font-semibold uppercase tracking-widest">
          Articles
        </h2>
      </div>

      <div class="group/articles flex flex-col gap-16">
        @for (article of articles(); track article.title) {
          <app-dev-community-article [article]="article" />
        }
      </div>

      <a
        href="https://dev.to/abhishek_sah_8406"
        target="_blank"
        class="external-link group/dev mt-12 transition-all"
      >
        <span class="capitalize">Browse all articles on DEV</span>
        <i
          class="ml-2 inline-block group-hover/dev:-translate-y-px group-hover/dev:translate-x-px"
          bootstrapIcon="box-arrow-in-up-right"
        ></i
      ></a>
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesComponent implements AfterViewInit {
  readonly #devCommunityService = inject(DevCommunityService);
  readonly articles = signal<DevCommunityArticle[] | null>(null);

  ngAfterViewInit(): void {
    this.#devCommunityService
      .getWrittenArticles(5)
      .pipe(first())
      .subscribe((articles) => this.articles.set(articles));
  }
}
