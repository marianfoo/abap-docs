---
title: "DDIC - Built-In Data Types"
description: |
  The built-in data types in ABAP Dictionary are used as follows: -   To construct self-defined data types (data elements, structures, including DDIC database tables and DDIC views, and table types) in the ABAP Dictionary. They can also be used in CDS DDL(https://help.sap.com/doc/abapdocu_756_index_
version: "7.56"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types_intro.htm"
abapFile: "abenddic_builtin_types_intro.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "builtin", "intro"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) → 

DDIC - Built-In Data Types

The built-in data types in ABAP Dictionary are used as follows:

-   To construct self-defined data types (data elements, structures, including DDIC database tables and DDIC views, and table types) in the ABAP Dictionary. They can also be used in [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_cds_glosry.htm "Glossary Entry"). With the exception of some type specifications in ABAP SQL they cannot be addressed directly in ABAP programs. Here, they can only be addressed by using dictionary objects or CDS objects and this is why they are also called external data types.
-   They have special technical and semantic attributes that support modeling of semantic models.
-   They represent an interface between the built-in ABAP types and all possible vendor-specific data types of the supported databases. A corresponding mapping takes place in both directions.

The following sections describe the attributes of the built-in data types in ABAP Dictionary:

-   [Overview of All Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)
-   [Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types_prop.htm)
-   [Use of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_type_usage.htm)

Example

The DDIC database table DEMO\_DDIC\_TYPES has columns with many different built-in data types of ABAP Dictionary. The executable example [Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_types_abexa.htm) shows how to fill each of these columns with literal values.

Continue
[DDIC - Overview of All Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)
[DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types_prop.htm)
[DDIC - Use of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_type_usage.htm)
![Example](exa.gif "Example") [DDIC - Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_types_abexa.htm)