  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [WITH](javascript:call_link\('abapwith.htm'\)) →  [WITH, Examples](javascript:call_link\('abenwith_abexas.htm'\)) → 

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
                       FROM scarr USING ALL CLIENTS )
      SELECT \*
             FROM +cte
             WHERE mandt = @client
             INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the subquery of the [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") +cte, the addition USING ALL CLIENTS is used to access the client-dependent DDIC database table SCARR. This means data is read from all clients. The client column is part of the SELECT list.

The main query of the WITH statement reads the common table expressions. A restriction to one specific client is specified. The client column can be specified after WHERE since the result set of +cte is not client-dependent. The column MANDT is not used as a client column.