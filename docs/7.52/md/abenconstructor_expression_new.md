  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) → 

NEW - Instance Operator

Syntax

... NEW type( ... ) ...

Effect

A [constructor expression](javascript:call_link\('abenconstructor_expressions.htm'\)) with the instance operator NEW creates an [anonymous data object](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") or an [instance](javascript:call_link\('abeninstance_glosry.htm'\) "Glossary Entry") of a class and assigns values to the new object. The result is a reference variable that points to the new object. The following can be specified for type:

-   A non-generic data type dtype.
    The operator NEW works in the same way as the statement [CREATE DATA dref TYPE dtype](javascript:call_link\('abapcreate_data_existing.htm'\)), where dref stands for the result that points to the new anonymous data object. The result is a data reference variable of the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") dtype. A constructor expression of this type cannot be extended using a [component selector](javascript:call_link\('abencomponent_selector_glosry.htm'\) "Glossary Entry").

-   A class class.
    The operator NEW works in the same way as the statement [CREATE OBJECT oref TYPE class](javascript:call_link\('abapcreate_object_explicit.htm'\)), where oref stands for the result that points to the new object. The result is an object reference variable of the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") class. Using an object component selector \->, a constructor expression of this type can be extended in both [general expression positions](javascript:call_link\('abengeneral_expression_positions.htm'\)) and [functional positions](javascript:call_link\('abenfunctional_positions.htm'\)) (like an object reference variable) and can be used in the same operand positions. The following is also possible:

-   [Standalone method calls](javascript:call_link\('abapcall_method_static_short.htm'\)) (including [chained method calls](javascript:call_link\('abenchained_method_call_glosry.htm'\) "Glossary Entry")) can be introduced.

-   A single expression that points to an attribute of the class using exactly one follow-on object component selector can also be used as the target field of assignments.

-   The # character.
    If the data type required in an operand position is unique and fully recognizable, the # character can be used instead of an explicitly specified type type and the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry") is used. If the operand type is not known completely, the character # cannot be used, with the following exception: The operand can be evaluated after BASE when a [structure](javascript:call_link\('abennew_constructor_params_struct.htm'\)) or an [internal table](javascript:call_link\('abennew_constructor_params_itab.htm'\)) is constructed.

The same descriptions apply as to the CREATE statements. Once an object is created, it is provided with values using the parameters in parentheses. The syntax used in parameter passing depends on the type used. There are specialized categories of parameter passing for complex types.

-   [Initial value for all types](javascript:call_link\('abennew_constructor_params_initial.htm'\))

-   [Initial value for all data types](javascript:call_link\('abennew_constructor_params_single.htm'\))

-   [Structures](javascript:call_link\('abennew_constructor_params_struct.htm'\))

-   [Internal tables](javascript:call_link\('abennew_constructor_params_itab.htm'\))

-   [Classes](javascript:call_link\('abennew_constructor_params_class.htm'\))

When a constructor expression is [assigned](javascript:call_link\('abenequals_operator.htm'\)) to a reference variable using NEW, the information in the parentheses is evaluated before the new object is bound to the target variable.

Return Value
If an instance of a [class](javascript:call_link\('abennew_constructor_params_class.htm'\)) is created successfully, the instance operator NEW sets sy-subrc to 0. Non-class-based exceptions of the instance constructor cannot be handled, which means that sy-subrc is never set to a value other than 0. The return code sy-subrc is not set when anonymous data objects are created.

Notes

-   To create the values for a new data object, the instance operator NEW uses mainly the same syntax as the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)).

-   The instance operator NEW always creates a new temporary reference variable that points to the new object. The reference variable is used as the operand of a statement and then deleted. It is deleted when the current statement is closed or after the analysis of a relational expression once the truth value is determined. The new object is passed to the garbage collector if it is not passed to a [heap reference](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") or a field symbol after the temporary reference variable is deleted.

-   [Assignments](javascript:call_link\('abenequals_operator.htm'\)) to a reference variable also always create a temporary reference variable that is only assigned to the target variable afterwards. This means that the object pointed to by the target variable before the assignment can be addressed using it throughout the entire expression. This is the difference between NEW and the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)).

Example

Creates an anonymous data object of the type i with the value 555 and an instance of a local class cls (derived implicitly from the static type of oref). In this case, the last statement could be written just as explicitly as oref = NEW cls( ) or it could be written as DATA(oref) = NEW cls( ), using an inline declaration instead of the preceding DATA statement.

CLASS cls DEFINITION.
  ...
ENDCLASS.
DATA: dref TYPE REF TO data,
      oref TYPE REF TO cls.
dref = NEW i( 555 ).
oref = NEW #( ).

Continue
[NEW - Initial Value for All Types](javascript:call_link\('abennew_constructor_params_initial.htm'\))
[NEW - Single Value for All Data Types](javascript:call_link\('abennew_constructor_params_single.htm'\))
[NEW - Structures](javascript:call_link\('abennew_constructor_params_struct.htm'\))
[NEW - Internal Tables](javascript:call_link\('abennew_constructor_params_itab.htm'\))
[NEW - Classes](javascript:call_link\('abennew_constructor_params_class.htm'\))