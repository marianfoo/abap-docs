  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

Expressions and Functions in Release 7.52

[1\. Exception object after RAISE EXCEPTION](#!ABAP_MODIFICATION_1@1@)

[2\. Object component selector after table expressions](#!ABAP_MODIFICATION_2@2@)

[3\. Key specification for the FILTER operator](#!ABAP_MODIFICATION_3@3@)

[4\. Pseudo component table\_line in mapping rules](#!ABAP_MODIFICATION_4@4@)

Modification 1

Exception Object After RAISE EXCEPTION

The operand position for the reference variable oref of the statement [RAISE EXCEPTION oref](javascript:call_link\('abapraise_exception_class.htm'\)) is now a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

Modification 2

Object Component Selector After Table Expressions

If an [object component selector \->](javascript:call_link\('abentable_exp_chaining.htm'\)) is specified directly after a [table expression](javascript:call_link\('abentable_expressions.htm'\)), the restriction that this is not possible for table expressions whose [result](javascript:call_link\('abentable_exp_result.htm'\)) is determined with the value operator VALUE no longer applies.

Modification 3

Key Specification for the FILTER Operator

In the variant of the constructor expression where a [filter table](javascript:call_link\('abenconstructor_expr_filter_table.htm'\)) is specified, the addition USING KEY can be used either for the filter table or for the source table. Previously, the filter table had to have a sorted key or a hash key. This restriction does not apply if such a key can be specified for the source table instead.

Modification 4

Pseudo Component table\_line in Mapping Rules

It is now possible to specify the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line as a source component of a source table in [mapping rules](javascript:call_link\('abencorresponding_constr_mapping.htm'\)) of the component operator [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)), if the table has an elementary row type. In all other cases, the behavior is undefined when the pseudo component is specified.