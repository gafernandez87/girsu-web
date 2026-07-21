import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SectionHeading } from '../../../../shared/section-heading/section-heading';

@Component({
  selector: 'app-presentation-section',
  imports: [SectionHeading],
  templateUrl: './presentation-section.html',
  styleUrl: './presentation-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationSection {}
