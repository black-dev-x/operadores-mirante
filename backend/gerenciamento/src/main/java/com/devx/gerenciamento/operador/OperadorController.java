package com.devx.gerenciamento.operador;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("operador")
public class OperadorController {

	@EJB
	OperadorService operadorManager;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Operador> listar() {
		return operadorManager.listar();
	}
	
	@POST	
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Operador cadastrar(Operador operador) {
		return operadorManager.cadastrar(operador);
	}
}
