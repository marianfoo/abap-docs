---
title: "c1_provider_rules_abap"
description: |
  c1_provider_rules_abap - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_abap.htm"
abapFile: "abenc1_provider_rules_abap.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "types", "abenc1", "provider", "rules", "abap"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20Objects%20Implemented%20in%20ABAP%2C%20ABENC1_PROVIDER_RULES_ABAP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion%20for%20improvement:)

C1 Contract Rules for Providing Objects Implemented in ABAP

Others than the following objects cannot be classified with the C1 contract.

-   [Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_glosry.htm "Glossary Entry") and [Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoo_intf_glosry.htm "Glossary Entry")
    -   Classes must be final or abstract and the instantiation must be private.
    -   Changes to public elementary types must follow the [rules for elementary data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_elem.htm).
        
        No components can be removed from public structured types.
        
        Public table types must not be generic. Their row types and table keys must not be changed.
        
    -   Attributes and method parameters must not be changed. Their data types must be released.
    -   Methods must not be deleted, their kind (static, instance) must not be changed and visibility must not be reduced. They must raise class-based exceptions only.
    -   Interface methods cannot be added without defining a [default behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_default.htm).
    -   Optional parameters can be added to methods and events. The preferred parameter must be stable. An optional parameter cannot become mandatory.
-   [AMDP classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_class_glosry.htm "Glossary Entry")
    
    AMDP classes are classes that implement the [tag interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentag_interface_glosry.htm "Glossary Entry") IF\_AMDP\_MARKER\_HDB. AMDP classes must obey the general rules for classes listed above and the following special rules:
    
    -   Optional parameters must not be added to methods.
    -   The order of parameters must not be changed.
    -   The property READ-ONLY must not be removed. It can be specified either in the method declaration with the addition [AMDP OPTIONS READ-ONLY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm) or in the method implementation with the addition [OPTIONS READ-ONLY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod_by_db_proc.htm). It must not be fully removed, but it can be moved from the method declaration to the method implementation or vice versa.
    -   The option [CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm) must not be added or removed.
    -   The addition [CDS SESSION CLIENT CURRENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm) must not be changed to [CDS SESSION CLIENT clnt](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm).
    -   The option [CLIENT INDEPENDENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm) must not be removed.
    -   The addition [FOR DDL OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_for_ddl_object.htm) must not be added or removed.
    -   The method implementation must not be changed from an [AMDP method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") to an ABAP method.
    -   The implementation language, specified using the addition [LANGUAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod_by_db_proc.htm), must not be changed.
    -   An AMDP method can be an [AMDP procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_procedure_glosry.htm "Glossary Entry"), an [AMDP function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_glosry.htm "Glossary Entry"), or a [graph workspace](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraph_workspace_glosry.htm "Glossary Entry"). The type of method must not be changed.
-   [Function modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_module_glosry.htm "Glossary Entry")
    -   Function modules can only be released for language version ABAP for Cloud Development.
    -   Remote-enabled or update function modules cannot be changed to regular ones and their properties must be stable.
    -   Parameters must not be changed.
    -   Optional parameters can be added. An optional parameter cannot become mandatory.
    -   Exceptions cannot be added and non-class-based exceptions must not be deleted.