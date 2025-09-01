  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_serial_deserial.htm) →  [ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_abap_values.htm) →  [ST - tt:value, Elementary Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_value_elementary.htm) → 

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
    DATA: dat TYPE d,
          tim TYPE t,
          ts  TYPE utclong,
          tsp TYPE xsddatetime\_z.
    dat = sy-datlo.
    tim = sy-timlo.
    CONVERT DATE dat
            TIME tim
            TIME ZONE \`\`
            INTO UTCLONG ts.
    tsp = cl\_abap\_tstmp=>utclong2tstmp\_short( ts ).
    CALL TRANSFORMATION demo\_st\_value
      SOURCE date      = dat
             time      = tim
             datetime1 = ts
             datetime2 = tsp
      RESULT XML DATA(xml).
    cl\_demo\_output=>display\_xml( xml ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The transformation in question, DEMO\_ST\_VALUE, shows the mapping of elementary ABAP data types for date, time, and time stamp to XML and back.

<?sap.transform simple?>
<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="DATE"/>
  <tt:root name="TIME"/>
  <tt:root name="DATETIME1"/>
  <tt:root name="DATETIME2"/>
  <tt:template>
    <Date\_and\_Time>
      <Date>
        <tt:value ref="DATE"/>
      </Date>
      <Time>
        <tt:value ref="TIME"/>
      </Time>
      <DateTime1>
        <tt:value ref="DATETIME1"/>
      </DateTime1>
      <DateTime2>
        <tt:value ref="DATETIME2"/>
      </DateTime2>
    </Date\_and\_Time>
  </tt:template>
</tt:transform>

Note that tsp is defined with the special type XSDDATETIME\_Z from ABAP Dictionary. This type ensures that a special mapping is used for time stamps in packed numbers. This happens by default for the built-in time stamp type utclong.

The transformation is [symmetrical](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_symmetry.htm).