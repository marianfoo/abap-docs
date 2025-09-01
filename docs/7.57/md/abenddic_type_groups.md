---
title: "DDIC - Type Pools"
description: |
  A type pool(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_pool_glosry.htm 'Glossary Entry') is an ABAP program managed by the ABAP Dictionary that is initiated by the statement TYPE-POOL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype-pool.htm) and that
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_type_groups.htm"
abapFile: "abenddic_type_groups.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddic", "type", "groups"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_types.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Type Pools, ABENDDIC_TYPE_GROUPS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

DDIC - Type Pools

A [type pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_pool_glosry.htm "Glossary Entry") is an ABAP program managed by the ABAP Dictionary that is initiated by the statement [TYPE-POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype-pool.htm) and that contains ABAP statements for defining globally visible [data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_type_glosry.htm "Glossary Entry"), [constants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstant_glosry.htm "Glossary Entry"), and [macros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmacro_glosry.htm "Glossary Entry"). For more information about type pools, see [ABAP Program Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_type_oview.htm) and under the statement [TYPE-POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype-pool.htm). A type pool and its types, constants, and macros defined there do not have any semantic properties except a short text and any [comments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomment_glosry.htm "Glossary Entry") in the source code. The name of a type pool can have a maximum of five characters, can only consist of letters, numbers, and underscores, and must start with a letter.

Hints

-   Types in type pools are the predecessors for general type definitions in the ABAP Dictionary, which include reference types and table types as well as elementary data types.
-   Since it is possible to also define data types and constants in the public visibility section of global [classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_glosry.htm "Glossary Entry") or in [interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoo_intf_glosry.htm "Glossary Entry"), type pools are obsolete and should no longer be created. Existing type pools can still be used.
-   A disadvantage of type pools are their missing semantic properties when compared to the other dictionary objects. These properties can also be defined in global classes.
-   The name of a type pool can also be prefixed with a [namespace prefix](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenname_space_prefix_glosry.htm "Glossary Entry") (/.../) of a [prefix namespace](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprefix_name_space_glosry.htm "Glossary Entry"). This prefix can have a maximum of four characters.

Example

A type pool that is frequently used in ABAP programs is ABAP, which contains many types and constants predefined for [common usage](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_predef_types.htm).