  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP08](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-740_sp08.htm) → 

Internal Tables in Release 7.40, SP08

[1\. Groupings](#!ABAP_MODIFICATION_1@1@)

[2\. Expressions for internal tables](#!ABAP_MODIFICATION_2@2@)

Modification 1

Groupings

A new variant [LOOP AT itab ... GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_variants.htm) of the statement [LOOP AT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengroup_loop_glosry.htm "Glossary Entry") enables the rows in an internal table to be grouped and then the groups evaluated in a [group loop](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_group.htm). The new statement [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_group.htm) for [member groups](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmember_loop_glosry.htm "Glossary Entry") is used to access the rows in a group.

The new variants [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_groups_of.htm) and [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_in_group.htm) in an [iteration expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeniteration_expression_glosry.htm "Glossary Entry") for [table iterations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_iteration_glosry.htm "Glossary Entry") using [FOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_itab.htm) can be used to perform the same groupings (and evaluate them) in [table comprehensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_comprehension_glosry.htm "Glossary Entry") and [table reductions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_reduction_glosry.htm "Glossary Entry") as well.

The new options for grouping internal tables exist alongside the existing [group level processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_level_processin_glosry.htm "Glossary Entry") functions and can replace them in many cases.

Modification 2

Expressions for Internal Tables

The following new aspects of [expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-740_sp08-expressions.htm) apply in particular to the processing of internal tables:

-   Custom [iteration expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_conditional.htm) in constructor expressions using [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennew_constructor_params_itab.htm) and [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_constructor_params_itab.htm) for creating internal tables.
    
-   [Table reductions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_reduction_glosry.htm "Glossary Entry") with the new [reduction operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreduce_operator_glosry.htm "Glossary Entry") [REDUCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm).
    
-   [Table filtering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_filtering_glosry.htm "Glossary Entry") with the new [filter operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfilter_operator_glosry.htm "Glossary Entry") [FILTER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_filter.htm).
    
-   [LINES OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennew_constructor_params_lspc.htm) for specifying rows in the constructor operators [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennew_constructor_params_itab.htm) and [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_constructor_params_itab.htm).
    
-   Default value [OPTIONAL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_optional_default.htm) or [DEFAULT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_optional_default.htm) for [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm).