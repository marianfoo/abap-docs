---
title: "Syntax"
description: |
  ...  col    literal  @dobj   @( expr )    operand1 +-/ operand2 +-/ operand3 ...     func( arg1, arg2... )    cast( operand AS dtype )    operand1 && operand2 &&  operand3 ...     coalesce(
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_exp_shortref.htm"
abapFile: "abensql_exp_shortref.htm"
keywords: ["do", "if", "case", "data", "abensql", "exp", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%2C%20ABENSQL_EXP_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm)

Syntax

... *{* col *}*
  *|* *{* literal *|* @dobj  *|* @( expr ) *}*
  *|* *{* operand1 +*|*\-*|*\**|*/ operand2 *\[*+*|*\-*|*\**|*/ operand3 ... *\]* *}*
  *|* *{* func( arg1*\[*, arg2*\]*... ) *}*
  *|* *{* cast( operand AS dtype ) *}*
  *|* *{* operand1 && operand2 *\[*&&  operand3 ... *\]* *}*
  *|* *{* coalesce( arg1, arg2 ) *}*
  *|* *{* CASE ... WHEN ... THEN ... ELSE ... END *}*
  *|* *{* [sql\_agg](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaggregate_shortref.htm) *}*
  *|* *{* sql\_win *}* ...

Effect

Expression that is passed to the database system and executed there.

Additions   

-   [col *|* literal *|* @dobj  *|* @( expr )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_elem.htm)
    Column or literal, host variable, host expression.
-   [operand1 +*|*\-*|*\**|*/ operand2 *\[*+*|*\-*|*\**|*/ operand3 ... *\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith.htm)
    Arithmetic expression
-   [func( arg1*\[*, arg2*\]*... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm)
    Numeric function or string function.
-   [cast( operand AS dtype )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_cast.htm)
    Type modification.
-   [operand1 && operand2  *\[*&& operand3 ... *\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string.htm)
    Chaining of character strings.
-   [COALESCE( arg1, arg2 )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_elem.htm)
    Replacement of a null value.
-   [CASE ... WHEN ... THEN ... ELSE ... END](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_case.htm)
    Case distinction.
-   [sql\_agg](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaggregate_shortref.htm)
    Aggregate expression.
-   sql\_win
    Window expression.