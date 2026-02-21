import { HttpClient } from '../http/http-client.js';
import { ScheduleResponse, ScheduleCalendar } from '../types/schedule.js';

export class ScheduleEndpoints {
  constructor(private http: HttpClient) {}

  async get(date?: string): Promise<ScheduleResponse> {
    const path = date ? `/schedule/${date}` : '/schedule/now';
    return this.http.get<ScheduleResponse>(path);
  }

  async getCalendar(date?: string): Promise<ScheduleCalendar> {
    const path = date ? `/schedule-calendar/${date}` : '/schedule-calendar/now';
    return this.http.get<ScheduleCalendar>(path);
  }

  async getByTeam(teamAbbrev: string, date?: string): Promise<ScheduleResponse> {
    const path = date ? `/schedule/${teamAbbrev}/${date}` : `/schedule/${teamAbbrev}/now`;
    return this.http.get<ScheduleResponse>(path);
  }

  async getSeasonSchedule(season: string): Promise<unknown> {
    return this.http.get(`/schedule/${season}`);
  }
}
