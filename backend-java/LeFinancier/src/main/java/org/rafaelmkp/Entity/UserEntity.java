package org.rafaelmkp.Entity;

import javax.persistence.*;

@Entity
@Table(name = "USER")
public class UserEntity {
    @Id
    @SequenceGenerator(name = "USER_SEQ", sequenceName = "USER_SEQ")
    @GeneratedValue(generator = "USER_SEQ", strategy = GenerationType.AUTO)
    @Column(name = "USER_ID")
    private Long id;

    @Column(length = 128, unique = true, nullable = false)
    private String email;

    @Column(length = 128, unique = false, nullable = false)
    private String name;

    @Column(nullable = true)
    private Long phone;

    public Long getId() {
        return id;
    }

    public void setId( Long id ) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail( String email ) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName( String name ) {
        this.name = name;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone( Long phone ) {
        this.phone = phone;
    }
}
