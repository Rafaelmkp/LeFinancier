package org.rafaelmkp.Entity;

import org.rafaelmkp.Enum.FTransactionType;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
public class FTransactionEntity {
    @Id
    @SequenceGenerator(name = "FTRANSACTION_SEQ", sequenceName = "FTRANSACTION_SEQ")
    @GeneratedValue(generator = "FTRANSACTION_SEQ", strategy = GenerationType.AUTO)
    @Column(name = "FTRANSAC_ID")
    private Long id;

    @Column(name = "FTRANSAC_VALUE", precision = 10, scale = 2, nullable = false)
    private BigDecimal value;

    @Enumerated(EnumType.STRING)
    @Column(name = "FTRANSAC_TYPE", nullable = false)
    private FTransactionType type;

    @Column(name = "FTRANSAC_DATE", nullable = false)
    private Date date;

    @Column(name = "FTRANSAC_TITLE", length = 64, nullable = false)
    private String title;

    @Column(name = "FTRANSAC_DESCRIPTION", length = 256)
    private String description;

    public Long getId() {
        return id;
    }

    public void setId( Long id ) {
        this.id = id;
    }

    public BigDecimal getValue() {
        return value;
    }

    public void setValue( BigDecimal value ) {
        this.value = value;
    }

    public FTransactionType getType() {
        return type;
    }

    public void setType( FTransactionType type ) {
        this.type = type;
    }

    public Date getDate() {
        return date;
    }

    public void setDate( Date date ) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle( String title ) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription( String description ) {
        this.description = description;
    }
}
