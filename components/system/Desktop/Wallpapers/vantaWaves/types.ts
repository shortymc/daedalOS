type VantaWavesCycleColor = {
  colorCycleSpeed?: number;
  hue?: number;
  lightness?: number;
  saturation?: number;
};

export type VantaWavesConfig = VantaWavesCycleColor & {
  color: number;
  forceAnimate?: boolean;
  gyroControls?: boolean;
  mouseControls?: boolean;
  mouseEase?: boolean;
  shininess: number;
  touchControls?: boolean;
  waveHeight: number;
  waveSpeed: number;
  zoom?: number;
};

export type OffscreenRenderProps = {
  canvas: OffscreenCanvas;
  devicePixelRatio: number;
};

type MainThreadRenderProps = {
  el: HTMLElement;
};

type RenderProps = MainThreadRenderProps | OffscreenRenderProps;

export type VantaWavesSettings = RenderProps &
  VantaWavesConfig & {
    THREE?: unknown;
  };

export type VantaWaves = {
  destroy: () => void;
  renderer: {
    setSize: (width: number, height: number) => void;
  };
  resize: () => void;
};

export type VantaObject = {
  WAVES: (settings: VantaWavesSettings) => VantaWaves;
  current: VantaWaves;
};

declare global {
  interface Window {
    THREE: unknown;
    VANTA: VantaObject;
  }
}
