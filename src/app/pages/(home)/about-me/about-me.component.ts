import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TrackSectionVisibilityDirective } from '../../../utils/track-section-visibility';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [TrackSectionVisibilityDirective],
    template: `
    <section
      trackSectionVisibility
      id="about"
      class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:text-lg"
    >
      <div
        class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 class="text-sm font-semibold uppercase tracking-widest">
          About me
        </h2>
      </div>

      <p class="mb-4">
        Since 2022, I have been working professionally as a Fullstack Software
        Engineer, creating platforms from the ground up. My experience spans the
        entire development process, including database design, backend
        development, and client-side application implementation.
      </p>


      <p class="mb-4">
        When I'm not coding, you will likely find me exploring remote places to
        enjoy nature, trekking with an overly heavy backpack, or learning
        useless (yet fascinating) facts.
      </p>
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent {}
