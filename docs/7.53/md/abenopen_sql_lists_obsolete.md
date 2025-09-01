---
title: "Blank-Separated Lists"
description: |
  The following lists of an ABAP SQL statement can still be specified with blanks as separators instead of commas, unless one of the strict modes(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) of the syntax check applies from Release 7.40, SP05. -   In the s
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_lists_obsolete.htm"
abapFile: "abenopen_sql_lists_obsolete.htm"
keywords: ["select", "update", "do", "if", "data", "abenopen", "sql", "lists", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Syntax Forms in ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_syntax_obsolete.htm) → 

Blank-Separated Lists

The following lists of an ABAP SQL statement can still be specified with blanks as separators instead of commas, unless one of the [strict modes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) of the syntax check applies from Release 7.40, SP05.

-   In the statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm).

-   When columns or aggregation functions are specified in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm).
    ... *{*[col\_spec1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_clause_col_spec.htm) *\[*AS a1*\]* [col\_spec2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_clause_col_spec.htm) *\[*AS a2*\]* ... *}*

-   When columns are specified after [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm)
    ... GROUP BY col1 col2 ...

-   When columns are specified after [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm)
    ... ORDER BY *{*col1*|*a1*}* *\[*ASCENDING*|*DESCENDING*\]*
                 *{*col2*|*a2*}* *\[*ASCENDING*|*DESCENDING*\]*
                 ...

-   In the statement [UPDATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate.htm):

-   When change expressions are specified after [SET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_source.htm)
    ... SET [set\_expression1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_set_expression.htm) [set\_expression2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_set_expression.htm) ...

These formats are obsolete. Lists should always be separated by commas.

Example

SELECT statement with comma-separated lists.

SELECT carrid connid
       FROM spfli
       INTO (carrid, connid)
       WHERE carrid = carrid AND
             connid = connid
       ORDER BY carrid connid.

Recommended format with comma-separated lists, which force the use of the escape character @ before [host variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm).

SELECT carrid, connid
       FROM spfli
       WHERE carrid = @carrid AND
             connid = @connid
       ORDER BY carrid, connid
       INTO (@carrid, @connid).