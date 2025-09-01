---
title: "Syntax"
description: |
  ... @( expr ) ... Effect Specification of a host expression(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_expression_glosry.htm 'Glossary Entry') in an ABAP SQL statement. Host expressions(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_expression_glosry
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_expressions.htm"
abapFile: "abenopen_sql_host_expressions.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "method", "class", "data", "internal-table", "abenopen", "sql", "host", "expressions"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Operands sql\_elem](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_operands.htm) → 

ABAP SQL - @( expr )

Syntax

... @( expr ) ...

Effect

Specification of a [host expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_expression_glosry.htm "Glossary Entry") in an ABAP SQL statement. [Host expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_expression_glosry.htm "Glossary Entry") are ABAP expressions expr that can be specified in operand positions in ABAP SQL. expr is a [general expression position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). Any expressions or calls possible here, as well as individual data objects, can be specified.

Host expressions can be specified as [elementary SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_elem.htm) in all operand positions in which [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) are possible. They can also occur in the following read positions in which no SQL expressions are possible:

-   Operand n after [UP TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm).

-   Operand n after [PACKAGE SIZE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm).

-   Right sides of [SQL conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_stmt_logexp.htm) except LIKE and IN.

-   [Actual parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) for input parameters of CDS views or CDS table functions.

-   Work areas wa and the internal tables itab of the statements [INSERT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate.htm), [MODIFY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_dbtab.htm) and [DELETE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_dbtab.htm).

-   Right side of a [SET expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_set_expression.htm) in UPDATE.

The relevant restrictions apply in operand positions in which host variables are handled like SQL expressions.

The host expressions of an ABAP SQL statement are evaluated from left to right and the results are passed to the database, like the content of [host variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm). Conversions of the result of a host expression to the data type required in the operand position must be possible and be [lossless](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove_exact.htm). The following additional restrictions apply:

-   Host expressions cannot be used in dynamic tokens.

-   In a host expression of a [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm), it is not possible to derive a data type from the operand position for the character # for a [constructor expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_glosry.htm "Glossary Entry").

Hints

-   In the operand positions where host expressions can be specified, it is also always possible to specify [host variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) but not vice versa.

-   In some operand positions in which host expressions are forbidden, but [literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_literals.htm) and [host variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) are allowed, the syntax @( literal ) and @( dobj ) can be used. It is handled as a literal or host variable rather than as an expression.

-   When host expressions are specified, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_750.htm), which handles the statement more strictly than the regular syntax check.
    

Example

Determination of the right side of a [comparison](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_compare.htm) in a [WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhere.htm) condition using a [functional method call](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") in a host expression. Within the host expression, the instance operator [NEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_new.htm) is used here to create a temporary object.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS get\_url RETURNING VALUE(url) TYPE scarr-url.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD get\_url.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  SELECT FROM scarr
         FIELDS carrname
         WHERE  url = @( NEW cls( )->get\_url( ) )
         INTO TABLE @DATA(itab).

Executable Examples

-   [Host Expressions in the WHERE Condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_expr_in_where_cond_abexa.htm)

-   [SQL Expressions in the WHERE Condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_expr_in_where_cond_abexa.htm)

Continue
![Example](exa.gif "Example") [Host Expressions, Use in the WHERE Condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_expr_in_where_cond_abexa.htm)