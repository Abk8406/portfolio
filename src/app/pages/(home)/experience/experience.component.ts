import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BootstrapIconDirective } from '../../../utils/icons';
import { TrackSectionVisibilityDirective } from '../../../utils/track-section-visibility';
import { PillComponent } from '../../../utils/pill/pill.component';
import { ExperienceCardComponent } from './experience-card.component';

@Component({
    selector: 'app-experience',
    imports: [
        RouterLink,
        ExperienceCardComponent,
        PillComponent,
        TrackSectionVisibilityDirective,
        BootstrapIconDirective,
    ],
    standalone: true,
    template: `
    <section
      trackSectionVisibility
      id="experience"
      class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:text-lg"
    >
      <div
        class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0"
      >
        <h2 class="text-sm font-semibold uppercase tracking-widest">
          Experience
        </h2>
      </div>

      <div class="group/experiences space-y-12">
        <app-experience-card redirectTo="https://rim-global.com/">
          <ng-container duration>2023 — 2025</ng-container>
          <ng-container company>RIM INDIA PVT LTD</ng-container>
          <ng-container role>Fullstack Software Engineer</ng-container>

          <p class="mb-2">
            Design, develop and maintain an audit management platform
            re-certifying internal company components and synchronizing
            information with third-party IT systems. Work closely with the
            involved business teams to implement their specific needs while
            growing the product.
          </p>

          <ng-container frontend-technologies>
            <ul class="col-span-11 flex flex-wrap gap-2">
              <li><app-pill>Angular</app-pill></li>
              <li><app-pill>NgRx</app-pill></li>
              <li><app-pill>TailwindCSS</app-pill></li>
              <li><app-pill>TypeScript</app-pill></li>
              <li><app-pill>React</app-pill></li>
              <li><app-pill>JavaScript</app-pill></li>
            </ul>
          </ng-container>

          <ng-container backend-technologies>
            <ul class="col-span-11 flex flex-wrap gap-2">
              <li><app-pill>Node Js</app-pill></li>
              <li><app-pill>Express Js</app-pill></li>
              <li><app-pill>Redis</app-pill></li>
              <li><app-pill>Java</app-pill></li>
              <li><app-pill>Spring Boot</app-pill></li>

              <li><app-pill>ChartGPT Model</app-pill></li>

              <li><app-pill>SQL Server</app-pill></li>
            </ul>
          </ng-container>
        </app-experience-card>

        <app-experience-card redirectTo="https://startupway24.com/pricing-plans/">
          <ng-container duration>2022 — 2023</ng-container>
          <ng-container company>STARTUPWAY24 IT SERVICES PVT. LTD.</ng-container>
          <ng-container role>unior Software Engineer</ng-container>

          <p class="mb-2">
            Developed a comprehensive web application for a region,
            enabling users to manage public service access cards, report card
            losses, and more. The goal was to create a digital experience for
            the customers and the operator instead of the paper procedures.
          </p>

          <ng-container frontend-technologies>
            <ul class="col-span-11 flex flex-wrap gap-2">
              <li><app-pill>Angular</app-pill></li>
              <li><app-pill>Bootstrap</app-pill></li>
              <li><app-pill>TypeScript</app-pill></li>
            </ul>
          </ng-container>

          <ng-container backend-technologies>
            <ul class="col-span-11 flex flex-wrap gap-2">
              <li><app-pill>Node Js</app-pill></li>
              <li><app-pill>Express Js</app-pill></li>
              <li><app-pill>Mongo DB</app-pill></li>
            </ul>
          </ng-container>
        </app-experience-card>
      </div>

      <a
        routerLink="public/cv.pdf"
        target="_blank"
        class="external-link group/cv mt-12 transition-all"
      >
        <span class="capitalize">View full resume</span>
        <i
          class="ml-2 inline-block group-hover/cv:-translate-y-px group-hover/cv:translate-x-px"
          bootstrapIcon="box-arrow-in-up-right"
        ></i
      ></a>
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {}
