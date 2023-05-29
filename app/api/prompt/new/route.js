import { connectToDB } from "@utils/database";

export const PORT = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();
  } catch (error) {}
};
