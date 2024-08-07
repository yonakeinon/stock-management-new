import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface StockQuote {
  symbol: string;
  price: number;
  timestamp: string;
}

@Injectable()
export class StockService {
  private apiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiKey = this.configService.get<string>('STOCK_API_KEY');
  }

  getStockQuote(symbol: string): Observable<StockQuote[]> {
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${this.apiKey}`;
    return this.httpService
      .get(url)
      .pipe(map((response: AxiosResponse) => response.data as StockQuote[]));
  }
}
