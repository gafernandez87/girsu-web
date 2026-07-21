import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { VIDEOS } from '../../../../core/data/site-content';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.html',
  styleUrl: './video-gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoGallery {
  protected readonly videoGalleryExpanded = signal(false);
  protected readonly visibleVideos = computed(() =>
    this.videoGalleryExpanded() ? VIDEOS : VIDEOS.slice(0, 4),
  );

  protected toggleVideoGallery(): void {
    this.videoGalleryExpanded.update((isExpanded) => !isExpanded);
  }
}
