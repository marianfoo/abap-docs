  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_serial_deserial.htm) →  [ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_abap_values.htm) →  [ST - tt:value, Elementary Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_value_elementary.htm) →  [ST - option, Mapping Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option.htm) →  [ST - option, Mapping Rules for Elementary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option_format.htm) → 

Simple Transformation, Option for Decimal Places

This example demonstrates the display of numeric ABAP types with specifications for decimal places.

Source Code

REPORT demo\_st\_decimals\_option.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      call\_transformation
        CHANGING writer TYPE REF TO cl\_sxml\_string\_writer.
    CLASS-DATA:
      integer   TYPE i            VALUE 1234,
      pack      TYPE p DECIMALS 4 VALUE '1234.5678',
      decf      TYPE decfloat34   VALUE '1234.5678',
      binf      TYPE f            VALUE '1234.5678',
      timestmpl TYPE timestampl,
      datetimel TYPE xsddatetime\_long\_z.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    GET TIME STAMP FIELD timestmpl.
    datetimel = timestmpl.
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
    CALL TRANSFORMATION demo\_st\_decimals\_option
      SOURCE integer      = integer
             pack         = pack
             decf         = decf
             binf         = binf
             timestmpl    = timestmpl
             datetimel    = datetimel
      RESULT XML writer.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example passes various types of numeric ABAP data including the time stamp to the transformation DEMO\_ST\_DECIMALS\_OPTION and provides the result for XML and [JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json.htm). The transformation applies the option [decimals](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option_format.htm) to the ABAP data:

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="INTEGER"/>
  <tt:root name="PACK"/>
  <tt:root name="DECF"/>
  <tt:root name="BINF"/>
  <tt:root name="TIMESTMPL"/>
  <tt:root name="DATETIMEL"/>
  <tt:template>
    <array>
      <object>
        <str name="decimals(2) for INTEGER">
          <tt:value option="decimals(2)"
                    ref="INTEGER"/>
        </str>
        <str name="decimals(2) for PACK">
          <tt:value option="decimals(2)"
                    ref="PACK"/>
        </str>
        <str name="decimals(2) for DECF">
          <tt:value option="decimals(2)"
                    ref="DECF"/>
        </str>
        <str name="decimals(2) for BINF">
          <tt:value option="decimals(2)"
                    ref="BINF"/>
        </str>
        <str name="decimals(2) for TIMESTMPL">
          <tt:value option="decimals(2)"
                    ref="TIMESTMPL"/>
        </str>
        <str name="decimals(2) for DATETIMEL">
          <tt:value option="decimals(2)"
                    ref="DATETIMEL"/>
        </str>
        <str name="decimals(-1) for INTEGER">
          <tt:value option="decimals(-1)"
                    ref="INTEGER"/>
        </str>
        <str name="decimals(-1) for PACK">
          <tt:value option="decimals(-1)"
                    ref="PACK"/>
        </str>
        <str name="decimals(-1) for DECF">
          <tt:value option="decimals(-1)"
                    ref="DECF"/>
        </str>
        <str name="decimals(-1) for BINF">
          <tt:value option="decimals(-1)"
                    ref="BINF"/>
        </str>
        <str name="decimals(-6) for TIMESTMPL">
          <tt:value option="decimals(-6)"
                    ref="TIMESTMPL"/>
        </str>
        <str name="decimals(3) for TIMESTMPL">
          <tt:value option="decimals(3)"
                    ref="TIMESTMPL"/>
        </str>
        <str name="decimals(3) for DATETIMEL">
          <tt:value option="decimals(3)"
                    ref="DATETIMEL"/>
        </str>
        <str name="format(dateTime),decimals(3) for TIMESTMPL">
          <tt:value option="format(dateTime),decimals(3)"
                    ref="TIMESTMPL"/>
        </str>
        <str name="format(ticks),decimals(3) for TIMESTMPL">
          <tt:value option="format(ticks),decimals(3)"
                    ref="TIMESTMPL"/>
        </str>
        <str name="format(uri1),decimals(3) for TIMESTMPL">
          <tt:value option="format(uri1),decimals(3)"
                    ref="TIMESTMPL"/>
        </str>
      </object>
    </array>
  </tt:template>
</tt:transform>

The transformation creates [JSON-XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_xml_glosry.htm "Glossary Entry") to represent both XML and JSON. The time stamp datetimel is typed with the [special domain](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm) XSDDATETIME\_LONG\_Z, and is still treated as such after it has been handled with decimals. For the number timestmpl of type p, the corresponding effect is obtained by using the additional time stamp formats specified with format.