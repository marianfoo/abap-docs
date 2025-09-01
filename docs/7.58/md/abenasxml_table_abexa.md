---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_asxml_table DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_asxml_table IMPLEMENTATION. METHOD main. DATA itab TYPE TABLE OF i. itab =
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_table_abexa.htm"
abapFile: "abenasxml_table_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "internal-table", "abenasxml", "table", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml.htm) →  [asXML - Examples of Mappings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asXML%20-%20Mapping%20of%20Tables%2C%20ABENASXML_TABLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

asXML - Mapping of Tables

This example demonstrates the mapping of internal tables.

Source Code   

\* Public class definition
CLASS cl\_demo\_asxml\_table DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_asxml\_table IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE TABLE OF i.
    itab = VALUE #( FOR j = 1 UNTIL j > 3 ( j ) ).
    CALL TRANSFORMATION id
                        SOURCE table = itab
                        RESULT XML FINAL(xmlstr).
    out->write\_xml( xmlstr ).
  ENDMETHOD.
ENDCLASS.

Description   

Every line of the internal table itab is mapped to a subelement item of the table.