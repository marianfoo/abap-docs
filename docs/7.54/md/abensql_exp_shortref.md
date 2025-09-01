  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

sql\_exp - Quick reference

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
    
-   [operand1 && operand2 *\[*&& operand3 ... *\]*](javascript:call_link\('abensql_string.htm'\))
    Chaining of character strings.
    
-   [COALESCE( arg1, arg2 )](javascript:call_link\('abensql_elem.htm'\))
    Replacement of a null value.
    
-   [CASE ... WHEN ... THEN ... ELSE ... END](javascript:call_link\('abensql_case.htm'\))
    Case distinction.
    
-   [sql\_agg](javascript:call_link\('abenaggregate_shortref.htm'\))
    Aggregate expression.
    
-   sql\_win
    Window expression.