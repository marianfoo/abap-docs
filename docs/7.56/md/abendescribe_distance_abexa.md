---
title: "Determining Data Object Distances"
description: |
  The example demonstrates how the distance between two data objects can be determined at runtime. Source Code REPORT demo_describe_distance. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: BEGIN OF struc, comp1 TYPE i, comp2 TYPE x
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendescribe_distance_abexa.htm"
abapFile: "abendescribe_distance_abexa.htm"
keywords: ["select", "do", "method", "class", "data", "field-symbol", "abendescribe", "distance", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendescribe_field.htm) →  [DESCRIBE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe.htm) →  [DESCRIBE DISTANCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_distance.htm) → 

Determining Data Object Distances

The example demonstrates how the distance between two data objects can be determined at runtime.

Source Code

REPORT demo\_describe\_distance.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF struc,
            comp1 TYPE i,
            comp2 TYPE x LENGTH 1,
            comp3 TYPE c LENGTH 4 VALUE 'Hey',
            comp4 TYPE c LENGTH 4 VALUE 'you!',
            comp5 TYPE x,
          END OF struc.
    FIELD-SYMBOLS: <hex>    TYPE x,
                   <result> TYPE c.
    DESCRIBE DISTANCE BETWEEN:
             struc       AND struc-comp3 INTO DATA(off) IN BYTE MODE,
             struc-comp3 AND struc-comp5 INTO DATA(len) IN BYTE MODE.
    ASSIGN: struc TO <hex> CASTING,
            <hex>+off(len) TO <result> CASTING.
    cl\_demo\_output=>display(
      |Offset off is { off }.\\n| &&
      |Length len is { len }.\\n| &&
      |<result> points to "{ <result> }".| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Determines the offset and length of a character-like fragment within the struc structure in bytes, accesses the fragment using an offset/length access, and assigns it to a field symbol of type c. Since the structure is not character-like only, the offset/length access takes place using a field symbol, otherwise a syntax error occurs. The field symbol is of the type x, since offsets and lengths are determined in bytes. The field symbol <result> refers to the fragment "Hey you!".