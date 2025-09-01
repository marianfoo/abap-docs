---
title: "CLASS-METHODS, IMPORTING, EXPORTING, CHANGING, RAISING"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods_shortref.htm) Syntax CLASS-METHODS meth DEFAULT IGNOREFAIL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_default.htm) IMPORTING parameters(https://help.sap.com/d
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods_general.htm"
abapFile: "abapclass-methods_general.htm"
keywords: ["do", "if", "try", "method", "class", "abapclass", "methods", "general"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethods.htm) →  [CLASS-METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CLASS-METHODS, IMPORTING, EXPORTING, CHANGING , RAISING, ABAPCLASS-METHODS_GENERAL, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CLASS-METHODS, IMPORTING, EXPORTING, CHANGING, RAISING

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods_shortref.htm)

Syntax

CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_default.htm)*\]*
  *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
  *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)*\]*
  *\[*CHANGING  [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)*\]*
  *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

Effect

This statement declares a general [static method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_method_glosry.htm "Glossary Entry") meth. The additions make an interface method optional, define the parameter interface of the method, and specify which exceptions the method can raise or propagate. The additions have the same syntax and meaning as those for [general instance methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm).

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