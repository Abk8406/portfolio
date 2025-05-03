import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TrackSectionVisibilityDirective } from '../../../utils/track-section-visibility';
import { EducationTimelineItemComponent } from './education-timeline-item.component';
import { EducationTimelineComponent } from './education-timeline.component';

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [
        TrackSectionVisibilityDirective,
        EducationTimelineComponent,
        EducationTimelineItemComponent,
    ],
    template: `
    <section
      trackSectionVisibility
      id="education"
      class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:text-lg"
    >
      <div
        class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0"
      >
        <h2 class="text-sm font-semibold uppercase tracking-widest">
          Education
        </h2>
      </div>

      <app-education-timeline>
        <app-education-timeline-item>
          <span graduation>2022</span>
          <p degree>B.Tech. Eletrical Engineer</p>
          <p school>BPUT Odisha, India</p>
        </app-education-timeline-item>

        <app-education-timeline-item>
          <span Diploma>2018</span>
          <p degree>Diploma Eletrical Engineer</p>
          <p school>SCTE&VT, India</p>
        </app-education-timeline-item>

        <app-education-timeline-item>
          <span Intermediate>2015</span>
          <p degree>Intermediate of Science</p>
          <p school>BSEB, Patna</p>
        </app-education-timeline-item>

        <app-education-timeline-item>
          <span Board>2013</span>
          <p degree>Secondary school</p>
          <p school>BSEB, Patna</p>
        </app-education-timeline-item>
      </app-education-timeline>
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {}
