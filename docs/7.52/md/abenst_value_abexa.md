  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_serial_deserial.htm) →  [ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_abap_values.htm) →  [ST - tt:value, Elementary Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_value_elementary.htm) → 

Simple Transformation, tt:value

Serializes and deserializes elementary data objects

Source Code

REPORT demo\_st\_value.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: dat         TYPE d,
          tim         TYPE t,
          time\_stamp  TYPE xsddatetime\_z.
    dat = sy-datlo.
    tim = sy-timlo.
    CONVERT DATE dat TIME tim INTO TIME STAMP time\_stamp TIME ZONE \`\`.
    CALL TRANSFORMATION demo\_st\_value
      SOURCE date = dat
             time = tim
             datetime = time\_stamp
      RESULT XML data(xml).
    cl\_demo\_output=>display\_xml( xml ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Note that time\_stamp is defined with the special type XSDDATETIME\_Z from ABAP Dictionary. This type ensures that a special mapping is used for the time stamp. The transformation in question, DEMO\_ST\_VALUE, shows the mapping of elementary ABAP data types for date, time, and classic time stamp to XML and back.

<?sap.transform simple?>
<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="DATE"/>
  <tt:root name="TIME"/>
  <tt:root name="DATETIME"/>
  <tt:template>
    <Date\_and\_Time>
      <Date>
        <tt:value ref="DATE"/>
      </Date>
      <Time>
        <tt:value ref="TIME"/>
      </Time>
      <DateTime>
        <tt:value ref="DATETIME"/>
      </DateTime>
    </Date\_and\_Time>
  </tt:template>
</tt:transform>

The transformation is [symmetrical](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_symmetry.htm).