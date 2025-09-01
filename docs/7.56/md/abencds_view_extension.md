  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - CDS entity extension

A [CDS entity extension](javascript:call_link\('abencds_entity_extend_glosry.htm'\) "Glossary Entry") is a transportable extension of a CDS entity. A CDS entity extension can make additions to the original entity, but it can't modify, overwrite, or delete elements from the original entity. There are currently four different statements that can be used to extend a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"):

-   [EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\))
    -   This variant is used to define a [CDS view entity extension](javascript:call_link\('abencds_view_entity_extend_glosry.htm'\) "Glossary Entry") for a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") or a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry").
    -   Available since release 7.55.
    -   This variant is used to define a [CDS custom entity extension](javascript:call_link\('abencds_cus_entity_extend_glosry.htm'\) "Glossary Entry") for a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry").
    -   Available since release 7.56.
-   [EXTEND ABSTRACT ENTITY](javascript:call_link\('abencds_extend_abstract_entity.htm'\))
    -   This variant is used to define a [CDS abstract entity extension](javascript:call_link\('abencds_abs_entity_extend_glosry.htm'\) "Glossary Entry") for a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").
    -   Available since release 7.56.
-   [EXTEND VIEW](javascript:call_link\('abencds_extend_view.htm'\))
    -   This variant is used to define a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") that is also linked with a [DDIC append view](javascript:call_link\('abenddic_append_view_glosry.htm'\) "Glossary Entry") in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").
    -   Available since release 7.40, SP08.
    -   Recommended to extend [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), defined using the statement [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)).

Hints

-   CDS entity extensions are connected to [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") whenever they are defined in a [package](javascript:call_link\('abenpackage_glosry.htm'\) "Glossary Entry") that is assigned a [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry").
-   Since release 7.55, there are two different statements available that can be used to extend a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), namely EXTEND VIEW and EXTEND VIEW ENTITY. The differences and when to use what is explained in topic [ABAP CDS - Extending CDS views](javascript:call_link\('abencds_view_extend.htm'\)).
-   Every CDS entity extension has its own [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). The DDL source code in a CDS entity extension is edited in a different editor from the DDL source code of the base entity. The ADT documentation describes how these types of source code are created. DDL source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").
-   It is advisable to make no extensions to CDS entities from basis packages. These CDS entities are intended for internal use only and can be modified in incompatible ways.

Continue
[ABAP CDS - Extending CDS views](javascript:call_link\('abencds_view_extend.htm'\))
[CDS DDL - EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\))
[CDS DDL - EXTEND ABSTRACT ENTITY](javascript:call_link\('abencds_extend_abstract_entity.htm'\))
[CDS DDL - EXTEND VIEW ddic\_based](javascript:call_link\('abencds_extend_view.htm'\))