---
title: "Constructor Operators for Constructor Expressions"
description: |
  Syntax ... NEW(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm) VALUE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm) CONV(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expressions.htm"
abapFile: "abenconstructor_expressions.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenconstructor", "expressions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Constructor%20Operators%20for%20Constructor%20Expressions%2C%20ABENCONSTRUCTOR_EXPRESSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

Constructor Operators for Constructor Expressions

Syntax

... [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm)*|* [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm)*|* [CONV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_conv.htm)*|* [CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expr_corresponding.htm)*|* [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_cast.htm)*|* [REF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_ref.htm)*|* [EXACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_exact.htm)*|* [REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm)*|* [FILTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_filter.htm)*|* [COND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_cond.htm)*|* [SWITCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_switch.htm)
     type( ... ) ...

Effect

A constructor expression consists of the following:

-   A built-in [constructor operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_operator_glosry.htm "Glossary Entry")
-   A data type or object type type that matches the operator and that can be derived implicitly from the operand position using the specification #
-   Type-specific parameters specified in parentheses

Each constructor expression creates a result whose data type is determined by the specified type. The parameters specified in parentheses are used to pass input values. The following constructor operators exist:

-   The instance operator [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm) is used to create objects in operand positions. The result is a reference variable of the static type type that points to the created object. The input values determine the content of the created object.
-   The value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm) is used to fill complex data objects with values in operand positions, create initial values of any data type, or control the result of [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry"). The result is a data object of the specified type type. The input values determine the content of the result.
-   The conversion operator [CONV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_conv.htm) is used for conversions between data types in operand positions. The result is a data object of the specified type type produced by the conversion from an input value.
-   The casting operator [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_cast.htm) is used for downcasts of reference variables in operand positions. The result is a reference variable of the static type type produced by the assignment from an input value.
-   The reference operator [REF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_ref.htm) is used to construct a data reference to a data object in operand positions or to control the results of [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry"). The result is a [data reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_variable_glosry.htm "Glossary Entry").
-   The component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expr_corresponding.htm) is used to construct a structure or an internal table in an operand position. The result is a structure or internal table whose components are filled with values from identically named components or components of a parameter specified using a mapping rule.
-   The lossless operator [EXACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_exact.htm) is used to create a value in an operand position without losing data. The result is a data object of the specified type that originates from a [lossless assignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlossless_assignment_glosry.htm "Glossary Entry") or a [lossless calculation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlossless_calculation_glosry.htm "Glossary Entry").
-   The reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm) constructs a value from conditional iterations or from table iterations.
-   The filter operator [FILTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_filter.htm) constructs an internal table by filtering the lines of an internal table.
-   The conditional operators [COND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_cond.htm) and [SWITCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_cond.htm) are used to create values or raise class-based exceptions in operand positions in accordance with conditions. The result depends on any logical expressions or on a case distinction.

A constructor expression can be specified in [general expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expression_positions.htm) and [functional positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_positions.htm) with an appropriate [operand type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperand_type_glosry.htm "Glossary Entry"). The result is used as an operand here. In a [calculation expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_expression_glosry.htm "Glossary Entry") or [relational expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrelational_expression_glosry.htm "Glossary Entry"), the specified type type is used in the [calculation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_type_glosry.htm "Glossary Entry") or [comparison type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomparison_type_glosry.htm "Glossary Entry"). An expression with the operator VALUE that is not used to create an initial value cannot be specified directly in an [arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") because it never matches the operand type here. Expressions with the operators NEW and CAST can be positioned directly in front of the [object component selector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_component_select_glosry.htm "Glossary Entry") \-> and can occur in [chainings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenchaining_glosry.htm "Glossary Entry").

Data types and classes that are visible and usable in the current operand position can be specified for type. This includes the [built-in ABAP types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry"), types defined using [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm), types from the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm), and both local and global classes. If the data type required in an operand position is unique and can be identified completely, the # character can be used instead of an explicit type specification type and the [operand type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperand_type_glosry.htm "Glossary Entry") is used. If the operand type is not unique and is not known completely, if possible, a type inference is performed to determine a data type. This is described in each constructor expression.

[LET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplet.htm) expressions can be used to define local helper fields in all suitable constructor expressions.

Hints

-   Constructor operators can be classified as follows:
    -   Constructor operators like NEW and VALUE construct new values, for which components are passed except when the initial value is created, whereas constructor operators like CONV, CAST, REF, and EXACT convert a single passed value.
    -   Constructor operators like NEW, CAST, and REF always return reference variables, whereas constructor operators like VALUE, CONV, and EXACT return all types of data objects.
-   Unlike [method chainings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") or [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry"), constructor expressions cannot be placed on the left side of a [structure component selector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry"), since constructing a structure only to access a single component is pointless.
-   If a data type from ABAP Dictionary is used for the type, the result of a constructor is given its semantic properties.
-   A [calculation expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_expression_glosry.htm "Glossary Entry") does not determine the type of its operands. If constructor expressions are used as operands of calculation expressions, the # character can only be specified for type if the type can be determined from the constructor expression itself.

Example

Filling of an internal table itab with the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm). The data type is inferred from the left side of the assignment.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).