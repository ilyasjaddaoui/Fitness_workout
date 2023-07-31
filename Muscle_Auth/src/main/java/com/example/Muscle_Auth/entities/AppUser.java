package com.example.Muscle_Auth.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity @Getter @Setter @AllArgsConstructor @NoArgsConstructor
@Table(name = "users")
public class AppUser {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;

    @Column(unique = true, nullable = false)
    private String username;
    @Column(unique = true, nullable = false)
    private String email;
    private String password;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Enumerated(EnumType.STRING)
    @JoinTable(name = "user_roles",
            inverseJoinColumns = @JoinColumn(name = "role", referencedColumnName = "name"),
            joinColumns = @JoinColumn(name = "users", referencedColumnName = "username")

    )
    private List<Role> roles = new ArrayList<>();
}
