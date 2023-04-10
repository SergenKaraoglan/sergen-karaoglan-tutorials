import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await createInquiry(req, res);
  } else if (req.method === "GET") {
    return await getInquiries(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function createInquiry(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.reactionLeaderboard.create({
      data: {
        name: body.name,
        score: body.score,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res
      .status(500)
      .json({ error: "Error updating leaderboard", success: false });
  }
}

async function getInquiries(req, res) {
  try {
    const entries = await prisma.reactionLeaderboard.findMany({
      orderBy: {
        score: "asc",
      },
      take: 5,
    });
    return res.status(200).json(entries, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error fetching data", success: false });
  }
}
