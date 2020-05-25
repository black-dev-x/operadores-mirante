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

	public Pessoa informacoesPessoa(int idPessoa) {
		Pessoa pessoaSalva = entityManager.find(Pessoa.class, idPessoa);
		return pessoaSalva;
	}

	public List<Telefone> informacoesTelefone(int idPessoa) {
		return entityManager.createQuery("Select t FROM Telefone t JOIN t.pessoa p WHERE p.id = :id", Telefone.class)
				.setParameter("id", idPessoa).getResultList();
	}

	public Telefone salvarTelefone(Telefone telefone) {
		entityManager.persist(telefone);
		return telefone;
	}

}
