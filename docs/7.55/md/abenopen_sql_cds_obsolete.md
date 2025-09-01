  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_access_obsolete.htm) →  [Obsolete ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_obsolete.htm) → 

Obsolete Access to CDS Views in ABAP SQL

Obsolete Syntax

SELECT ... FROM cds\_db\_view ...

Effect

Specifies a [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry") that is based on a [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") using its name CDS\_DB\_VIEW that is defined in the annotation [@AbapCatalog.sqlViewName](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm)) as a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) of the [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement. If the name CDS\_DB\_VIEW is used, the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") is accessed directly and handled like a [dictionary view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_view_glosry.htm "Glossary Entry"). More specifically, the following applies:

-   [Client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclient_handling_glosry.htm "Glossary Entry") is determined only by the existence of a [client column](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclient_column_glosry.htm "Glossary Entry") and not by the [client dependency](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_client_handling_v1.htm) of the CDS view.

-   Any [CDS roles](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry") defined for [CDS access controls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry") are applied only when the CDS entity is accessed and not when the CDS-managed DDIC view is accessed.

-   The key fields of the DDIC database view are used for the syntax check and not the key fields of the [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") in the addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm).

Hints

-   To keep the behavior consistent and to use only the defined properties of a CDS view, only the name of the CDS entity should be used to access a CDS view.

-   Direct access to a CDS-managed DDIC view is forbidden in [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_750.htm).