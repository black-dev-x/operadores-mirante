package com.devx.gerenciamento.operador;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Operador {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@NotNull(message = "O nome deve ser informado")
	@Size(max=100, message="Tamanho máximo do nome é de 100 caracteres")
	@Pattern(regexp = "[^0-9]*", message = "Não pode conter numeros no nome")
	private String nome;

	@NotNull(message = "O login deve ser informado")
	@Size(max=15, message="O nome deve ter no máximo 15 caracteres")
	@Pattern(regexp = "[a-zA-Z-_]*", message = "O login deve conter somente letras, - ou _")
	@Column(unique = true)
	private String login;

	@NotNull(message = "A senha deve ser informada")
	@Size(min=6, max=15, message="A senha deve estar entre 6 e 15 caracteres")
	@Pattern(regexp = "[^ ]*", message="A senha não deve conter espaços em branco")
	private String senha;

	@NotNull(message = "O perfil deve ser informado (ANALISTA OU GERENTE)")
	private Perfil perfil;

	@CreationTimestamp
	private Date dataDeCadastro;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Perfil getPerfil() {
		return perfil;
	}

	public void setPerfil(Perfil perfil) {
		this.perfil = perfil;
	}

	public Date getDataDeCadastro() {
		return dataDeCadastro;
	}

	public void setDataDeCadastro(Date dataDeCadastro) {
		this.dataDeCadastro = dataDeCadastro;
	}

}
