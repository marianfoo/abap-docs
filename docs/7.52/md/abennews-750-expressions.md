  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-75.htm) →  [Changes in Release 7.50](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-750.htm) → 

Expressions and Functions in Release 7.50

[1\. Predicate expression for type inspection](#!ABAP_MODIFICATION_1@1@)

[2\. Case distinction for type inspection](#!ABAP_MODIFICATION_2@2@)

[3\. Enhanced type interference in constructor expressions](#!ABAP_MODIFICATION_3@3@)

[4\. Object component selector after table expressions](#!ABAP_MODIFICATION_4@4@)

[5\. System class for dynamic mapping of structures](#!ABAP_MODIFICATION_5@5@)

Modification 1

Predicate Expression for Type Inspection

The new predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_instance_of.htm) can be used to detect the [dynamic type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_type_glosry.htm "Glossary Entry") of an [object reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"). This makes it possible to check the feasibility of a [down cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendown_cast_glosry.htm "Glossary Entry") before it is executed.

Modification 2

Case Distinction for Type Inspection

The special statement [CASE TYPE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcase_type.htm) makes it possible to check the [dynamic type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_type_glosry.htm "Glossary Entry") of an [object reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") as a case distinction.

Modification 3

Enhanced Type Interference in Constructor Expressions

If the character # is specified for the result type, enhancements were made for the following constructor expressions:

-   In the case of the constructor operator [REDUCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm) an attempt is now made to evaluate the first declaration after INIT if the type of the operand position cannot be identified.
    
-   When the constructor expressions
    

-   [CONV #( ... )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_conv.htm)

-   [VALUE #( )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_init.htm)

-   [REDUCE #( ... )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm)

-   [COND #( ... )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_cond.htm)

-   [SWITCH #( ... )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_switch.htm)

are passed to generically typed formal parameters, no type could be derived for # from the operand position until now. From Release 7.50, a concrete type is derived for # for generic formal parameter types where this is possible and feasible if this cannot be determined in any other way. This prevents syntax errors when procedures are called in cases where a previously concrete type of a formal parameter is expanded to a generic type.

Modification 4

Object Component Selector After Table Expressions

From Release 7.50, the [object component selector \->](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_chaining.htm) can be specified directly after [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm) that return a reference variable. This makes it possible to access components of the referenced object. An exception are table expressions whose [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_result.htm) is determined with the value operator VALUE.

Modification 5

System Class for Dynamic Mapping of Structures

The new system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_corresponding.htm) makes it possible to specify dynamic mapping rules for the component-by-component assignment of structures and internal tables.