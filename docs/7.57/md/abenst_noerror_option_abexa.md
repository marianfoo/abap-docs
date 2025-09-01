  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_serial_deserial.htm) →  [ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_abap_values.htm) →  [ST - tt:value, Elementary Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_value_elementary.htm) →  [ST - option, Mapping Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option.htm) →  [ST - option, Mapping Rules for Elementary Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option_format.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - Option for Invalid Values, ABENST_NOERROR_OPTION_ABEXA, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ST - Option for Invalid Values

This example demonstrates how ABAP types are mapped using invalid values.

Source Code   

REPORT demo\_st\_noerror\_option.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      call\_transformation
        CHANGING writer TYPE REF TO cl\_sxml\_string\_writer.
    CLASS-DATA:
      num      TYPE n LENGTH 8,
      pack     TYPE p LENGTH 8,
      boolean  TYPE xsdboolean,
      date     TYPE xsddate\_d,
      time     TYPE xsdtime\_t,
      langu    TYPE xsdlanguage,
      currcode TYPE xsdcurrcode,
      unitcode TYPE xsdunitcode.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FIELD-SYMBOLS <hex> TYPE x.
    num = CONV d( \`  1234  \` ).
    pack = -1234.
    ASSIGN pack TO <hex> CASTING.
    REPLACE SECTION OFFSET 7 LENGTH 1 OF <hex> WITH
            CONV xstring( '40' ) IN BYTE MODE.
    boolean = '1'.
    date = 'XXXXXXXX'.
    time = 'XXXXXX'.
    langu = '§'.
    currcode = '§§§§§'.
    unitcode = '§§§§§'.
    TRY.
        CALL TRANSFORMATION demo\_st\_noerror\_option
          SOURCE n           = num
                 p           = pack
                 boolean     = boolean
                 xsddate\_d   = date
                 xsdtime\_t   = time
                 xsdlanguage = langu
                 xsdcurrcode = currcode
                 xsdunitcode = unitcode
          RESULT XML FINAL(xml).
      CATCH cx\_transformation\_error INTO FINAL(exc).
        cl\_demo\_output=>display( exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    cl\_demo\_output=>display\_xml( xml ).  ENDMETHOD.
  METHOD call\_transformation.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example passes various types of ABAP data to the transformation DEMO\_ST\_NOERROR\_OPTION and provides the result for XML. The transformation applies the option [noError](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option_format.htm) to the ABAP data:

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="N"/>
  <tt:root name="P"/>
  <tt:root name="BOOLEAN"/>
  <tt:root name="XSDDATE\_D"/>
  <tt:root name="XSDTIME\_T"/>
  <tt:root name="XSDLANGUAGE"/>
  <tt:root name="XSDCURRCODE"/>
  <tt:root name="XSDUNITCODE"/>
  <tt:template>
    <array>
      <object>
        <str name="n">
          <tt:value option="noError" ref="N"/>
        </str>
        <str name="p">
          <tt:value option="noError" ref="P"/>
        </str>
        <bool name="boolean">
          <tt:value option="noError" ref="BOOLEAN"/>
        </bool>
        <str name="xsddate\_d">
          <tt:value option="noError" ref="XSDDATE\_D"/>
        </str>
        <str name="xsdtime\_t">
          <tt:value option="noError" ref="XSDTIME\_T"/>
        </str>
        <str name="xsdlanguage">
          <tt:value option="noError" ref="XSDLANGUAGE"/>
        </str>
        <str name="xsdcurrcode">
          <tt:value option="noError" ref="XSDCURRCODE"/>
        </str>
        <str name="xsdunitcode">
          <tt:value option="noError" ref="XSDUNITCODE"/>
        </str>
      </object>
    </array>
  </tt:template>
</tt:transform>

The transformation creates [JSON-XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_xml_glosry.htm "Glossary Entry") to represent both XML and JSON. The example passes an invalid value to the transformation for each of the types used. If the option [noError](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option_format.htm) were not specified, each of the invalid types would raise an exception.