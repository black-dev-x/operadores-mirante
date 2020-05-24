package com.devx.gerenciamento.security;

import java.util.Set;

import javax.security.enterprise.credential.Credential;

public class Credencial implements Credential {

	private final String principal;
	private final Set<String> authorities; 
	
	public Credencial(String principal, Set<String> authorities) {
		this.principal = principal;
		this.authorities = authorities;
	}

	public Set<String> getAuthorities() {
		return authorities;
	}
	
	public String getPrincipal() {
		return principal;
	}
	
}
