package com.example.Muscle_Auth.services;

import com.example.Muscle_Auth.dto.LoginDto;
import com.example.Muscle_Auth.dto.RegisterDto;
import com.example.Muscle_Auth.exceptions.AuthApiException;

public interface AuthService {
    String login(LoginDto loginDto);
    String register(RegisterDto registerDto) throws AuthApiException;
}
