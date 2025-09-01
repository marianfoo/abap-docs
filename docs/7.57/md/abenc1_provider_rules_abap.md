  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Providers](javascript:call_link\('abenc1_provider_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for Providing Objects Implemented in ABAP, ABENC1_PROVIDER_RULES_AB
AP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for Providing Objects Implemented in ABAP

Others than the following objects cannot be classified with the C1 contract.

-   [Classes](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry") and [Interfaces](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry")
    -   Classes must be final or abstract and the instantiation must be private.
    -   Changes to public elementary types must follow the [rules for elementary data types](javascript:call_link\('abenc1_provider_rules_elem.htm'\)).
        
        No components can be removed from public structured types.
        
        Public table types must not be generic. Their row types and table keys must not be changed.
        
    -   Attributes and method parameters must not be changed. Their data types must be released.
    -   Methods must not be deleted, their kind (static, instance) must not be changed and visibility must not be reduced. They must raise class-based exceptions only.
    -   Optional parameters can be added to methods and events. The preferred parameter must be stable. An optional parameter cannot become mandatory.
-   [Function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry")
    -   Function modules can only be released for language version ABAP for Cloud Development.
    -   Remote-enabled or update function modules cannot be changed to regular ones and their properties must be stable.
    -   Parameters must not be changed.
    -   Optional parameters can be added. An optional parameter cannot become mandatory.
    -   Exceptions cannot be added and non-class-based exceptions must not be deleted.