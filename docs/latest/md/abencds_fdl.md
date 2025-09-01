---
title: "ABAP CDS - Function Definitions"
description: |
  CDS function definitions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_function_definition_glosry.htm 'Glossary Entry') are defined in the CDS function definition language (CDS FDL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl_glosry.htm 'G
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl.htm"
abapFile: "abencds_fdl.htm"
keywords: ["do", "if", "try", "data", "types", "abencds", "fdl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Function%20Definitions%2C%20ABENCDS_FDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Function Definitions

[CDS function definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_function_definition_glosry.htm "Glossary Entry") are defined in the CDS function definition language ([CDS FDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl_glosry.htm "Glossary Entry")) of [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry"). CDS function definitions allow the definition of user-defined [CDS functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_function_glosry.htm "Glossary Entry") that encapsulate algorithms into reusable code which can be used operand positions of [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"). CDS function definitions can be used to define the following [CDS functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_function_glosry.htm "Glossary Entry"):

-   [CDS scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_function_glosry.htm "Glossary Entry")

Hints

-   [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry") are [CDS data definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_definition_glosry.htm "Glossary Entry") defined in [DDL source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). CDS table functions encapsulate AMDP functions, but they are [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") and they belong to the technical category of [CDS data definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_definition_glosry.htm "Glossary Entry"). CDS table functions have the characteristics of CDS data definitions: they can be used as data source in other CDS entities and for typing in ABAP using the TYPE statement. Despite the name, a CDS table function is not a CDS function definition.
-   The FDL source code of a function definition for a CDS function is edited in a different editor than the [DDL source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a [CDS data definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_definition_glosry.htm "Glossary Entry"), the [DDLA source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddla_source_code_glosry.htm "Glossary Entry") of a [CDS annotation definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"), the [DDLX source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") of a [CDS metadata extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"), and the [DCL source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry") for [CDS access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control_glosry.htm "Glossary Entry"). The [ADT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") documentation describes how to create the different types of source code.

Continue
[ABAP CDS - CDS Functions, Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl_concept.htm)
[ABAP CDS - FDL for Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_functions.htm)