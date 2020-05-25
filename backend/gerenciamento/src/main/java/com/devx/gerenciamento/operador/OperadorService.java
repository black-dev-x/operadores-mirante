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
		validacaoDePerfil(operador);
		entityManager.persist(operador);
		return operador;
	}

	public List<Operador> listar() {
		List<Operador> operadores = entityManager.createQuery("SELECT o FROM Operador o", Operador.class).getResultList();
		return operadores;
	}

	public Operador editar(Operador operador) {
		Operador operadorSalvo = entityManager.find(Operador.class, operador.getId());
		operadorSalvo.setNome(operador.getNome());
		operadorSalvo.setSenha(operador.getSenha());
		operadorSalvo.setPerfil(operador.getPerfil());
		validacaoDePerfil(operador);
		entityManager.persist(operadorSalvo);
		return operadorSalvo;
	}

	public Operador deletar(int id) {
		Operador operadorSalvo = entityManager.find(Operador.class, id);
		validacaoDePerfil(operadorSalvo);
		entityManager.remove(operadorSalvo);
		return operadorSalvo;
	}
	
	private void validacaoDePerfil(Operador operador) {
		if(operador.getPerfil() == Perfil.ADMIN)
			throw new RuntimeException("Não é possível cadastrar, editar ou remover o usuário ADMIN, Solicite essa feature para o pessoal de TI!!!");
	}
}
