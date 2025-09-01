  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendescribe_field.htm) →  [DESCRIBE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdescribe.htm) →  [DESCRIBE DISTANCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdescribe_distance.htm) → 

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

Determines the offset and length, in bytes, of a character-like fragment within the struc structure, accesses the fragment using an offset/length access, and assigns it a field symbol of type c. Since the structure is not just character-like, the offset/length access takes place using a field symbol. If not, a syntax error occurs. The field symbol is of the type x, since offsets and lengths are determined in bytes. The field symbol <result> points to the fragment "Hey you!".