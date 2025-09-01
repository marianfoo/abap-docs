---
title: "NEW, Instance Operator"
description: |
  Syntax ... NEW type( ... ) ... Effect A constructor expression(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expressions.htm) with the instance operator NEW creates an anonymous data object(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenanon
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm"
abapFile: "abenconstructor_expression_new.htm"
keywords: ["select", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "field-symbol", "abenconstructor", "expression", "new"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20NEW%2C%20Instance%20Operator%2C%20ABENCONSTRUCTOR_EXPRESSION_NEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

NEW, Instance Operator

Syntax

... NEW type( ... ) ...

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expressions.htm) with the instance operator NEW creates an [anonymous data object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") or an [instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninstance_glosry.htm "Glossary Entry") of a class and assigns values to the new object. The result is a reference variable that points to the created object. The following can be specified for type:

-   A non-generic data type dtype.
    
    The operator NEW creates an anonymous data object of data type dtype. The result of NEW is a data reference variable of [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_type_glosry.htm "Glossary Entry") dref that points to the anonymous data object. The operator NEW works in the same way as the statement [CREATE DATA dref TYPE dtype](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_data_existing.htm) where dref corresponds to the result of the expression. A constructor expression of this type cannot be extended using a [component selector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomponent_selector_glosry.htm "Glossary Entry").
    
-   A class class.
    
    The operator NEW creates an object of the class class. The result of NEW is a object reference variable of [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_type_glosry.htm "Glossary Entry") class that points to the object. The operator NEW works in the same way as the statement [CREATE OBJECT oref TYPE class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_object_explicit.htm) where oref corresponds to the result of the expression.
    
    -   In [general expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expression_positions.htm), [functional positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_positions.htm) and [result positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenresult_position_glosry.htm "Glossary Entry") an object component selector \-> can be placed behind NEW( ... ) and point to an attribute of the class:
        
        ... NEW class( ... )->attr*|*('attr\_name') ...
        
    
    The attribute can be specified statically as attr or dynamically as content of a character-like data object attr\_name in parentheses. A single expression that points to an attribute of the class using exactly one subsequent object component selector can also be used as the target field of assignments.
    
    -   [Standalone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_static_short.htm) and [functional](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_functional.htm) method calls, including [chained method calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenchained_method_call_glosry.htm "Glossary Entry"), can be introduced:
        
        ... NEW class( ... )->meth( ... ) ...
        
        The method must be specified statically.
        
-   The # character.
    
    If the data type required in an operand position is unique and can be identified completely, the # character can be used instead of an explicit type specification type and the [operand type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperand_type_glosry.htm "Glossary Entry") is used. If the operand type is not known completely, the # character cannot be used, with the following exception: The operand can be evaluated after BASE when a [structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_struct.htm) or an [internal table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_itab.htm) is constructed.
    

The same descriptions apply as to the CREATE statements. After an object is created successfully, it is supplied with values using the parameters specified in parentheses. The syntax of the parameter passing depends on the type used. There are specialized types of parameter passing for complex types.

-   [Initial value for all types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_initial.htm)
-   [Initial value for all data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_single.htm)
-   [Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_struct.htm)
-   [Internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_itab.htm)
-   [Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_class.htm)

If a constructor expression is [assigned](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_operator.htm) to a reference variable using NEW, the information in the parentheses is evaluated before the created object is bound to the target variable.

Return Code

If an instance of a [class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_class.htm) is created successfully, the instance operator NEW sets sy-subrc to 0. Since non-class-based exceptions of the instance constructor cannot be handled, sy-subrc is never set to a value other than 0. The return code sy-subrc is not set when anonymous data objects are created.

Hints

-   To create the values for a new data object, the instance operator NEW uses mainly the same syntax as the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm).
-   The instance operator NEW always creates a new temporary reference variable that points to the created object. The reference variable is used as the operand of a statement and then deleted. It is deleted when the current statement is closed or after the evaluation of a relational expression once the truth value is determined. The created object is passed to the Garbage Collector if it is not received by a [heap reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_reference_glosry.htm "Glossary Entry") or a field symbol after the temporary reference variable has been deleted.
-   [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_operator.htm) to a reference variable also always create a temporary reference variable that is only assigned to the target variable afterwards. This means that the object to which the target variable points before the assignment can be addressed using it throughout the entire expression. This is the difference between NEW and the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm).

Example

Creation of an anonymous data object of the type i with the value 555 and an instance of a local class cls whereby this is derived implicitly from the static type of oref. In this case, the last statement could be written explicitly as oref = NEW cls( ) or as DATA(oref) = NEW cls( ), using an inline declaration instead of the preceding DATA statement.

CLASS cls DEFINITION.
  ...
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA: dref TYPE REF TO data,
          oref TYPE REF TO cls.
    dref = NEW i( 555 ).
    oref = NEW #( ).
  ENDMETHOD.
ENDCLASS.

Continue
[NEW, Initial Value for All Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_initial.htm)
[NEW, Single Value for All Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_single.htm)
[NEW, Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_struct.htm)
[NEW, Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_itab.htm)
[NEW, Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_class.htm)