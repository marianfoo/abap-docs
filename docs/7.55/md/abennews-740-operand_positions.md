  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

Operand Positions in Release 7.40, SP02

[1\. Declaration positions](#!ABAP_MODIFICATION_1@1@)
[2\. Operand position in CALL FUNCTION ... EXPORTING](#!ABAP_MODIFICATION_2@2@)
[3\. Operand position after CASE](#!ABAP_MODIFICATION_3@3@)
[4\. Operand position in dynamic ASSIGN](#!ABAP_MODIFICATION_4@4@)
[5\. Operand positions in statements for internal tables](#!ABAP_MODIFICATION_5@5@)
[6\. Operand positions for events in ABAP Objects](#!ABAP_MODIFICATION_6@6@)
[7\. Operand positions after MESSAGE](#!ABAP_MODIFICATION_7@7@)
[8\. Operand position in WRITE and WRITE TO](#!ABAP_MODIFICATION_8@8@)

Modification 1

Declaration Positions

The [new](javascript:call_link\('abennews-740-expressions.htm'\)) [inline declarations](javascript:call_link\('abeninline_declarations.htm'\)) can be made in the new [declaration positions](javascript:call_link\('abendeclaration_positions.htm'\)).

Modification 2

Operand Position in CALL FUNCTION ... EXPORTING

Actual parameters specified after [CALL FUNCTION ... EXPORTING](javascript:call_link\('abapcall_function_parameter.htm'\)) have now become a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

Modification 3

Operand Position After CASE

The operand position after [CASE](javascript:call_link\('abapcase.htm'\)) was changed to a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

Modification 4

Operand Position in Dynamic ASSIGN

The operand comp in the statement [ASSIGN COMPONENT comp OF STRUCTURE](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) is now a [character-like](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") or [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry").

Modification 5

Operand Positions in Statements for Internal Tables

-   The operands after the addition WITH TABLE KEY of the statements [READ TABLE itab](javascript:call_link\('abapread_table.htm'\)) and [DELETE TABLE itab](javascript:call_link\('abapdelete_itab_line.htm'\)) are now [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

-   The work area wa of the following statements was changed from functional operand positions to [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"):

-   [APPEND wa TO ...](javascript:call_link\('abapappend_linespec.htm'\))

-   [INSERT wa INTO ...](javascript:call_link\('abapinsert_itab_linespec.htm'\))

-   [MODIFY ... FROM wa ...](javascript:call_link\('abapmodify_itab_single.htm'\))

-   The internal table itab specified in the statements [READ TABLE itab ...](javascript:call_link\('abapread_table.htm'\)) and [LOOP AT itab ...](javascript:call_link\('abaploop_at_itab.htm'\)) is now a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

-   In the statement [SORT itab](javascript:call_link\('abapsort_itab.htm'\)), the internal table (otab) can now be specified for dynamic sorts as the result of an expression or functional method call.
    

Modification 6

Operand Positions for Events in ABAP Objects

-   The operand positions for formal parameters of the statement [RAISE EVENT](javascript:call_link\('abapraise_event.htm'\)) are now [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). [Functions and expressions](javascript:call_link\('abentyping_arith_expr.htm'\)) can now also be passed to event handlers as actual parameters.

-   oref specified after [SET HANDLER ... FOR](javascript:call_link\('abapset_handler_instance.htm'\)) is now a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").
    

Modification 7

Operand Positions After MESSAGE

The following operand positions of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) were changed:

-   [oref](javascript:call_link\('abapmessage_msg.htm'\)) is now a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

-   [text](javascript:call_link\('abapmessage_text.htm'\)) is now a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry").

-   dobj through dobj4 after [WITH](javascript:call_link\('abapmessage.htm'\)) are now [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") or [functional operand positions](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").
    

Modification 8

Operand Position in WRITE and WRITE TO

Until now, the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) and [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) could only be used to produce or assign a single data object dobj. Now the following can also be specified instead of dobj:

-   A [built-in function](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry"), a [functional method call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") or [method chaining](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry"), or a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") If the return value/result meets the conditions for dobj.

-   A [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry").

[Arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") and [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") cannot be specified directly, but can be specified as [embedded expressions](javascript:call_link\('abenembedded_expression_glosry.htm'\) "Glossary Entry") in [string templates](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry").