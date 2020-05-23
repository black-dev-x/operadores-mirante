package com.devx.gerenciamento.operador;

import javax.ejb.Stateless;

@Stateless
public class OperadorManager {

	static {
		System.out.println("********************");
	}

	public String getHelloWorld() {
		return "Hello World";
	}
}
