---
title: "Constructor Operators for Constructor Expressions"
description: |
  Syntax ... NEW(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm) VALUE(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_value.htm) CONV(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstru
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expressions.htm"
abapFile: "abenconstructor_expressions.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenconstructor", "expressions"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in.htm) → 

Constructor Operators for Constructor Expressions

Syntax

... [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm)*|* [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_value.htm)*|* [CONV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_conv.htm)*|* [CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expr_corresponding.htm)*|* [CAST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_cast.htm)*|* [REF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_ref.htm)*|* [EXACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm)*|* [REDUCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm)*|* [FILTER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_filter.htm)*|* [COND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_cond.htm)*|*[SWITCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_switch.htm)
     type( ... ) ...

Effect

A constructor expression consists of the following:

-   A built-in [constructor operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_operator_glosry.htm "Glossary Entry")

-   A data type or object type type that matches the operator and that can be derived implicitly from the operand position using #

-   Type-specific parameters specified in parentheses

Each constructor expression creates a result whose data type is determined using the specified type. The parameters specified in parentheses are used to pass input values. The following constructor operators exist:

-   The instance operator [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm) is used to create objects in operand positions. The result is a reference variable of the static type type that points to the new object. The input values determine the content of the new object.

-   The value operator [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_value.htm) is used to fill complex data objects with values in operand positions, create initial values of any data type, or control the results of [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry"). The result is a data object of the specified type type. The input values determine the content of the result.

-   The conversion operator [CONV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_conv.htm) is used for conversions between data types in operand positions. The result is a data object of the specified type type produced by the conversion from an input value.

-   The casting operator [CAST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_cast.htm) is used for down casts of reference variables in operand positions. The result is a reference variable of the static type type produced by the assignment from an input value.

-   The reference operator [REF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_ref.htm) is used to construct a data reference to a data object in operand positions or to control the results of [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry"). The result is a [data reference variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_reference_variable_glosry.htm "Glossary Entry").

-   The component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expr_corresponding.htm) is used to construct a structure or an internal table in an operand position. The result is a structure or internal table whose components are filled with values from identically named components or from argument components specified in a parameter using a mapping rule.

-   The lossless operator [EXACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm) is used to create a value in an operand position without losing data. The result is a data object of the specified type, derived from a [lossless assignment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlossless_assignment_glosry.htm "Glossary Entry") or a [lossless calculation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlossless_calculation_glosry.htm "Glossary Entry").

-   The reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm) constructs a value from condition iterations or from table iterations.

-   The filter operator [FILTER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_filter.htm) constructs an internal table by filtering the rows of an internal table.

-   The conditional operators [COND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_cond.htm) and [SWITCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_cond.htm) are used to create values or raise class-based exceptions in operand positions in accordance with conditions. The result is determined by logical expressions or by a case distinction.

A constructor expression can be specified in [general expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expression_positions.htm) and [functional positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_positions.htm) with an appropriate [operand type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperand_type_glosry.htm "Glossary Entry"). The result is used here as an operand. In a [calculation expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_expression_glosry.htm "Glossary Entry") or [relational expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrelational_expression_glosry.htm "Glossary Entry"), the specified type type is incorporated into the [calculation type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_type_glosry.htm "Glossary Entry") or [comparison type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomparison_type_glosry.htm "Glossary Entry"). An expression with the operator VALUE that is not used to create an initial value cannot be specified directly in an [arithmetic expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"). This is because it never matches the operand type here. Expressions with the operators NEW and CAST can be positioned directly before the [object component selector](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_component_select_glosry.htm "Glossary Entry") \-> and can occur in [chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchaining_glosry.htm "Glossary Entry").

Data types and classes that are visible and usable in the current operand position can be specified for type. This includes the [built-in ABAP types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_abap_type_glosry.htm "Glossary Entry"), types defined using [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes.htm), types from [ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm), and both local and global classes. If the data type required in an operand position is unique and fully recognizable, the # character can be used instead of an explicitly specified type type and the [operand type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperand_type_glosry.htm "Glossary Entry") is used. If the operand type is not unique and is not known completely, a type inference is performed to determine a data type. This is described in each constructor expression.

[LET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplet.htm) expressions can be used to define local helper fields in all suitable constructor expressions.

Notes

-   Constructor operators can be classified as follows:

-   Constructor operators like NEW and VALUE construct new values whose parts can be passed (except when the initial value is created), whereas constructor operators like CONV, CAST, REF, and EXACT convert a single passed value.

-   Constructor operators like NEW, CAST, and REF always return reference variables, whereas constructor operators like VALUE, CONV, and EXACT return all types of data objects.

-   Unlike [method chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") or [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry"), constructor expressions cannot be placed on the left side of a [structure component selector](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry"), since constructing a structure just to access a single component is pointless.

-   If a data type from ABAP Dictionary is used for the type, the result of a constructor is given its semantic attributes.

-   A [calculation expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_expression_glosry.htm "Glossary Entry") does not determine the type of its operands. If constructor expressions are used as operands of calculation expressions, the # character can only be specified for type if the type can be determined from the constructor expression itself.

Example

Fills an internal table itab with the value operator [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_value.htm). The data type is inferred from the left side of the assignment.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).