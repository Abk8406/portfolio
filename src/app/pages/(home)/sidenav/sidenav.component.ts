import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  IsActiveMatchOptions,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { ActivateSectionService } from '../../../utils/active-section/active-section.service';
import { NavLinkDirective } from './nav-link.directive';

@Component({
    selector: 'app-sidenav',
    imports: [RouterLink, RouterLinkActive, NavLinkDirective],
    template: `
    <nav class="hidden lg:block">
      <ul class="flex flex-col gap-5">
        <li>
          <a
            appNavLink
            routerLink
            routerLinkActive="active"
            [routerLinkActiveOptions]="isActiveMatchOptions"
            [class.active]="activeSection.currentSection() === 'about'"
            fragment="about"
            class="w-fit"
          >
            <span>About</span>
          </a>
        </li>

        <li>
          <a
            appNavLink
            routerLink
            routerLinkActive="active"
            [routerLinkActiveOptions]="isActiveMatchOptions"
            [class.active]="activeSection.currentSection() === 'experience'"
            fragment="experience"
            class="w-fit"
          >
            <span>Experience</span>
          </a>
        </li>

        <li>
          <a
            appNavLink
            routerLink
            routerLinkActive="active"
            [routerLinkActiveOptions]="isActiveMatchOptions"
            [class.active]="activeSection.currentSection() === 'education'"
            fragment="education"
            class="w-fit"
          >
            <span>Education</span>
          </a>
        </li>

        <li>
          <a
            appNavLink
            routerLink
            routerLinkActive="active"
            [routerLinkActiveOptions]="isActiveMatchOptions"
            [class.active]="activeSection.currentSection() === 'articles'"
            fragment="articles"
            class="w-fit"
          >
            <span>Articles</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  readonly activeSection = inject(ActivateSectionService);

  readonly isActiveMatchOptions: IsActiveMatchOptions = {
    fragment: 'exact',
    matrixParams: 'exact',
    paths: 'exact',
    queryParams: 'exact',
  };
}
