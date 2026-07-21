import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LIBRARY_GROUPS } from '../../../../core/data/site-content';
import { DownloadCard } from '../../../../shared/download-card/download-card';
import { SectionHeading } from '../../../../shared/section-heading/section-heading';

@Component({
  selector: 'app-library-section',
  imports: [DownloadCard, SectionHeading],
  templateUrl: './library-section.html',
  styleUrl: './library-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibrarySection {
  protected readonly libraryGroups = LIBRARY_GROUPS;
}
