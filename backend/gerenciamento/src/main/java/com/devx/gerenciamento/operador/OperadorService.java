package com.devx.gerenciamento.operador;

import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("")
public class OperadorService {

	@EJB
	OperadorManager operadorManager;

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String helloWorld() {
		return operadorManager.getHelloWorld();
	}
}
