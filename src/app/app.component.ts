import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    template: `
    <div
      class="mx-auto min-h-screen max-w-screen-xl font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
    >
      <router-outlet />
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
