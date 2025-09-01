  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Transformation of ABAP Values](javascript:call_link\('abenst_abap_values.htm'\)) →  [ST - tt:value, Elementary Data Objects](javascript:call_link\('abenst_tt_value_elementary.htm'\)) →  [ST - option, Mapping Rules](javascript:call_link\('abenst_option.htm'\)) →  [ST - option, Mapping Rules for Elementary Types](javascript:call_link\('abenst_option_format.htm'\)) → 

Simple Transformation, Formatting Options

This example demonstrates how ABAP types are mapped using formatting options.

Source Code

REPORT demo\_st\_format\_option.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      call\_transformation
        CHANGING writer TYPE REF TO cl\_sxml\_string\_writer.
    CLASS-DATA:
      boolean        TYPE abap\_bool,
      hex            TYPE xstring VALUE '0123456789ABCDEF',
      datetime       TYPE timestamp,
      datetime\_long  TYPE timestampl,
      datetimeoffset TYPE c LENGTH 18,
      datetimelocal  TYPE c LENGTH 14,
      guid\_16        TYPE x LENGTH 16,
      guid\_32        TYPE c LENGTH 32,
      guid\_22        TYPE c LENGTH 22,
      qname1         TYPE string VALUE \`{uri\_1}name1\`,
      qname2         TYPE string VALUE \`{uri\_2}name2\`,
      uri            TYPE string VALUE \`:;<=>?\[\\\]^\_\`\`{|}~\`,
      uri1           TYPE string VALUE \`Rock'n'Roll & Blues\`,
      language       TYPE sy-langu VALUE 'E',
      currcode       TYPE tcurc-waers VALUE 'EUR',
      unitcode       TYPE t006-msehi VALUE 'TON',
      number         TYPE p DECIMALS 3 VALUE '123.000',
      numtext        TYPE n LENGTH 10 VALUE '0000123456'.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    GET TIME STAMP FIELD datetime.
    GET TIME STAMP FIELD datetime\_long.
    datetimeoffset = |{ datetime WIDTH = 14 }+180|.
    datetimelocal = datetime.
    DATA(system\_uuid) = cl\_uuid\_factory=>create\_system\_uuid( ).
    TRY.
        guid\_16 = system\_uuid->create\_uuid\_x16( ).
        guid\_32 = system\_uuid->create\_uuid\_c32( ).
        guid\_22 = system\_uuid->create\_uuid\_c22( ).
      CATCH cx\_uuid\_error.
        CLEAR guid\_16.
        CLEAR guid\_32.
        CLEAR guid\_22.
    ENDTRY.
    DATA(out) = cl\_demo\_output=>new( )->next\_section( 'XML' ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
            type = if\_sxml=>co\_xt\_xml10 ).
    call\_transformation( CHANGING writer = writer ).
    DATA(result) = writer->get\_output( ).
    out->write\_xml( result
       )->next\_section( 'JSON' ).
    writer = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    call\_transformation( CHANGING writer = writer ).
    result = writer->get\_output( ).
    out->write\_json( result
      )->display( ).  ENDMETHOD.
  METHOD call\_transformation.
    CALL TRANSFORMATION demo\_st\_format\_option
      SOURCE boolean        = boolean
             hex            = hex
             time           = sy-timlo
             date           = sy-datlo
             datetime       = datetime
             datetime\_long  = datetime\_long
             datetimeoffset = datetimeoffset
             datetimelocal  = datetimelocal
             guid\_16        = guid\_16
             guid\_32        = guid\_32
             guid\_22        = guid\_22
             qname1         = qname1
             qname2         = qname2
             uri            = uri
             urifull        = uri
             uri1           = uri1
             language       = language
             currcode       = currcode
             unitcode       = unitcode
             number         = number
             numtext        = numtext
      RESULT XML writer.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example passes various types of ABAP data to the transformation DEMO\_ST\_FORMAT\_OPTION and provides the result for XML and [JSON](javascript:call_link\('abenabap_json.htm'\)). The transformation applies those [formatting options](javascript:call_link\('abenst_option_format.htm'\)) to the ABAP data that match its data type:

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="BOOLEAN"/>
  <tt:root name="HEX"/>
  <tt:root name="TIME"/>
  <tt:root name="DATE"/>
  <tt:root name="DATETIME"/>
  <tt:root name="DATETIME\_LONG"/>
  <tt:root name="DATETIMEOFFSET"/>
  <tt:root name="DATETIMELOCAL"/>
  <tt:root name="GUID\_16"/>
  <tt:root name="GUID\_32"/>
  <tt:root name="GUID\_22"/>
  <tt:root name="QNAME1"/>
  <tt:root name="QNAME2"/>
  <tt:root name="URI"/>
  <tt:root name="URIFULL"/>
  <tt:root name="URI1"/>
  <tt:root name="LANGUAGE"/>
  <tt:root name="CURRCODE"/>
  <tt:root name="UNITCODE"/>
  <tt:root name="NUMBER"/>
  <tt:root name="NUMTEXT"/>
  <tt:template>
    <array>
      <object>
        <bool name="boolean">
          <tt:value option="format(boolean)"
                    ref="BOOLEAN"/>
        </bool>
        <str name="hex">
          <tt:value option="format(hex)"
                    ref="HEX"/>
        </str>
        <str name="dateTime for TIMESTAMP">
          <tt:value option="format(dateTime)"
                    ref="DATETIME"/>
        </str>
        <str name="dateTime for TIMESTAMPL">
          <tt:value option="format(dateTime)"
                    ref="DATETIME\_LONG"/>
        </str>
        <str name="dateTimeOffset for c, LENGTH 18">
          <tt:value option="format(dateTimeOffset)"
                    ref="DATETIMEOFFSET"/>
        </str>
        <str name="dateTimeOffset for TIMESTAMP">
          <tt:value option="format(dateTimeOffset)"
                    ref="DATETIME"/>
        </str>
        <str name="dateTimeOffset for TIMESTAMPL">
          <tt:value option="format(dateTimeOffset)"
                    ref="DATETIME\_LONG"/>
        </str>
        <str name="dateTimeLocal for c, LENGTH 14">
          <tt:value option="format(dateTimeLocal)"
                    ref="DATETIMELOCAL"/>
        </str>
        <str name="dateTimeLocal for TIMESTAMP">
          <tt:value option="format(dateTimeLocal)"
                    ref="DATETIME"/>
        </str>
        <str name="dateTimeLocal for TIMESTAMPL">
          <tt:value option="format(dateTimeLocal)"
                    ref="DATETIME\_LONG"/>
        </str>
        <str name="ticks for d">
          <tt:value option="format(ticks)"
                    ref="DATE"/>
        </str>
        <str name="ticks for TIMESTAMP">
          <tt:value option="format(ticks)"
                    ref="DATETIME"/>
        </str>
        <str name="ticks for TIMESTAMPL">
          <tt:value option="format(ticks)"
                    ref="DATETIME\_LONG"/>
        </str>
        <str name="ticksOffset for c, LENGTH 18">
          <tt:value option="format(ticksOffset)"
                    ref="DATETIMEOFFSET"/>
        </str>
        <str name="ticksOffset for TIMESTAMP">
          <tt:value option="format(ticksOffset)"
                    ref="DATETIME"/>
        </str>
        <str name="ticksOffset for TIMESTAMPL">
          <tt:value option="format(ticksOffset)"
                    ref="DATETIME\_LONG"/>
        </str>
        <str name="duration">
          <tt:value option="format(duration)"
                    ref="TIME"/>
        </str>
        <str name="guid for X, LENGTH 16">
          <tt:value option="format(guid)"
                    ref="GUID\_16"/>
        </str>
        <str name="guid for C, LENGTH 32">
          <tt:value option="format(guid)"
                    ref="GUID\_32"/>
        </str>
        <str name="guid for C, LENGTH 22">
          <tt:value option="format(guid)"
                    ref="GUID\_22"/>
        </str>
        <str name="qName, first">
          <tt:value option="format(qName)"
                    ref="QNAME1"/>
        </str>
        <str name="qName, second">
          <tt:value option="format(qName)"
                    ref="QNAME2"/>
        </str>
        <str name="uri">
          <tt:value option="format(uri)"
                    ref="URI"/>
        </str>
        <str name="uriFull">
          <tt:value option="format(uriFull)"
                    ref="URIFULL"/>
        </str>
        <str name="uri1 for string">
          <tt:value option="format(uri1)"
                    ref="URI1"/>
        </str>
        <str name="uri1 for xstring">
          <tt:value option="format(uri1)"
                    ref="HEX"/>
        </str>
        <str name="uri1 for t">
          <tt:value option="format(uri1)"
                    ref="TIME"/>
        </str>
        <str name="uri1 for TIMESTAMP">
          <tt:value option="format(uri1)"
                    ref="DATETIME"/>
        </str>
        <str name="uri1 for TIMESTAMPL">
          <tt:value option="format(uri1)"
                    ref="DATETIME\_LONG"/>
        </str>
        <str name="uri2 for guid\_16">
          <tt:value option="format(uri2)"
                    ref="GUID\_16"/>
        </str>
        <str name="uri2 for guid\_32">
          <tt:value option="format(uri2)"
                    ref="GUID\_32"/>
        </str>
        <str name="uri2 for d">
          <tt:value option="format(uri2)"
                    ref="DATE"/>
        </str>
        <str name="uri2 for TIMESTAMP">
          <tt:value option="format(uri2)"
                    ref="DATETIME"/>
        </str>
        <str name="uri2 for TIMESTAMPL">
          <tt:value option="format(uri2)"
                    ref="DATETIME\_LONG"/>
        </str>
        <str name="language">
          <tt:value option="format(language),noError"
                    ref="LANGUAGE"/>
        </str>
        <str name="currCode">
          <tt:value option="format(currCode),noError"
                    ref="CURRCODE"/>
        </str>
        <str name="unitCode">
          <tt:value option="format(unitCode),noError"
                    ref="UNITCODE"/>
        </str>
        <str name="currency=CURRCODE">
          <tt:value option="format(currency=CURRCODE)"
                    ref="NUMBER"/>
        </str>
        <str name="unit=UNITCODE">
          <tt:value option="format(unit=UNITCODE)"
                    ref="NUMBER"/>
        </str>
        <str name="alpha">
          <tt:value option="format(alpha)"
                    ref="NUMTEXT"/>
        </str>
      </object>
    </array>
  </tt:template>
</tt:transform>

The transformation creates [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") to represent both XML and JSON. It should be noted that the formats ticks and ticksOffset only apply to JSON, where they create the JSON representation of UNIX time stamps for OData.