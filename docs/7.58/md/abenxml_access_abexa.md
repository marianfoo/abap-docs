---
title: "Access to XML Using Class Libraries"
description: |
  This example demonstrates parsing and rendering using an example class. Source Code  Public class definition CLASS cl_demo_cl_xml_access DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenxml_access_abexa.htm"
abapFile: "abenxml_access_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abenxml", "access", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_libs.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Access%20to%20XML%20Using%20Class%20Libraries%2C%20ABENXML_ACCESS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Access to XML Using Class Libraries

This example demonstrates parsing and rendering using an example class.

Source Code   

\* Public class definition
CLASS cl\_demo\_cl\_xml\_access DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cl\_xml\_access IMPLEMENTATION.
  METHOD main.
    DATA(index) = 1.
    cl\_demo\_input=>new( )->request( CHANGING field = index ).
    SELECT FROM scarr
           FIELDS \*
           INTO TABLE @FINAL(itab) UP TO 3 ROWS.
    CALL TRANSFORMATION id SOURCE itab = itab
                        RESULT XML FINAL(xml).
    out->next\_section( 'Original XML'
    )->write\_xml( xml ).
    TRY.
        FINAL(nodes) = cl\_demo\_xml\_access=>parse\_xml( xml ).
      CATCH cx\_demo\_xml\_access.
        out->write( 'Exception in parsing' ).
        RETURN.
    ENDTRY.
    out->next\_section( 'Node Table'
     )->write\_data( nodes ).
    TRY.
        cl\_demo\_xml\_access=>get\_tree\_nodes(
          EXPORTING nodes = nodes
                    index = index
          IMPORTING subtree =     FINAL(subtree)
                    descendants = FINAL(descendants)
                    ancestors   = FINAL(ancestors)
                    siblings    = FINAL(siblings)  ).
        out->next\_section( |Subtree starting with node { index }|
        )->write\_data( subtree
        )->next\_section( |Descendants of node { index }|
        )->write\_data( descendants
        )->next\_section( |Ancestors of node { index }|
        )->write\_data( ancestors
        )->next\_section( |Siblings of node { index }|
        )->write\_data( siblings ).
      CATCH cx\_demo\_xml\_access.
        out->write( 'Exception in hierarchy data' ).
        RETURN.
    ENDTRY.
    TRY.
        out->next\_section( 'Rendered XML' )->write\_xml(
          cl\_demo\_xml\_access=>render\_xml( nodes ) ).
      CATCH cx\_demo\_xml\_access.
        out->write( 'Exception in rendering' ).
        RETURN.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The example class CL\_DEMO\_XML\_ACCESS wraps methods of the [sXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensxml_library_glosry.htm "Glossary Entry").

-   Method PARSE\_XML allows the parsing of the relevant data of an XML file from a byte string into an internal table whose structure is defined in that class.
-   Method RENDER\_XML allows the rendering of the data from such a node table into an XML file in a byte string.
-   Method GET\_HIERARCHY\_DATA allows retrieving information about the hierarchical relations between the XML nodes stored in the internal table. For that, the internal table is accessed with [hierarchy functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_function_glosry.htm "Glossary Entry") of ABAP SQL.

As an example, an XML file is accessed that results from a transformation of an internal table into [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_glosry.htm "Glossary Entry") format by using the predefined identity transformation [ID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_id.htm).