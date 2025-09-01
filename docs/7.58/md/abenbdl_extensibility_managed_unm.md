  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Base%20BDEF%20Extension%2C%20ABENBDL_EXTENSIBILITY_MANAGED_UNM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Base BDEF Extension

A [base BDEF extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_base_bdef_ext_glosry.htm "Glossary Entry") is a repository object that extends a RAP behavior definition of type managed or unmanaged using the statement extension.

As a prerequisite, the respective BDEF must explicitly allow extensions as described in topic [Extensibility Enabling for RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_enabling_m_u.htm).

The following image shows the possible components of a BDEF extension:

![Figure](bdef_extension_intro.jpg)

-   The [BDEF extension header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bdef_ext_header_glosry.htm "Glossary Entry") is a mandatory component that starts with extension.
-   An [entity behavior extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_behavior_extension_glosry.htm "Glossary Entry") is an optional component. It extends the behavior of an existing RAP BO entity. It starts with extend behavior for.
-   An [extension entity behavior](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_ext_entity_behavior_glosry.htm "Glossary Entry") is an optional component that defines the behavior for an extension node. It starts with define behavior for.
-   An [authorization context for disable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_auth_context_glosry.htm "Glossary Entry") can be added or a [full authorization context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_own_ac_glosry.htm "Glossary Entry") may be extended.

Continue
[RAP - extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension_syntax.htm)