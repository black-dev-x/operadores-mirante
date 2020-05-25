package com.devx.gerenciamento.pessoa;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class PessoaService {

	@PersistenceContext(unitName = "app")
	private EntityManager entityManager;

	public Pessoa cadastrar(Pessoa pessoa) {
		entityManager.persist(pessoa);
		return pessoa;
	}

	public List<Pessoa> listar() {
		return entityManager.createQuery("SELECT p FROM Pessoa p", Pessoa.class).getResultList();
	}

	public List<Telefone> listarTelefonesPeloIdDaPessoa(int idPessoa) {
		List<Telefone> telefones = entityManager
				.createQuery("SELECT t FROM Telefone t ", Telefone.class)
				.getResultList(); 
		return telefones;
	}

	public Pessoa deletarPessoa(int idPessoa) {
		Pessoa pessoa = entityManager.find(Pessoa.class, idPessoa);
		entityManager.remove(pessoa);
		return pessoa;
	}

	public Pessoa editarPessoa(Pessoa pessoa) {
		Pessoa pessoaSalva = entityManager.find(Pessoa.class, pessoa.getId());
		pessoaSalva.setDataDeNascimento(pessoa.getDataDeNascimento());
		pessoaSalva.setNome(pessoa.getNome());
		pessoaSalva.setNomeDaMae(pessoa.getNomeDaMae());
		pessoaSalva.setNomeDoPai(pessoa.getNomeDoPai());
		entityManager.persist(pessoaSalva);
		return pessoaSalva;
	}

}
