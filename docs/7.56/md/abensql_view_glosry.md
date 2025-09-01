  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

SQL view

[ABAP-managed database object](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry") that is generated automatically by the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") or by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") for the following [DDIC table views](javascript:call_link\('abentable_view_glosry.htm'\) "Glossary Entry") and [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"):

-   [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry"), the name of the SQL View is the same as the name of the DDIC database view
-   [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), the name of the SQL View is the same as the name of the CDS view entity
-   [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"), where the name of the SQL view is the same as the name of the CDS projection view
-   [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry"), the name of the SQL View is the same as the name of the CDS hierarchy view
-   [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), the name of the SQL View is the same as the name of the respective [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry")

Like all ABAP-managed database objects, an SQL view should mainly be accessed with [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") using the names defined in the ABAP Dictionary or in ABAP CDS. For [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), the name of the CDS entity should be used and not the name of the CDS-managed DDIC view. When using [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") or [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry"), only the technical name of the SQL view can be used.