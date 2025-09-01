  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP-managed%20HDI%20container%2C%20ABENAMHC_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP-managed HDI container

AMHC for short. Special [HDI container](javascript:call_link\('abenhdi_container_glosry.htm'\) "Glossary Entry") managed by [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). An AMHC is created and changed using transaction SCTS\_AMHC. An AMHC and the contained [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") are connected to the [Change and Transport System](javascript:call_link\('abencts_glosry.htm'\) "Glossary Entry") using [SAP HANA Transport for ABAP (HTA)](javascript:call_link\('abenhta_glosry.htm'\) "Glossary Entry"). When an AMHC is created, a [logical HDI container](javascript:call_link\('abenlogical_hdi_container_glosry.htm'\) "Glossary Entry") is defined and during its activation a physical HDI container is created in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). The logical HDI container can be a [logical schema](javascript:call_link\('abenlogical_schema_glosry.htm'\) "Glossary Entry") in an [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") where it represents the [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") of the physical HDI container.