---
title: "Syntax"
description: |
  ... operand1 operator operand2  ALLANYSOME(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_all_any_some.htm) ( SELECT subquery_clauses(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_subquery.htm) ) ... Eff
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_compare.htm"
abapFile: "abenwhere_logexp_compare.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abenwhere", "logexp", "compare"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm) → 

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cond_shortref.htm)

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20Comparison%20Operators%2C%20ABENWHERE_LOGEXP_COMPARE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_cond - Comparison Operators

Syntax

... operand1 operator operand2
                    *|* *{*[*\[*ALL*|*ANY*|*SOME*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_all_any_some.htm) ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_subquery.htm) )*}* ...

Effect

This relational expression compares the content of the operand operand1 in accordance with the comparison operator operator with the content of the operand operand2 or with the result of a [scalar subquery](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_all_any_some.htm).

-   The following can be specified for operand1 on the left side:
    -   Any [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm).
    -   [Aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) in a [HAVING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphaving_clause.htm) clause.
-   The following can be specified for operand2 on the right side:
    -   Any elementary [SQL operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_operands.htm).
        
        Here, a column [col](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_columns.htm) must be specified as [data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm)~comp, or tabalias~comp using the [column selector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") and it must be possible to [compare](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_compare_types.htm) the data types of the left side and right side.
        The content of an ABAP object, that is, an [untyped literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_untyped_literals.htm), a [host variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_variables.htm), or a [host expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_expressions.htm) must match the data type of operand1 in accordance with the rules for [lossless assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"). This is checked by the [strict modes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strict_modes.htm) of the syntax check from ABAP release 7.40, SP08 and can raise an exception.
        
    -   Built-in [SQL functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_builtin_functions.htm) and [cast expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cast.htm).
    -   [Aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) in a [HAVING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphaving_clause.htm) clause.

The following table shows the possible comparison operators:

operator

Meaning

\=, EQ

True if the content of operand1 is equal to the content of operand2.

<>, NE

True if the content of operand1 is not equal to the content of operand2.

<, LT

True if the content of operand1 is less than the content of operand2.

\>, GT

True if the content of operand1 is greater than the content of operand2.

<=, LE

True if the content of operand1 is less than or equal to the content of operand2.

\>=, GE

True if the content of operand1 is greater than or equal to the content of operand2.

The following should be noted when using these operators:

-   If operand2 is an [untyped literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_untyped_literals.htm), a [host variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_variables.htm), or a [host expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_expressions.htm), the value is converted, if necessary, to the data type that matches the type of the operand operand1 in accordance with the [ABAP conversion rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm) and the [tables of built-in types in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) before the statement is passed to the database.
-   Comparisons between columns or between SQL expressions (including [typed literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_typed_literals.htm) and aggregate expressions) and columns are performed completely on the database. No type conversions are made in ABAP beforehand. If the data types or lengths on the left and right side do not match, the resulting behavior depends entirely on the conversion rules of the database, where fewer conversions are generally possible here than in ABAP. The platform-dependent behavior can produce different results or even SQL errors on individual platforms. For details on the conversion rules of SAP HANA Platform, see the [SAP HANA SQL Reference Guide](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).
-   The decimal places are respected in comparisons between numeric types.
-   In greater than or less than comparisons with character-like types, the result can depend on the [code page](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencodepage_glosry.htm "Glossary Entry") used by the database system. This applies in particular to the non-printable characters.
-   Trailing blanks are usually ignored in comparisons between character-like types.
-   In the case of columns that contain nothing but a blank character, it depends on the platform how this blank is saved:
    
    -   In the SAP HANA database and in MaxDB, a single blank is saved as an empty string and not as the value from the respective code page.
    -   In all other databases and in the [table buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry"), a single blank is saved in accordance with the code page.
    
    This means that the behavior produced when a value of this type is selected using size comparisons depends on the platform and buffering. More specifically, a single blank in the SAP HANA database and in MaxDB is not found in the interval of all possible characters.
    

Hints

-   Size comparisons for character-like operands should be avoided to prevent platform-dependent behavior. An exception here are simple cases, such as operands that contain only digits.
-   The obsolete forms [\><, \=<, and \=>](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_logexp_op.htm) of comparison operators may still appear outside of classes.

Example

Reads flights with a seat occupancy that is less than the entered value.

DATA seatsocc TYPE sflight-seatsocc.
cl\_demo\_input=>request( CHANGING field = seatsocc ).
SELECT carrid, connid, fldate
       FROM sflight
       WHERE seatsocc < @seatsocc
       INTO TABLE @FINAL(sflight\_tab).

Example

Reads overbooked flights.

SELECT carrid, connid, fldate
       FROM sflight
       WHERE seatsocc > sflight~seatsmax
       INTO TABLE @FINAL(sflight\_tab).

Continue
[sql\_cond - ALL, ANY, SOME](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_all_any_some.htm)
[sql\_cond - Comparable Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_compare_types.htm)