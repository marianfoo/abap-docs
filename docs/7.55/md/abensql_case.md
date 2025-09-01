  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) → 

sql\_exp - sql\_case

Syntax Forms

[Simple case distinction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_simple_case.htm)
1\. ... CASE sql\_exp
           WHEN sql\_exp1 THEN result1
          *\[*WHEN sql\_exp2 THEN result2*\]*
           ...
          *\[*ELSE resultn*\]*
      END ...
[Complex case distinction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_searched_case.htm)
2\. ... CASE WHEN sql\_cond1 THEN result1
          *\[*WHEN sql\_cond2 THEN result2*\]*
          *\[*WHEN sql\_cond3 THEN result3*\]*
            ...
          *\[*ELSE resultn*\]*
      END ...

Effect

Case distinction in ABAP SQL. Either a [simple case distinction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_simple_case.htm) (simple case) or a [complex case distinction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_searched_case.htm) (searched case).

Hints

-   Specifying a case distinction always means specifying an [SQL expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm). Case distinctions can only be specified for operand positions in which SQL expressions are possible.

-   A conflict between SQL language element CASE and a column named CASE cannot occur because the ABAP Dictionary does not allow a column with this name to be created. However, if a column with this name does exist, it must be prefixed with the escape character [!](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennames_escaping.htm) when it is specified in an ABAP SQL statements.

-   A maximum of 10 case distinctions can be nested with CASE.

-   A case distinction can be evaluated in the [table buffer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffer_glosry.htm "Glossary Entry") and does not cause [table buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffering_glosry.htm "Glossary Entry") to be bypassed.

Continue
[sql\_exp - sql\_simple\_case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_simple_case.htm)
[sql\_exp - sql\_searched\_case](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_searched_case.htm)