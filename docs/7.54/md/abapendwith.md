  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [WITH](javascript:call_link\('abapwith.htm'\)) → 

ENDWITH

[Quick Reference](javascript:call_link\('abapwith_shortref.htm'\))

Syntax

ENDWITH.

Effect

The [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement ENDWITH closes a loop started using [WITH](javascript:call_link\('abapwith.htm'\)).

Example

The example shows a WITH statement, whose main query creates a tabular result set. As the data is written into work area wa rather than to an internal table, a SELECT loop is opened, which must be closed with ENDWITH.

WITH
  +carriers AS ( SELECT FROM scarr
                        FIELDS carrid, carrname )
  SELECT FROM spfli AS s
           INNER JOIN +carriers AS c
             ON s~carrid = c~carrid
         FIELDS c~carrname, s~connid
         WHERE s~carrid = 'UA'
         INTO @DATA(wa)
         UP TO 10 ROWS.
  cl\_demo\_output=>write( wa ).
ENDWITH.
cl\_demo\_output=>display( ).