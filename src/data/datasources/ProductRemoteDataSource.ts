import type { ProductDto } from '../dto/ProductDto';

export interface ProductRemoteDataSource {
    fetchProducts(): Promise<ProductDto[]>;
}

export class FakeStoreProductDataSource implements ProductRemoteDataSource {
    constructor(
        private readonly baseUrl: string,
        private readonly timeoutMs: number,
  ) {}

  async fetchProducts(): Promise<ProductDto[]> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
        const response = await fetch(`${this.baseUrl}/products`, 
        {
            signal: controller.signal,
        });

        if (!response.ok) {
            throw new Error(`Error HTTP ${response.status} al obtener productos`);
        }

        const data: unknown = await response.json();

        if (!Array.isArray(data)) {
            throw new Error('La API respondió con un formato inesperado');
        }

        return data as ProductDto[];
    } 
    
    finally {
        clearTimeout(timeoutId);
    }
  }
}