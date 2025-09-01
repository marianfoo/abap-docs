  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson.htm) → 

asJSON - Mapping of ABAP Data Types

Named data objects other than reference variables are represented in asJSON as the content of the following object components:

[“bn1":...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_general.htm)
["bn1":...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_general.htm)
[...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_general.htm)

An additional object is implemented for the objects referenced by reference variables:

["%heap":...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_general.htm)

Depending on the ABAP data type, serializations map the value of named data objects to a particular JSON representation; deserializations operate in the opposite direction:

-   [Mapping of Elementary ABAP Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_abap_types_elem.htm)

-   [Mapping of Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_abap_types_struc.htm)

-   [Mapping of Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_abap_types_table.htm)

-   [Mapping of Enumerated Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_abap_types_enum.htm)

-   [Mapping of Reference Variables and Referenced Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asxml_references.htm)

Continue
[asJSON - Mapping of Elementary ABAP Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_abap_types_elem.htm)
[asJSON - Mapping of Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_abap_types_struc.htm)
[asJSON - Mapping of Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_abap_types_table.htm)
[asJSON - Mapping of Enumerated Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_abap_types_enum.htm)
[asJSON - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asxml_references.htm)