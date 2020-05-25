package com.devx.gerenciamento.security;

import com.devx.gerenciamento.operador.Perfil;

public class UsuarioLogado {

	private String jwt;
	private String username;
	private Perfil perfil;

	public String getJwt() {
		return jwt;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Perfil getPerfil() {
		return perfil;
	}

	public void setPerfil(Perfil perfil) {
		this.perfil = perfil;
	}

}
