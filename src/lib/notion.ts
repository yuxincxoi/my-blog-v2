import { Client } from "@notionhq/client";

const NOTION_TOKEN = process.env.NOTION_TOKEN as string;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID as string;

const notion = new Client({ auth: NOTION_TOKEN });

export async function getNotionPages() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
    });

    return response.results;
  } catch (error) {
    console.error(error);
  }
}
