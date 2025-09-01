  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Constructor%20Operators%20for%20Constructor%20Expressions%2C%20ABENCONSTRUCTOR_EXPRESSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

Constructor Operators for Constructor Expressions

Syntax

... [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\))*|* [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\))*|* [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\))*|* [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\))*|* [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\))*|* [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\))*|* [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\))*|* [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\))*|* [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\))*|* [COND](javascript:call_link\('abenconditional_expression_cond.htm'\))*|* [SWITCH](javascript:call_link\('abenconditional_expression_switch.htm'\))
     type( ... ) ...

Effect

A constructor expression consists of the following:

-   A built-in [constructor operator](javascript:call_link\('abenconstructor_operator_glosry.htm'\) "Glossary Entry")
-   A data type or object type type that matches the operator and that can be derived implicitly from the operand position using the specification #
-   Type-specific parameters specified in parentheses

Each constructor expression creates a result whose data type is determined by the specified type. The parameters specified in parentheses are used to pass input values. The following constructor operators exist:

-   The instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) is used to create objects in operand positions. The result is a reference variable of the static type type that points to the created object. The input values determine the content of the created object.
-   The value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) is used to fill complex data objects with values in operand positions, create initial values of any data type, or control the result of [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"). The result is a data object of the specified type type. The input values determine the content of the result.
-   The conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) is used for conversions between data types in operand positions. The result is a data object of the specified type type produced by the conversion from an input value.
-   The casting operator [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) is used for downcasts of reference variables in operand positions. The result is a reference variable of the static type type produced by the assignment from an input value.
-   The reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) is used to construct a data reference to a data object in operand positions or to control the results of [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"). The result is a [data reference variable](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry").
-   The component operator [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) is used to construct a structure or an internal table in an operand position. The result is a structure or internal table whose components are filled with values from identically named components or components of a parameter specified using a mapping rule.
-   The lossless operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) is used to create a value in an operand position without losing data. The result is a data object of the specified type that originates from a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry") or a [lossless calculation](javascript:call_link\('abenlossless_calculation_glosry.htm'\) "Glossary Entry").
-   The reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) constructs a value from conditional iterations or from table iterations.
-   The filter operator [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)) constructs an internal table by filtering the lines of an internal table.
-   The conditional operators [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)) and [SWITCH](javascript:call_link\('abenconditional_expression_cond.htm'\)) are used to create values or raise class-based exceptions in operand positions in accordance with conditions. The result depends on any logical expressions or on a case distinction.

A constructor expression can be specified in [general expression positions](javascript:call_link\('abengeneral_expression_positions.htm'\)) and [functional positions](javascript:call_link\('abenfunctional_positions.htm'\)) with an appropriate [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry"). The result is used as an operand here. In a [calculation expression](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") or [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry"), the specified type type is used in the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") or [comparison type](javascript:call_link\('abencomparison_type_glosry.htm'\) "Glossary Entry"). An expression with the operator VALUE that is not used to create an initial value cannot be specified directly in an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") because it never matches the operand type here. Expressions with the operators NEW and CAST can be positioned directly in front of the [object component selector](javascript:call_link\('abenobject_component_select_glosry.htm'\) "Glossary Entry") \-> and can occur in [chainings](javascript:call_link\('abenchaining_glosry.htm'\) "Glossary Entry").

Data types and classes that are visible and usable in the current operand position can be specified for type. This includes the [built-in ABAP types](javascript:call_link\('abenbuiltin_abap_type_glosry.htm'\) "Glossary Entry"), types defined using [TYPES](javascript:call_link\('abaptypes.htm'\)), types from the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)), and both local and global classes. If the data type required in an operand position is unique and can be identified completely, the # character can be used instead of an explicit type specification type and the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry") is used. If the operand type is not unique and is not known completely, if possible, a type inference is performed to determine a data type. This is described in each constructor expression.

[LET](javascript:call_link\('abaplet.htm'\)) expressions can be used to define local helper fields in all suitable constructor expressions.

Hints

-   Constructor operators can be classified as follows:
    -   Constructor operators like NEW and VALUE construct new values, for which components are passed except when the initial value is created, whereas constructor operators like CONV, CAST, REF, and EXACT convert a single passed value.
    -   Constructor operators like NEW, CAST, and REF always return reference variables, whereas constructor operators like VALUE, CONV, and EXACT return all types of data objects.
-   Unlike [method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") or [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), constructor expressions cannot be placed on the left side of a [structure component selector](javascript:call_link\('abenstructure_component_sel_glosry.htm'\) "Glossary Entry"), since constructing a structure only to access a single component is pointless.
-   If a data type from ABAP Dictionary is used for the type, the result of a constructor is given its semantic properties.
-   A [calculation expression](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") does not determine the type of its operands. If constructor expressions are used as operands of calculation expressions, the # character can only be specified for type if the type can be determined from the constructor expression itself.

Example

Filling of an internal table itab with the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)). The data type is inferred from the left side of the assignment.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).