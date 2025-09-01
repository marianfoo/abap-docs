  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20VALUE%2C%20Value%20Operator%2C%20ABENCONSTRUCTOR_EXPRESSION_VALUE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

VALUE, Value Operator

Syntax

... VALUE type( ... ) ...

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expressions.htm) with the value operator VALUE creates a result of a data type specified using type. The following can be specified for type:

-   A non-generic data type dtype.
-   The # character as a symbol for the [operand type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperand_type_glosry.htm "Glossary Entry"). This specification is only possible if the data type required in an operand position is unique and completely identifiable at compile time. The following exceptions apply:
    -   When an initial value [VALUE #( )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_init.htm) is passed to a generically typed formal parameter, the type is derived from the generic type.
    -   The operand after BASE can be evaluated when a [structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_struc.htm) or an [internal table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm) is constructed.
    -   When used for a single table expression [VALUE #( table\_exp )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_result.htm).

The operator does the following:

-   It creates initial values for any non-generic data types.
-   It constructs the content of the following:
    -   Structured types
    -   Table types
-   It controls the type of the result of [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry") and so enables a default value to be specified for any lines not found.

The content of the result is determined by the parameters specified in parentheses. The syntax for passing parameters depends on the type used when the value was constructed. There are specialized types of parameter passing for each possible type.

-   Pass by parameter when constructing values:
    -   [Initial value for all types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_init.htm)
    -   [Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_struc.htm)
    -   [Internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm)
-   If a single [table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) is specified as a parameter, VALUE does not construct a value and controls the type of the [result](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_result.htm) instead.

In [assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_operator.htm) of constructor expressions to a data object using VALUE, the data object is used directly. It is completely overwritten with an initial value or start value before it is assigned the values specified in the parentheses.

Hints

-   The value operator VALUE can also be used to construct the content of existing complex data objects (structures and internal tables) and thus goes beyond the functionality of the [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_options.htm) addition.
-   The value operator VALUE uses mainly the same syntax as in the instance operator [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm) to create values.
-   Elementary data types as well as reference types cannot be explicitly specified for the construction of values with the VALUE operator except for the creation of an initial value. In contrast to the instance operator [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm), the corresponding result can also be achieved by direct assignments. For this reason, the specification of unnamed arguments as single values, which is possible with NEW, is also not necessary and therefore not permitted. This does not affect the use of VALUE to control [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry") for which any suitable data types can be specified.
-   Since arithmetic calculations with the results of VALUE for constructing values are not possible, except when creating an initial value, constructor expressions of this type cannot be specified directly in the operand positions of [arithmetic expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"). This does not affect constructor expressions with VALUE used to control [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry"), which can be used for calculations for suitable results.
-   The conversion operator [CONV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_conv.htm) closes the gap where no elementary data objects can be constructed in operand positions using VALUE.
-   If a constructor expression with VALUE is not used as the source of an assignment to a data object, the value operator VALUE creates a new temporary data object whose data type is determined by the specified type and whose content is determined by the parameters passed. This data object is used as the operand of a statement and then deleted after use. It is deleted either when the current statement is closed or when a relational expression is evaluated after the truth value is determined.
-   In assignments to a data object, the target variable is used directly and no temporary data object is created. This variable is initialized or overwritten completely before the assignment of the values specified in the parentheses. Its original value, however, is still available in an optional [LET expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplet.htm). This is the difference between VALUE and the instance operator [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm).

Example

Construction of the values of a structure of type T100 [declared inline](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninline_declarations.htm).

FINAL(wa) = VALUE t100( sprsl = 'E'
                       arbgb = 'DEMO'
                       msgnr = '111'
                       text =  '...' ).

Continue
[VALUE, Initial Value for All Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_init.htm)
[VALUE, Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_struc.htm)
[VALUE, Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm)