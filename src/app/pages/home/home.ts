import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  LIBRARY_GROUPS,
  PEDAGOGICAL_RESOURCES,
  STRATEGY_DOWNLOADS,
  VIDEOS,
} from '../../core/data/site-content';
import { DownloadCard } from '../../shared/download-card/download-card';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DownloadCard, SectionHeading],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly strategyDownloads = STRATEGY_DOWNLOADS;
  protected readonly resources = PEDAGOGICAL_RESOURCES;
  protected readonly libraryGroups = LIBRARY_GROUPS;
  protected readonly videoGalleryExpanded = signal(false);
  protected readonly visibleVideos = computed(() =>
    this.videoGalleryExpanded() ? VIDEOS : VIDEOS.slice(0, 4),
  );

  protected toggleVideoGallery(): void {
    this.videoGalleryExpanded.update((isExpanded) => !isExpanded);
  }
}
