  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP02](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp02.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Operand Positions in Release 7.40, SP02, ABENNEWS-740-OPERAND_POSITIONS, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Operand Positions in Release 7.40, SP02

[1\. Declaration Positions](#!ABAP_MODIFICATION_1@1@)
[2\. Operand Position in CALL FUNCTION ... EXPORTING](#!ABAP_MODIFICATION_2@2@)
[3\. Operand Position After CASE](#!ABAP_MODIFICATION_3@3@)
[4\. Operand Position in Dynamic ASSIGN](#!ABAP_MODIFICATION_4@4@)
[5\. Operand Positions in Statements for Internal Tables](#!ABAP_MODIFICATION_5@5@)
[6\. Operand Positions for Events in ABAP Objects](#!ABAP_MODIFICATION_6@6@)
[7\. Operand Positions After MESSAGE](#!ABAP_MODIFICATION_7@7@)
[8\. Operand Position in WRITE and WRITE TO](#!ABAP_MODIFICATION_8@8@)

Modification 1   

Declaration Positions

The [new](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740-expressions.htm) [inline declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninline_declarations.htm) can be made in the new [declaration positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclaration_positions.htm).

Modification 2   

Operand Position in CALL FUNCTION ... EXPORTING

Actual parameters specified after [CALL FUNCTION ... EXPORTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm) have now become a [general expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

Modification 3   

Operand Position After CASE

The operand position after [CASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase.htm) was changed to a [general expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

Modification 4   

Operand Position in Dynamic ASSIGN

The operand comp in the statement [ASSIGN COMPONENT comp OF STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_dynamic_components.htm) is now a [character-like](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") or [numeric expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry").

Modification 5   

Operand Positions in Statements for Internal Tables

-   The operands after the addition WITH TABLE KEY of the statements [READ TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm) and [DELETE TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab_line.htm) are now [general expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").
-   The work area wa of the following statements was changed from functional operand positions to [general expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"):
    -   [APPEND wa TO ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend_linespec.htm)
    -   [INSERT wa INTO ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_linespec.htm)
    -   [MODIFY ... FROM wa ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab_single.htm)
-   The internal table itab specified in the statements [READ TABLE itab ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm) and [LOOP AT itab ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm) is now a [functional operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_position_glosry.htm "Glossary Entry").
-   In the statement [SORT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm), the internal table (otab) can now be specified for dynamic sorts as the result of an expression or functional method call.

Modification 6   

Operand Positions for Events in ABAP Objects

-   The operand positions for formal parameters of the statement [RAISE EVENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_event.htm) are now [general expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). [Functions and expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_arith_expr.htm) can now also be passed to event handlers as actual parameters.
-   oref specified after [SET HANDLER ... FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_handler_instance.htm) is now a [functional operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

Modification 7   

Operand Positions After MESSAGE

The following operand positions of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm) were changed:

-   [oref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_msg.htm) is now a [functional operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_position_glosry.htm "Glossary Entry").
-   [text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_text.htm) is now a [character-like expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").
-   dobj through dobj4 after [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm) are now [character-like expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") or [functional operand positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

Modification 8   

Operand Position in WRITE and WRITE TO

Until now, the statements [WRITE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite-.htm) and [WRITE TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to.htm) could only be used to produce or assign a single data object dobj. Now the following can also be specified instead of dobj:

-   A [built-in function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_function_glosry.htm "Glossary Entry"), a [functional method call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") or [method chaining](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_chaining_glosry.htm "Glossary Entry"), or a [constructor expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") If the return value/result meets the conditions for dobj.
-   A [string expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_expression_glosry.htm "Glossary Entry").

[Arithmetic expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") and [bit expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbit_expression_glosry.htm "Glossary Entry") cannot be specified directly, but can be specified as [embedded expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenembedded_expression_glosry.htm "Glossary Entry") in [string templates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_glosry.htm "Glossary Entry").