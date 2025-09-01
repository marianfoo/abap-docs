---
title: "RAP - Abstract BDEF Extension"
description: |
  An abstract BDEF extension(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_abs_bdef_ext_glosry.htm 'Glossary Entry') is a repository object that extends an abstract behavior definition(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_bdef_g
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_abstract.htm"
abapFile: "abenbdl_extensibility_abstract.htm"
keywords: ["do", "if", "try", "abenbdl", "extensibility", "abstract"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Abstract%20BDEF%20Extension%2C%20ABENBDL_EXTENSIBILITY_ABSTRACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Abstract BDEF Extension

An [abstract BDEF extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_abs_bdef_ext_glosry.htm "Glossary Entry") is a repository object that extends an [abstract behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry") using the statement [extension for abstract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_for_abstract.htm).

As a prerequisite, the respective abstract BDEF must explicitly allow extensions as described in topic [RAP - Extensibility Enabling for Abstract BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_ext_enabling_abstract.htm).

The following extensions are possible:

-   Extending an existing node using the statement extend behavior for AbstractEntity.
-   Adding new nodes to the hierarchical type of the abstract BDEF using the statement define behavior for AbstractEntity.
-   Adding new scalar entities to the hierarchical type using the statement scalar entity AbstractEntity.

Details are described in the topic [RAP - extension for abstract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_for_abstract.htm).

Continue
[RAP - extension for abstract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_for_abstract.htm)