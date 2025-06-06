import { MCPClient } from 'mcp-remote';

const mcpClient = new MCPClient({
  serverUrl: 'https://mcp.turkishtechlab.com/mcp'
});

export interface FlightInfo {
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  status: string;
}

export interface CityGuide {
  city: string;
  country: string;
  highlights: string[];
  tips: string[];
  promotions: any[];
}

export interface UserProfile {
  memberNumber: string;
  name: string;
  tier: string;
  miles: number;
  expiringMiles: number;
}

export const thyAPI = {
  // Kullanıcı işlemleri
  async getUserProfile(): Promise<UserProfile> {
    const response = await mcpClient.call('getCurrentUserDetails');
    return response;
  },

  async getUserFlights(): Promise<FlightInfo[]> {
    const response = await mcpClient.call('getMemberFlights');
    return response;
  },

  // Şehir rehberi
  async getCityGuide(city: string): Promise<CityGuide> {
    const response = await mcpClient.call('getCityGuide', { city });
    return response;
  },

  // Promosyonlar
  async getPromotions(country?: string): Promise<any[]> {
    const response = await mcpClient.call('getAirlinePromotions', { country });
    return response;
  },

  // Mil puanı bilgileri
  async getExpiringMiles(): Promise<number> {
    const response = await mcpClient.call('getExpiringMiles');
    return response;
  }
};

export default thyAPI; 