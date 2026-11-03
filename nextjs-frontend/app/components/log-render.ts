const renderCounts = new Map<string, number>();

export function logRender(component: string, ctx?: unknown) {
  const timestamp = performance.now();
  const count = (renderCounts.get(component) || 0) + 1;
  renderCounts.set(component, count);

  if (!ctx) {
    console.log(
      `\x1b[36m${component}\x1b[0m rendered at ${timestamp.toFixed(2)}ms (${count}x)`,
    );
  } else {
    console.log(
      `\x1b[36m${component}\x1b[0m rendered at ${timestamp.toFixed(2)}ms (${count}x)`,
      ctx,
    );
  }
}
