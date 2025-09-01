  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_serial_deserial.htm) →  [ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_abap_values.htm) →  [ST - tt:value, Elementary Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_value_elementary.htm) →  [ST - option, Mapping Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option.htm) →  [ST - option, Mapping Rules for XML Fragments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option_xsdany.htm) → 

Simple Transformation, Mapping of XML Fragments

The example demonstrates the mapping of XML fragments using ST.

Source Code

REPORT demo\_st\_xsdany.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS prepare\_fragment
       RETURNING VALUE(xml) TYPE xsdany.
    CLASS-METHODS serialize
      IMPORTING source TYPE xsdany
                trafo  TYPE string
                text   TYPE string
      RETURNING VALUE(result) TYPE xstring.
    CLASS-METHODS deserialize
      IMPORTING source TYPE xstring
                trafo  TYPE string
                text   TYPE string.
    CLASS-METHODS invoke\_deserialization
      IMPORTING source TYPE xstring
                text   TYPE string.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    DATA(xsdstr) = prepare\_fragment( ).
    DATA(xmlstr1) = serialize(
      source = xsdstr
      trafo  = 'DEMO\_ST\_XSDANY'
      text =  'ST-Serialization of XML-Fragment' ).
    DATA(xmlstr2) = serialize(
      source = xsdstr
      trafo  = 'DEMO\_ST\_XSDANY\_LAX'
      text =  'Lax ST-Serialization of XML-Fragment' ).
    DATA(xmlstr3) = serialize(
      source = xsdstr
      trafo  = 'DEMO\_ST\_XSDANY\_NO\_ROOT'
      text =  'noRoot-ST-Serialization of XML-Fragment' ).
    DATA(xmlstr4) = serialize(
      source = xsdstr
      trafo  = 'DEMO\_ST\_XSDANY\_LAX\_NO\_ROOT'
      text =  'Lax noRoot-ST-Serialization of XML-Fragment' ).
    out->line( ).
    invoke\_deserialization( source = xmlstr1
                            text   = \`\` ).
    invoke\_deserialization( source = xmlstr2
                            text   = \`lax \` ).
    invoke\_deserialization( source = xmlstr3
                            text   = \`noRoot-\` ).
    invoke\_deserialization( source = xmlstr4
                            text   = \`lax noRoot-\` ).
    out->display( ).  ENDMETHOD.
  METHOD prepare\_fragment.
    out->begin\_section( 'XML-Fragment' ).
    xml = cl\_abap\_codepage=>convert\_to(
          \`<?xml version="1.0" encoding="utf-8" ?>\` &&
          \`<X>\`              &&
            \`Text\`           &&
            \`<X1>Text1</X1>\` &&
            \`<X2>Text1</X2>\` &&
          \`</X>\` ).
    out->write\_xml( xml )->line( ).
  ENDMETHOD.
  METHOD serialize.
    TRY.
        out->begin\_section( text ).
        CALL TRANSFORMATION (trafo)
          SOURCE root = source
          RESULT XML result.
        out->write\_xml( result ).
      CATCH cx\_transformation\_error.
        out->write\_text( 'Error' ).
    ENDTRY.
    out->end\_section( ).
  ENDMETHOD.
  METHOD deserialize.
    DATA result TYPE xsdany.
    TRY.
        out->begin\_section( text ).
        CALL TRANSFORMATION (trafo)
          SOURCE XML source
          RESULT root = result
          OPTIONS clear = 'all'.
        IF result IS NOT INITIAL.
          out->write\_xml( result ).
        ELSE.
          out->write\_text( 'Initial' ).
        ENDIF.
      CATCH cx\_transformation\_error.
        out->write\_text( 'Error' ).
    ENDTRY.
    out->end\_section( ).
  ENDMETHOD.
  METHOD invoke\_deserialization.
    deserialize(
  EXPORTING
    source = source
    trafo  = 'DEMO\_ST\_XSDANY'
    text   = \`ST-Deserialization of \`
             && text && \`ST-result\` ).
    deserialize(
      EXPORTING
        source = source
        trafo  = 'DEMO\_ST\_XSDANY\_LAX'
        text   = \`Lax ST-Deserialization of \`
                 && text && \`ST-result\` ).
    deserialize(
      EXPORTING
        source = source
        trafo  = 'DEMO\_ST\_XSDANY\_NO\_ROOT'
        text   = \`noRoot-ST-Deserialization of \`
                 && text && \`ST-result\` ).
    deserialize(
      EXPORTING
        source = source
        trafo  = 'DEMO\_ST\_XSDANY\_LAX\_NO\_ROOT'
        text   = \`Lax noRoot-ST-Deserialization of \`
                 && text && \`ST-result\` ).
    out->line( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The following transformations are called in this example:

-   DEMO\_ST\_XSDANY

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <node>
      <tt:value ref="ROOT"/>
    </node>
  </tt:template>
</tt:transform>

-   DEMO\_ST\_XSDANY\_LAX

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <node tt:lax="on">
      <tt:value ref="ROOT"/>
    </node>
  </tt:template>
</tt:transform>

-   DEMO\_ST\_XSDANY\_NO\_ROOT

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <node>
      <tt:value option="noRootAttr" ref="ROOT"/>
    </node>
  </tt:template>
</tt:transform>

-   DEMO\_ST\_XSDANY\_LAX\_NO\_ROOT

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <node tt:lax="on">
      <tt:value option="noRootAttr" ref="ROOT"/>
    </node>
  </tt:template>
</tt:transform>