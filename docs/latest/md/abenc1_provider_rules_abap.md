  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Providers](javascript:call_link\('abenc1_provider_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20Objects%20Implemented%20in%20ABAP%2C%20ABENC1_PROVIDER_RULES_ABAP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion%20for%20improvement:)

C1 Contract Rules for Providing Objects Implemented in ABAP

Others than the following objects cannot be classified with the C1 contract.

-   [Classes](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry") and [Interfaces](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry")
    -   Classes must be final or abstract and the instantiation must be private.
    -   Changes to public elementary types must follow the [rules for elementary data types](javascript:call_link\('abenc1_provider_rules_elem.htm'\)).
        
        No components can be removed from public structured types.
        
        Public table types must not be generic. Their row types and table keys must not be changed.
        
    -   Attributes and method parameters must not be changed. Their data types must be released.
    -   Methods must not be deleted, their kind (static, instance) must not be changed and visibility must not be reduced. They must raise class-based exceptions only.
    -   Interface methods cannot be added without defining a [default behavior](javascript:call_link\('abapmethods_default.htm'\)).
    -   Optional parameters can be added to methods and events. The preferred parameter must be stable. An optional parameter cannot become mandatory.
-   [AMDP classes](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry")
    
    AMDP classes are classes that implement the [tag interface](javascript:call_link\('abentag_interface_glosry.htm'\) "Glossary Entry") IF\_AMDP\_MARKER\_HDB. AMDP classes must obey the general rules for classes listed above and the following special rules:
    
    -   Optional parameters must not be added to methods.
    -   The order of parameters must not be changed.
    -   The property READ-ONLY must not be removed. It can be specified either in the method declaration with the addition [AMDP OPTIONS READ-ONLY](javascript:call_link\('abapmethods_amdp_options.htm'\)) or in the method implementation with the addition [OPTIONS READ-ONLY](javascript:call_link\('abapmethod_by_db_proc.htm'\)). It must not be fully removed, but it can be moved from the method declaration to the method implementation or vice versa.
    -   The option [CDS SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)) must not be added or removed.
    -   The addition [CDS SESSION CLIENT CURRENT](javascript:call_link\('abapmethods_amdp_options.htm'\)) must not be changed to [CDS SESSION CLIENT clnt](javascript:call_link\('abapmethods_amdp_options.htm'\)).
    -   The option [CLIENT INDEPENDENT](javascript:call_link\('abapmethods_amdp_options.htm'\)) must not be removed.
    -   The addition [FOR DDL OBJECT](javascript:call_link\('abapclass-methods_for_ddl_object.htm'\)) must not be added or removed.
    -   The method implementation must not be changed from an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") to an ABAP method.
    -   The implementation language, specified using the addition [LANGUAGE](javascript:call_link\('abapmethod_by_db_proc.htm'\)), must not be changed.
    -   An AMDP method can be an [AMDP procedure](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry"), an [AMDP function](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry"), or a [graph workspace](javascript:call_link\('abengraph_workspace_glosry.htm'\) "Glossary Entry"). The type of method must not be changed.
-   [Function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry")
    -   Function modules can only be released for language version ABAP for Cloud Development.
    -   Remote-enabled or update function modules cannot be changed to regular ones and their properties must be stable.
    -   Parameters must not be changed.
    -   Optional parameters can be added. An optional parameter cannot become mandatory.
    -   Exceptions cannot be added and non-class-based exceptions must not be deleted.