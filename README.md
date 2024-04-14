# Projeto Rumo à Residência 


Link do Figma: https://www.figma.com/file/PTMS5POrIkIUHX3qZqlBDv/Untitled-(Copy)?type=design&node-id=0%3A1&mode=dev&t=CTBQn59ADyjspztp-1

Cores: 

:root {
	--cor01: #020202; /*preto (verde quase preto)*/
**	--cor02: #194D2E; /*Verde escuro*/** --> COR PRINCIPAL PARA ELEMENTOS 
	--cor03: #D2E59E; /*verde matcha claro*/
	--cor04: #CBD081; /*verde meleca*/ ---> COR DOS DETALHES 
	--cor05: #717744; /*verde militar*/
	--cor06: #F0F0F0; /*cinza bem clar*/
	--cor07: #3E3E40; /*cinza escuro*/

	--fontetexto: 'Montserrat', serif;

}

tutoriais que achei sobre login no google 

https://www.youtube.com/watch?v=c2b2yUNWFzI - How to Create Events in Google Calendar API using OAuth2.0. Os componentes tão desatualizados e não consigo definir o escopo. Parei no minuto 17 


https://www.youtube.com/watch?v=UUJfTsn6S_Y - Funcionou até certo ponto e foi o que fez funcionar até aqui, mas não ensina como linkar com o escopo da api do google calendar 

https://www.youtube.com/watch?v=tgcCl52EN84 - esse aqui usa esse Supabase que eu não sei pra quê serve e se é necessário 


Id do cliente 453808756354-8ell0stntoe33sl9manra8f6djcc8k5l.apps.googleusercontent.com

Chave secreta do cliente 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 

const handleLogin = async (credentialResponse) => {
    var obj = jwtDecode(credentialResponse.credential);
    var data = JSON.stringify(obj);
    console.log(data);

    const data = {your data to send to server};

    const config = {
      method: 'POST',
      url: 'your backend server or endpoint',
      headers: {},
      data: data
    }

  await axios(config)
}
onSuccess={handleLogin}
