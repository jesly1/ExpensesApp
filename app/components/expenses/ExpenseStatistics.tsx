import React, { useMemo } from 'react';
interface Expense {
  amount: number;
}
function calculateSummaryStatistics(expenses: Expense[]) {
  const amounts = expenses.map((expense) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0);
  const mean = sum / expenses.length;

  return { minAmount, maxAmount, sum, mean };
}

interface ExpenseStatisticsProps {
  expenses: Expense[];
}

const ExpenseStatistics: React.FC<ExpenseStatisticsProps> = ({ expenses }) => {
  const { minAmount, maxAmount, sum, mean } = useMemo(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );

  return (
    <section>
      <h2>Summary Statistics</h2>
      <dl id="expense-statistics">
        <div>
          <dt>Total</dt>
          <dd>${sum.toFixed(2)}</dd>
        </div>
        <div>
          <dt>Average</dt>
          <dd>${mean.toFixed(2)}</dd>
        </div>
        <div>
          <dt>Min. Amount</dt>
          <dd>${minAmount.toFixed(2)}</dd>
        </div>
        <div>
          <dt>Max. Amount</dt>
          <dd>${maxAmount.toFixed(2)}</dd>
        </div>
      </dl>
    </section>
  );
}

export default ExpenseStatistics;
