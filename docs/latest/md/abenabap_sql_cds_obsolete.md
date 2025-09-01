  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_obsolete.htm) →  [Obsolete ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Access%20to%20CDS%20Views%20in%20ABAP%20SQL%2C%20ABENABAP_SQL_CDS_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

Obsolete Access to CDS Views in ABAP SQL

Obsolete Syntax

SELECT ... FROM cds\_db\_view ...

Effect

Specifies a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") that is associated with a [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") using its name CDS\_DB\_VIEW that is defined in the annotation [@AbapCatalog.sqlViewName](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) as a data source [data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) of the [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement. If the name CDS\_DB\_VIEW is used, the [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") is accessed directly and handled like a [DDIC view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_glosry.htm "Glossary Entry"). More specifically, the following applies:

-   [Client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_glosry.htm "Glossary Entry") depends only on the existence of a [client column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_column_glosry.htm "Glossary Entry") and not by the [client dependency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_client_handling_v1.htm) of the CDS view.
-   Any [CDS roles](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry") defined for [CDS access controls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control_glosry.htm "Glossary Entry") are applied only when the CDS entity is accessed and not when the CDS-managed DDIC view is accessed.
-   The key fields of the DDIC database view are used for the syntax check and not the key fields of the [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") in the addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaporderby_clause.htm).

Hints

-   To keep the behavior consistent and to use only the defined properties of a CDS view, only the name of the CDS entity should be used to access a CDS view.
-   Direct access to a CDS-managed DDIC view (obsolete) is forbidden in [strict mode from ABAP release 7.50](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_750.htm).