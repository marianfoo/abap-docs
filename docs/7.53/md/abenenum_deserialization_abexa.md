---
title: "Enumerated Objects, Deserialization"
description: |
  This example demonstrates how a dynamically created XML file is deserialized to an enumerated object(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_object_glosry.htm 'Glossary Entry'). Source Code REPORT. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLAS
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenum_deserialization_abexa.htm"
abapFile: "abenenum_deserialization_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "types", "field-symbol", "abenenum", "deserialization", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Enumerated Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_types_usage.htm) → 

Enumerated Objects, Deserialization

This example demonstrates how a dynamically created XML file is deserialized to an [enumerated object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_object_glosry.htm "Glossary Entry").

Source Code

REPORT.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA input TYPE c LENGTH 3 VALUE 'XL'.
    cl\_demo\_input=>request( CHANGING field = input ).
    input = to\_upper( input ).
    TYPES:
      BEGIN OF ENUM size,
        s, m, l, xl, xxl,
      END OF ENUM size.
    DATA(xml) =
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
      CATCH cx\_transformation\_error INTO DATA(exc).
        cl\_demo\_output=>display( exc->previous->get\_text( ) ).
        RETURN.
    ENDTRY.
    cl\_demo\_output=>display( |Name:  { size
                           }\\nValue: { CONV i( size ) }| ).
    FIELD-SYMBOLS <fs> TYPE size.
    ASSIGN (input) TO <fs>.
    IF sy-subrc <> 0.
      cl\_demo\_output=>display( \`Wrong name\` ).
      RETURN.
    ENDIF.
    ASSERT size = <fs>.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The composition of a a byte string means that it can represent an XML file in asXML format for an enumerated object of the enumerated type size and is deserialized as such. Any invalid entries raise an exception.

Next, the dynamic assignment of a name to a field symbol is displayed. This is successful but the prerequisite here is that the enumerated type size is known in the current context. However, the XML file can be serialized in an enumerated object without static knowledge of the enumerated type.