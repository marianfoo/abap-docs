  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%2C%20ABENSQL_EXP_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - Short Reference

[Reference](javascript:call_link\('abapsql_expr.htm'\))

Syntax

... *{* col *}*
  *|* *{* literal *|* @dobj  *|* @( expr ) *}*
  *|* *{* operand1 +*|*\-*|*\**|*/ operand2 *\[*+*|*\-*|*\**|*/ operand3 ... *\]* *}*
  *|* *{* func( arg1*\[*, arg2*\]*... ) *}*
  *|* *{* cast( operand AS dtype ) *}*
  *|* *{* operand1 && operand2 *\[*&&  operand3 ... *\]* *}*
  *|* *{* coalesce( arg1, arg2 ) *}*
  *|* *{* CASE ... WHEN ... THEN ... ELSE ... END *}*
  *|* *{* [sql\_agg](javascript:call_link\('abenaggregate_shortref.htm'\)) *}*
  *|* *{* sql\_win *}* ...

Effect

Expression that is passed to the database system and executed there.

Additions   

-   [col *|* literal *|* @dobj  *|* @( expr )](javascript:call_link\('abensql_elem.htm'\))
    Column or literal, host variable, host expression.
-   [operand1 +*|*\-*|*\**|*/ operand2 *\[*+*|*\-*|*\**|*/ operand3 ... *\]*](javascript:call_link\('abensql_arith.htm'\))
    Arithmetic expression
-   [func( arg1*\[*, arg2*\]*... )](javascript:call_link\('abensql_arith_func.htm'\))
    Numeric function or string function.
-   [cast( operand AS dtype )](javascript:call_link\('abensql_cast.htm'\))
    Type modification.
-   [operand1 && operand2  *\[*&& operand3 ... *\]*](javascript:call_link\('abensql_string.htm'\))
    Chaining of character strings.
-   [COALESCE( arg1, arg2 )](javascript:call_link\('abensql_elem.htm'\))
    Replacement of a null value.
-   [CASE ... WHEN ... THEN ... ELSE ... END](javascript:call_link\('abensql_case.htm'\))
    Case distinction.
-   [sql\_agg](javascript:call_link\('abenaggregate_shortref.htm'\))
    Aggregate expression.
-   sql\_win
    Window expression.