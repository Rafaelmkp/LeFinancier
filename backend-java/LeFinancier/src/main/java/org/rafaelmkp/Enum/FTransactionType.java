package org.rafaelmkp.Enum;

public enum FTransactionType {
    CREDIT('C'),
    DEBIT('D');

    private final Character code;

    FTransactionType( Character code ) {
        this.code = code;
    }

    public Character getCode() {
        return code;
    }
}
