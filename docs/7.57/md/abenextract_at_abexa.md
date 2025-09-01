  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Extracts](javascript:call_link\('abenabap_extracts_extended.htm'\)) →  [Examples of Extracts](javascript:call_link\('abenextract_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Extracts, Processing, ABENEXTRACT_AT_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

Extracts, Processing

This example demonstrates how extracts are processed.

Source Code   

REPORT demo\_extract\_at.
DATA: spfli\_wa   TYPE spfli,
      sflight\_wa TYPE sflight.
FIELD-GROUPS: header, flight\_info, flight\_date.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: spfli\_tab   LIKE TABLE OF spfli\_wa,
          sflight\_tab LIKE TABLE OF sflight\_wa.
    INSERT: spfli\_wa-carrid spfli\_wa-connid sflight\_wa-fldate
              INTO header,
            spfli\_wa-cityfrom spfli\_wa-cityto
              INTO flight\_info.
    SELECT \*
           FROM spfli
           ORDER BY carrid, connid
           INTO TABLE @spfli\_tab.
    SELECT \*
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO TABLE @sflight\_tab.
    LOOP AT spfli\_tab INTO spfli\_wa.
      sflight\_wa-fldate = '--------'.
      EXTRACT flight\_info.
      LOOP AT sflight\_tab  INTO sflight\_wa  TO 100
              WHERE carrid = spfli\_wa-carrid AND
                    connid = spfli\_wa-connid.
        EXTRACT flight\_date.
      ENDLOOP.
    ENDLOOP.
    SORT STABLE.
    LOOP.
      AT FIRST.
        FINAL(out) = cl\_demo\_output=>new(
          )->begin\_section( \`Flight list\`
          )->begin\_section( \`--------------------\` ).
      ENDAT.
      AT flight\_info WITH flight\_date.
        out->next\_section( |{ spfli\_wa-carrid   } {
                              spfli\_wa-connid   } {
                              spfli\_wa-cityfrom } {
                              spfli\_wa-cityto   }| ).
      ENDAT.
      AT flight\_date.
        out->write( |{ spfli\_wa-carrid   } {
                       spfli\_wa-connid   } {
                       sflight\_wa-fldate }| ).
      ENDAT.
      AT LAST.
        out->line( )->write( |{ cnt(spfli\_wa-carrid) } Airlines| ).
      ENDAT.
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example continues the example given under [EXTRACT](javascript:call_link\('abapextract.htm'\)). After the extract dataset is filled, it is sorted by field group header and, afterwards, group level processing is executed in a LOOP. Here, structured output is created.