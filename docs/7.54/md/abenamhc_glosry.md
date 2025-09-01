  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

ABAP-managed HDI container

AMHC for short. Special [](javascript:call_link\('abenhta_glosry.htm'\) "Glossary Entry")[HDI](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") container managed by [AS ABAP](javascript:call_link\('abenhdi_container_glosry.htm'\) "Glossary Entry"). An AMHC is created and modified using transaction SCTS\_AMHC. [SAP HANA Transport for ABAP (HTA)](javascript:call_link\('abenlogical_schema_glosry.htm'\) "Glossary Entry") provides an [AMHC](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") and its [](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry")[HDI](javascript:call_link\('abenhta_glosry.htm'\) "Glossary Entry") objects with an interface to the [Change and Transport System](javascript:call_link\('abencts_glosry.htm'\) "Glossary Entry"). When an AMHC is created, a [logical HDI container](javascript:call_link\('abenlogical_hdi_container_glosry.htm'\) "Glossary Entry") is defined. A physical HDI container is then created for this container in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") when it is activated. The logical HDI container can be used as a [logical schema](javascript:call_link\('abenlogical_schema_glosry.htm'\) "Glossary Entry") in an [AMDP macro](javascript:call_link\('abenlogical_schema_glosry.htm'\) "Glossary Entry"). Here it stands for the [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") of the physical HDI container.