---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_deserialize_enums DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_deserialize_enums IMPLEMENTATION. METHOD main. DATA input TYPE c LENG
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenum_deserialization_abexa.htm"
abapFile: "abenenum_deserialization_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "types", "field-symbol", "abenenum", "deserialization", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Enumerated Objects (enum)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_types_usage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20enum%2C%20Deserialization%2C%20ABENENUM_DESERIALIZATION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

enum, Deserialization

This example demonstrates how a dynamically created XML file is deserialized to an [enumerated object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_object_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_deserialize\_enums DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_deserialize\_enums IMPLEMENTATION.
  METHOD main.
    DATA input TYPE c LENGTH 3 VALUE 'XL'.
    cl\_demo\_input=>new( )->request( CHANGING field = input ).
    input = to\_upper( input ).
    TYPES:
      BEGIN OF ENUM size,
        s, m, l, xl, xxl,
      END OF ENUM size.
    FINAL(xml) =
      cl\_abap\_conv\_codepage=>create\_out( )->convert(
        \`<asx:abap version="1.0"\` &&
        \` xmlns:asx="http://www.sap.com/abapxml">\` &&
        \`  <asx:values>\` &&
        \`  <ENUM>\` && input && \`</ENUM>\` &&
        \`  </asx:values>\` &&
        \`</asx:abap>\` ) ##no\_text.
    DATA size TYPE size.
    TRY.
        CALL TRANSFORMATION id
                            SOURCE XML xml
                            RESULT enum = size.
      CATCH cx\_transformation\_error INTO FINAL(exc).
        out->write( exc->previous->get\_text( ) ).
        RETURN.
    ENDTRY.
    out->write( |Name:  { size
                           }\\nValue: { CONV i( size ) }| ).
    FIELD-SYMBOLS <fs> TYPE size.
    ASSIGN (input) TO <fs>.
    IF sy-subrc <> 0.
      out->write( \`Wrong name\` ).
      RETURN.
    ENDIF.
    ASSERT size = <fs>.
  ENDMETHOD.
ENDCLASS.

Description   

A byte string is composed in such a way that it represents an XML file in asXML format for an enumerated object of the enumerated type size and is deserialized as such. Any invalid entries raise an exception.

The dynamic assignment of the name to a field symbol shown in the following also produces the required result, but requires that the enumeration type size is known in the current context. The XML file, on the other hand, can be deserialized into an enumeration object without static knowledge of the enumeration type.