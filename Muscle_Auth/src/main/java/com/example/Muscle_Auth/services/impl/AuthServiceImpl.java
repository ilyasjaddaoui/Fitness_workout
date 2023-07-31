package com.example.Muscle_Auth.services.impl;

import com.example.Muscle_Auth.dto.LoginDto;
import com.example.Muscle_Auth.dto.RegisterDto;
import com.example.Muscle_Auth.entities.AppUser;
import com.example.Muscle_Auth.entities.Role;
import com.example.Muscle_Auth.exceptions.AuthApiException;
import com.example.Muscle_Auth.repositories.RoleRepository;
import com.example.Muscle_Auth.repositories.UserRepository;
import com.example.Muscle_Auth.secutiry.CustomUserDetailsService;
import com.example.Muscle_Auth.secutiry.JWTGenerator;
import com.example.Muscle_Auth.services.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class AuthServiceImpl implements AuthService {

    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private JWTGenerator jwtGenerator;
    private CustomUserDetailsService customUserDetailsService;

    public AuthServiceImpl(AuthenticationManager authenticationManager, UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder, JWTGenerator jwtGenerator, CustomUserDetailsService customUserDetailsService) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
        this.customUserDetailsService = customUserDetailsService;
    }

    @Override
    public String login(LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsername(), loginDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtGenerator.generatorToken(authentication);
        return token;
    }

    @Override
    public String register(RegisterDto registerDto) throws AuthApiException {


        if(userRepository.existsByUsername(registerDto.getUsername())){
            throw new AuthApiException(HttpStatus.BAD_REQUEST, "Username is already exists!.");
        }

        AppUser user= new AppUser();
        user.setFirstName(registerDto.getFirstName());
        user.setLastName(registerDto.getLastName());
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Role role=roleRepository.findByName("USER").get();
        user.setRoles(Collections.singletonList(role));
        userRepository.save(user);
        return "User registered successfully!.";
    }
}
