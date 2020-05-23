package com.devx.gerenciamento;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.devx.gerenciamento.operador.Operador;
import com.devx.gerenciamento.operador.Perfil;

@Singleton
@javax.ejb.Startup
public class Startup {

	@PersistenceContext(unitName="app")
	private EntityManager entityManager;
	
	@PostConstruct
	public void init() {
		Query adminQuery = entityManager.createQuery("SELECT o FROM Operador o WHERE o.perfil = :perfil").setParameter("perfil", Perfil.ADMIN);
		boolean naoPossuiAdmin = adminQuery.getFirstResult() == 0;
		if(naoPossuiAdmin) {
			Operador operador = new Operador();
			operador.setPerfil(Perfil.ADMIN);
			operador.setNome("admin");
			operador.setSenha("admin");
			operador.setLogin("admin");
			entityManager.persist(operador); 			
		}
	}
}
