---
title: "Notes"
description: |
  -   asJSON only occurs in the identity transformation(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm 'Glossary Entry') ID. In particular, asJSON is not generally needed for self-written transformations for JSON; JSON-XML(https://help.sap.com/doc/abapdocu_752_i
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson.htm"
abapFile: "abenabap_asjson.htm"
keywords: ["do", "while", "try", "data", "types", "abenabap", "asjson"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json_trafos.htm) → 

asJSON - Canonical JSON Representation

The canonical XML representation asXML is the format of [JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_glosry.htm "Glossary Entry") data that is produced by a serialization of ABAP data using the [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID, or that is required for a deserialization using the identity transformation.

asJSON is based closely on [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm). From a conceptional perspective, a asJSON representation is produced by a restructuring of the asXML representation of this ABAP data to a [JSON-XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_xml_glosry.htm "Glossary Entry") representation, while keeping all value content. This means the same basic rules apply as for asXML. In particular, XML schema data types for the mapping of ABAP data types are also used in asJSON.

Description of the asJSON format:

-   [General asJSON Format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_general.htm)

-   [Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_abap_types.htm)

Notes

-   asJSON only occurs in the [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID. In particular, asJSON is not generally needed for self-written transformations for JSON; [JSON-XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_xml_glosry.htm "Glossary Entry") is used directly instead.

-   A JSON-XML representation of asJSON is known as [asJSON-XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasjson_xml_glosry.htm "Glossary Entry"). asJSON-XML is not used as an intermediate format in transformations, but the asJSON-XML associated with a asJSON representation can be created to analyze it and compare it with asXML.

Continue
[asJSON - General Format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_general.htm)
[asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_abap_types.htm)
[asJSON - Mapping Additional XML Schema Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_schema.htm)