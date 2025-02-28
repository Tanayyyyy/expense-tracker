package com.org.expensetracker.app.service.impl;

import java.security.MessageDigest;
import java.util.regex.Pattern;

import com.org.app.dto.user.CreateUserRequestDTO;
import com.org.app.dto.user.UserEntity;
import com.org.expensetracker.app.facade.UserFacade;
import com.org.expensetracker.app.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserFacade userFacade;

    public UserServiceImpl(UserFacade userFacade) {
        this.userFacade = userFacade;
    }

    @Override
    public void createUser(CreateUserRequestDTO requestDTO) {

        if (!isValidEmail(requestDTO.getEmail())) {
            throw new RuntimeException("Invalid Email");
        }

        UserEntity userEntity = UserEntity.newBuilder()
            .setUserName(requestDTO.getUserName())
            .setPhoneNumber(requestDTO.getPhoneNumber())
            .setEmail(requestDTO.getEmail())
            .setPasswordHash(hashSHA256(requestDTO.getPassword()))
            .build();

        this.userFacade.createUser(userEntity);
    }

    private static final Pattern EMAIL_PATTERN = Pattern.compile(
        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
    );

    public static boolean isValidEmail(String email) {
        return email != null && EMAIL_PATTERN.matcher(email).matches();
    }

    public static String hashSHA256(String input) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hashBytes = digest.digest(input.getBytes());

            // Convert byte array to hexadecimal string
            StringBuilder hexString = new StringBuilder();
            for (byte b : hashBytes) {
                hexString.append(String.format("%02x", b));
            }
            return hexString.toString();
        } catch (Exception e) {
            throw new RuntimeException("Error hashing string", e);
        }
    }
}
