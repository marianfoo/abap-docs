  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_functions.htm) →  [FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction.htm) →  [Function Module Interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm) → 

Properties of Interface Parameters

When an interface parameter p1, p2... is defined in Function Builder, properties are determined for the parameter that are reflected in the syntax of parameters and [table\_parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm).

Syntax

... *{* VALUE(p1) *|* REFERENCE(p1) *}*
         *\[* *{*TYPE *\[*REF TO*\]* type*}* *|* [like\_structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_typing_obsolete.htm)
           *\[*OPTIONAL*|**{*DEFAULT def1*}**\]* *\]*
    *{* VALUE(p2) *|* REFERENCE(p2) *}*
         *\[* *{*TYPE *\[*REF TO*\]* type*}* *|* [like\_structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_typing_obsolete.htm)
           *\[*OPTIONAL*|**{*DEFAULT def2*}**\]* *\]*
    ...

The syntax and semantics of VALUE, TYPE, OPTIONAL, and DEFAULT are mainly the same as in the definition of method interfaces by [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_parameters.htm). The obsolete option [like\_structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_typing_obsolete.htm) also exists, which uses LIKE or STRUCTURE to type interface parameters.

Type of Parameter Passing

There are two ways in which parameters can be passed: [pass by reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") and [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry"). Pass by value is selected in Function Builder by selecting pass by value and differs from pass by reference in the above syntax (indicated by REFERENCE( )) by VALUE( ) being specified. If only one name p1 p2 ... is specified, the parameter is passed by reference by default.

-   In pass by reference, the formal parameter points directly to the actual parameter, so that changes to the formal parameters have an immediate effect on the actual parameter.

-   In pass by value, when the function module is called, the formal parameter is created as a copy of the actual parameter (in IMPORTING and CHANGING parameters) or as an initial parameter (in EXPORTING parameters) in the stack. In CHANGING and EXPORTING parameters, the formal parameter is copied to the actual parameter when returning from the function module.

Note the following for the different types of parameter:

-   In IMPORTING, EXPORTING, and CHANGING parameters, pass by reference and pass by value are possible. In [TABLES parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm), only pass by reference is possible.

-   IMPORTING parameters passed by reference must not be overwritten in the function module.

-   An EXPORTING parameter passed by reference behaves like a CHANGING parameter, which means that EXPORTING parameters passed by reference are not initialized when the function module is called. For this reason, no read access to these parameters should be permitted before the first write access. In addition, be careful when adding content to such parameters as, for example, when inserting rows into internal tables.

Note

The time the function module was last edited specifies whether a parameter passed by reference is displayed with or without REFERENCE( ). REFERENCE( ) is displayed for function modules modified in Release 7.31 and later.

Typing of Interface Parameters

The parameter interface of a function module is public across the system. Interface parameters can therefore only be typed with reference to data types from ABAP Dictionary or from the public visible section of global classes. Interface parameters can be typed in Function Builder by selecting either TYPE or TYPE REF TO or by entering [LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction_typing_obsolete.htm).

Typing with TYPE *\[*REF TO*\]* is the recommended typing for interface parameters of function modules. It takes place when TYPE or TYPE REF TO is selected in Function Builder . For IMPORTING, EXPORTING, and CHANGING parameters, any [built-in ABAP type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types.htm) (complete or generic), or any data type from ABAP Dictionary or from the public visibility section of a global class can be specified after TYPE. After TYPE REF TO, the generic data type [data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_generic.htm), a non-generic data type, or an [object type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_type_glosry.htm "Glossary Entry") can be specified and the interface parameter is typed as a [reference variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_variable_glosry.htm "Glossary Entry"). The [typing check](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm) is performed in the same way as for methods.

Note

Without an explicit typing, a formal parameter is typed implicitly with the fully generic type any.

Optional Parameters

IMPORTING, CHANGING, and [TABLES parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_parameters_obsolete.htm) can be made optional by using optional in Function Builder . EXPORTING parameters are always optional. IMPORTING and CHANGING parameters can be assigned a replacement parameter (the default value in Function Builder) . In the above syntax, this is expressed using the additions OPTIONAL or DEFAULT. For an optional parameter, no actual parameter must be entered when the function module is called. While a formal parameter with the addition OPTIONAL is then initialized as a type-friendly parameter, a formal parameter with the addition DEFAULT assumes the value and type of the replacement parameter def1 def2 ...

If no actual parameter is specified for a generically typed formal parameter using the addition OPTIONAL when it is called, the type of the formal parameter is completed according to [fixed rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_generic.htm).

Note

Within a function module, the [predicate expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS SUPPLIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_supplied.htm) can be used to check whether an optional formal parameter was assigned an actual parameter when it was called.