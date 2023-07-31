package com.example.Muscle_Auth.services;

import com.example.Muscle_Auth.dto.AppUserDto;
import com.example.Muscle_Auth.exceptions.AuthApiException;

import java.util.List;

public interface UserService {
    List<AppUserDto> getAllUsers();

}
