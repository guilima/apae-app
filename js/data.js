var codropsEvents = {
	'09-21-2014' : '<a href="http://www.apaesp.org.br" target="_blank">Dia da APAE</a>',
	'11-13-2013' : '<span>Ashura [An example of an complete date event (11-13-2013)]</span>',
	'11-11-2013' : '<a href="http://www.wincalendar.com/Remembrance-Day">Remembrance Day (Canada)</a>',
	'11-04-2013' : '<span>Islamic New Year</span>',
	'11-03-2013' : '<a href="http://www.wincalendar.com/Daylight-Saving-Time-Ends">Daylight Saving Time Ends</a>',
	'11-01-2013' : '<span>All Saints Day</span>',
	'12-25-YYYY' : '<span>Natal</span>',
	'01-01-YYYY' : '<span>Ano Novo</span>',
	'MM-02-2013' : '<span>Yeah, Monthly [MM-02-2013]</span>',
	'MM-07-YYYY' : '<span>Encontro de pais - atividade mensal</span>',
	'11-DD-2014' : {content : '<span>Festival Sênior</span>', end : 20},
	'02-DD-2014' : {content : '<span>Feira da Troca</span>', start : 10, end : 20},
	//'12-DD-YYYY' : '<span>[12-DD-YYYY] Whole month and Year</span>',
	'TODAY' : '<span>Hoje</span>'
};

 $(function() {
      
        var cal = $( '#calendar' ).calendario( {
          weeks : [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
          weekabbrs : [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ],
          months : [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubbro', 'Novembro', 'Dezembro' ],
          monthabbrs : [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
            onDayClick : function( $el, $contentEl, dateProperties ) {

              for( var key in dateProperties ) {
                console.log( key + ' = ' + dateProperties[ key ] );
              }

            },
            caldata : codropsEvents
          } ),
          $month = $( '#custom-month' ).html( cal.getMonthName() ),
          $year = $( '#custom-year' ).html( cal.getYear() );

        $( '#custom-next' ).on( 'click', function() {
          cal.gotoNextMonth( updateMonthYear );
        } );
        $( '#custom-prev' ).on( 'click', function() {
          cal.gotoPreviousMonth( updateMonthYear );
        } );
        $( '#custom-current' ).on( 'click', function() {
          cal.gotoNow( updateMonthYear );
        } );

        function updateMonthYear() {        
          $month.html( cal.getMonthName() );
          $year.html( cal.getYear() );
        }
      
      });
