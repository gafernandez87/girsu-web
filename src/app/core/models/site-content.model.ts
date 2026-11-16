export interface NavigationItem {
  readonly label: string;
  readonly fragment: string;
}

export interface DownloadItem {
  readonly title: string;
  readonly description: string;
  readonly format: 'PDF' | 'Enlace';
  readonly href?: string;
}

export interface ResourceItem {
  readonly image: { readonly src: string; readonly alt: string };
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly href?: string;
}

export interface LibraryGroup {
  readonly title: string;
  readonly items: readonly DownloadItem[];
}

export interface VideoItem {
  readonly title: string;
  readonly duration: string;
  readonly youtubeUrl?: string;
}
