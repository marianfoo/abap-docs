  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.50](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-750.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Expressions%20and%20Functions%20in%20ABAP%20Release%207.50%2C%20ABENNEWS-750-EXPRESSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Expressions and Functions in ABAP Release 7.50

[1\. Predicate Expression for Type Inspection](#!ABAP_MODIFICATION_1@1@)
[2\. Case Distinction for Type Inspection](#!ABAP_MODIFICATION_2@2@)
[3\. Enhanced Type Interference in Constructor Expressions](#!ABAP_MODIFICATION_3@3@)
[4\. Object Component Selector After Table Expressions](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Predicate Expression for Type Inspection

The new predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_instance_of.htm) can be used to detect the [dynamic type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_type_glosry.htm "Glossary Entry") of an [object reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"). This makes it possible to check the feasibility of a [downcast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendown_cast_glosry.htm "Glossary Entry") before it is executed.

Modification 2   

Case Distinction for Type Inspection

The special statement [CASE TYPE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcase_type.htm) makes it possible to check the [dynamic type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_type_glosry.htm "Glossary Entry") of an [object reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") as a case distinction.

Modification 3   

Enhanced Type Interference in Constructor Expressions

If the character # is specified for the result type, enhancements were made for the following constructor expressions:

-   In the case of the constructor operator [REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm) an attempt is now made to evaluate the first declaration after INIT if the type of the operand position cannot be identified.
-   When the constructor expressions
    
    -   [CONV #( ... )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_conv.htm)
    -   [VALUE #( )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_init.htm)
    -   [REDUCE #( ... )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm)
    -   [COND #( ... )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_cond.htm)
    -   [SWITCH #( ... )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_switch.htm)
    
    are passed to generically typed formal parameters, no type could be derived for # from the operand position until now. From ABAP release 7.50, a concrete type is derived for # for generic formal parameter types where this is possible and feasible if this cannot be determined in any other way. This prevents syntax errors when procedures are called in cases where a previously concrete type of a formal parameter is expanded to a generic type.
    

Modification 4   

Object Component Selector After Table Expressions

From ABAP release 7.50, the [object component selector \->](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm) can be specified directly after [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) that return a reference variable. This makes it possible to access components of the referenced object. An exception are table expressions whose [result](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_result.htm) is determined with the value operator VALUE.