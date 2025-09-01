  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Expressions%20and%20Functions%20in%20ABAP%20Release%207.52%2C%20ABENNEWS-752-EXPRESSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Expressions and Functions in ABAP Release 7.52

[1\. Exception Object After RAISE EXCEPTION](#!ABAP_MODIFICATION_1@1@)
[2\. Object Component Selector After Table Expressions](#!ABAP_MODIFICATION_2@2@)
[3\. Key Specification for the FILTER Operator](#!ABAP_MODIFICATION_3@3@)
[4\. Pseudo Component table\_line in Mapping Rules](#!ABAP_MODIFICATION_4@4@)

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