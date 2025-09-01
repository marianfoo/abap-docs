  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Enumerated Objects (Enums)](javascript:call_link\('abenenumerated_types_usage.htm'\)) → 

Enums, Deserialization

This example demonstrates how a dynamically created XML file is deserialized to an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry").

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

A byte string is composed in such a way that it represents an XML file in asXML format for an enumerated object of the enumerated type size and is deserialized as such. Any invalid entries raise an exception.

Next, the dynamic assignment of a name to a field symbol is displayed. This is successful but the prerequisite here is that the enumerated type size is known in the current context. However, the XML file can be deserialized in an enumerated object without static knowledge of the enumerated type.