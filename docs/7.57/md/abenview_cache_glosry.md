  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: view cache, ABENVIEW_CACHE_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

view cache

The [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") supports the concept of view caching, which serves the purpose of performance optimization. Under certain circumstances, the results of reads of a view can be cached in a cache to avoid repeated aggregation. There are two types of caches:

-   [Static cache](javascript:call_link\('abenstatic_view_cache_glosry.htm'\) "Glossary Entry"):
    -   Cache that is kept stable for a predefined retention time.
    -   Called [Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/8ea43b3ff2e541e398e27d7e5caefab7.html?version=2.0.02) on SAP HANA.
-   [Dynamic cache](javascript:call_link\('abendynamic_cache_glosry.htm'\) "Glossary Entry")
    -   Cache that guarantees real-time data.
    -   Called [Dynamic Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1.html?version=2.0.02) on SAP HANA.
    -   Integrated into [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry"). Defined using the statement [DEFINE DYNAMIC CACHE](javascript:call_link\('abenddicddl_define_dynamic_cache.htm'\)).