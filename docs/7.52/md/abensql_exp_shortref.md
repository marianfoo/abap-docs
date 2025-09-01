  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

sql\_exp - Quick reference

[Reference](javascript:call_link\('abapsql_expr.htm'\))

Syntax

... *{* col *|* dobj *}*
  *|* *{* operand1 +*|*\-*|*\**|*/ operand2 *\[*+*|*\-*|*\**|*/ operand3 ... *\]* *}*
  *|* *{* func( arg1*\[*, arg2*\]*... ) *}*
  *|* *{* cast( operand AS dtype ) *}*
  *|* *{* operand1 && operand2 *\[*&&  operand3 ... *\]* *}*
  *|* *{* coalesce( arg1, arg2 ) *}*
  *|* *{* CASE ... WHEN ... THEN ... ELSE ... END *}* ...

Effect

Expression that is passed to the database system and executed there.

Additions

-   [col *|* dobj](javascript:call_link\('abensql_elem.htm'\))
    Column or host variable.
    
-   [operand1 +*|*\-*|*\**|*/ operand2 *\[*+*|*\-*|*\**|*/ operand3 ... *\]*](javascript:call_link\('abensql_arith.htm'\))
    Arithmetic expression
    
-   [func( arg1*\[*, arg2*\]*... )](javascript:call_link\('abensql_arith_func.htm'\))
    Numeric function or string function.
    
-   [cast( operand AS dtype )](javascript:call_link\('abensql_cast.htm'\))
    Type modification.
    
-   [operand1 && operand2 *\[*&& operand3 ... *\]*](javascript:call_link\('abensql_string.htm'\))
    Chaining character strings.
    
-   [COALESCE( arg1, arg2 )](javascript:call_link\('abensql_elem.htm'\))
    Replacing null value.
    
-   [CASE ... WHEN ... THEN ... ELSE ... END](javascript:call_link\('abensql_case.htm'\))
    Case distinction.