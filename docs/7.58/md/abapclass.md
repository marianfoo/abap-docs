---
title: "CLASS"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_shortref.htm) Syntax Forms Declaration Part of a Class(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) 1. CLASS class DEFINITION class_options(https://help.sap.com/do
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass.htm"
abapFile: "abapclass.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "abapclass"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclasses_and_interfaces.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS%2C%20ABAPCLASS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLASS

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_shortref.htm)

Syntax Forms

[Declaration Part of a Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm)

1\. CLASS class DEFINITION *\[*[class\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm)*\]*.
    *\[*PUBLIC SECTION.
      *\[*[components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_component.htm)*\]**\]*
    *\[*PROTECTED SECTION.
      *\[*[components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_component.htm)*\]**\]*
    *\[*PRIVATE SECTION.
      *\[*[components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_component.htm)*\]**\]*
  ENDCLASS.

[Implementation Part of a Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm)

2\. CLASS class IMPLEMENTATION.
    ...
    METHOD ...
      ...
    ENDMETHOD.
    ...
  ENDCLASS.

[Publication of Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_deferred.htm)

3\. CLASS class DEFINITION DEFERRED *\[*PUBLIC*\]*.

[Local Friends of Global Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_local_friends.htm)

4\. CLASS class DEFINITION
              LOCAL FRIENDS class1 class2 ...
                            intf1  intf2  ...

Effect

The statement CLASS defines a class class, publishes it, or specifies properties.

-   The complete definition of a class consists of a [declaration part](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) and an [implementation part](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm), which are both introduced by CLASS and ended by ENDCLASS. In the declaration part, the properties of the class are specified, and its components are declared. In the implementation part, the methods of the class are implemented.
-   The variants of CLASS without ENDCLASS are used for the [publication of classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_deferred.htm) in a program and the declaration of [local friends](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_local_friends.htm) of a global class.

The statements CLASS and associated statements ENDCLASS can only be specified in the global context of a program. CLASS and ENDCLASS cannot be listed within classes, procedures, and processing blocks that are implemented internally as a procedure, that is, event blocks for [GET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget-.htm) and [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_selection-screen.htm). This applies in particular to the variants of CLASS listed here, which are not closed using ENDCLASS.

Hints

-   The declaration part of a class, and the variants of CLASS that are not closed using ENDCLASS are handled like other declaration statements (DATA, TYPE, ...). In a processing block without a local context, they are handled like global program declarations and do not close the processing block.
-   The implementation part of a class works like a separate processing block and closes any other processing blocks.
-   The obsolete variant [CLASS ... DEFINITION LOAD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_interface_load.htm) was formerly used to load classes explicitly.

Example

Declaration and implementation of a local class demo with some of the possible components.

CLASS demo DEFINITION CREATE PRIVATE.
  PUBLIC SECTION.
    TYPES result TYPE string.
    CLASS-METHODS new
      RETURNING VALUE(ref) TYPE REF TO demo.
    METHODS main
      RETURNING VALUE(result) TYPE result.
  PRIVATE SECTION.
    METHODS util CHANGING text TYPE result.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD new.
    ref = NEW demo( ).
  ENDMETHOD.
  METHOD main.
    DATA var TYPE result.
    ...
    me->util( CHANGING text = var ).
    ...
  ENDMETHOD.
  METHOD util.
    ...
  ENDMETHOD.
ENDCLASS.

Continue
[CLASS, DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm)
[CLASS, IMPLEMENTATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm)
[ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendclass.htm)
[CLASS, DEFERRED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_deferred.htm)
[CLASS, LOCAL FRIENDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_local_friends.htm)