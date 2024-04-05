import '@/styles/globals.css'
import '@/utils/globalHooks'
import type { AppProps } from 'next/app'
import ErrorBoundary from "@/components/ErrorBoundary";
import { useEffect } from "react-hook-tracer";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    window.onerror = function(message, source, lineno, colno, error) {
      console.log("Перехвачена глобальная ошибка:", message);
      return true; // Предотвращает дальнейшее распространение стандартного сообщения об ошибке
    };

    window.addEventListener('unhandledrejection', event => {
      console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
      event.preventDefault(); // Предотвращает дальнейшее распространение стандартного сообщения об ошибке
    });

  }, [])

  return <Component {...pageProps} />
}
