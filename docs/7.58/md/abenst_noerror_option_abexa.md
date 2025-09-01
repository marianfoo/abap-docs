  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Transformation of ABAP Values](javascript:call_link\('abenst_abap_values.htm'\)) →  [ST - tt:value, Elementary Data Objects](javascript:call_link\('abenst_tt_value_elementary.htm'\)) →  [ST - option, Mapping Rules](javascript:call_link\('abenst_option.htm'\)) →  [ST - option, Mapping Rules for Elementary Types](javascript:call_link\('abenst_option_format.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20Option%20for%20Invalid%20Values%2C%20ABENST_NOERROR_OPTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - Option for Invalid Values

This example demonstrates how ABAP types are mapped using invalid values.

Source Code   

\* Public class definition
CLASS cl\_demo\_st\_noerror\_option DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS call\_transformation
      CHANGING writer TYPE REF TO cl\_sxml\_string\_writer.
    DATA:
      num      TYPE n LENGTH 8,
      pack     TYPE p LENGTH 8,
      boolean  TYPE xsdboolean,
      date     TYPE xsddate\_d,
      time     TYPE xsdtime\_t,
      langu    TYPE xsdlanguage,
      currcode TYPE xsdcurrcode,
      unitcode TYPE xsdunitcode.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_st\_noerror\_option IMPLEMENTATION.
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
    langu = '�'.
    currcode = '�����'.
    unitcode = '�����'.
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
        out->write( exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    out->write\_xml( xml ).
  ENDMETHOD.
  METHOD call\_transformation.
  ENDMETHOD.
ENDCLASS.

Description   

This example passes various types of ABAP data to the transformation DEMO\_ST\_NOERROR\_OPTION and provides the result for XML. The transformation applies the option [noError](javascript:call_link\('abenst_option_format.htm'\)) to the ABAP data:

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

The transformation creates [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") to represent both XML and JSON. The example passes an invalid value to the transformation for each of the types used. If the option [noError](javascript:call_link\('abenst_option_format.htm'\)) were not specified, each of the invalid types would raise an exception.