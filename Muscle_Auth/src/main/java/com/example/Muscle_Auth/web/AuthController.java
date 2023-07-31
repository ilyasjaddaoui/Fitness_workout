package com.example.Muscle_Auth.web;

import com.example.Muscle_Auth.dto.AuthResponseDto;
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
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    private AuthService authService;
    private CustomUserDetailsService customUserDetailsService;

    public AuthController(AuthService authService, CustomUserDetailsService customUserDetailsService) {
        this.authService = authService;
        this.customUserDetailsService = customUserDetailsService;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(@RequestBody LoginDto loginDto){

        String token = authService.login(loginDto);
        AuthResponseDto authResponseDto = new AuthResponseDto();
        authResponseDto.setToken(token);
        return ResponseEntity.ok(authResponseDto);
    }


    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterDto registerDto) throws AuthApiException {

        String response = authService.register(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);

    }

    @GetMapping("/user")
    public User currentUser(Principal principal) {
        return ((User) this.customUserDetailsService.loadUserByUsername(principal.getName()));
    }



}
