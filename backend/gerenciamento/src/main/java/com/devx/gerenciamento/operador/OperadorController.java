package com.devx.gerenciamento.operador;

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

import com.devx.gerenciamento.security.Secured;

@Path("operador")
public class OperadorController {

	@EJB
	private OperadorService operadorService;
	
	@Context
	private SecurityContext securityContext;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Secured
	public List<Operador> listar() {
		System.out.println(securityContext.getUserPrincipal().getName());
		System.out.println("*****************");
		return operadorService.listar();
	}
	
	@POST	
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Operador cadastrar(Operador operador) {
		return operadorService.cadastrar(operador);
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Operador editar(Operador operador) {
		return operadorService.editar(operador);
	}
	
	@DELETE
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Operador deletar(@PathParam("id") int id) {
		return operadorService.deletar(id);
	}	
}
