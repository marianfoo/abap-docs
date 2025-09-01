  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  S

sql\_exp - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm)

Syntax

... *{* col *}*
  *|* *{* literal *|* @dobj  *|* @( expr ) *}*
  *|* *{* operand1 +*|*\-*|*\**|*/ operand2 *\[*+*|*\-*|*\**|*/ operand3 ... *\]* *}*
  *|* *{* func( arg1*\[*, arg2*\]*... ) *}*
  *|* *{* cast( operand AS dtype ) *}*
  *|* *{* operand1 && operand2 *\[*&&  operand3 ... *\]* *}*
  *|* *{* coalesce( arg1, arg2 ) *}*
  *|* *{* CASE ... WHEN ... THEN ... ELSE ... END *}*
  *|* *{* [sql\_agg](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_shortref.htm) *}*
  *|* *{* sql\_win *}* ...

Effect

Expression that is passed to the database system and executed there.

Additions

-   [col *|* literal *|* @dobj  *|* @( expr )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_elem.htm)
    Column or literal, host variable, host expression.
    
-   [operand1 +*|*\-*|*\**|*/ operand2 *\[*+*|*\-*|*\**|*/ operand3 ... *\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith.htm)
    Arithmetic expression
    
-   [func( arg1*\[*, arg2*\]*... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith_func.htm)
    Numeric function or string function.
    
-   [cast( operand AS dtype )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_cast.htm)
    Type modification.
    
-   [operand1 && operand2 *\[*&& operand3 ... *\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string.htm)
    Chaining of character strings.
    
-   [COALESCE( arg1, arg2 )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_elem.htm)
    Replacement of a null value.
    
-   [CASE ... WHEN ... THEN ... ELSE ... END](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_case.htm)
    Case distinction.
    
-   [sql\_agg](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_shortref.htm)
    Aggregate expression.
    
-   sql\_win
    Window expression.