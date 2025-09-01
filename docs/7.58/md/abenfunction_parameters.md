  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_functions.htm) →  [FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfunction.htm) →  [Function Module Interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Properties%20of%20Interface%20Parameters%2C%20ABENFUNCTION_PARAMETERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Properties of Interface Parameters

When an interface parameter p1, p2... is defined in the Function Builder, its properties are determined that are reflected in the syntax of parameters and [table\_parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptables_parameters_obsolete.htm).

Syntax

... *{* VALUE(p1) *|* REFERENCE(p1) *}*
         *\[* *{*TYPE *\[*REF TO*\]* type*}* *|* [like\_structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfunction_typing_obsolete.htm)
           *\[*OPTIONAL*|**{*DEFAULT def1*}**\]* *\]*
    *{* VALUE(p2) *|* REFERENCE(p2) *}*
         *\[* *{*TYPE *\[*REF TO*\]* type*}* *|* [like\_structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfunction_typing_obsolete.htm)
           *\[*OPTIONAL*|**{*DEFAULT def2*}**\]* *\]*
    ...

The syntax and semantics of VALUE, TYPE, OPTIONAL, and DEFAULT are mainly the same as in the definition of method interfaces with [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_parameters.htm). In addition, there is also the obsolete option [like\_structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfunction_typing_obsolete.htm), which uses LIKE or STRUCTURE to type interface parameters.

Type of Parameter Passing   

There are two types of pass by parameters: [pass by reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") and [pass by value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_value_glosry.htm "Glossary Entry"). Pass by value is selected in the Function Builder by selecting pass by value and differs from pass by reference in the above syntax, which is indicated by REFERENCE( ), by the specification of VALUE( ). If only one name p1 p2 ... is specified, the parameter is passed by reference by default.

-   In pass by reference, the formal parameter points directly to the actual parameter, so that changes to the formal parameters have an immediate effect on the actual parameter.
-   In pass by value, the formal parameter is created as a copy of the actual parameter (in IMPORTING and CHANGING parameters) or as an initial parameter (in EXPORTING parameters) on the stack when the function module is called and for CHANGING and EXPORTING parameters, the formal parameter is copied to the actual parameter when returning from the function module.

Note the following for the different types of parameter:

-   In IMPORTING, EXPORTING, and CHANGING parameters, pass by reference and pass by value are possible; for [TABLES parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptables_parameters_obsolete.htm), only pass by reference is possible.
-   IMPORTING parameters passed by reference must not be overwritten in the function module.
-   An EXPORTING parameter passed by reference behaves like a CHANGING parameter, that is, EXPORTING parameters passed by reference are not initialized when the function module is called. Therefore, no read access to these parameters should take place before the first write access. In addition, care must be taken when adding content to such parameters as, for example, when inserting lines into internal tables.

Hint

The time the function module was last edited specifies whether a parameter passed by reference is shown with or without REFERENCE( ). REFERENCE( ) is shown for function modules that have been modified since ABAP release 7.31.

Typing of Interface Parameters   

The parameter interface of a function module is public throughout the system. Interface parameters can therefore only be typed with reference to data types from the ABAP Dictionary or from the public visibility section of global classes. Interface parameters can be typed using TYPE, TYPE REF TO or [LIKE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfunction_typing_obsolete.htm).

Typing with TYPE *\[*REF TO*\]* is the only recommended typing for interface parameters of function modules. It takes place when TYPE or TYPE REF TO is used in the Function Builder. For IMPORTING, EXPORTING, and CHANGING parameters, any [built-in ABAP type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types.htm) (complete or generic), or any data type of the ABAP Dictionary or from the public visibility section of a global class can be specified after TYPE. After TYPE REF TO, the generic data type [data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm), a non-generic data type, or an [object type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_type_glosry.htm "Glossary Entry") can be specified, and the interface parameter is typed as a [reference variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_variable_glosry.htm "Glossary Entry"). The [typing check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) is performed in the same way as for methods.

Hint

Without an explicit typing, a formal parameter is typed implicitly with the fully generic type any.

Optional Parameters   

IMPORTING, CHANGING, and [TABLES parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptables_parameters_obsolete.htm) can be made optional by using optional in the Function Builder. EXPORTING parameters are always optional. IMPORTING and CHANGING parameters can be assigned a replacement parameter (default value in the Function Builder). In the above syntax, this is expressed using the additions OPTIONAL or DEFAULT. For an optional parameter, no actual parameter must be specified when the function module is called. While a formal parameter with the addition OPTIONAL is then initialized as a type-compliant parameter, a formal parameter with the addition DEFAULT assumes the value and type of the replacement parameter def1 def2 ...

If no actual parameter is specified for a generically typed formal parameter with the addition OPTIONAL when it is called, the type of the formal parameter is completed according to [fixed rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_generic.htm).

Hint

Within a function module, the [predicate expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS SUPPLIED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_supplied.htm) can be used to check whether an optional formal parameter was assigned an actual parameter when it was called.