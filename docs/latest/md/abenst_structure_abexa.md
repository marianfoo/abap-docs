  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) →  [ST - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20Structures%2C%20ABENST_STRUCTURE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - Structures

This example demonstrates the symmetrical serialization and deserialization of a nested structure.

Source Code   

\* Public class definition
CLASS cl\_demo\_st\_structure DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_st\_structure IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF struc1,
            col1 TYPE c LENGTH 10 VALUE 'ABCDEFGHIJ',
            col2 TYPE i VALUE 111,
            BEGIN OF struc2,
              col1 TYPE d VALUE '20040126',
              col2 TYPE t VALUE '084000',
            END OF struc2,
          END OF struc1,
          result LIKE struc1.
    TRY.
        "Serialization
        CALL TRANSFORMATION demo\_st\_structure
          SOURCE para = struc1
          RESULT XML DATA(xml).
        out->write\_xml( xml ).
        "Deserialization
        CALL TRANSFORMATION demo\_st\_structure
          SOURCE XML xml
          RESULT para = result.
        IF result = struc1.
          out->write\_text( 'Symmetric transformation!' ).
        ENDIF.
      CATCH cx\_st\_error.
        out->write\_text( 'Error in Simple Transformation' ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

In the ABAP class, a nested structure struc1 is serialized to xml\_string using the Simple Transformation DEMO\_ST\_STRUCTURE and deserialized using the same transformation.

The Simple Transformation DEMO\_ST\_STRUCTURE has the following form:

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates"
              template="temp" version="0.1">
  <tt:root name="PARA"/>
  <tt:template name="temp">
    <X>
      <X1>
        <tt:value ref="PARA.COL1"/>
      </X1>
      <X2>
        <tt:value ref="PARA.COL2"/>
      </X2>
      <X2>
        <tt:copy ref="PARA.STRUC2"/>
      </X2>
    </X>
  </tt:template>
</tt:transform>

The transformation consists of a template temp that defines the structure of the XML data and establishes relationships between value nodes and components of the structure. The ST statements [tt:value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_value_elementary.htm) and [tt:copy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_copy.htm) are used to serialize and deserialize the structure components. The reverse transformation creates the same content in the structure result as in struc1.