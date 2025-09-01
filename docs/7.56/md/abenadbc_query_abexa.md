  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ABAP Database Connectivity (ADBC)](javascript:call_link\('abenadbc.htm'\)) →  [ADBC - Examples](javascript:call_link\('abenadbc_abexas.htm'\)) → 

ADBC - Query

This example demonstrates the execution of a [query](javascript:call_link\('abenadbc_query.htm'\)) with ADBC.

Source Code

REPORT demo\_adbc\_query.
"This program uses platform dependent Native SQL.
"It may not work for every database system.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: BEGIN OF result\_line,
                  carrid TYPE sflight-carrid,
                  connid TYPE sflight-connid,
                  fldate TYPE sflight-fldate,
                END OF result\_line,
                result\_tab LIKE TABLE OF result\_line.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(carrid) = CONV sflight-carrid( 'LH' ).
    DATA cols TYPE adbc\_column\_tab.
    cols = VALUE #( ( CONV adbc\_name( 'CARRID' ) )
                    ( CONV adbc\_name( 'CONNID' ) )
                    ( CONV adbc\_name( 'FLDATE' ) ) ).
    cl\_demo\_input=>request( CHANGING field = carrid ).
    TRY.
        DATA(result) = NEW cl\_sql\_statement( )->execute\_query(
         \`SELECT CARRID, CONNID, FLDATE \` &&
         \`FROM SFLIGHT \` &&
         \`WHERE MANDT  = \` && \`'\` && sy-mandt && \`' AND\` &&
         \`      CARRID = \` &&  cl\_abap\_dyn\_prg=>quote(
                                 to\_upper( carrid ) ) ).
        result->set\_param\_table( itab\_ref = REF #( result\_tab )
                                 corresponding\_fields = cols ).
        IF result->next\_package( ) > 0.
          SORT result\_tab BY carrid connid fldate.
          cl\_demo\_output=>display( result\_tab ).
        ENDIF.
      CATCH cx\_sql\_exception INTO DATA(err).
        cl\_demo\_output=>display(  err->get\_text( ) ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The method EXECUTE\_QUERY from the class CL\_SQL\_STATEMENT is used to read three columns of the database table SFLIGHT for the current client. An appropriate internal table is bound to the result set using the method SET\_PARAM\_TABLE of the class CL\_SQL\_RESULT\_SET. Using the method NEXT\_PACKAGE, all the rows of the result set are transported to the internal table.

Quotation marks are escaped in the user input to prevent [SQL injections](javascript:call_link\('abensql_injection_glosry.htm'\) "Glossary Entry").