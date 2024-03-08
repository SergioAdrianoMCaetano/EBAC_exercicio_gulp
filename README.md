# EBAC Exercícios com Gulp

###Automatizando a Otimização do Projeto com Gulp

Em um mundo de desenvolvimento web, onde a eficiência e a qualidade são essenciais, surge um herói chamado Gulp. Ele é um mestre das tarefas automatizadas, capaz de otimizar nossos projetos com uma única linha de comando.Nossa história começa com um grupo de arquivos desorganizados: estilos em SCSS, imagens não otimizadas e código JavaScript bagunçado. Os desenvolvedores, cansados de repetir tarefas manuais, invocam o Gulp para ajudá-los.Primeiro, o Gulp convoca o Sass, um habilidoso alquimista que transforma arquivos SCSS em CSS. Ele adiciona uma pitada de source maps para facilitar a depuração e, em seguida, comprime o resultado. Os estilos são organizados e salvos na pasta ./build/style.Em seguida, entra em cena o Mestre das Imagens, também conhecido como imagemin. Ele examina cada imagem, remove excesso de peso e as comprime até que fiquem leves como uma pluma. As imagens otimizadas são armazenadas na pasta ./build/images.Por fim, o Feiticeiro do JavaScript, o uglify, entra em ação. Ele minifica e ofusca o código JavaScript, tornando-o quase indecifrável para olhos curiosos. O código resultante é salvo na pasta ./build/scripts.Com todas as tarefas concluídas, o Gulp reúne os heróis em uma única tarefa épica. Ele os encadeia em uma sequência perfeita: primeiro compila o SASS, depois comprime as imagens e, por fim, otimiza o JavaScript. O projeto está pronto para brilhar!E assim, nossos desenvolvedores continuam sua jornada, confiantes de que o Gulp sempre estará lá para automatizar suas tarefas e tornar o mundo web um lugar melhor. 🚀🔧

1. Importação de Módulos:   - O código começa importando os módulos necessários do Gulp e outras ferramentas:     - gulp: O módulo principal do Gulp.     - sass: O plugin para compilar arquivos SCSS em CSS.     - sourcemaps: O plugin para gerar source maps.     - uglify: O plugin para minificar arquivos JavaScript.     - obfuscate: O plugin para ofuscar o código JavaScript (tornando-o mais difícil de entender).     - imagemin: O plugin para otimizar imagens.

   ​

2. Tarefas Definidas:   - Três tarefas são definidas:     - comprimeImagens: Comprime imagens na pasta ./source/images/ e as salva na pasta ./build/images/.     - comprimeJavaScript: Comprime e ofusca arquivos JavaScript na pasta ./source/scripts/, salvando-os na pasta ./build/scripts/.     - compilarSass: Compila o arquivo main.scss em CSS, com suporte a source maps, e salva o resultado na pasta ./build/style/.

   ​

3. Tarefa Padrão:   - A tarefa padrão é definida como uma função anônima.   - Ela observa mudanças nos arquivos SCSS, JavaScript e imagens, executando as tarefas correspondentes quando ocorrem alterações.