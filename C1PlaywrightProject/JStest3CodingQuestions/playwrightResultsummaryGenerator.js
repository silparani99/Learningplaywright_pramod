function generateSummary(results) {
    let passed = 0;
    let failed = 0;
    let skipped = 0;
    let totalDuration = 0;
    let failedSteps = [];

    for (const result of results) {
        totalDuration += result.durationMs;
        if (result.status === "passed") {
            passed++;
        } else if (result.status === "failed") {
            failed++;
            failedSteps.push(result.name);
        } else if (result.status === "skipped") {
            skipped++;
        }
    };

    console.log(`total steps: ${results.length}`, `passed: ${passed}`, `failed: ${failed}`, `skipped: ${skipped}`, 
        `total duration: ${totalDuration}ms`, `failed steps: ${failedSteps.join(", ")}`);

}
const results = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form", status: "failed", durationMs: 700 },
  { name: "submit", status: "skipped", durationMs: 0 }
];

generateSummary(results);