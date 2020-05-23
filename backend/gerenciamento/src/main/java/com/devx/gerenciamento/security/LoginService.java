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
		entityManager.createQuery("SELECT o FROM Operador o where o.login = :login", Operador.class)
				.setParameter("login", credentials.getUsername()).getSingleResult();

	}
}
