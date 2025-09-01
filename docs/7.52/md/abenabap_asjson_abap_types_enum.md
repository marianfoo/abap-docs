  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) → 

asJSON - Mapping of Enumerated Types

The asJSON representation of [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") corresponds to their [asXML representation](javascript:call_link\('abenabap_xslt_asxml_enum.htm'\)). That is, in asJSON the content of an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") is represented by the name (maximum 30 characters) of the [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") in uppercase letters, and this is represented as a character-like [elementary data object](javascript:call_link\('abenabap_asjson_abap_types_elem.htm'\)).

Example

Serialization of an internal table with enumerated values by JSON.

TYPES:
  BEGIN OF ENUM color STRUCTURE col,
    red, blue, green,
  END OF ENUM color STRUCTURE col.
DATA colors TYPE SORTED TABLE OF color
            WITH UNIQUE KEY table\_line.
DO.
  ASSIGN COMPONENT sy-index OF STRUCTURE col TO FIELD-SYMBOL(<fs>).
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  colors = VALUE #( BASE colors ( <fs> ) ).
ENDDO.
DATA(writer) = cl\_sxml\_string\_writer=>create(
     type = if\_sxml=>co\_xt\_json ).
CALL TRANSFORMATION id SOURCE colors = colors
                       RESULT XML writer.
cl\_demo\_output=>display\_json( writer->get\_output( ) ).

The output is:

{
"COLORS":
\[
  "RED",
  "BLUE",
  "GREEN"
\]
}