---
title: "Syntax"
description: |
  ... operand IS NOT INITIAL ... Effect This relational expression is true if the value of the operand operand is (is not) the initial value(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitial_value_glosry.htm 'Glossary Entry') of its built-in dictionary type(https://hel
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_initial.htm"
abapFile: "abenwhere_logexp_initial.htm"
keywords: ["select", "do", "if", "try", "catch", "data", "types", "abenwhere", "logexp", "initial"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - Conditions sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) → 

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_shortref.htm)

sql\_cond - IS INITIAL

Syntax

... operand IS *\[*NOT*\]* INITIAL ...

Effect

This relational expression is true if the value of the operand operand is (is not) the [initial value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitial_value_glosry.htm "Glossary Entry") of its [built-in dictionary type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm). [Columns](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) and [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) can be specified for operand. This covers literals, host variables, and host expressions. In a [HAVING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphaving_clause.htm) clause, [aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") can also be used.

Notes

-   The expression IS *\[*NOT*\]* INITIAL is suitable for checking the type-dependent initial value (regardless of its actual data type), instead of comparing it with a type-friendly operand that contains the initial value. This is of particular use in [dynamic conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_dynamic.htm).
    
-   The expression IS *\[*NOT*\]* INITIAL must not be confused with the expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_null.htm).
    
-   If used, the relational expression IS *\[*NOT*\]* INITIAL forces [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_753.htm).
    

Example

Reads the rows of the database table DEMO\_DDIC\_TYPES in which a dynamically specified column contains their type-dependent initial value.

DATA column TYPE string VALUE \`INT8\`.
cl\_demo\_input=>request( CHANGING field = column ).
column = to\_upper( column ).
DATA(components) = CAST cl\_abap\_structdescr(
  cl\_abap\_typedescr=>describe\_by\_name( 'DEMO\_DDIC\_TYPES' )
    )->components.
IF NOT line\_exists( components\[ name = column \] ).
  cl\_demo\_output=>display( \`Invalid request\` ).
  RETURN.
ENDIF.
DATA(cond) = column && \` IS INITIAL\`.
TRY.
    SELECT \*
           FROM demo\_ddic\_types
           WHERE (cond)
           INTO TABLE @DATA(result).
  CATCH cx\_sy\_dynamic\_osql\_semantics INTO DATA(xref).
    cl\_demo\_output=>display( xref->get\_text( ) ).
ENDTRY.