  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [ABAP Objects - Methods](javascript:call_link\('abenmethods.htm'\)) →  [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS-METHODS%2C%20IMPORTING%2C%20EXPORTING%2C%20CHANGING%20%2C%20RAISING%2C%20ABAPCLASS-METHODS_GENERAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion%20for%20improvement:)

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