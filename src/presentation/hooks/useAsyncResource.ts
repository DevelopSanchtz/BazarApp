import { useCallback, useEffect, useState } from 'react';

export type LoadStatus = 'loading' | 'success' | 'error';

export function useAsyncResource<T>(load: () => Promise<T>, initialData: T) {
    const [data, setData] = useState<T>(initialData);
    const [status, setStatus] = useState<LoadStatus>('loading');

    const run = useCallback(async () => {
        try {
            const result = await load();
            setData(result);
            setStatus('success');
        } catch {
            setStatus('error');
        }
    }, [load]);

    useEffect(() => {
        run();
    }, [run]);

    const retry = useCallback(() => {
        setStatus('loading');
        run();
    }, [run]);

    return { data, status, retry };
}