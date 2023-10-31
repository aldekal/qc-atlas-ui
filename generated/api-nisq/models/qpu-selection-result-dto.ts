/* tslint:disable */
import { Links } from './links';
export type QpuSelectionResultDto = {
  id?: string;
  provider?: string;
  qpu?: string;
  compiler?: string;
  analyzedDepth?: number;
  analyzedWidth?: number;
  analyzedTotalNumberOfOperations?: number;
  analyzedNumberOfSingleQubitGates?: number;
  analyzedNumberOfMultiQubitGates?: number;
  analyzedNumberOfMeasurementOperations?: number;
  analyzedMultiQubitGateDepth?: number;
  numberOfQubits?: number;
  t1?: number;
  t2?: number;
  avgReadoutError?: number;
  avgSingleQubitGateError?: number;
  avgMultiQubitGateError?: number;
  avgSingleQubitGateTime?: number;
  avgMultiQubitGateTime?: number;
  maxGateTime?: number;
  simulator?: boolean;
  time?: string;
  queueSize?: number;
  transpiledCircuit?: string;
  transpiledLanguage?: string;
  circuitName?: string;
  qpuSelectionJobId?: string;
  userId?: string;
  originalCircuitResultId?: string;
  estimatedHistogramIntersectionValue?: number;
  _links?: Links;
};
