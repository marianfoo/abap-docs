---
title: "DDIC - Type Pools"
description: |
  A type pool is an ABAP program managed by the ABAP Dictionary that is initiated by the statement TYPE-POOL(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype-pool.htm) and that contains ABAP statements for defining globally visible data types(https://help.sap.com/doc/abapdocu_75
version: "7.56"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_type_groups.htm"
abapFile: "abenddic_type_groups.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddic", "type", "groups"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_types.htm) → 

DDIC - Type Pools

A type pool is an ABAP program managed by the ABAP Dictionary that is initiated by the statement [TYPE-POOL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype-pool.htm) and that contains ABAP statements for defining globally visible [data types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_type_glosry.htm "Glossary Entry"), [constants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstant_glosry.htm "Glossary Entry"), and [macros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmacro_glosry.htm "Glossary Entry"). For more information about type pools, see [ABAP Program Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_type_oview.htm) and under the statement [TYPE-POOL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype-pool.htm). A type pool and its types, constants, and macros defined there do not have any semantic attributes except a short text and any [comments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomment_glosry.htm "Glossary Entry") in the source code. The name of a type pool can have a maximum of five characters, can only consist of letters, numbers, and underscores, and must start with a letter.

Hints

-   Types in type pools are the predecessors for general type definitions in the ABAP Dictionary, which include reference types and table types as well as elementary data types.
-   Since it is possible to also define data types and constants in the public visibility section of global [classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_glosry.htm "Glossary Entry") or in [interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoo_intf_glosry.htm "Glossary Entry"), type pools are obsolete and should no longer be created. Existing type pools can still be used.
-   A disadvantage of type pools are their missing semantic attributes when compared to the other dictionary objects. These attributes can also be defined in global classes.
-   The name of a type pool can also be prefixed with a [namespace prefix](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenname_space_prefix_glosry.htm "Glossary Entry") (/.../) of a [prefix namespace](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprefix_name_space_glosry.htm "Glossary Entry"). This prefix can have a maximum of four characters.

Example

A type pool that is frequently used in ABAP programs is ABAP itself, which contains many low-level types and constants. The disadvantage of this type pool is that the entire type pool must be loaded, even if only a few types and constants are needed, such as the type abap\_bool and the associated constants abap\_true and abap\_false.