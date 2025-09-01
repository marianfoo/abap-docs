  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [asXML - Canonical XML Representation](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML, Examples of Mappings](javascript:call_link\('abenasxml_abexas.htm'\)) → 

asXML, Transformation ID vs. Simple Transformation

This example demonstrates the differences between the transformation ID and a simple transformation.

Source Code

REPORT demo\_asxml\_id\_vs\_st LINE-SIZE 160 NO STANDARD PAGE HEADING.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: str TYPE string,
          xml TYPE string,
          len TYPE i.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'XSLT ID' ).
    str = \`     \`.
    len = strlen( str ).
    out->write\_text( |String length before: { len }| ).
    CALL TRANSFORMATION id SOURCE node = str
                           RESULT XML xml.
    out->write\_xml( xml ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT node = str.
    len = strlen( str ).
    out->write\_text( |String length after: { len }| ).
    out->next\_section( 'ST tt:copy' ).
    str = \`     \`.
    len = strlen( str ).
    out->write\_text( |String length before: { len }| ).
    CALL TRANSFORMATION demo\_asxml\_copy SOURCE root = str
                                        RESULT XML xml.
    out->write\_xml( xml ).
    CALL TRANSFORMATION demo\_asxml\_copy SOURCE XML xml
                                        RESULT root = str.
    len = strlen( str ).
    out->write\_text( |String length after: { len }|
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A text string with five blanks is serialized and deserialized to a [simple transformation](javascript:call_link\('abenabap_st.htm'\)) DEMO\_ASXML\_COPY using the predefined [identity transformation ID](javascript:call_link\('abenabap_xslt_id.htm'\)) and the statement [tt:copy](javascript:call_link\('abenst_tt_copy.htm'\)). The transformation ID contains the statement <xsl:strip-space elements="\*"/> , which means that the blanks are ignored in deserializations and the text string then has the length 0. After deserializations with the simple transformation, the blanks are kept in the text string.