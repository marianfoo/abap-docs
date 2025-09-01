  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Canonical XML Representation (asXML)](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Examples of Mappings](javascript:call_link\('abenasxml_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: asXML - Mapping of XML Fragments, ABENASXML_FRAGMENTS_ABEXA, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

asXML - Mapping of XML Fragments

This example demonstrates the mapping of XML fragments.

Source Code   

REPORT demo\_asxml\_fragment.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS prepare\_fragment
       RETURNING VALUE(xml) TYPE xstring.
    CLASS-METHODS serialize
      IMPORTING source TYPE any
                node   TYPE string
                trafo  TYPE string
                text   TYPE string
      RETURNING VALUE(result) TYPE xstring.
    CLASS-METHODS deserialize
      IMPORTING source TYPE xstring
                node   TYPE string
                trafo  TYPE string
                text   TYPE string
      EXPORTING result TYPE any.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: xstr    TYPE xstring,
          xsdstr  TYPE xsdany,
          xmlstr1 TYPE xstring,
          xmlstr2 TYPE xstring.
    out = cl\_demo\_output=>new( ).
    xstr = prepare\_fragment( ).
    xmlstr1 = serialize(
      source = xstr
      node   = 'ROOT'
      trafo  = 'ID'
      text =  'XSLT-Serialization of XML-Fragment from XSTRING' ).
    xsdstr = xstr.
    xmlstr1 = serialize(
      source = xsdstr
      node   = 'ROOT'
      trafo  = 'ID'
      text =  'XSLT-Serialization of XML-Fragment from XSDANY' &
              ' into node ROOT' ).
    xmlstr2 = serialize(
      source = xsdstr
      node   = 'X'
      trafo  = 'ID'
      text =  'XSLT-Serialization of XML-Fragment from XSDANY' &
              ' into node X' ).
    deserialize(
      EXPORTING
        source = xmlstr1
        node   = 'ROOT'
        trafo  = 'ID'
        text   = 'XSLT-Deserialization of XSLT-result with node ROOT' &
                 ' into XSTRING'
      IMPORTING result = xstr ).
    deserialize(
      EXPORTING
        source = xmlstr2
        node   = 'X'
        trafo  = 'ID'
        text   = 'XSLT-Deserialization of XSLT-result with node X' &
                 ' into XSTRING'
      IMPORTING result = xstr ).
    deserialize(
      EXPORTING
        source = xmlstr1
        node   = 'ROOT'
        trafo  = 'ID'
        text   = 'XSLT-Deserialization of XSLT-result with node ROOT' &
                 ' into XSDANY'
      IMPORTING result = xsdstr ).
    deserialize(
      EXPORTING
        source = xmlstr2
        node   = 'X'
        trafo  = 'ID'
        text   = 'XSLT-Deserialization of XSLT-result with node X' &
                 ' into XSDANY'
      IMPORTING result = xsdstr ).
    deserialize(
      EXPORTING
        source = xmlstr1
        node   = 'X'
        trafo  = 'ID'
        text   = 'XSLT-Deserialization of XSLT-result with node ROOT' &
                 ' into XSDANY using node X'
      IMPORTING result = xsdstr ).
    deserialize(
      EXPORTING
        source = xmlstr2
        node   = 'ROOT'
        trafo  = 'ID'
        text   = 'XSLT-Deserialization of XSLT-result with node X' &
                 ' into XSDANY using node ROOT'
      IMPORTING result = xsdstr ).
    out->display( ).  ENDMETHOD.
  METHOD prepare\_fragment.
    out->begin\_section(
      )->begin\_section( 'XML-Fragment' ).
    xml = cl\_abap\_conv\_codepage=>create\_out( )->convert(
      \`<?xml version="1.0" encoding="utf-8" ?>\` &&
      \`<X>\`            &&
      \`Text\`           &&
      \`<X1>Text1</X1>\` &&
      \`<X2>Text1</X2>\` &&
      \`</X>\` ).
    out->write\_xml( xml
      )->end\_section( ).
  ENDMETHOD.
  METHOD serialize.
    FINAL(source\_tab) = VALUE abap\_trans\_srcbind\_tab(
     ( name = node value = REF #( source ) ) ).
    TRY.
        out->begin\_section( text ).
        CALL TRANSFORMATION (trafo)
          SOURCE (source\_tab)
          RESULT XML result.
        out->write\_xml( result ).
      CATCH cx\_transformation\_error.
        out->write\_text( 'Error' ).
    ENDTRY.
    out->end\_section( ).
  ENDMETHOD.
  METHOD deserialize.
    FINAL(result\_tab) = VALUE abap\_trans\_resbind\_tab(
     ( name = node value = REF #( result ) ) ).
    TRY.
        out->begin\_section( text ).
        CALL TRANSFORMATION (trafo)
          SOURCE XML source
          RESULT (result\_tab)
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
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example demonstrates the serialization and deserialization of XML fragments and their representation in asXML using the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID.

-   First, an XML fragment with the root element X is created in a variable xstr with the type xstring and the result is displayed.
-   The fragment is serialized from the variable xstr of type xstring to an element ROOT as the XML schema type xsd:base64Binary in accordance with the rules for the [mapping of elementary data types](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\)).
-   On the other hand, a serialization of the fragment from the variable xsdstr of type XSDANY adds the attribute asx:root with the content X, that is, the name of the root element of the XML fragment) to the element ROOT and represents the remaining content of the fragment in an unchanged way.
-   A further serialization of the fragment from the variable xsdstr produces the element X. This has the same name as the root element of the XML fragment and so the attribute is not added.
-   Any attempt to deserialize the fragment content to an ABAP variable of type xstring fails for both serialization results, since the attribute specified for NODE when mapping elementary data types is not supported or because no valid asXML format exists for the target variable.
-   Deserializations to variables of type XSDANY are possible in both cases, however, and create the original XML fragment again in the variable.
-   If a nonexistent element is addressed in deserializations, no deserialization is performed as usual.

For information about serializations and deserializations of XML fragments using [Simple Transformations](javascript:call_link\('abenabap_st.htm'\)), see the executable example [ST, Mapping of XML Fragments](javascript:call_link\('abenst_xsdany_abexa.htm'\)).