package nh.recipify;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.LinkedHashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<?> handleEntityNotFoundException(EntityNotFoundException exception) {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(exception.getMessage());
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<?> handleBadRequestException(BadRequestException exception) {
        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(exception.getMessage());
    }

    /// Antwortet je ungültigem Feld mit der Meldung der Bean Validation, unter
    /// dem Namen des Felds ohne das umschließende Objekt ("commenter" statt
    /// "feedbackData.commenter").
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Map<String, String>>> handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
        var errors = new LinkedHashMap<String, String>();
        for (FieldError error : exception.getBindingResult().getFieldErrors()) {
            var field = error.getField().substring(error.getField().lastIndexOf('.') + 1);
            errors.put(field, error.getDefaultMessage());
        }
        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(Map.of("errors", errors));
    }
}
