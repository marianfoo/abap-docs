  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ENDWITH, ABAPENDWITH, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for imp
rovement:)

ENDWITH

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith_shortref.htm)

Syntax

ENDWITH.

Effect

The [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement ENDWITH closes a loop started using [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm).

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