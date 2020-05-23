package com.devx.gerenciamento.security;

import javax.ejb.EJB;
import javax.ws.rs.Path;

@Path("operador")
public class LoginController {

	@EJB
	private LoginService loginService;
	
	public void login(Credentials credentials) {
		loginService.logar(credentials);
	}
}
