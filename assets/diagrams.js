// Render only visible slides so Mermaid can measure labels correctly.
(() => {
  let library;
  const figures = [...document.querySelectorAll('.responsibility-diagram')];
  async function renderVisible() {
    for (const [index, figure] of figures.entries()) {
      if (!figure.getClientRects().length || figure.dataset.renderState) continue;
      figure.dataset.renderState = 'loading';
      try {
        library ??= import('https://cdn.jsdelivr.net/npm/mermaid@12.1.0/dist/mermaid.esm.min.mjs').then(({ default: mermaid }) => {
          mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'base', fontFamily: 'system-ui, sans-serif', flowchart: { htmlLabels: false } });
          return mermaid;
        });
        const mermaid = await library;
        await document.fonts.ready;
        // The user may have switched slides while the library was loading.
        if (!figure.getClientRects().length) {
          delete figure.dataset.renderState;
          continue;
        }
        const { svg } = await mermaid.render(`task-flow-${index}`, figure.querySelector('.mermaid-source').textContent);
        figure.querySelector('.mermaid-output').innerHTML = svg;
        figure.querySelector('.diagram-fallback').hidden = true;
        figure.dataset.renderState = 'done';
      } catch (error) {
        figure.dataset.renderState = 'failed';
        console.warn('Diagram unavailable; showing the text alternative.', error);
      }
    }
  }
  new MutationObserver(renderVisible).observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });
  renderVisible();
})();
