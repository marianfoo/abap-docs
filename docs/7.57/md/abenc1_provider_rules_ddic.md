  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Providers](javascript:call_link\('abenc1_provider_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for Providing Dictionary Objects, ABENC1_PROVIDER_RULES_DDIC, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for Providing Dictionary Objects

A provider of DDIC objects must obey the following rules:

-   [DDIC domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry")
    
    Changes to domains must follow the [rules for elementary data types](javascript:call_link\('abenc1_provider_rules_elem.htm'\)). Furthermore, changes to the following [semantic properties](javascript:call_link\('abenddic_domains_sema.htm'\)) are restricted:
    
    -   The output length must not be decreased.
    -   The conversion routine must not be changed.
    -   The setting for lowercase letters must not be changed.
-   [DDIC data elements](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry")
    
    Changes to data elements must follow the [rules for elementary data types](javascript:call_link\('abenc1_provider_rules_elem.htm'\)).
    
-   [DDIC table types](javascript:call_link\('abenddic_table_type_glosry.htm'\) "Glossary Entry")
    -   No changes are allowed.
-   [DDIC structures](javascript:call_link\('abenddic_structure_glosry.htm'\) "Glossary Entry")
    -   Existing components must not be removed
    -   Type changes to existing components are allowed for elementary components only and must follow the [rules for elementary data types](javascript:call_link\('abenc1_provider_rules_elem.htm'\)).
    -   An elementary type of a component must not be changed into a non-elementary type such as reference type, a substructure or a table type and vice versa.
    -   Only positions of non-key fields can be changed.
    -   Non-key fields can be added.
-   [DDIC database tables](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry")
    
    The same rules apply to DDIC database tables as to DDIC structures.
    
-   [DDIC views](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry")
    
    DDIC views cannot be released with a C1 contract.