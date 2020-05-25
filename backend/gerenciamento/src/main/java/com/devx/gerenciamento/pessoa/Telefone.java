package com.devx.gerenciamento.pessoa;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Telefone {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@NotNull(message = "O DDD deve ser informado")
	@Size(min=3, max=3, message="O tamanho do DDD é de 3 caracteres")
	@Pattern(regexp = "[0-9]*", message = "O DDD deve conter apenas números")
	private String ddd;

	@ManyToOne
	private Pessoa pessoa;

	@NotNull(message = "O numero de telefone deve ser informado")
	@Size(min = 8, max = 10, message="O numero de telefone deve estar entre 8 e 10 caracteres")
	@Pattern(regexp = "[0-9]*", message = "O numero de telefone deve conter apenas números")
	private String numero;

	@NotNull(message = "O tipo de telefone deve ser informado (CELULAR, FIXO, COMERCIAL)")
	private TipoTelefone tipoTelefone;

	@CreationTimestamp
	private Date dataCadastro;

	private String loginDoOperador;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDdd() {
		return ddd;
	}

	public void setDdd(String ddd) {
		this.ddd = ddd;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public TipoTelefone getTipoTelefone() {
		return tipoTelefone;
	}

	public void setTipoTelefone(TipoTelefone tipoTelefone) {
		this.tipoTelefone = tipoTelefone;
	}

	public Date getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	public String getLoginDoOperador() {
		return loginDoOperador;
	}

	public void setLoginDoOperador(String loginDoOperador) {
		this.loginDoOperador = loginDoOperador;
	}

	public Pessoa getPessoa() {
		return pessoa;
	}

	public void setPessoa(Pessoa pessoa) {
		this.pessoa = pessoa;
	}

}
