package org.rafaelmkp.Entity;

import org.rafaelmkp.Enum.RecurrenceInterval;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class TransRecurrenceEntity {
    @Id
    @SequenceGenerator(name = "TRANSRECURR_SEQ", sequenceName = "TRANSRECURR_SEQ")
    @GeneratedValue(generator = "TRANSRECURR_SEQ", strategy = GenerationType.AUTO)
    @Column(name = "TRANSRECURR_ID")
    private Long id;
    @Column(name = "TRANSRECURR_INTERVAL", nullable = false)
    private RecurrenceInterval interval;
    @Column(name = "TRANSRECURR_START_DATE", nullable = false)
    private Date startDate;

    public Long getId() {
        return id;
    }

    public void setId( Long id ) {
        this.id = id;
    }

    public RecurrenceInterval getInterval() {
        return interval;
    }

    public void setInterval( RecurrenceInterval interval ) {
        this.interval = interval;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate( Date startDate ) {
        this.startDate = startDate;
    }
}
