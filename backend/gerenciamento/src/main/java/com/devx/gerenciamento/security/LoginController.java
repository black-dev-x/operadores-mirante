package com.devx.gerenciamento.security;

import javax.ejb.EJB;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

@Path("login")
public class LoginController {

	@EJB
	private LoginService loginService;
	
	@POST
	public void login(Credentials credentials) {
		loginService.logar(credentials);
	}
}
