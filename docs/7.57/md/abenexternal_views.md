  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Access to Objects in HANA XS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_xsc_obsolete.htm) →  [Access to SAP HANA XSC Objects (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_hana_access_xsc.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC External Views for SAP HANA Views in SAP HANA Repository \(Obsolete\), ABENEXTERNA
L_VIEWS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC External Views for SAP HANA Views in SAP HANA Repository (Obsolete)

Note: [SAP HANA XSA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsa_glosry.htm "Glossary Entry") replaces [SAP HANA XSC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsc_glosry.htm "Glossary Entry"). The [access methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_hana_access_xsc.htm) designed specifically for XSC objects are not suitable for XSA objects. After all XSC objects have been migrated to XSA, the access methods designed for XSC became mostly obsolete. [DDIC external views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexternal_view_glosry.htm "Glossary Entry") represent one such access method and have become obsolete. More information can be found in SAP Notes [2465027](https://launchpad.support.sap.com/#/notes/2465027) and [3116165](https://launchpad.support.sap.com/#/notes/3116165).

[ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") can be used to access all database tables and views whose structures are defined as repository objects in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). A [SAP HANA view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_view_glosry.htm "Glossary Entry") (attribute view, analytic view, or calculation view), on the other hand, is an entity of the [SAP HANA database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_database_glosry.htm "Glossary Entry"). This uses HANA-specific data types and different naming conventions than in the ABAP Dictionary also apply. This means that direct access to an SAP HANA view using ABAP SQL is not possible.

In the ABAP Dictionary, views known as [DDIC external views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_external_views.htm) are used for direct access to an SAP HANA view in the [SAP HANA Repository](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_hana_repository_glosry.htm "Glossary Entry"). A DDIC external view is a special [view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenview_glosry.htm "Glossary Entry") in the ABAP Dictionary that functions as a proxy for an SAP HANA view and which can be accessed using SAP HANA and ABAP SQL.

DDIC external views are obsolete, see SAP Note [3116165](https://launchpad.support.sap.com/#/notes/3116165).

Hints

-   The following restrictions currently apply to the use of DDIC external views in ABAP programs:
    -   The structure of analytic views does not allow them to be read using [SELECT \*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm). The same basic rules apply to the statement SELECT in ABAP SQL as when using the HANA SQL statement SELECT. Here, individual columns and the addition GROUP BY must be specified. If SELECT \* is used, a runtime error occurs.
    -   Parameterized calculation views can be accessed only if a default value is defined for each parameter. If not, reads are canceled and produce a runtime error.
-   DDIC external views should only be used in cases that are not covered by [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_glosry.htm "Glossary Entry").
-   Access to SAP HANA views in [SAP HANA XS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxs_glosry.htm "Glossary Entry"):
    
    -   SAP HANA views in [SAP HANA XSC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsc_glosry.htm "Glossary Entry") are stored in the SAP HANA Repository and DDIC external views can be used for access to these views from ABAP.
    -   SAP HANA views in [SAP HANA XSA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsa_glosry.htm "Glossary Entry"), the successor to [SAP HANA XSC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsc_glosry.htm "Glossary Entry"), are usually [HDI objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhdi_object_glosry.htm "Glossary Entry") for which no DDIC external views can be created. For access from ABAP, other methods must be used such as [AMDP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_glosry.htm "Glossary Entry") or [ADBC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc_glosry.htm "Glossary Entry").
    
    [SAP HANA XSC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsc_glosry.htm "Glossary Entry") is not supported by a [SAP HANA Cloud database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_hana_cloud_db_glosry.htm "Glossary Entry") and DDIC external views cannot be used there.