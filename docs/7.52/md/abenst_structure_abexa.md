  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Examples](javascript:call_link\('abenst_abexas.htm'\)) → 

Simple Transformation, Structures

This example demonstrates the symmetrical serialization and deserialization of a nested structure.

Source Code

REPORT demo\_st\_structure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
    DATA(out) = cl\_demo\_output=>new( ).
    TRY.
        "Serialization
        CALL TRANSFORMATION demo\_st\_structure
          SOURCE para = struc1
          RESULT XML data(xml).
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
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the ABAP program, a nested structure struc1 is serialized to xml\_string using the simple transformation DEMO\_ST\_STRUCTURE and deserialized using the same transformation.

The simple transformation DEMO\_ST\_STRUCTURE has the following form:

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

The transformation consists of a template temp that defines the structure of the XML data and establishes relationships between value nodes and components of the structure. The ST statements [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)) and [tt:copy](javascript:call_link\('abenst_tt_copy.htm'\)) are used to serialize and deserialize the structure components. The reverse transformation generates the same content in the structure result as in struc1.