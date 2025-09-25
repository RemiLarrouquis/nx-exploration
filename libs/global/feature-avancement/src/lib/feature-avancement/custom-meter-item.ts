import { MeterItem } from 'primeng/metergroup';

export class CustomMeterItem implements MeterItem {
  label?: string;
  value?: number;
  couleurDebut?: string;
  couleurFin?: string;
  icon?: string;
}
