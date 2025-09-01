---
title: "ABAP CDS - Type Definitions"
description: |
  CDS type definitions(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_type_definition_glosry.htm 'Glossary Entry') are defined in the CDS type definition language (CDS TDL(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl_glosry.htm 'Glossary Entry')) of A
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl.htm"
abapFile: "abencds_tdl.htm"
keywords: ["do", "if", "try", "data", "types", "abencds", "tdl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Type%20Definitions%2C%20ABENCDS_TDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Type Definitions

[CDS type definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_type_definition_glosry.htm "Glossary Entry") are defined in the CDS type definition language ([CDS TDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl_glosry.htm "Glossary Entry")) of [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") using the statement [DEFINE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_type.htm). The following [CDS user-defined types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_user_defined_type_glosry.htm "Glossary Entry") are available:

-   [CDS simple types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_type_glosry.htm "Glossary Entry") for defining [elementary data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenelementary_data_type_glosry.htm "Glossary Entry").
-   [CDS enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry") for defining [enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry").

When [TDL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentdl_source_code_glosry.htm "Glossary Entry") with a CDS type definition is activated, the CDS type is created in form of a metadata representation in system tables. The CDS types themselves are not transported. Instead they are created after the transport of a TDL source code when this code is activated in the target system. Each CDS type is defined in a separate piece of TDL source code in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"). In the development tools, CDS types are only visible as CDS definitions in their TDL source code. The [ABAP runtime framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") and other frameworks access the internal metadata of CDS types. For example, the ABAP runtime framework recognizes a CDS type as a [global type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_type_glosry.htm "Glossary Entry"). Therefore, the name of a CDS type must be unique.

CDS types can be enriched with metadata using [CDS annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry").

CDS types can be released as stable APIs under the following release contracts:

-   [C1 contract, system internal use](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_contract_glosry.htm "Glossary Entry")
-   [C2 contract, use as remote API](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc2_contract_glosry.htm "Glossary Entry")

For details, see the topic [C1 Contract Rules for Providing CDS Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_provider_rules_cds_type.htm) and the topic [C2 Contract Rules for Providing CDS Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc2_provider_rules_cds_type.htm).

The following sections describe the possible CDS types and the associated TDL statements:

-   [CDS simple types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_types.htm)
-   [CDS enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enumeration_types.htm)

Hints

-   CDS types are in the namespace of all [global types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.
-   Once a piece of TDL source code has been activated, its name is stable and cannot be changed.
-   The TDL source code of a type definition for a CDS type is edited in a different editor than the [DDL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a [CDS data definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_definition_glosry.htm "Glossary Entry"), the [DDLA source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddla_source_code_glosry.htm "Glossary Entry") of a [CDS annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"), the [DDLX source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") of a [CDS metadata extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"), and the [DCL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a [CDS role](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_role_glosry.htm "Glossary Entry") for [CDS access control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control_glosry.htm "Glossary Entry"). The [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry") documentation describes how to create the different types of source code.
-   [CDS metadata extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") are not supported for CDS types. If required, metadata extensions can be added to a CDS type when the simple type is used in another CDS object, such as a CDS view entity.

Continue
[ABAP CDS - TDL for Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_types.htm)