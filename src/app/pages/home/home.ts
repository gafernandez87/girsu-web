import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroSection } from './components/hero-section/hero-section';
import { LibrarySection } from './components/library-section/library-section';
import { PresentationSection } from './components/presentation-section/presentation-section';
import { ResourcesSection } from './components/resources-section/resources-section';
import { StrategySection } from './components/strategy-section/strategy-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection, PresentationSection, StrategySection, ResourcesSection, LibrarySection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
