export const ThemeScript = () => {
  const code = `
    (function() {
      try {
        const theme = localStorage.getItem('theme') || 'default';
        const mode = localStorage.getItem('mode') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.setAttribute('data-mode', mode);
      } catch (_) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
};
