  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Providers](javascript:call_link\('abenc1_provider_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20CDS%20Entities%2C%20ABENC1_PROVIDER_RULES_CDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

C1 Contract Rules for Providing CDS Entities

A provider of ABAP CDS objects must obey the following rules:

-   [CDS Entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")
    -   Only [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") and [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") can be released with a C1 contract.
    -   The usage of upper and lower case in the name of an entity, its associations, elements or parameters must not be changed.
    -   The client handling must not be changed.
    -   Being a [RAP BO root entity](javascript:call_link\('abenrap_bo_root_entity_glosry.htm'\) "Glossary Entry") of a RAP BO cannot be undone.
    -   Only annotations can be used that are allowed by the annotation [@CompatibilityContract.rc.usageAllowed](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) in their definition. Changes to annotations are also governed by its definition.
    -   Parameters must not be removed from or added to the parameter interface.
    -   Associations to a released target data source must not be removed and the target data source must not be exchanged.
    -   No implicit SELECT list \* is allowed.
    -   Only positions of non-key elements can be changed if allowed by the data category.
    -   Only non-key elements can be added.
    -   Changes to the elementary data types of elements and parameters are allowed but must follow the [rules for elementary data types](javascript:call_link\('abenc1_provider_rules_elem.htm'\)).