  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Transformation of ABAP Values](javascript:call_link\('abenst_abap_values.htm'\)) →  [ST - tt:value, Elementary Data Objects](javascript:call_link\('abenst_tt_value_elementary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - tt:value, ABENST_VALUE_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

ST - tt:value

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
      RESULT XML FINAL(xml).
    cl\_demo\_output=>display\_xml( xml ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The called transformation DEMO\_ST\_VALUE shows the mapping of elementary ABAP data types for date, time, and time stamp to XML and back.

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

It should be noted that tsp is defined with the special type XSDDATETIME\_Z from the ABAP Dictionary. This type ensures that a special mapping is used for time stamps in packed numbers. This happens by default for the built-in time stamp type utclong.

The transformation is [symmetrical](javascript:call_link\('abenst_symmetry.htm'\)).