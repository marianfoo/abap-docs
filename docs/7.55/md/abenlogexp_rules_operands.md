  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules.htm) → 

rel\_exp - Comparing Elementary Data Types

If operand1 and operand2 of a [comparison expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomparison_expression_glosry.htm "Glossary Entry") have elementary data types, they are used to determine a common elementary [comparison type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomparison_type_glosry.htm "Glossary Entry"). Every comparison type has [comparison rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomparison_type.htm) used to perform the comparison. Operands that are not compatible with the comparison type are converted to this type. The following sections show how the comparison type is determined for the various comparisons:

-   [Comparison type of elementary data objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules_operands_dobj.htm)

-   [Comparison type of calculation expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules_expressions.htm)

The return values or results of functional methods, built-in functions, constructor expressions, and table expressions are handled like elementary data objects.

Hints

-   Previous assignments to helper variables of certain types or the conversion operator [CONV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_conv.htm) can be used to force comparison types and conversions other than a direct comparison of the operands.

-   It should be noted that some built-in functions operate have the same effect as an [arithmetic expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") if they contain a [numeric expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_expression_glosry.htm "Glossary Entry") as an argument.

-   For [enumerated types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), a special [rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules_operands_enum.htm) applies.

Continue
[rel\_exp - Comparison Rules for Comparison Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomparison_type.htm)
[rel\_exp - Comparison Type of Elementary Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules_operands_dobj.htm)
[rel\_exp - Comparison Type of Calculation Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules_expressions.htm)