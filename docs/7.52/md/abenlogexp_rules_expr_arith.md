  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_operands.htm) →  [rel\_exp - Comparison Type of Calculation Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_expressions.htm) → 

rel\_exp - Comparison Type of Arithmetic Expressions

[Arithmetic expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") can be used as operands of comparison expressions using [relational operators for all data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_compare_all.htm). It is possible to compare an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm) with a single operand of a [numeric data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") or with another arithmetic expression.

The [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") of all arithmetic expressions in a comparison expression is determined by all single operands of the entire comparison expression as well as by any operators \*\*, using the [usual rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_type.htm). The result of the arithmetic expressions involved exists in the calculation type. This calculation type is also the [comparison type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomparison_type_glosry.htm "Glossary Entry") whose [comparison rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomparison_type.htm) are used to make the comparison. If necessary, single operands are [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_source_fields.htm) to the comparison type before the comparison starts.

If multiple relational expressions are joined as a logical expression using [Boolean operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_boole.htm), the calculation type or relational type are determined separately for each relational expression.

Notes

-   If a conversion error occurs in an arithmetic expression in a relational expression, the corresponding exception can be handled (unlike in direct [comparisons of data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_operands_dobj.htm)).

-   To compare an arithmetic expression with a single non-numeric operand, the operand can be prefixed with the "+" sign to turn it into an arithmetic expression.

-   An arithmetic expression cannot be specified as the operand of a [predicate expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_expression_glosry.htm "Glossary Entry").

Example

The following comparisons are both true. In the first, the calculation type is i and the result of the calculation is rounded to 1. In the second, the calculation type is decfloat34 and there is no rounding.

IF 4 / 3 = 1.
  cl\_demo\_output=>write( '4 / 3 = 1' ).
ENDIF.
IF 4 / 3 > CONV decfloat34( 1 ).
  cl\_demo\_output=>write( '4 / 3 > CONV decfloat34( 1 )' ).
ENDIF.
cl\_demo\_output=>display( ).