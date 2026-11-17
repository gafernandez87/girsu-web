import { ChangeDetectionStrategy, Component } from '@angular/core';

import { STRATEGY_DOWNLOADS, WORKSHOP_PHOTOS } from '../../../../core/data/site-content';
import { DownloadCard } from '../../../../shared/download-card/download-card';
import { SectionHeading } from '../../../../shared/section-heading/section-heading';

import { PhotoSlider } from '../../../../shared/photo-slider/photo-slider';

@Component({
  selector: 'app-strategy-section',
  imports: [DownloadCard, SectionHeading, PhotoSlider],
  templateUrl: './strategy-section.html',
  styleUrl: './strategy-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrategySection {
  protected readonly workshopPhotos = WORKSHOP_PHOTOS;
  protected readonly strategyDownloads = STRATEGY_DOWNLOADS;
}
