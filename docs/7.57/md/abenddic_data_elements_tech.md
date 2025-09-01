---
title: "DDIC - Technical Properties of Data Elements"
description: |
  A data element describes an elementary data type(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenelementary_data_type_glosry.htm 'Glossary Entry') or a reference type(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_type_glosry.htm 'Glossary Entry') with th
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_elements_tech.htm"
abapFile: "abenddic_data_elements_tech.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddic", "elements", "tech"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_elements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Technical Properties of Data Elements, ABENDDIC_DATA_ELEMENTS_TECH, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Technical Properties of Data Elements

A data element describes an [elementary data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") or a [reference type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_type_glosry.htm "Glossary Entry") with the following technical properties:

-   Elementary type
    
    A data element that describes an elementary type has a [built-in data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) from the ABAP Dictionary, a length, and, if necessary, a number of decimal places as its technical properties. These technical properties are defined either directly in the data element or are inherited from a [domain](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_domains.htm).
    
-   Reference type
    
    A data element that describes a reference type is either a type for a [data reference variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") or for an [object reference variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry").
    
    -   The [static type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_type_glosry.htm "Glossary Entry") for a data reference variable is either the generic type DATA, any existing data type from the ABAP Dictionary (including [DDIC database tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) or [views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_views.htm)), or a directly specified [built-in data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).
    -   The [static type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_type_glosry.htm "Glossary Entry") for an object reference variable is either the generic type OBJECT or an existing global class or a global interface from the [class library](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_library_glosry.htm "Glossary Entry").

Hints

-   When existing data elements are modified, all users of the data element are also affected. In particular, [foreign keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm) can become inconsistent when used for fields of DDIC database tables, which makes [adjustments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_adj.htm) necessary.
-   Global reference types in the ABAP Dictionary can be used to specify types in ABAP programs. They cannot, however, be used for fields of database tables or in CDS entities.

Example

The data element S\_CONN\_ID inherits its technical properties (data type NUMC, length 4) from the domain S\_CONN\_ID. The data element S\_CONN\_ID has documentation and further texts that describe its semantics. It is used as a data type of many table fields that match these semantic properties, such as the column CONNID of the DDIC database tables SPFLI, SBOOK, and SFLIGHT.