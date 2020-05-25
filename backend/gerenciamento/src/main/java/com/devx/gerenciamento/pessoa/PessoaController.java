package com.devx.gerenciamento.pessoa;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;

import com.devx.gerenciamento.operador.Perfil;
import com.devx.gerenciamento.security.Secured;

@Path("pessoa")
public class PessoaController {

	@EJB
	private PessoaService pessoaService;

	@Context
	private SecurityContext securityContext;
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Secured(Perfil.GERENTE)
	public Pessoa cadastrar(Pessoa pessoa) {
		String loginDoOperador = securityContext.getUserPrincipal().getName();
		pessoa.setLoginDoOperador(loginDoOperador);
		return pessoaService.cadastrar(pessoa);
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Pessoa> listar() {
		return pessoaService.listar();
	}

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Pessoa informacoesPessoa(@PathParam("id") int idPessoa) {
		return pessoaService.informacoesPessoa(idPessoa);
	}
	
	@GET
	@Path("telefones/{id}")
	public List<Telefone> informacoesTelefone(@PathParam("id") int idPessoa){
		return pessoaService.informacoesTelefone(idPessoa);
	}
	
	@DELETE
	@Path("telefones/{id}")
	public Telefone deletarTelefone(@PathParam("id") int idTelefone){
		return pessoaService.deletarTelefone(idTelefone);
	}
	
	@POST
	@Path("telefones")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Secured(Perfil.GERENTE)
	public Telefone salvarTelefone(Telefone telefone) {
		String loginOperador = securityContext.getUserPrincipal().getName();
		telefone.setLoginDoOperador(loginOperador);
		return pessoaService.salvarTelefone(telefone);
	}
	
	@DELETE
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Pessoa deletarPessoa(@PathParam("id") int idPessoa) {
		return pessoaService.deletarPessoa(idPessoa);
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Pessoa editarPessoa(Pessoa pessoa) {
		return pessoaService.editarPessoa(pessoa);
	}
}
