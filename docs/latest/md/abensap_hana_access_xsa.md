  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [Access to Objects in SAP HANA XS](javascript:call_link\('abensap_hana_access.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Access%20to%20SAP%20HANA%20XSA%20Objects%2C%20ABENSAP_HANA_ACCESS_XSA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Access to SAP HANA XSA Objects

[SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry") (SAP HANA extended application services, advanced model) is the successor version of [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry").

[SAP Web IDE for SAP HANA](javascript:call_link\('abensap_web_ide_for_sap_han_glosry.htm'\) "Glossary Entry") and [SAP HANA Cockpit](javascript:call_link\('abensap_hana_cockpit_glosry.htm'\) "Glossary Entry") are used to develop and manage the native HANA objects in XSA. Deployment usually takes place (using [HDI](javascript:call_link\('abenhdi_glosry.htm'\) "Glossary Entry") (SAP HANA Deployment Infrastructure) as [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") in [HDI containers](javascript:call_link\('abenhdi_container_glosry.htm'\) "Glossary Entry") that usually represent [database schemas](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").

Special [ABAP-managed HDI container (AMHCs)](javascript:call_link\('abenamhc_glosry.htm'\) "Glossary Entry") can be defined for [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") accessed from ABAP. [SAP HANA Transport for ABAP (HTA)](javascript:call_link\('abenhta_glosry.htm'\) "Glossary Entry") links these containers to the [Change and Transport System](javascript:call_link\('abencts_glosry.htm'\) "Glossary Entry"). The definition of an AMHC includes a [logical HDI container](javascript:call_link\('abenlogical_hdi_container_glosry.htm'\) "Glossary Entry") that can be specified directly as a [logical schema](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry") in the [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)). This makes simple access to [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") possible from [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").

Hints

-   [AMDP](javascript:call_link\('abenamdp.htm'\)) methods should be the preferred way of accessing the HDI objects in SAP HANA XSA.
-   If the [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") methods are not sufficient, [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") can also be used to access [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry"). In this case, however the physical name of the HDI container is not provided automatically.
-   The access methods designed specifically for [XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry") objects in the [SAP HANA Repository](javascript:call_link\('abensap_hana_repository_glosry.htm'\) "Glossary Entry") are not suitable for XSA objects.