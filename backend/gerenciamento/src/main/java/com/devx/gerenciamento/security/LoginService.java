package com.devx.gerenciamento.security;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.devx.gerenciamento.operador.Operador;

@Stateless
public class LoginService {

	@PersistenceContext(unitName = "app")
	private EntityManager entityManager;

	public void logar(Credentials credentials) {
		Operador operador = entityManager.createQuery("SELECT o FROM Operador o where o.login = :login", Operador.class)
				.setParameter("login", credentials.getUsername()).getSingleResult();
		boolean senhaEstaCorreta = operador.getSenha().equals(credentials.getPassword());
		if(!senhaEstaCorreta) throw new RuntimeException("Problemas para logar xD, senha errada");

	}
}
