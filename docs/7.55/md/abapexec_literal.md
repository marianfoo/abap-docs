  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennative_sql.htm) →  [Embedded Native SQL (EXEC SQL)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennativesql.htm) →  [EXEC SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec.htm) → 

EXEC SQL - Literals

Syntax

... *{* *\[*+*|*\-*\]*n*\[*n*\[*n*\[*...*\]**\]**\]*
    *|* 'c*\[*c*\[*c*\[*...*\]**\]**\]*' *|* \`*\[*c*\[*c*\[*c*\[*...*\]**\]**\]**\]*\` *}* ...

Effect

Appropriate [literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenliteral_glosry.htm "Glossary Entry") can be specified in ABAP syntax in suitable read positions in embedded [Native SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennative_sql_glosry.htm "Glossary Entry") statements.

The [literal operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenliteral_operator_glosry.htm "Glossary Entry") cannot be used in static Native SQL.

Example

Reads a row from the database table SPFLI using static Native SQL. The required row is specified using literals. The target range of the [INTO clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec_into.htm) is specified as a [host variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec_host.htm). If a row was found, sy-subrc is set to 0; if not, it is set to 4.

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