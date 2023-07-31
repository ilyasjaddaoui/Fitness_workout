package com.example.Muscle_Auth.services.impl;

import com.example.Muscle_Auth.dto.AppUserDto;
import com.example.Muscle_Auth.entities.AppUser;
import com.example.Muscle_Auth.exceptions.AuthApiException;
import com.example.Muscle_Auth.repositories.UserRepository;
import com.example.Muscle_Auth.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }



    @Override
    public List<AppUserDto> getAllUsers() {
        List<AppUser> allUsers = userRepository.findAll();
        return allUsers.stream().map(appUser -> mapToDto(appUser)).collect(Collectors.toList());
    }




    /*
        * mapping to dto
    */

    private AppUserDto mapToDto(AppUser appUser){
        AppUserDto appUserDto = new AppUserDto();
        appUserDto.setId(appUser.getId());
        appUserDto.setFirstName(appUser.getFirstName());
        appUserDto.setLastName(appUser.getLastName());
        appUserDto.setUsername(appUser.getUsername());
        appUserDto.setEmail(appUser.getEmail());
        return appUserDto;
    }

    private AppUser mapToEntity(AppUserDto appUserDto){
        AppUser appUser = new AppUser();
        appUser.setId(appUserDto.getId());
        appUser.setFirstName(appUserDto.getFirstName());
        appUser.setLastName(appUserDto.getLastName());
        appUser.setUsername(appUserDto.getUsername());
        appUser.setEmail(appUserDto.getEmail());
        return appUser;
    }
}
