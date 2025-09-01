  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) →  [RAP - Base BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_managed_unm.htm) →  [RAP - extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20BDEF%20Extension%20Header%2C%20ABENBDL_EXTENSION_HEADER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - BDEF Extension Header

Syntax

...
*\[*[implementation in class ClassName unique](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique_ext.htm);*\]*
*\[*[with privileged mode disabling ContextName](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_privileged_mode_extension.htm);*\]*
...

Effect

The following elements are supported in a [BDEF extension header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bdef_ext_header_glosry.htm "Glossary Entry"):

-   [implementation in class ClassName unique](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique_ext.htm): specifies an [extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_prefix_extension_glosry.htm "Glossary Entry") [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") for the extension behavior implementation of a [BDEF extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_extension_glosry.htm "Glossary Entry"). Optional and only required if the [BDEF extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_extension_glosry.htm "Glossary Entry") defines implementation-relevant components.
-   [with privileged mode disabling AuthContext](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_privileged_mode_extension.htm): Enables [BDEF privileged mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_privileged_mode_glosry.htm "Glossary Entry"). The effect is that the [authorization context for disable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_auth_context_glosry.htm "Glossary Entry")ContextName is automatically disabled when a [RAP BO consumer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") accesses the business object in question with a [privileged EML call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm).

Continue
[RAP - implementation in class unique, Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique_ext.htm)
[RAP - with privileged mode, Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_privileged_mode_extension.htm)