import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-application-detail',
  imports: [RouterLink],
  templateUrl: './application-detail.html',
  styleUrl: './application-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationDetail {
  protected readonly features = [
    {
      number: '01',
      title: 'Desafíos interactivos',
      description: 'Actividades breves para incorporar conceptos mientras se juega.',
    },
    {
      number: '02',
      title: 'Puntos y ranking',
      description: 'Una experiencia que reconoce el avance y estimula la participación.',
    },
    {
      number: '03',
      title: 'Contenido situado',
      description: 'Ejemplos y desafíos conectados con la realidad de Jujuy.',
    },
  ] as const;
}
