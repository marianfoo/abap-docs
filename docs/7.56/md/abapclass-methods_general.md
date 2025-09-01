  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [ABAP Objects - Methods](javascript:call_link\('abenmethods.htm'\)) →  [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)) → 

CLASS-METHODS, IMPORTING, EXPORTING, CHANGING, RAISING

[Short Reference](javascript:call_link\('abapclass-methods_shortref.htm'\))

Syntax

CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))*\]*
  *\[*IMPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\)) *\[*PREFERRED PARAMETER p*\]**\]*
  *\[*EXPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
  *\[*CHANGING  [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
  *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

Effect

This statement declares a general [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") meth. The additions make an interface method optional, define the parameter interface of the method, and specify which exceptions the method can raise or propagate. The additions have the same syntax and meaning as those for [general instance methods](javascript:call_link\('abapmethods_general.htm'\)).

Hints

-   Static methods cannot be redefined, which means that they cannot be flagged as abstract or final.
-   Static methods are always executed in the class in which they were declared, even if they are called in subclasses or using the names of subclasses.

Example

Declaration of a static method with input/output parameters.

CLASS xml DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS
      escape\_xml
        CHANGING
          xml TYPE xstring.
    ...
ENDCLASS.