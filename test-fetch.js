
// using global fetch

async function testFetch() {
  const url = "https://sasto-bazzar.nepdora.baliyoventures.com/api/product/";
  console.log(`Fetching ${url}...`);
  try {
    const res = await fetch(url);
    console.log(`Status: ${res.status}`);
    const text = await res.text();
    console.log(`Body length: ${text.length}`);
    console.log("Success!");
  } catch (err) {
    console.error("Fetch error:", err);
    if (err.cause) console.error("Cause:", err.cause);
  }
}

testFetch();
