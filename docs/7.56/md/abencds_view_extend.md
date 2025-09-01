  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS entity extension](javascript:call_link\('abencds_view_extension.htm'\)) → 

ABAP CDS - Extending CDS views

There are currently two different statements that can be used to extend a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"):

-   [EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\))
    -   This variant is used to define a [CDS view entity extension](javascript:call_link\('abencds_view_entity_extend_glosry.htm'\) "Glossary Entry") for a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") or a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry").
    -   Available since release 7.55.
-   [EXTEND VIEW](javascript:call_link\('abencds_extend_view.htm'\))
    -   This variant is used to define a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") that is also linked with a [DDIC append view](javascript:call_link\('abenddic_append_view_glosry.htm'\) "Glossary Entry") in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").
    -   Available since release 7.40, SP08.
    -   Recommended to extend [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), defined using the statement [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)).

Differences between view extensions and view entity extensions

-   A view entity extension does not have a DDIC append view.
-   For a view entity extension, no name is specified after WITH. A view entity extension has only one name, which is the name of the [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry"). This name is assigned in the wizard for creating a new repository object.
-   In view entity extensions, no [header annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) are allowed. That means that no annotations are allowed in front of the statement EXTEND VIEW ENTITY.
-   View entity extensions were developed for CDS view entities and they have the same advantages, for example, a better performance during activation. The advantages of CDS view entities over DDIC-based views is explained in topic [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)).

Hint

For compatibility and migration reasons, EXTEND VIEW can also be used to extend CDS view entities and CDS projection views. Activation is possible without errors. However, the syntax elements specific to CDS view entities and CDS projection views are not supported in this variant of view extensions. It is recommended to use the statement EXTEND VIEW ENTITY for CDS view entities and CDS projection views.