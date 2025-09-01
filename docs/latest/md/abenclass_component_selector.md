---
title: "Class Component Selector"
description: |
  A static component(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_component_glosry.htm 'Glossary Entry') comp of a class is accessed using the following name: class=>comp In this case, no instance of the class has to be created. The symbol => is the class component sel
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_component_selector.htm"
abapFile: "abenclass_component_selector.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abenclass", "component", "selector"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperands_data_objects.htm) →  [Notations for Single Operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperands_names.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Class%20Component%20Selector%2C%20ABENCLASS_COMPONENT_SELECTOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Class Component Selector

A [static component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_component_glosry.htm "Glossary Entry") comp of a class is accessed using the following name:

class=>comp

In this case, no instance of the class has to be created. The symbol \=> is the class component selector. The name class of a class must be to the left of the class component selector. The name comp of the component must be to the right of the class component selector.

The class component selector can also be used to access the data types and constants of an interface:

intf=>type, intf=>const

The name intf of an interface must be to the left of the class component sector. The name type of a data type defined using TYPES or a constant const defined using CONSTANTS must be to the right of the object component selector.

Hint

It is also possible to access the static components of a class using the object component selector if an instance of the class was created.

Example

Declaration of a class factory and access to its static attributeoref.

CLASS factory DEFINITION CREATE PRIVATE.
  PUBLIC SECTION.
    CLASS-DATA oref TYPE REF TO factory.
    CLASS-METHODS class\_constructor.
    METHODS do\_something.
ENDCLASS.
CLASS factory IMPLEMENTATION.
  METHOD class\_constructor.
    CREATE OBJECT oref.
  ENDMETHOD.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    ...
    factory=>oref->do\_something( ).
    ...
  ENDMETHOD.
ENDCLASS.