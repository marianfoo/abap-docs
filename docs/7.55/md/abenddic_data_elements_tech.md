---
title: "DDIC - Technical Attributes of Data Elements"
description: |
  A data element describes an elementary data type(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenelementary_data_type_glosry.htm 'Glossary Entry') or a reference type(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreference_type_glosry.htm 'Glossary Entry') with th
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements_tech.htm"
abapFile: "abenddic_data_elements_tech.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddic", "elements", "tech"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) → 

DDIC - Technical Attributes of Data Elements

A data element describes an [elementary data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") or a [reference type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreference_type_glosry.htm "Glossary Entry") with the following technical attributes:

-   Elementary type

A data element that describes an elementary type has a [built-in data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) from ABAP Dictionary, a length, and an (optional) number of fractional digits as its technical attributes. These technical attributes are defined either directly in the data element or are applied from a [domain](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm).

-   Reference type

A data element that describes a reference type is either a type for a [data reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") or for an [object reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry").

-   The [static type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_type_glosry.htm "Glossary Entry") for a data reference variable is either the generic type DATA, any data type from ABAP Dictionary (including [DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) or [views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_views.htm)), or a directly specified [built-in data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

-   The [static type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_type_glosry.htm "Glossary Entry") for an object reference variable is either the generic type OBJECT or a global class or global interface from the [class library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_library_glosry.htm "Glossary Entry").

Hints

-   When existing data elements are modified, all consumers of the data element are also affected. In particular, [foreign keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_forkey.htm) can become inconsistent when used for fields of DDIC database tables, which makes [adjustments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_adj.htm) necessary.

-   Global reference types in ABAP Dictionary can be used to specify types in ABAP programs. They cannot, however, be used for fields of database tables or in CDS entities.

Example

The data element S\_CONN\_ID takes its technical attributes (data type NUMC, length 4) from the domain S\_CONN\_ID. The data element S\_CONN\_ID has documentation and further texts that describe its semantics. It is used as a data type of many table fields that match these semantic attributes, such as the column CONNID of the DDIC database tables SPFLI, SBOOK, and SFLIGHT.