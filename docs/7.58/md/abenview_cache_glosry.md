  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20view%20cache%2C%20ABENVIEW_CACHE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

view cache

The [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") supports the concept of view caching, which serves the purpose of performance optimization. Under certain circumstances, the results of reads of a view can be cached in a cache to avoid repeated aggregation. There are two types of caches:

-   [Static cache](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_view_cache_glosry.htm "Glossary Entry"):
    -   Cache that is kept stable for a predefined retention time.
    -   Called [Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/8ea43b3ff2e541e398e27d7e5caefab7) on SAP HANA.
-   [Dynamic cache](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynamic_cache_glosry.htm "Glossary Entry")
    -   Cache that guarantees real-time data.
    -   Called [Dynamic Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1) on SAP HANA.
    -   Integrated into [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). Defined using the statement [DEFINE DYNAMIC CACHE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_dynamic_cache.htm).