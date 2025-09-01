  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_serial_deserial.htm) →  [ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_abap_values.htm) → 

ST - tt:value, Structures

Syntax

<tt:value *\[*ref="node"*\]* *\[*map="..."*\]*
                       *\[*length*|*minLength*|*maxLength="len"*\]*
                       *\[*xsd-type...*\]* />

Effect

The serialization and deserialization of structures results directly from the [addressing rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_addressing.htm), because the structures can be mapped directly to the [tree structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_trees.htm) that start from the data roots. When the current node is bound to an elementary component of an ABAP structure, the structure can be processed with tt:value just like an [elementary data object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_value_elementary.htm).

Examples

The three ST programs from the sections

-   [Current Node](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_ref.htm)

-   [Addressing the Current Node](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_addressing_current_node.htm)

-   [Addressing Subnodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_addressing_subnodes.htm)

can transform a nested ABAP structure [symmetrically](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_symmetry.htm). The following program can call these three ST programs:

DATA: BEGIN OF struc1,
        col1(10) TYPE c VALUE 'ABCDEFGHIJ',
        col2     TYPE i VALUE 111,
        BEGIN OF struc2,
          col1 TYPE d VALUE '20040126',
          col2 TYPE t VALUE '084000',
        END OF struc2,
      END OF struc1.
DATA: xml\_string TYPE string,
      result LIKE struc1.
TRY.
    CALL TRANSFORMATION ...
      SOURCE root = struc1
      RESULT XML xml\_string.
    cl\_abap\_browser=>show\_xml( EXPORTING xml\_string = xml\_string ).
    CALL TRANSFORMATION ...
      SOURCE XML xml\_string
      RESULT root = result.
    IF struc1 <> result.
      MESSAGE 'Deserialization <> Serialization' TYPE 'I'.
    ENDIF.
  CATCH cx\_st\_error.
  ...
ENDTRY.

The result of the serialization is the same XML data for all three simple transformations:

<X>
  <X1>ABCDEFGHIJ</X1>
  <X2>111</X2>
  <X3>
    <X1>2004-01-26</X1>
    <X2>08:40:00</X2>
  </X3>
</X>