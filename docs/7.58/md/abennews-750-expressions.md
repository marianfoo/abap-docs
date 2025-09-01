  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Expressions%20and%20Functions%20in%20ABAP%20Release%207.50%2C%20ABENNEWS-750-EXPRESSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Expressions and Functions in ABAP Release 7.50

[1\. Predicate Expression for Type Inspection](#!ABAP_MODIFICATION_1@1@)
[2\. Case Distinction for Type Inspection](#!ABAP_MODIFICATION_2@2@)
[3\. Enhanced Type Interference in Constructor Expressions](#!ABAP_MODIFICATION_3@3@)
[4\. Object Component Selector After Table Expressions](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Predicate Expression for Type Inspection

The new predicate expression [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) can be used to detect the [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") of an [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry"). This makes it possible to check the feasibility of a [downcast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") before it is executed.

Modification 2   

Case Distinction for Type Inspection

The special statement [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) makes it possible to check the [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") of an [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") as a case distinction.

Modification 3   

Enhanced Type Interference in Constructor Expressions

If the character # is specified for the result type, enhancements were made for the following constructor expressions:

-   In the case of the constructor operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) an attempt is now made to evaluate the first declaration after INIT if the type of the operand position cannot be identified.
-   When the constructor expressions
    
    -   [CONV #( ... )](javascript:call_link\('abenconstructor_expression_conv.htm'\))
    -   [VALUE #( )](javascript:call_link\('abenvalue_constructor_params_init.htm'\))
    -   [REDUCE #( ... )](javascript:call_link\('abenconstructor_expression_reduce.htm'\))
    -   [COND #( ... )](javascript:call_link\('abenconditional_expression_cond.htm'\))
    -   [SWITCH #( ... )](javascript:call_link\('abenconditional_expression_switch.htm'\))
    
    are passed to generically typed formal parameters, no type could be derived for # from the operand position until now. From ABAP release 7.50, a concrete type is derived for # for generic formal parameter types where this is possible and feasible if this cannot be determined in any other way. This prevents syntax errors when procedures are called in cases where a previously concrete type of a formal parameter is expanded to a generic type.
    

Modification 4   

Object Component Selector After Table Expressions

From ABAP release 7.50, the [object component selector \->](javascript:call_link\('abentable_exp_chaining.htm'\)) can be specified directly after [table expressions](javascript:call_link\('abentable_expressions.htm'\)) that return a reference variable. This makes it possible to access components of the referenced object. An exception are table expressions whose [result](javascript:call_link\('abentable_exp_result.htm'\)) is determined with the value operator VALUE.