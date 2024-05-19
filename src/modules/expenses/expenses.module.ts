import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';
import { User } from '../users/entities/user.entity';
import { Property } from '../properties/entities/property.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Expense]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Property]),
  ],
  controllers: [ExpensesController],
  providers: [ExpensesService],
})
export class ExpensesModule {}
