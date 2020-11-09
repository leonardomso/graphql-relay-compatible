import { nodeDefinitions, fromGlobalId } from "graphql-relay";

import { UserType } from "./graphql";
import { users } from "./utils";
import { IUser } from "./types";

const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
  async (globalId: string) => {
    const { id: userGlobalID, type } = fromGlobalId(globalId);
    if (type === "User")
      return await users.find(
        ({ id }: IUser) => (id as string) === userGlobalID
      );
    return null;
  },
  (obj) => {
    if (obj instanceof IUser) return UserType;
    return null;
  }
);

export const NodeInterface = nodeInterface;
export const NodeField = nodeField;
export const NodesField = nodesField;
