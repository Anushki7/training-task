import { loginRequest, LoginData } from '@/api/LoginPage';

export const loginConnector = {
  getLoginData: async (): Promise<LoginData> => {
    try {
      const data = await loginRequest();
      return data;
    } catch (error) {
      throw error instanceof Error ? error.message : String(error);
    }
  },
};
