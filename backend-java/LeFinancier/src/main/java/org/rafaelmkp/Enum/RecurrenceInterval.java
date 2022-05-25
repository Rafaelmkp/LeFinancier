package org.rafaelmkp.Enum;

public enum RecurrenceInterval {
    DAILY('D'),
    MONTHLY('M'),
    YEARLY('Y');

    private final Character code;

    RecurrenceInterval(Character code) {
        this.code = code;
    }

    public Character getCode() {
        return code;
    }
}
