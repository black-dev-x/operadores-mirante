package com.devx.gerenciamento.security;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.devx.gerenciamento.operador.Operador;

@Stateless
public class LoginService {

	@PersistenceContext(unitName = "app")
	private EntityManager entityManager;

	@EJB
	private TokenProvider tokenProvider;
	
	public String logar(InformacoesLogin informacoesLogin) {
		Operador operador = entityManager.createQuery("SELECT o FROM Operador o where o.login = :login", Operador.class)
				.setParameter("login", informacoesLogin.getUsername()).getSingleResult();
		boolean senhaEstaCorreta = operador.getSenha().equals(informacoesLogin.getPassword());
		if(!senhaEstaCorreta) throw new RuntimeException("Problemas para logar xD, senha errada");
		return tokenProvider.criarToken(operador);

	}
}
