  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [WITH](javascript:call_link\('abapwith.htm'\)) →  [WITH Examples](javascript:call_link\('abenwith_abexas.htm'\)) → 

WITH, Client Handling

This example demonstrates client handling in the statement [WITH](javascript:call_link\('abapwith.htm'\)).

Source Code

REPORT demo\_cte\_client\_handling.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA client TYPE scarr-mandt.
    cl\_demo\_input=>request( CHANGING field = client ).
    WITH
      +cte AS ( SELECT mandt, carrid, carrname
                       FROM scarr CLIENT SPECIFIED )
      SELECT \*
             FROM +cte
             WHERE mandt = @client
             INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the subquery of the [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") +cte, the addition CLIENT SPECIFIED is used to access client-dependent database table SCARR. This means data is read from all clients. The client column is part of the SELECT list.

The main query of the WITH statement reads the common table expressions. A restriction to one specific client is specified. The addition CLIENT SPECIFIED must not be specified - and is not permitted to be specified - because the results set +cte is not client-specific. The column MANDT is not used as a client column.