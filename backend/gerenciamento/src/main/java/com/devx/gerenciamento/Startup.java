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
			Operador admin = new Operador();
			admin.setPerfil(Perfil.ADMIN);
			admin.setNome("admin");
			admin.setSenha("admin");
			admin.setLogin("admin");
			entityManager.persist(admin); 	
			
			Operador analista = new Operador();
			analista.setPerfil(Perfil.ANALISTA);
			analista.setNome("analista");
			analista.setSenha("analista");
			analista.setLogin("analista");
			entityManager.persist(analista); 
			
			Operador gerente = new Operador();
			gerente.setPerfil(Perfil.GERENTE);
			gerente.setNome("gerente");
			gerente.setSenha("gerente");
			gerente.setLogin("gerente");
			entityManager.persist(gerente); 
		}
	}
}
