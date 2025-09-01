  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete ABAP SQL](javascript:call_link\('abenabap_sql_obsolete.htm'\)) → 

Obsolete Access to CDS Views in ABAP SQL

Obsolete Syntax

SELECT ... FROM cds\_db\_view ...

Effect

Specifies a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") using its name CDS\_DB\_VIEW defined in the annotation [@AbapCatalog.sqlViewName](javascript:call_link\('abencds_f1_define_view.htm'\)) as a data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) of the [SELECT](javascript:call_link\('abapselect.htm'\)) statement. If the name CDS\_DB\_VIEW is used, the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") is accessed directly and handled like any [classic view](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry"). More specifically, the following applies:

-   [Client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") is determined only by the existence of a [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") and not by the [client dependency](javascript:call_link\('abencds_client_handling.htm'\)) of the CDS view.

-   Any [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") defined for [CDS access controls](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") are applied only when the CDS entity is accessed and not when the CDS database view is accessed.

-   The key fields of the database view are used for the syntax check and not the key fields of the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in the addition [ORDER BY PRIMARY KEY](javascript:call_link\('abaporderby_clause.htm'\)).

Notes

-   To keep the behavior consistent and to use only the defined properties of a CDS view, only the name of the CDS entity should be used to access a CDS view.

-   Direct access to a CDS database view is forbidden in [strict mode from Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\)).