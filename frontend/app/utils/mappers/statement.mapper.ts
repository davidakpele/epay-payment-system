import { StatementItemPayload } from "@/app/types/api";

export const mapStatementsToPayload = (
  statements: Record<string, unknown>[],
): StatementItemPayload[] => {
  return statements.map((item) => ({
    id: String(item.id ?? ""),
    date: String(item.timestamp ?? item.createdOn ?? ""),
    description: String(item.description ?? ""),
    type: String(item.type ?? ""),
    currencyType: String(item.currencyType ?? ""),
    amount: Number(item.amount ?? 0),
    balance: Number(item.availableBalance ?? item.previousBalance ?? 0),
    reference: String(item.referenceNo ?? item.transactionId ?? ""),
  }));
};
