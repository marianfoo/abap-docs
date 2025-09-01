  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Dynamic Caches, ABENDDIC_DYNAMIC_CACHES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

DDIC - Dynamic Caches

A [dynamic cache](javascript:call_link\('abendynamic_cache_glosry.htm'\) "Glossary Entry") is a [DDIC tuning object](javascript:call_link\('abenddic_tuning_object_glosry.htm'\) "Glossary Entry") that serves as an interface between [dynamic result caches](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1.html?version=2.0.02) in SAP HANA and DDIC views. A dynamic cache is defined for a DDIC database table. It defines a restricted subquery on the database table with the goal to cache read results of the table in question to avoid repeated aggregation. This optimizes the performance in certain use cases. At the same time, a dynamic caches guarantees up-to-date data. Each time the cached database table is updated with INSERT, the cached data is updated automatically.

ABAP Dictionary dynamic caches are defined using the

-   [Dictionary DDL for Defining Dynamic Caches](javascript:call_link\('abenddic_define_dynamic_cache.htm'\))

Hints

-   SAP HANA offers static and dynamic [view caches](javascript:call_link\('abenview_cache_glosry.htm'\) "Glossary Entry"). Only the dynamic version has been integrated into DDIC. Static view caches are called [Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/8ea43b3ff2e541e398e27d7e5caefab7.html?version=2.0.02) on SAP HANA, and dynamic caches are called [Dynamic Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1.html?version=2.0.02).
-   Further details on SAP HANA cached views and an executable example can be found in the topic about [Cached Views in SAP HANA](javascript:call_link\('abenhana_cached_views.htm'\)).
-   A DDIC dynamic cache is generated as SQL view on the database. Therefore, it is also referred to as view cache.

Continue
[DDIC - Dictionary DDL for Defining Dynamic Caches](javascript:call_link\('abenddic_define_dynamic_cache.htm'\))