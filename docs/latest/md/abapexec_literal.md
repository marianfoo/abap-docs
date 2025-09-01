  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql.htm) →  [Embedded Native SQL (EXEC SQL)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennativesql.htm) →  [EXEC SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXEC%20SQL%20-%20Literals%2C%20ABAPEXEC_LITERAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXEC SQL - Literals

Syntax

... *{* *\[*+*|*\-*\]*n*\[*n*\[*n*\[*...*\]**\]**\]*
    *|* 'c*\[*c*\[*c*\[*...*\]**\]**\]*' *|* \`*\[*c*\[*c*\[*c*\[*...*\]**\]**\]**\]*\` *}* ...

Effect

Appropriate [literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_literal_glosry.htm "Glossary Entry") can be specified in ABAP syntax at suitable read positions in embedded [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_glosry.htm "Glossary Entry") statements.

The [literal operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliteral_operator_glosry.htm "Glossary Entry") cannot be used in static Native SQL.

Hint

As it is common in ABAP, [trailing blanks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_trail_blanks.htm) are truncated in text field literals.

Example

Reading of a row from the database table SPFLI using static Native SQL. The required row is specified using literals. The target range of the [INTO clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexec_into.htm) is specified as a [host variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexec_host.htm). If a row was found, sy-subrc is set to 0, otherwise it is set to 4.

DATA: BEGIN OF wa,
        cityfrom TYPE spfli-cityfrom,
        cityto   TYPE spfli-cityto,
      END OF wa.
EXEC SQL.
  SELECT cityfrom, cityto
         INTO :wa
         FROM spfli
         WHERE mandt  = '100' AND
               carrid = 'LH'  AND connid = '0400'
ENDEXEC.