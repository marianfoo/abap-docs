  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Comparing%20Elementary%20Data%20Types%2C%20ABENLOGEXP_RULES_OPERANDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

rel\_exp - Comparing Elementary Data Types

If operand1 and operand2 of a [comparison expression](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry") have elementary data types, they are used to determine a common elementary [comparison type](javascript:call_link\('abencomparison_type_glosry.htm'\) "Glossary Entry"). Every comparison type has [comparison rules](javascript:call_link\('abencomparison_type.htm'\)) used to perform the comparison. Operands that are not compatible with the comparison type are converted to this type. The following sections show how the comparison type is determined for the various comparisons:

-   [Comparison type of elementary data objects](javascript:call_link\('abenlogexp_rules_operands_dobj.htm'\))
-   [Comparison type of calculation expressions](javascript:call_link\('abenlogexp_rules_expressions.htm'\))

The return values or results of functional methods, built-in functions, constructor expressions, and table expressions are handled like elementary data objects.

Hints

-   Previous assignments to helper variables of certain types or the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) can be used to force comparison types and conversions other than a direct comparison of the operands.
-   It should be noted that some built-in functions operate have the same effect as an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") if they contain a [numeric expression](javascript:call_link\('abennumerical_expression_glosry.htm'\) "Glossary Entry") as an argument.
-   For [enumerated types](javascript:call_link\('abenenum_type_glosry.htm'\) "Glossary Entry"), a special [rule](javascript:call_link\('abenlogexp_rules_operands_enum.htm'\)) applies.

Continue
[rel\_exp - Comparison Rules for Comparison Types](javascript:call_link\('abencomparison_type.htm'\))
[rel\_exp - Comparison Type of Elementary Data Objects](javascript:call_link\('abenlogexp_rules_operands_dobj.htm'\))
[rel\_exp - Comparison Type of Calculation Expressions](javascript:call_link\('abenlogexp_rules_expressions.htm'\))