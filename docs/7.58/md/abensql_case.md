---
title: "Syntax Forms"
description: |
  Simple Case Distinction(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_simple_case.htm) 1. ... CASE sql_exp WHEN sql_exp1 THEN result1 WHEN sql_exp2 THEN result2 ... ELSE resultnsql_null END ... Complex Case Distinction(https://help.sap.com/doc/abapdoc
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_case.htm"
abapFile: "abensql_case.htm"
keywords: ["select", "do", "if", "case", "try", "data", "internal-table", "abensql"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20sql_case%2C%20ABENSQL_CASE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - sql\_case

Syntax Forms

[Simple Case Distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_simple_case.htm)

1\. ... CASE sql\_exp
           WHEN sql\_exp1 THEN result1
          *\[*WHEN sql\_exp2 THEN result2*\]*
           ...
          *\[*ELSE resultn*|*sql\_null*\]*
      END ...

[Complex Case Distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_searched_case.htm)

2\. ... CASE WHEN sql\_cond1 THEN result1
          *\[*WHEN sql\_cond2 THEN result2*\]*
          *\[*WHEN sql\_cond3 THEN result3*\]*
            ...
          *\[*ELSE resultn*|*sql\_null*\]*
      END ...

Effect

Case distinction in ABAP SQL. Either a [simple case distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_simple_case.htm) (simple case) or a [complex case distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_searched_case.htm) (searched case).

Hints

-   Specifying a case distinction always means specifying an [SQL expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm). Case distinctions can only be specified for operand positions in which SQL expressions are possible.
-   A conflict between SQL language element CASE and a column named CASE cannot occur because the ABAP Dictionary does not allow a column with this name to be created. However, if a column with this name does exist, it must be prefixed with the escape character [!](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennames_escaping.htm) when it is specified in an ABAP SQL statement.
-   A maximum of 10 case distinctions can be nested with CASE.
-   A case distinction can be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine.htm) for accessing the [table buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffer_glosry.htm "Glossary Entry") and internal tables with [FROM @itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_itab.htm).

Continue
[sql\_exp - sql\_simple\_case](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_simple_case.htm)
[sql\_exp - sql\_searched\_case](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_searched_case.htm)