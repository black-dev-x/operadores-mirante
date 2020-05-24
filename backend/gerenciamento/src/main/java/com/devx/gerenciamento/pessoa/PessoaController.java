package com.devx.gerenciamento.pessoa;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("pessoa")
public class PessoaController {

	@EJB
	private PessoaService pessoaService;

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Pessoa cadastrar(Pessoa pessoa) {
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
	public List<Telefone> telefonesDaPessoa(@PathParam("id") int idPessoa) {
		return pessoaService.listarTelefonesPeloIdDaPessoa(idPessoa);
	}
}
