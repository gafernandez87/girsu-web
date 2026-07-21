import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { DownloadItem } from '../../core/models/site-content.model';

@Component({
  selector: 'app-download-card',
  templateUrl: './download-card.html',
  styleUrl: './download-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadCard {
  readonly item = input.required<DownloadItem>();
  readonly compact = input(false);
}
