---
title: "Syntax"
description: |
  ... operand IS NOT INITIAL ... Effect This relational expression is true if the value of the operand operand is (is not) the initial value(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_glosry.htm 'Glossary Entry') of its built-in dictionary type(https:
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_initial.htm"
abapFile: "abenwhere_logexp_initial.htm"
keywords: ["select", "do", "if", "try", "catch", "data", "types", "abenwhere", "logexp", "initial"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm) → 

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cond_shortref.htm)

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20IS%20INITIAL%2C%20ABENWHERE_LOGEXP_INITIAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_cond - IS INITIAL

Syntax

... operand IS *\[*NOT*\]* INITIAL ...

Effect

This relational expression is true if the value of the operand operand is (is not) the [initial value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_glosry.htm "Glossary Entry") of its [built-in dictionary type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

The following applies to operand:

-   [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except for [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm) can be specified.
-   In a [HAVING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphaving_clause.htm) clause, [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") can also be used.

Hints

-   The expression IS *\[*NOT*\]* INITIAL is suitable for checking the type-dependent initial value, regardless of its actual data type, instead of comparing it with a type-compliant operand that contains the initial value. This is of particular use in [dynamic conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_dynamic.htm).
-   The expression IS *\[*NOT*\]* INITIAL must not be confused with the expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_null.htm).
-   If used, the relational expression IS *\[*NOT*\]* INITIAL enforces [strict mode from ABAP release 7.53](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_753.htm).

Example

Reads the rows of the DDIC database table DEMO\_DDIC\_TYPES in which a dynamically specified column contains its type-dependent initial value.

DATA column TYPE string VALUE \`INT8\`.
cl\_demo\_input=>request( CHANGING field = column ).
column = to\_upper( column ).
FINAL(components) = CAST cl\_abap\_structdescr(
  cl\_abap\_typedescr=>describe\_by\_name( 'DEMO\_DDIC\_TYPES' )
    )->components.
IF NOT line\_exists( components\[ name = column \] ).
  cl\_demo\_output=>display( \`Invalid request\` ).
  RETURN.
ENDIF.
FINAL(cond) = column && \` IS INITIAL\`.
TRY.
    SELECT \*
           FROM demo\_ddic\_types
           WHERE (cond)
           INTO TABLE @FINAL(result).
  CATCH cx\_sy\_dynamic\_osql\_semantics INTO FINAL(xref).
    cl\_demo\_output=>display( xref->get\_text( ) ).
ENDTRY.