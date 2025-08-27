function abrirCurso(curso) {
            if (curso === "") return;

            let confirmar = confirm("Deseja realmente abrir informações sobre este curso?");
            
            if (confirmar) {
                let conteudo = "";

                switch(curso) {
                    case "ads":
                        conteudo = "<h2>Análise e Desenvolvimento de Sistemas</h2><p>Curso voltado para programação, bancos de dados, web e mobile.</p>";
                        break;
                    case "eletronica":
                        conteudo = "<h2>Eletrônica Automotiva</h2><p>Curso focado em sistemas eletrônicos aplicados a veículos automotores.</p>";
                        break;
                    case "fabrica":
                        conteudo = "<h2>Fabricação Mecânica</h2><p>Engenharia de processos de fabricação e usinagem avançada.</p>";
                        break;
                    case "gestao":
                        conteudo = "<h2>Gestão da Qualidade</h2><p>Curso sobre controle e melhoria contínua de processos produtivos.</p>";
                        break;
                    case "logistica":
                        conteudo = "<h2>Logística</h2><p>Curso focado em cadeia de suprimentos, transportes e armazenagem.</p>";
                        break;
                    case "mecatronica":
                        conteudo = "<h2>Mecatrônica Industrial</h2><p>Integração de mecânica, eletrônica e automação industrial.</p>";
                        break;
                    case "polimeros":
                        conteudo = "<h2>Polímeros</h2><p>Curso voltado para materiais plásticos e borrachas, processos e aplicações.</p>";
                        break;
                    case "producao":
                        conteudo = "<h2>Produção Industrial</h2><p>Gestão da produção e processos industriais.</p>";
                        break;
                    case "projetos":
                        conteudo = "<h2>Projetos Mecânicos</h2><p>Curso focado em desenho, modelagem e desenvolvimento de produtos mecânicos.</p>";
                        break;
                    case "sistemas":
                        conteudo = "<h2>Sistemas Biomédicos</h2><p>Curso que integra tecnologia e saúde, desenvolvendo equipamentos médicos.</p>";
                        break;
                }

                let novaJanela = window.open("", "Curso", "width=600,height=300");
                novaJanela.document.write("<html><head><title>Curso</title></head><body>" + conteudo + "</body></html>");
            }
        }