  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP08](javascript:call_link\('abennews-740_sp08.htm'\)) → 

Internal Tables in Release 7.40, SP08

[1\. Groupings](#!ABAP_MODIFICATION_1@1@)
[2\. Expressions for Internal Tables](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Groupings

A new variant [LOOP AT itab ... GROUP BY](javascript:call_link\('abaploop_at_itab_variants.htm'\)) of the statement [LOOP AT itab](javascript:call_link\('abengroup_loop_glosry.htm'\) "Glossary Entry") enables the lines in an internal table to be grouped and then the groups evaluated in a [group loop](javascript:call_link\('abaploop_at_group.htm'\)). The new statement [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)) for [member groups](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry") is used to access the lines in a group.

The new variants [FOR GROUPS ... OF](javascript:call_link\('abenfor_groups_of.htm'\)) and [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)) in an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") for [table iterations](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry") using [FOR](javascript:call_link\('abenfor_itab.htm'\)) can be used to perform the same groupings (and evaluate them) in [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") and [table reductions](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") as well.

The new options for grouping internal tables exist alongside the existing [group level processing](javascript:call_link\('abengroup_level_processing_glosry.htm'\) "Glossary Entry") functions and can replace them in many cases.

Modification 2   

Expressions for Internal Tables

The following new aspects of [expressions](javascript:call_link\('abennews-740_sp08-expressions.htm'\)) apply in particular to the processing of internal tables:

-   Custom [iteration expressions](javascript:call_link\('abenfor_conditional.htm'\)) in constructor expressions using [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for creating internal tables.
-   [Table reductions](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") with the new [reduction operator](javascript:call_link\('abenreduce_operator_glosry.htm'\) "Glossary Entry") [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).
-   [Table filtering](javascript:call_link\('abentable_filtering_glosry.htm'\) "Glossary Entry") with the new [filter operator](javascript:call_link\('abenfilter_operator_glosry.htm'\) "Glossary Entry") [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)).
-   [LINES OF](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) for specifying lines in the constructor operators [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)).
-   Default value [OPTIONAL](javascript:call_link\('abentable_exp_optional_default.htm'\)) or [DEFAULT](javascript:call_link\('abentable_exp_optional_default.htm'\)) for [table expressions](javascript:call_link\('abentable_expressions.htm'\)).