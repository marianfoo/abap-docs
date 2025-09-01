  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - CDS Entity Extension, ABENCDS_VIEW_EXTENSION, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - CDS Entity Extension

A [CDS entity extension](javascript:call_link\('abencds_entity_extend_glosry.htm'\) "Glossary Entry") is a transportable extension of a CDS entity. A CDS entity extension can make additions to the original entity, but it cannot modify, overwrite, or delete elements from the original entity. There are currently four different statements that can be used to extend a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"):

-   [EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\))
    -   This variant is used to define a [CDS view entity extension](javascript:call_link\('abencds_view_entity_extend_glosry.htm'\) "Glossary Entry") for a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") or a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry").
    -   Available since release 7.55.
-   [EXTEND CUSTOM ENTITY](javascript:call_link\('abencds_extend_custom_entity.htm'\))
    -   This variant is used to define a [CDS custom entity extension](javascript:call_link\('abencds_cus_entity_extend_glosry.htm'\) "Glossary Entry") for a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry").
    -   Available since release 7.57.
-   [EXTEND ABSTRACT ENTITY](javascript:call_link\('abencds_extend_abstract_entity.htm'\))
    -   This variant is used to define a [CDS abstract entity extension](javascript:call_link\('abencds_abs_entity_extend_glosry.htm'\) "Glossary Entry") for a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").
    -   Available since release 7.56.
-   [EXTEND VIEW](javascript:call_link\('abencds_extend_view.htm'\))
    -   This variant is used to define a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") that is also linked with a [DDIC append view](javascript:call_link\('abenddic_append_view_glosry.htm'\) "Glossary Entry") in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").
    -   Available since release 7.40, SP08.
    -   Recommended for extending [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), defined using the statement [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)).

When working in a [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry"), extensions are possible only to [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") that are released under the [C0 stability contract for extensions](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry"). The compatibility rules for the C0 contract for API providers and API consumers are described in section [Compatibility Rules for CDS Entities](javascript:call_link\('abenc0_contract_rules_cds.htm'\)).

Hints

-   CDS entity extensions are connected to [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") whenever they are defined in a [package](javascript:call_link\('abenpackage_glosry.htm'\) "Glossary Entry") that is assigned a [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry").
-   Since release 7.55, there are two different statements available that can be used to extend a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), namely EXTEND VIEW and EXTEND VIEW ENTITY. The differences and when to use what is explained in topic [ABAP CDS - Extending CDS views](javascript:call_link\('abencds_view_extend.htm'\)).
-   Every CDS entity extension has its own [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). The DDL source code in a CDS entity extension is edited in a different editor from the DDL source code of the base entity. The ADT documentation describes how these types of source code are created. DDL source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - Extending CDS Views](javascript:call_link\('abencds_view_extend.htm'\))
[CDS DDL - EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\))
[CDS DDL - EXTEND CUSTOM ENTITY](javascript:call_link\('abencds_extend_custom_entity.htm'\))
[CDS DDL - EXTEND ABSTRACT ENTITY](javascript:call_link\('abencds_extend_abstract_entity.htm'\))
[CDS DDL - EXTEND VIEW ddic\_based](javascript:call_link\('abencds_extend_view.htm'\))