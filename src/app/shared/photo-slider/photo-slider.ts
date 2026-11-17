import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

import { GalleryImage } from '../../core/models/site-content.model';

@Component({
  selector: 'app-photo-slider',
  templateUrl: './photo-slider.html',
  styleUrl: './photo-slider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoSlider {
  readonly images = input.required<readonly GalleryImage[]>();
  readonly label = input('Galería de imágenes');
  protected readonly activeIndex = signal(0);
  protected readonly activeImage = computed(() => this.images()[this.activeIndex()]);
  private pointerStart?: { x: number; y: number };

  protected select(index: number): void {
    const count = this.images().length;
    if (count) this.activeIndex.set(((index % count) + count) % count);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    this.select(this.activeIndex() + (event.key === 'ArrowRight' ? 1 : -1));
  }

  protected onPointerDown(event: PointerEvent): void {
    if (!event.isPrimary || event.button !== 0) return;
    this.pointerStart = { x: event.clientX, y: event.clientY };
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  }

  protected onPointerUp(event: PointerEvent): void {
    const start = this.pointerStart;
    this.pointerStart = undefined;
    if (!start) return;
    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      this.select(this.activeIndex() + (deltaX < 0 ? 1 : -1));
    }
  }

  protected cancelSwipe(): void {
    this.pointerStart = undefined;
  }
}
