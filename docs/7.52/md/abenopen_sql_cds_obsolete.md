  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_obsolete.htm) → 

Obsolete Access to CDS Views in Open SQL

Obsolete Syntax

SELECT ... FROM cds\_db\_view ...

Effect

Specifies a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") using its name CDS\_DB\_VIEW defined in the annotation [@AbapCatalog.sqlViewName](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) as a data source [data\_source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of the [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement. If the name CDS\_DB\_VIEW is used, the [CDS database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry") is accessed directly and handled like any [classic view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclassical_view_glosry.htm "Glossary Entry"). More specifically, the following applies:

-   [Client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry") is determined only by the existence of a [client column](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_column_glosry.htm "Glossary Entry") and not by the [client dependency](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm) of the CDS view.

-   Any [CDS roles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry") defined for [CDS access controls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_access_control_glosry.htm "Glossary Entry") are applied only when the CDS entity is accessed and not when the CDS database view is accessed.

-   The key fields of the database view are used for the syntax check and not the key fields of the [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") in the addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm).

Notes

-   To keep the behavior consistent and to use only the defined properties of a CDS view, only the name of the CDS entity should be used to access a CDS view.

-   Direct access to a CDS database view is forbidden in [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_750.htm).