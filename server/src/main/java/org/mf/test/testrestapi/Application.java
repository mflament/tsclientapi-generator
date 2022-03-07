package org.mf.test.testrestapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@SpringBootApplication
public class Application {

    @Configuration
    public static class SecurityConfiguration extends WebSecurityConfigurerAdapter {
        @Bean
        public PasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }

        // just for demo
        @Bean
        public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
            InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
            manager.createUser(User.builder().passwordEncoder(passwordEncoder::encode)
                    .username("admin").password("123").roles("admin").build());
            manager.createUser(User.builder().passwordEncoder(passwordEncoder::encode)
                    .username("user1").password("123").roles("role1").build());
            manager.createUser(User.builder().passwordEncoder(passwordEncoder::encode)
                    .username("user2").password("123").roles("role2").build());
            manager.createUser(User.builder().passwordEncoder(passwordEncoder::encode)
                    .username("user3").password("123").roles("role3").build());
            return manager;
        }

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                    .antMatcher("/**").authorizeRequests().anyRequest().permitAll().and()
                    .httpBasic().and()
                    .csrf().disable()
                    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        }
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class);
    }
}
