  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) → 

ABAP CDS - CDS-managed DDIC Views

For [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") defined using the statement [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)) without the addition [ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)), a [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") is created alongside the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") when the CDS view is activated. The CDS entity represents the actual CDS view. Properties, such as [access controls](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") defined in CDS, can be defined for the CDS entity only. The CDS-managed DDIC view is used as a technical foundation for CDS DDIC-based views. It is a read-only [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary.

The name CDS\_DB\_VIEW of the DDIC database view is defined in the [definition](javascript:call_link\('abencds_define_view_v1.htm'\)) of a CDS DDIC-based view with the [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") @AbapCatalog.sqlViewName, and is located in the same namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP. The ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) in ABAP Workbench (SE11) is able to display a CDS-managed DDIC view but the view cannot be modified here. When the CDS view is activated, the corresponding [SQL view](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") is created with the same name.

As a data type in ABAP Dictionary, the CDS-managed DDIC view represents like all DDIC database views a flat [DDIC structure](javascript:call_link\('abenddic_structures.htm'\)) with the [elements of the CDS](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) view as components. The CDS-managed DDIC view of a [client-dependent](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) CDS view always has a client column, unlike the CDS entity.

-   In ABAP Dictionary, the CDS-managed DDIC view can be used like any [DDIC structure](javascript:call_link\('abenddic_structures.htm'\)), such as the type of a substructure, as an include structure, or as the row type of a table type.
-   The CDS-managed DDIC view should not, however, be used in ABAP. It can be used wherever DDIC database tables or DDIC database views can also be specified using its name CDS\_DB\_VIEW, such as after the TYPE addition, in ABAP SQL read statements and also in Native SQL, AMDP, or after the [TABLES](javascript:call_link\('abaptables.htm'\)) statement. But this is not recommended. More particularly, the use of the CDS-managed DDIC view in ABAP SQL read statements is [obsolete](javascript:call_link\('abenabap_sql_cds_obsolete.htm'\)) and forbidden in [strict mode from Release 7.50](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)). Instead, both ABAP and the CDS entity should be accessed , which covers all attributes of the CDS view.
-   In CDS DDL too, only the CDS entity should be accessed using its name ddic\_based\_view and not the CDS-managed DDIC view using the name CDS\_DB\_VIEW.

The key of the CDS-managed DDIC view is determined implicitly, as in a [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary. This key is the technical key of the CDS view. If the name of the CDS-managed DDIC view is used to access a CDS view in ABAP SQL, this key is used for the syntax check.

Hint

Unlike the regular [DDIC table views](javascript:call_link\('abentable_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary, the special [CDS-managed DDIC views](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") can also access views.