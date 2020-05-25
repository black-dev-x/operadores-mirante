package com.devx.gerenciamento.security;

import java.util.Date;
import java.util.concurrent.TimeUnit;

import javax.ejb.Stateless;

import com.devx.gerenciamento.operador.Operador;
import com.devx.gerenciamento.operador.Perfil;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;

@Stateless
public class TokenProvider {

	private static final String CHAVE_SECRETA = "chave 'super' secreta";
	private static final long VALIDADE_10_HORAS = TimeUnit.HOURS.toMillis(10); 

	public Credencial getCredencial(String token) {
		Claims claims = Jwts.parser().setSigningKey(CHAVE_SECRETA).parseClaimsJws(token).getBody();
		return new Credencial(claims.getSubject(), Perfil.valueOf(claims.get("auth").toString())); 
	}
	
	public boolean validarToken(String token) {
		try {
			Jwts.parser().setSigningKey(CHAVE_SECRETA).parseClaimsJws(token);
			return true;
		} catch(SignatureException e) {
			throw new RuntimeException("token invalido");
		}
	}

	public String criarToken(Operador operador) {
		Date validade = new Date(new Date().getTime() + VALIDADE_10_HORAS);
		return Jwts.builder().claim("auth", operador.getPerfil()).setSubject(operador.getLogin())
				.signWith(SignatureAlgorithm.HS512, CHAVE_SECRETA).setExpiration(validade).compact();
		
	}
}
