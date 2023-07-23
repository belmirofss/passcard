import { Card } from "./types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      ChangePin: undefined;
      ClearAllData: undefined;
      About: undefined;
      Cards: undefined;
      EditCard: {
        card: Card;
      };
      NewCard: undefined;
      CreatePin: undefined;
    }
  }

  declare module "*.png";
}
