package com.devx.gerenciamento.security;

import javax.security.enterprise.credential.Credential;

import com.devx.gerenciamento.operador.Perfil;

public class Credencial implements Credential {

	private final String principal;
	private final Perfil permissao; 
	
	public Credencial(String principal, Perfil permissao) {
		this.principal = principal;
		this.permissao = permissao;
	}

	public Perfil getPermissao() {
		return permissao;
	}
	
	public String getPrincipal() {
		return principal;
	}
	
}
