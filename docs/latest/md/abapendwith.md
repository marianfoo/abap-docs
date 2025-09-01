  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [WITH](javascript:call_link\('abapwith.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ENDWITH%2C%20ABAPENDWITH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ENDWITH

[Short Reference](javascript:call_link\('abapwith_shortref.htm'\))

Syntax

ENDWITH.

Effect

The [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement ENDWITH closes a loop started using [WITH](javascript:call_link\('abapwith.htm'\)).

Example

The example shows a WITH statement, whose main query creates a tabular result set. Since the data is written into work area wa rather than to an internal table, a SELECT loop is opened, which must be closed with ENDWITH.

WITH
  +carriers AS ( SELECT FROM scarr
                        FIELDS carrid, carrname )
  SELECT FROM spfli AS s
           INNER JOIN +carriers AS c
             ON s~carrid = c~carrid
         FIELDS c~carrname, s~connid
         WHERE s~carrid = 'UA'
         INTO @FINAL(wa)
         UP TO 10 ROWS.
  cl\_demo\_output=>write( wa ).
ENDWITH.
cl\_demo\_output=>display( ).