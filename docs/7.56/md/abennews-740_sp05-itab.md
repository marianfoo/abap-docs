  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

Internal Tables in Release 7.40, SP05

[1\. MOVE-CORRESPONDING for Internal Tables](#!ABAP_MODIFICATION_1@1@)
[2\. Table Comprehensions](#!ABAP_MODIFICATION_2@2@)

Modification 1   

MOVE-CORRESPONDING for Internal Tables

From Release 7.40, SP05, the operands of the statement [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) can be internal tables, as well as structures. This has been enabled by a new [variant](javascript:call_link\('abapmove-corresponding_itab.htm'\)) of this statement, which assigns identically named components of internal tables line by line. The new addition EXPANDING NESTED TABLES enables tabular components of structures to be resolved. The addition KEEPING TARGET LINES adds lines to target tables instead of overwriting them.

Component by component assignments between internal tables are also possible using the new component operator [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)).

Modification 2   

Table Comprehensions

[Table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") are an enhancement of the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) or the [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) and are used to create the content of internal tables. One or more [FOR expressions](javascript:call_link\('abenfor_in_itab.htm'\)) can now be specified as subexpressions of the constructor expression. These FOR expressions evaluate existing internal tables whose content can be used to construct the result within the loops.