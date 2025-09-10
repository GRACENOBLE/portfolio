import { sanityFetch } from "@/sanity/lib/live";

export default async function TestPage() {
  try {
    // Simple test - just get all homePage documents
    const allHomePagesResult = await sanityFetch({
      query: `*[_type == "homePage"]`,
    });
    const allHomePages = allHomePagesResult.data;
    console.log("All homePage documents:", allHomePages);

    // Test the specific document
    const homePageResult = await sanityFetch({
      query: `*[_type == "homePage"][0]`,
    });
    const homePage = homePageResult.data;
    console.log("First homePage document:", homePage);

    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Sanity Test Results</h1>
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-semibold mb-2">Raw Data:</h2>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(homePage, null, 2)}
          </pre>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Error</h1>
        <pre className="bg-red-100 p-4 rounded text-sm">
          {error instanceof Error ? error.message : String(error)}
        </pre>
      </div>
    );
  }
}
