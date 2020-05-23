package com.devx.gerenciamento.operador;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class OperadorService {

	@PersistenceContext(unitName="app")
	private EntityManager entityManager;

	public Operador cadastrar(Operador operador) {
		entityManager.persist(operador);
		return operador;
	}

	public List<Operador> listar() {
		List<Operador> operadores = entityManager.createQuery("SELECT o FROM Operador o", Operador.class).getResultList();
		return operadores;
	}
}
