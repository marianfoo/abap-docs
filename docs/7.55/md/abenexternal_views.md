  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [Access to Objects in SAP HANA XS](javascript:call_link\('abensap_hana_access.htm'\)) →  [Access to SAP HANA XSC Objects](javascript:call_link\('abensap_hana_access_xsc.htm'\)) → 

DDIC External Views for SAP HANA Views in SAP HANA Repository

[ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") provides access to all database tables and views whose structures are defined as repository objects in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry"). A [SAP HANA view](javascript:call_link\('abenhana_view_glosry.htm'\) "Glossary Entry") (attribute view, analytic view, or calculation view), on the other hand, is an entity of the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). This uses HANA-specific data types and different naming conventions to ABAP Dictionary also apply. This means that direct access to an SAP HANA view using ABAP SQL is not possible.

In ABAP Dictionary, views known as [DDIC external views](javascript:call_link\('abenddic_external_views.htm'\)) are used for direct access to a SAP HANA view in [SAP HANA Repository](javascript:call_link\('abensap_hana_repository_glosry.htm'\) "Glossary Entry"). A DDIC external view is a special [view](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry") in ABAP Dictionary that functions as a proxy for an SAP HANA view and which can be accessed using SAP HANA and ABAP SQL.

Hints

-   The following restrictions currently apply to the use of DDIC external views in ABAP programs:

-   The structure of analytic views do not allow them to be read using [SELECT \*](javascript:call_link\('abapselect_list.htm'\)). The same basic rules apply to the statement SELECT in ABAP SQL as when using the HANA SQL statement SELECT, with individual columns and the addition GROUP BY needing to be specified. If SELECT \* is used, a runtime error occurs.

-   Calculation views with parameters can be access only if a default value is defined for each parameter. If not, reads are canceled and produce a runtime error.

-   DDIC external views should only be used in those cases that are not covered by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").

-   Access to SAP HANA views in [SAP HANA XS](javascript:call_link\('abenxs_glosry.htm'\) "Glossary Entry"):

-   SAP HANA views in [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry") are stored in the SAP HANA Repository and DDIC external views can be used for access to these views from ABAP.

-   SAP HANA views in [SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry"), the successor to [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry"), are usually [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") for which no DDIC external views can be created. For access from ABAP, other methods must be used such as [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") or [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry").