  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [ABAP Objects - Methods](javascript:call_link\('abenmethods.htm'\)) →  [METHODS](javascript:call_link\('abapmethods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20RETURNING%2C%20ABAPMETHODS_FUNCTIONAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

METHODS, RETURNING

[Short Reference](javascript:call_link\('abapmethods_shortref.htm'\))

Syntax

METHODS meth *\[*[ABSTRACT*|*FINAL*\]*](javascript:call_link\('abapmethods_abstract_final.htm'\))
            *|**\[*[DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))*\]*
  *\[*IMPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\)) *\[*PREFERRED PARAMETER p*\]**\]*
  *\[*EXPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
  *\[*CHANGING  [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
  RETURNING VALUE(r) [typing](javascript:call_link\('abentyping_complete.htm'\))
  *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

Addition:

[... RETURNING VALUE(r) typing](#!ABAP_ONE_ADD@1@)

Effect

This statement declares a [functional](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") instance method meth. The same applies to the additions ABSTRACT, FINAL, DEFAULT, IMPORTING, EXPORTING, CHANGING, RAISING, and EXCEPTIONS as to [general instance methods](javascript:call_link\('abapmethods_general.htm'\)).

A functional method can be [called as a function](javascript:call_link\('abapcall_method_functional.htm'\)) in a suitable read position.

Addition   

... RETURNING VALUE(r) typing

Effect

In addition to any other formal parameters, a functional method has exactly one return value r declared using the addition RETURNING. The return value must be passed by [value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") using VALUE and be completely typed using [typing](javascript:call_link\('abentyping_complete.htm'\)). In the typing check, [special rules](javascript:call_link\('abentyping_return_values.htm'\)) apply, depending on whether an explicit actual parameter is bound using [RECEIVING](javascript:call_link\('abapcall_method_parameters.htm'\)) or the functional method is used in an operand position.

Hints

-   In the methods of a class, one method of the class [hides](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\)) a [built-in function](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry") with the same name. The same applies in functional method calls. Functional method calls and specified built-in functions have similar syntax, which means it is important that a functional method is not given the same name as a built-in function.
-   Functional methods are allowed as [actual parameters](javascript:call_link\('abentyping_arith_expr.htm'\)) of methods, which enables the option of nesting method calls in an operand position.
-   The return value of a functional method is always passed by value, which means it is passed only if the functional method is completed without errors.
-   In functional methods, the statement [RETURN](javascript:call_link\('abapreturn.htm'\)) can be used to assign the result of an expression [expr](abapreturn.htm#!ABAP_ONE_ADD@1@) to the return value when terminating the method.

Example

Declaration of a functional method with input parameter and return value. The method is called functionally as an actual parameter for the input parameter of another method.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS
      meth
        IMPORTING
          name          TYPE string
        RETURNING
          VALUE(result) TYPE string.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    result = |Hello { name }!|.
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>display(
      NEW cls( )->meth( CONV #( sy-uname ) ) ).
  ENDMETHOD.
ENDCLASS.