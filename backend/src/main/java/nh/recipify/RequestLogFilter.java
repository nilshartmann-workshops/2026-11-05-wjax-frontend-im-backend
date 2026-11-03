package nh.recipify;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/// Schreibt je Aufruf der API eine Zeile mit Methode, Pfad, Remote-Adresse und
/// User-Agent. Daran ist zu sehen, ob der Browser oder der Next.js-Server
/// das Backend aufruft.
@Component
class RequestLogFilter extends OncePerRequestFilter {

    private static final Logger log = LoggerFactory.getLogger(RequestLogFilter.class);

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        return !request.getRequestURI().startsWith("/api/");
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
        throws ServletException, IOException {
        log.info("{} {} from {} ({})",
            request.getMethod(),
            request.getRequestURI(),
            request.getRemoteAddr(),
            request.getHeader("User-Agent"));
        filterChain.doFilter(request, response);
    }
}
