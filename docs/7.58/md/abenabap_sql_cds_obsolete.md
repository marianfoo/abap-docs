  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete ABAP SQL](javascript:call_link\('abenabap_sql_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Access%20to%20CDS%20Views%20in%20ABAP%20SQL%2C%20ABENABAP_SQL_CDS_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

Obsolete Access to CDS Views in ABAP SQL

Obsolete Syntax

SELECT ... FROM cds\_db\_view ...

Effect

Specifies a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") that is associated with a [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") using its name CDS\_DB\_VIEW that is defined in the annotation [@AbapCatalog.sqlViewName](javascript:call_link\('abencds_define_view_v1.htm'\)) as a data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) of the [SELECT](javascript:call_link\('abapselect.htm'\)) statement. If the name CDS\_DB\_VIEW is used, the [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") is accessed directly and handled like a [DDIC view](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry"). More specifically, the following applies:

-   [Client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") depends only on the existence of a [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") and not by the [client dependency](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) of the CDS view.
-   Any [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") defined for [CDS access controls](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") are applied only when the CDS entity is accessed and not when the CDS-managed DDIC view is accessed.
-   The key fields of the DDIC database view are used for the syntax check and not the key fields of the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in the addition [ORDER BY PRIMARY KEY](javascript:call_link\('abaporderby_clause.htm'\)).

Hints

-   To keep the behavior consistent and to use only the defined properties of a CDS view, only the name of the CDS entity should be used to access a CDS view.
-   Direct access to a CDS-managed DDIC view (obsolete) is forbidden in [strict mode from ABAP release 7.50](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)).