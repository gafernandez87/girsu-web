import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { VIDEOS } from '../../../../core/data/site-content';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.html',
  styleUrl: './video-gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoGallery {
  private readonly videos = VIDEOS.map((video) => {
    const url = video.youtubeUrl ? new URL(video.youtubeUrl) : undefined;
    const videoId = url?.searchParams.get('v') || url?.pathname.split('/').filter(Boolean).at(-1);
    return {
      ...video,
      thumbnailUrl: videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : undefined,
    };
  });
  protected readonly videoGalleryExpanded = signal(false);
  protected readonly visibleVideos = computed(() =>
    this.videoGalleryExpanded() ? this.videos : this.videos.slice(0, 4),
  );

  protected toggleVideoGallery(): void {
    this.videoGalleryExpanded.update((isExpanded) => !isExpanded);
  }
}
