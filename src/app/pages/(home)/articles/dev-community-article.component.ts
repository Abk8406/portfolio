import { DatePipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { BootstrapIconDirective } from '../../../utils/icons';
import { DevCommunityArticle } from './dev-community-article';

@Component({
    selector: 'app-dev-community-article',
    standalone: true,
    imports: [NgOptimizedImage, BootstrapIconDirective, DatePipe],
    template: `
      <a [href]="article().url" target="_blank" class="group/article">
        <article class="grid gap-2 sm:grid-cols-12 items-center">
          <figure class="h-32 w-80 md:w-44 md:h-24 -translate-x-2 sm:col-span-4 sm:pt-3">
            @defer (on viewport; prefetch on idle) {
              <img
                [ngSrc]="article().cover_image"
                [alt]="article().title + 'cover image'"
                loading="lazy"
                fetchpriority="auto"
                fill
                class="-translate-y-2 translate-x-2 rounded border border-teal-500 group-hover/article:-translate-y-2 group-hover/article:translate-x-2 group-hover/article:shadow-lg group-hover/article:shadow-teal-500/50 lg:-translate-y-0 lg:translate-x-0 lg:transition-transform"
              />
            } @placeholder {
              <div class="h-32 w-80 md:w-44 md:h-24 bg-gray-200 animate-pulse rounded"></div>
            }
          </figure>

          <div class="space-y-2 group-hover/article:text-teal-600 sm:col-span-7 sm:col-start-6">
            <h3 class="text-base font-semibold capitalize">
              {{ article().title }}
            </h3>

            <p class="text-sm text-slate-500">{{ article().description }}</p>

            <div class="mt-2 flex gap-5 sm:mt-4">
              <div class="inline-flex gap-2 text-xs text-slate-500">
                <i bootstrapIcon="calendar"></i>
                <p>{{ article().published_at | date }}</p>
              </div>

              <div class="inline-flex gap-2 text-xs text-slate-500">
                <i bootstrapIcon="hourglass-split"></i>
                <p>{{ article().reading_time_minutes }} min.</p>
              </div>
            </div>
          </div>
        </article>
      </a>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevCommunityArticleComponent {
  readonly article = input.required<DevCommunityArticle>();
}
