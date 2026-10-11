import { useEffect, useState } from 'react';
import type { CartItem } from '../../../domain/entities/CartItem';
import { useDependencies } from '../../providers/DependenciesProvider';

export function useCartPersistence(
    items: readonly CartItem[],
    onHydrate: (storedItems: readonly CartItem[]) => void,
) {
    const { loadCart, saveCart } = useDependencies();
    const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    let isActive = true;

    loadCart()
        .then(storedItems => {
            if (isActive) {
                onHydrate(storedItems);
            }
        })
        .finally(() => {
            if (isActive) {
                setIsHydrated(true);
            }
        });

    return () => {
        isActive = false;
    };
  }, [loadCart, onHydrate]);

    useEffect(() => {
        if (!isHydrated) {
            return;
        }

        saveCart(items).catch(() => {});
    }, [items, isHydrated, saveCart]);
}