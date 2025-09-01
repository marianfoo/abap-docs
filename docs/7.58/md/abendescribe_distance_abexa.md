  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescribe_field.htm) →  [DESCRIBE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe.htm) →  [DESCRIBE DISTANCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe_distance.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Determining%20Data%20Object%20Distances%2C%20ABENDESCRIBE_DISTANCE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Determining Data Object Distances

The example demonstrates how the distance between two data objects can be determined at runtime.

Source Code   

\* Public class definition
CLASS cl\_demo\_describe\_distance DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_describe\_distance IMPLEMENTATION.
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
             struc       AND struc-comp3 INTO FINAL(off) IN BYTE MODE,
             struc-comp3 AND struc-comp5 INTO FINAL(len) IN BYTE MODE.
    ASSIGN: struc TO <hex> CASTING,
            <hex>+off(len) TO <result> CASTING.
    out->write(
      |Offset off is { off }.\\n| &&
      |Length len is { len }.\\n| &&
      |<result> points to "{ <result> }".| ).
  ENDMETHOD.
ENDCLASS.

Description   

Determines the offset and length of a character-like fragment within the struc structure in bytes, accesses the fragment using an offset/length access, and assigns it to a field symbol of type c. Since the structure is not character-like only, the offset/length access takes place using a field symbol, otherwise a syntax error occurs. The field symbol is of the type x, since offsets and lengths are determined in bytes. The field symbol <result> points to the fragment Hey you!.