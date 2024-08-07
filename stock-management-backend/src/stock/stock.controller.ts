import { Controller, Get, Param } from '@nestjs/common';
import { StockService, StockQuote } from './stock.service';
import { Observable } from 'rxjs';

@Controller('stocks')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get(':symbol')
  getStockQuote(@Param('symbol') symbol: string): Observable<StockQuote[]> {
    return this.stockService.getStockQuote(symbol);
  }
}
