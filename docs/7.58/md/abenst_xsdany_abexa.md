  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Transformation of ABAP Values](javascript:call_link\('abenst_abap_values.htm'\)) →  [ST - tt:value, Elementary Data Objects](javascript:call_link\('abenst_tt_value_elementary.htm'\)) →  [ST - option, Mapping Rules](javascript:call_link\('abenst_option.htm'\)) →  [ST - option, Mapping Rules for XML Fragments](javascript:call_link\('abenst_option_xsdany.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20Mapping%20of%20XML%20Fragments%2C%20ABENST_XSDANY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - Mapping of XML Fragments

The example demonstrates the mapping of XML fragments using ST.

Source Code   

\* Public class definition
CLASS cl\_demo\_st\_xsdany DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS prepare\_fragment
      RETURNING VALUE(xml) TYPE xsdany.
    METHODS serialize
      IMPORTING source        TYPE xsdany
                trafo         TYPE string
                text          TYPE string
      RETURNING VALUE(result) TYPE xstring.
    METHODS deserialize
      IMPORTING source TYPE xstring
                trafo  TYPE string
                text   TYPE string.
    METHODS invoke\_deserialization
      IMPORTING source TYPE xstring
                text   TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_st\_xsdany IMPLEMENTATION.
  METHOD main.
    FINAL(xsdstr) = prepare\_fragment( ).
    FINAL(xmlstr1) = serialize(
      source = xsdstr
      trafo  = 'DEMO\_ST\_XSDANY'
      text =  'ST-Serialization of XML-Fragment' ).
    FINAL(xmlstr2) = serialize(
      source = xsdstr
      trafo  = 'DEMO\_ST\_XSDANY\_LAX'
      text =  'Lax ST-Serialization of XML-Fragment' ).
    FINAL(xmlstr3) = serialize(
      source = xsdstr
      trafo  = 'DEMO\_ST\_XSDANY\_NO\_ROOT'
      text =  'noRoot-ST-Serialization of XML-Fragment' ).
    FINAL(xmlstr4) = serialize(
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
  METHOD prepare\_fragment.
    out->begin\_section( 'XML-Fragment' ).
    xml = cl\_abap\_conv\_codepage=>create\_out( )->convert(
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
ENDCLASS.

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