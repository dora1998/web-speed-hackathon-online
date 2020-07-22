import { useEffect } from 'react';

export const useScriptTag = (src, options = {}) => {
  useEffect(() => {
    if ('beforeLoad' in options) {
      const res = options.beforeLoad();
      if (res) return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.crossorigin = 'anonymous';
    script.async = true;
    const elm = document.body.appendChild(script);

    return () => elm.remove();
  }, []);
};
