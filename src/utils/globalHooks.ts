import { useState, useEffect, useRef, useTracer, useMemo, useReducer, setTracerConfig, useContext, useLayoutEffect, useInsertionEffect, useCallback, TraceLog, clearLog, resetComponentRegistry} from 'react-hook-tracer';

// Проверка, существует ли глобальный объект window и его свойство для хранения хуков
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.globalHooks = { useState, useEffect, useRef, useTracer, useMemo, useReducer, setTracerConfig, useContext,
    useLayoutEffect, useInsertionEffect, useCallback, TraceLog, clearLog, resetComponentRegistry };
}
