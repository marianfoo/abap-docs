  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [Embedded Native SQL (EXEC SQL)](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL](javascript:call_link\('abapexec.htm'\)) → 

EXEC SQL - Literals

Syntax

... *{* *\[*+*|*\-*\]*n*\[*n*\[*n*\[*...*\]**\]**\]*
    *|* 'c*\[*c*\[*c*\[*...*\]**\]**\]*' *|* \`*\[*c*\[*c*\[*c*\[*...*\]**\]**\]**\]*\` *}* ...

Effect

Appropriate [literals](javascript:call_link\('abenliteral_glosry.htm'\) "Glossary Entry") can be specified in ABAP syntax in suitable read positions in embedded [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements.

The [literal operator](javascript:call_link\('abenliteral_operator_glosry.htm'\) "Glossary Entry") cannot be used in static Native SQL.

Example

Reads a row from the database table SPFLI using static Native SQL. The required row is specified using literals. The target range of the [INTO clause](javascript:call_link\('abapexec_into.htm'\)) is specified as a [host variable](javascript:call_link\('abapexec_host.htm'\)). If a row was found, sy-subrc is set to 0; if not, it is set to 4.

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