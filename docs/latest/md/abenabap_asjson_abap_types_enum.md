  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json.htm) →  [JSON - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_asjson_abap_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asJSON%20-%20Mapping%20of%20Enumerated%20Types%2C%20ABENABAP_ASJSON_ABAP_TYPES_ENUM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

asJSON - Mapping of Enumerated Types

The asJSON representation of [enumerated types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenum_type_glosry.htm "Glossary Entry") corresponds to their [asXML representation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_enum.htm). This means that, in asJSON, the content of an [enumerated object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_object_glosry.htm "Glossary Entry") is represented by the uppercase name of the [enumerated value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_value_glosry.htm "Glossary Entry") with a maximum of 30 characters, and this value is represented as a character-like [elementary data object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_asjson_abap_types_elem.htm).

Example

Serialization of an internal table with enumerated values by JSON.

TYPES:
  BEGIN OF ENUM color STRUCTURE col,
    red, blue, green,
  END OF ENUM color STRUCTURE col.
DATA colors TYPE SORTED TABLE OF color
            WITH UNIQUE KEY table\_line.
DO.
  ASSIGN col-(sy-index) TO FIELD-SYMBOL(<fs>).
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  colors = VALUE #( BASE colors ( <fs> ) ).
ENDDO.
FINAL(writer) = cl\_sxml\_string\_writer=>create(
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