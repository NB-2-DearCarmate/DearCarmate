export interface CreateContractResponseDTO {
  id: number;
  status: string;
  resolutionDate: Date | null;
  meetings: MeetingDTO[];
  user: {
    id: number;
    name: string;
  };
  customer: {
    id: number;
  };
  car: {
    id: number;
    model: string;
  };
}

export interface UpdateContractResponseDTO {
  id: number;
  status: string;
  resolutionDate: Date | null;
  contractPrice: number;
  meetings?: MeetingDTO[];
  user: {
    id: number;
    name: string;
  };
  customer: {
    id: number;
    name: string;
  };
  car: {
    id: number;
    model: string;
  };
}

export interface MeetingDTO {
  date: Date;
  alarms?: Date[];
}
