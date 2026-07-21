import { ChangeDetectionStrategy, Component } from '@angular/core';

import { STRATEGY_DOWNLOADS } from '../../../../core/data/site-content';
import { DownloadCard } from '../../../../shared/download-card/download-card';
import { SectionHeading } from '../../../../shared/section-heading/section-heading';

@Component({
  selector: 'app-strategy-section',
  imports: [DownloadCard, SectionHeading],
  templateUrl: './strategy-section.html',
  styleUrl: './strategy-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrategySection {
  protected readonly strategyDownloads = STRATEGY_DOWNLOADS;
}
