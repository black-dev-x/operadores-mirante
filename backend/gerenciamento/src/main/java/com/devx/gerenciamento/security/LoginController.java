package com.devx.gerenciamento.security;

import javax.ejb.EJB;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("login")
public class LoginController {

	@EJB
	private LoginService loginService;
	
	@POST
	public Response login(InformacoesLogin informacoesLogin) {
		try {
			String token =  loginService.logar(informacoesLogin); 
			return Response.ok(token).build();
		} catch(RuntimeException e) {
			return Response.status(Response.Status.FORBIDDEN).build();
		}
	}
}
