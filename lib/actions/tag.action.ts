"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";
import Tag from "@/database/tag.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const {
      userId,
      // limit = 3
    } = params;

    const user = User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return [
      {
        _id: "1",
        name: "React",
      },
      {
        _id: "2",
        name: "Node",
      },
      {
        _id: "3",
        name: "MongoDB",
      },
    ];
  } catch (error) {}
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();

    const tags = await Tag.find({});

    return { tags };
  } catch (error) {}
}
