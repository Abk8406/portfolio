import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

import { ActivateSectionService } from './active-section/active-section.service';

@Directive({
  selector: '[trackSectionVisibility]',
  standalone: true,
})
export class TrackSectionVisibilityDirective implements AfterViewInit {
  readonly #activeSectionService = inject(ActivateSectionService);
  readonly #observedElementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    this.#activeSectionService.trackSection(this.#observedElementRef);
  }
}
