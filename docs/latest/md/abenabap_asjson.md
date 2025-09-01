  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json.htm) →  [JSON - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json_trafos.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asJSON%20-%20Canonical%20JSON%20Representation%2C%20ABENABAP_ASJSON%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

asJSON - Canonical JSON Representation

The canonical JSON representation asJSON is the format of [JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjson_glosry.htm "Glossary Entry") data that is produced by a serialization of ABAP data using the [identity transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID, or that is required for a deserialization using the identity transformation.

asJSON is based closely on [asXML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml.htm). Conceptually, an asJSON representation is produced by a restructuring of the asXML representation of this ABAP data to a [JSON-XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjson_xml_glosry.htm "Glossary Entry") representation, while keeping all value content. This means the same basic rules apply as for asXML. In particular, XML schema data types for the mapping of ABAP data types are also used in asJSON.

Description of the asJSON format:

-   [General asJSON Format](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_asjson_general.htm)
-   [Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_asjson_abap_types.htm)

Hints

-   asJSON only occurs in the [identity transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID. In particular, asJSON is not generally needed for self-written transformations for JSON data. [JSON-XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjson_xml_glosry.htm "Glossary Entry") is used directly instead.
-   A JSON-XML representation of asJSON is known as [asJSON-XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasjson_xml_glosry.htm "Glossary Entry"). asJSON-XML is not used as an intermediate format in transformations, but the asJSON-XML linked with an asJSON representation can be created to analyze it and compare it with asXML.

Continue
[asJSON - General Format](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_asjson_general.htm)
[asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_asjson_abap_types.htm)
[asJSON - Mapping Additional XML Schema Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_asjson_schema.htm)