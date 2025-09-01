  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Expressions and Functions in Release 7.40, SP05, ABENNEWS-740_SP05-EXPRESSIONS, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Expressions and Functions in Release 7.40, SP05

[1\. LET Expressions](#!ABAP_MODIFICATION_1@1@)
[2\. Component Operator](#!ABAP_MODIFICATION_2@2@)
[3\. Table Comprehensions](#!ABAP_MODIFICATION_3@3@)

Modification 1   

LET Expressions

The new [LET expressions](javascript:call_link\('abaplet.htm'\)) in the form LET ... IN make it possible to define variables or field symbols as helper fields in expressions. Currently, LET expressions can be used in all [constructor expressions](javascript:call_link\('abenconstructor_expressions.htm'\)) where this makes sense.

Modification 2   

Component Operator

The component operator [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) is a new [constructor operator](javascript:call_link\('abenconstructor_operator_glosry.htm'\) "Glossary Entry") that enables component by component assignments to be made between structures or between internal operands at operand positions. Mappings between components are based by default on matching names and can be defined using mapping rules.

Modification 3   

Table Comprehensions

[Table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") are an enhancement of the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) or the [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) and are used to create the content of internal tables. One or more [FOR expressions](javascript:call_link\('abenfor_in_itab.htm'\)) can now be specified as a subexpression of the constructor expression. These FOR expressions evaluate existing internal tables whose content can be used to construct the result within the loops.