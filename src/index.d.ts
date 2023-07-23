import { Card } from "./types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      ChangePin: undefined;
      ClearAllData: undefined;
      About: undefined;
      Cards: {
        message?: string;
      };
      EditCard: {
        card: Card;
      };
      NewCard: undefined;
      CreatePin: undefined;
    }
  }

  declare module "*.png";
}
