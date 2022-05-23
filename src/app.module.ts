import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PurchasesModule} from './purchases/purchases.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        PurchasesModule,
    ]
})
export class AppModule {
}
