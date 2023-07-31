package com.example.Muscle_Auth.dto;


import lombok.Data;

@Data
public class AuthResponseDto {
    private String token;
    private String TokenType = "Bearer ";

    public AuthResponseDto() {
        this.token = token;
    }


}
