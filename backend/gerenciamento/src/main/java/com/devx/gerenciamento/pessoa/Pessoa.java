package com.devx.gerenciamento.pessoa;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Pessoa {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@NotNull(message = "O nome deve ser informado")
	@Size(max=100, message="Tamanho máximo do nome é de 100 caracteres")
	@Pattern(regexp = "[^0-9]*", message = "Não pode conter numeros no nome")
	private String nome;

	@NotNull(message = "O Documento deve ser informado")
	private String documento;

	@Past
	private Date dataDeNascimento;

	@Pattern(regexp = "[^0-9]*", message = "Não pode conter numeros no nome")
	@Size(max=100, message="Tamanho máximo do nome da mãe é de 100 caracteres")
	private String nomeDaMae;

	@Pattern(regexp = "[^0-9]*", message = "Não pode conter numeros no nome")
	@Size(max=100, message="Tamanho máximo do nome do pai é de 100 caracteres")
	private String nomeDoPai;

	@CreationTimestamp
	private Date dataDeCadastro;

	private String loginDoOperador;

	@NotNull(message = "Por favor, informa o tipo de pessoa, FISICA ou JURIDICA")
	private TipoPessoa tipoPessoa;

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

	public String getDocumento() {
		return documento;
	}

	public void setDocumento(String documento) {
		this.documento = documento;
	}

	public Date getDataDeNascimento() {
		return dataDeNascimento;
	}

	public void setDataDeNascimento(Date dataDeNascimento) {
		this.dataDeNascimento = dataDeNascimento;
	}

	public String getNomeDaMae() {
		return nomeDaMae;
	}

	public String getNomeDoPai() {
		return nomeDoPai;
	}

	public void setNomeDoPai(String nomeDoPai) {
		this.nomeDoPai = nomeDoPai;
	}

	public void setNomeDaMae(String nomeDaMae) {
		this.nomeDaMae = nomeDaMae;
	}

	public Date getDataDeCadastro() {
		return dataDeCadastro;
	}

	public void setDataDeCadastro(Date dataDeCadastro) {
		this.dataDeCadastro = dataDeCadastro;
	}

	public String getLoginDoOperador() {
		return loginDoOperador;
	}

	public void setLoginDoOperador(String loginDoOperador) {
		this.loginDoOperador = loginDoOperador;
	}

	public TipoPessoa getTipoPessoa() {
		return tipoPessoa;
	}

	public void setTipoPessoa(TipoPessoa tipoPessoa) {
		this.tipoPessoa = tipoPessoa;
	}

}
