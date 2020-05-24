package com.devx.gerenciamento.security;

import java.io.IOException;
import java.security.Principal;

import javax.annotation.Priority;
import javax.ejb.EJB;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.ext.Provider;

@Secured
@Provider
@Priority(Priorities.AUTHENTICATION)
public class AuthenticationFilter implements ContainerRequestFilter {

	private static final String REALM = "example";
	private static final String AUTHENTICATION_SCHEME = "Bearer";

	@EJB
	private TokenProvider tokenProvider;
	
	@Override
	public void filter(ContainerRequestContext requestContext) throws IOException {
		String authorizationHeader = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);
		if (!isTokenBasedAuthentication(authorizationHeader)) {
			abortWithUnauthorized(requestContext);
			return;
		}
		String token = authorizationHeader.substring(AUTHENTICATION_SCHEME.length()).trim();
		try {
			validateToken(token);
		} catch (Exception e) {
			abortWithUnauthorized(requestContext);
		}
		final SecurityContext currentSecurityContext = requestContext.getSecurityContext();
		requestContext.setSecurityContext(new SecurityContext() {

		        @Override
		        public Principal getUserPrincipal() {
		            return () -> tokenProvider.getCredencial(token).getPrincipal();
		        }

		    @Override
		    public boolean isUserInRole(String role) {
		        return true;
		    }

		    @Override
		    public boolean isSecure() {
		        return currentSecurityContext.isSecure();
		    }

		    @Override
		    public String getAuthenticationScheme() {
		        return AUTHENTICATION_SCHEME;
		    }
		});
	}

	private boolean isTokenBasedAuthentication(String authorizationHeader) {
		return authorizationHeader != null
				&& authorizationHeader.toLowerCase().startsWith(AUTHENTICATION_SCHEME.toLowerCase() + " ");
	}

	private void abortWithUnauthorized(ContainerRequestContext requestContext) {
		requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED)
				.header(HttpHeaders.WWW_AUTHENTICATE, AUTHENTICATION_SCHEME + " realm=\"" + REALM + "\"").build());
	}

	private void validateToken(String token) throws Exception {
		tokenProvider.validarToken(token);
	}

}
