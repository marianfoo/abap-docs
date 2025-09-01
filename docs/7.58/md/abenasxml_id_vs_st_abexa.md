---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_asxml_id_vs_st DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_asxml_id_vs_st IMPLEMENTATION. METHOD main. DATA: str TYPE string, x
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_id_vs_st_abexa.htm"
abapFile: "abenasxml_id_vs_st_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "abenasxml", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml.htm) →  [asXML - Examples of Mappings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asXML%20-%20Transformation%20ID%20vs.%20Simple%20Transformation%2C%20ABENASXML_ID_VS_ST_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

asXML - Transformation ID vs. Simple Transformation

This example demonstrates the differences between the transformation ID and a Simple Transformation.

Source Code   

\* Public class definition
CLASS cl\_demo\_asxml\_id\_vs\_st DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_asxml\_id\_vs\_st IMPLEMENTATION.
  METHOD main.
    DATA: str TYPE string,
          xml TYPE string,
          len TYPE i.
    out->begin\_section( 'XSLT ID' ).
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
    out->write\_text( |String length after: { len }| ).
  ENDMETHOD.
ENDCLASS.

Description   

A text string with five blanks is serialized and deserialized in a [Simple Transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_st.htm) DEMO\_ASXML\_COPY using the predefined [identity transformation ID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_id.htm) and the statement [tt:copy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_copy.htm). The transformation ID contains the statement <xsl:strip-space elements="\*"/> , which means that the blanks are ignored in deserializations and the text string then has the length 0. After deserializations with the Simple Transformation, the blanks exist in the text string.