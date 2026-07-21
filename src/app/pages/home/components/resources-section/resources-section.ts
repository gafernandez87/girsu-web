import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PEDAGOGICAL_RESOURCES } from '../../../../core/data/site-content';
import { SectionHeading } from '../../../../shared/section-heading/section-heading';
import { VideoGallery } from '../video-gallery/video-gallery';

@Component({
  selector: 'app-resources-section',
  imports: [RouterLink, SectionHeading, VideoGallery],
  templateUrl: './resources-section.html',
  styleUrl: './resources-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesSection {
  protected readonly resources = PEDAGOGICAL_RESOURCES;
}
