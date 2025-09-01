---
title: "CLASS-METHODS - IMPORTING, EXPORTING, CHANGING, RAISING"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods_shortref.htm) Syntax CLASS-METHODS meth DEFAULT IGNOREFAIL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_default.htm) IMPORTING parameters(https://help.sap.com/d
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods_general.htm"
abapFile: "abapclass-methods_general.htm"
keywords: ["do", "if", "try", "method", "class", "abapclass", "methods", "general"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_ifac_components.htm) →  [Methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethods.htm) →  [CLASS-METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods.htm) → 

CLASS-METHODS - IMPORTING, EXPORTING, CHANGING, RAISING

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods_shortref.htm)

Syntax

CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_default.htm)*\]*
  *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
  *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_parameters.htm)*\]*
  *\[*CHANGING  [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_parameters.htm)*\]*
  *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

Effect

This statement declares a general [static method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_method_glosry.htm "Glossary Entry") meth. The additions define make an interface method optional, define the parameter interface of the method, and specify the exceptions that the method can raise and propagate. The additions have the same syntax and meaning as those for [general instance methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_general.htm).

Notes

-   Static methods cannot be redefined, which means that they cannot be flagged as abstract or final.
    
-   Static methods are always executed in the class in which they were declared, even if they were called in subclasses or using the names of subclasses.
    

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