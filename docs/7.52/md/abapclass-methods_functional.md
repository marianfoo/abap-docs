---
title: "CLASS-METHODS - RETURNING"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods_shortref.htm) Syntax CLASS-METHODS meth DEFAULT IGNOREFAIL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_default.htm) IMPORTING parameters(https://help.sap.com/d
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods_functional.htm"
abapFile: "abapclass-methods_functional.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abapclass", "methods", "functional"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_ifac_components.htm) →  [Methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethods.htm) →  [CLASS-METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods.htm) → 

CLASS-METHODS - RETURNING

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods_shortref.htm)

Syntax

CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_default.htm)*\]*
  *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
  *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_parameters.htm)*\]*
  *\[*CHANGING  [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_parameters.htm)*\]*
  RETURNING VALUE(r) [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_syntax.htm)
  *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

Effect

This statement declares a [functional](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry") [static method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_method_glosry.htm "Glossary Entry") meth. The additions have exactly the same syntax and meaning as those for [functional instance methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_functional.htm).

Example

The class circle contains two functional static methods, circumference and area, which work with the constant pi.

CLASS circle DEFINITION.
  PUBLIC SECTION.
    CONSTANTS pi TYPE decfloat34
                 VALUE '3.141592653589793238462643383279503'.
    CLASS-METHODS: circumference IMPORTING r TYPE decfloat34
                                 RETURNING value(c) TYPE decfloat34,
                   area          IMPORTING r TYPE decfloat34
                                 RETURNING value(a) TYPE decfloat34.
ENDCLASS.
CLASS circle IMPLEMENTATION.
  METHOD circumference.
    c = 2 \* pi \* r.
  ENDMETHOD.
  METHOD area.
    a = pi \* r \*\* 2.
  ENDMETHOD.
ENDCLASS.
DATA: circ   TYPE decfloat34,
      area   TYPE decfloat34,
      radius TYPE decfloat34.
START-OF-SELECTION.
  radius = '1.00'.
  circ = circle=>circumference( radius ).
  area = circle=>area( radius ).