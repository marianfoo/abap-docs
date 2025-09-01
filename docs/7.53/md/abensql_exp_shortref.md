---
title: "Syntax"
description: |
  ...  col  dobj    operand1 +-/ operand2 +-/ operand3 ...     func( arg1, arg2... )    cast( operand AS dtype )    operand1 && operand2 &&  operand3 ...     coalesce( arg1, arg2 )    CASE ... W
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_exp_shortref.htm"
abapFile: "abensql_exp_shortref.htm"
keywords: ["do", "if", "case", "data", "abensql", "exp", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  S

sql\_exp - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm)

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

-   [col *|* dobj](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_elem.htm)
    Column or host variable.
    
-   [operand1 +*|*\-*|*\**|*/ operand2 *\[*+*|*\-*|*\**|*/ operand3 ... *\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith.htm)
    Arithmetic expression
    
-   [func( arg1*\[*, arg2*\]*... )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith_func.htm)
    Numeric function or string function.
    
-   [cast( operand AS dtype )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cast.htm)
    Type modification.
    
-   [operand1 && operand2 *\[*&& operand3 ... *\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_string.htm)
    Chaining character strings.
    
-   [COALESCE( arg1, arg2 )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_elem.htm)
    Replacing null value.
    
-   [CASE ... WHEN ... THEN ... ELSE ... END](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_case.htm)
    Case distinction.