# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Tuning Objects / DDIC - Dynamic Caches

Included pages: 4


### abenddic_dynamic_caches.htm

---
title: "DDIC - Dynamic Caches"
description: |
  A dynamic cache(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_cache_glosry.htm 'Glossary Entry') is a HANA tuning object(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_tuning_object_glosry.htm 'Glossary Entry') that serves as an interface b
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_dynamic_caches.htm"
abapFile: "abenddic_dynamic_caches.htm"
keywords: ["insert", "update", "do", "if", "case", "try", "data", "abenddic", "dynamic", "caches"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Tuning Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tuning_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Dynamic%20Caches%2C%20ABENDDIC_DYNAMIC_CACHES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Dynamic Caches

A [dynamic cache](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_cache_glosry.htm "Glossary Entry") is a [HANA tuning object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_tuning_object_glosry.htm "Glossary Entry") that serves as an interface between [dynamic result caches](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1) in SAP HANA and DDIC views. A dynamic cache is defined for a DDIC database table. It defines a restricted subquery on the database table with the goal to cache read results of the table in question to avoid repeated aggregation. This optimizes the performance in certain use cases. At the same time, a dynamic caches guarantees up-to-date data. Each time the cached database table is updated with INSERT, the cached data is updated automatically.

ABAP Dictionary dynamic caches are defined using the

-   [Dictionary DDL for Defining Dynamic Caches](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_dynamic_cache.htm)

Further Information

[ABAP Data Models](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/977a051cea1c4059be2500dcbf2d3d7d?version=sap_cross_product_abap) development guide, section about HANA Tuning Objects.

Hints

-   SAP HANA offers static and dynamic [view caches](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenview_cache_glosry.htm "Glossary Entry"). Only the dynamic version has been integrated into DDIC. Static view caches are called [Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/8ea43b3ff2e541e398e27d7e5caefab7) on SAP HANA, and dynamic caches are called [Dynamic Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1).
-   A DDIC dynamic cache is generated as SQL view on the database. Therefore, it is also referred to as view cache.
-   Further details on SAP HANA cached views and an executable example can be found in the topic about [Cached Views in SAP HANA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_cached_views.htm).

Continue
[DDIC - Dictionary DDL for Defining Dynamic Caches](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_dynamic_cache.htm)


### abenddic_define_dynamic_cache.htm

---
title: "DDIC - Dictionary DDL for Defining Dynamic Caches"
description: |
  An ABAP Dictionary dynamic cache(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_cache_glosry.htm 'Glossary Entry') is defined as a source-code-based cache in the ABAP development tools for Eclipse (ADT)(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_dynamic_cache.htm"
abapFile: "abenddic_define_dynamic_cache.htm"
keywords: ["do", "if", "try", "abenddic", "define", "dynamic", "cache"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Tuning Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tuning_objects.htm) →  [DDIC - Dynamic Caches](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_dynamic_caches.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Dictionary%20DDL%20for%20Defining%20Dynamic%20Caches%2C%20ABENDDIC_DEFINE_DYNAMIC_CACHE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

DDIC - Dictionary DDL for Defining Dynamic Caches

An ABAP Dictionary [dynamic cache](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_cache_glosry.htm "Glossary Entry") is defined as a source-code-based cache in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). A dynamic cache is defined in a separate piece of [DTDC source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddtdc_source_code_glosry.htm "Glossary Entry") and is saved and transported with this code. A piece of DTDC source code for dynamic caches can define exactly one dynamic cache:

-   [DEFINE DYNAMIC CACHE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_dynamic_cache.htm)

No [name table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenname_table_glosry.htm "Glossary Entry") and no [DDIC runtime object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_runtime_object_glosry.htm "Glossary Entry") are generated for a dynamic cache. Therefore, a dynamic cache cannot be accessed or read with ABAP.

Hints

-   The DTDC source code of dynamic caches has its own editor in [ADT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"), which is documented there. DTDC source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_workbench_glosry.htm "Glossary Entry").
-   DDIC dynamic caches are connected to a [Switch Framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenswitch_framework_glosry.htm "Glossary Entry") and can be toggled on or off.

Continue
[DDIC DDL - DEFINE DYNAMIC CACHE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_dynamic_cache.htm)


### abenddicddl_define_dynamic_cache.htm

---
title: "DDIC DDL - DEFINE DYNAMIC CACHE"
description: |
  Syntax DEFINE DYNAMIC CACHE cache_name ON dbtab  projection_list  WHERE filter_cond SEGREGATE CACHE DATA BY filter_cond CREATION CONFIGURABLE DEFAULT ONOFF; Effect Dictionary DDL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_d
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_dynamic_cache.htm"
abapFile: "abenddicddl_define_dynamic_cache.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenddicddl", "define", "dynamic", "cache"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Tuning Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tuning_objects.htm) →  [DDIC - Dynamic Caches](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_dynamic_caches.htm) →  [DDIC - Dictionary DDL for Defining Dynamic Caches](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_dynamic_cache.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20DYNAMIC%20CACHE%2C%20ABENDDICDDL_DEFINE_DYNAMIC_CACHE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

DDIC DDL - DEFINE DYNAMIC CACHE

Syntax

DEFINE DYNAMIC CACHE cache\_name
  ON dbtab
{ projection\_list }
  *\[*WHERE filter\_cond*\]*
  *\[*SEGREGATE CACHE DATA BY filter\_cond*\]*
  *\[*CREATION CONFIGURABLE DEFAULT *{*ON*|*OFF*}**\]*;

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement used to define a [dynamic cache](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_cache_glosry.htm "Glossary Entry") for a [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_db_table_glosry.htm "Glossary Entry").

The name cache\_name of a dynamic cache must comply with the [naming conventions for DDIC data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm) and can have a maximum of 30 characters. The name is in the namespace of the [DDIC data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) and must match the name of the [DTDC source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddtdc_source_code_glosry.htm "Glossary Entry").

A dynamic cache can be defined for exactly one DDIC database table dbtab, which is specified after ON. Tables with [data aging](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_aging_glosry.htm "Glossary Entry") are not supported. Multiple dynamic caches can be defined for the same database table.

Projection List

The projection list projection\_list of a dynamic cache consists of a restricted subquery which is applied to the DDIC database table to be tuned. It can consist of the following components:

-   Fields of dbtab can optionally be specified.
    
    Caution: Client fields must not be specified. Client handling takes place implicitly.
    
-   At least one aggregate function must be specified in the projection list. The following aggregate functions can be specified:
    -   SUM(arg)
    -   AVG(arg)
    -   MIN(arg)
    -   MAX(arg)
    -   COUNT(arg)
    -   COUNT(\*)
-   The argument arg of the aggregate function can be a field of dbtab, an untyped numeric or character literal, an arithmetic expression, or a case expression. The arithmetic expression can, in turn, have fields or literals as operands. The case expression can have fields, literals, or arithmetic expressions as operands.

Clauses

In a WHERE filter condition filter\_cond, the cache result can be restricted as follows:

lhs = rhs *\[**{*AND *|* OR*}* lhs = rhs*\]*

-   It is possible to join multiple expressions using AND and OR.
-   lhs can be a field of dbtab.
-   rhs can be a field of dbtab or an untyped numeric or character literal.
-   The fields evaluated in the condition do not need to be defined as elements in the projection list.

Optionally, a further filter condition filter\_cond can be added after SEGREGATE CACHE DATA BY to define which filtered results should be cached as follows:

lhs = rhs *\[*AND lhs = rhs*\]*

-   It is possible to join multiple expressions using AND.
-   lhs must be a field of dbtab.
-   rhs can be a character or numeric literal or a numbered placeholder $1, $2, ...
-   The fields evaluated in the condition must be defined as elements in the projection list.

CREATION CONFIGURABLE DEFAULT *{*ON*|*OFF*}*: Optional addition to activate or deactivate the dynamic cache.

-   ON: the dynamic cache is created on SAP HANA as soon as the DDIC definition is activated.
-   OFF: creation of the dynamic cache on SAP HANA is deferred to a later point in time.

If this clause is not used, the default is ON.

If the dynamic cache is deactivated, the consumer can later on decide when the cache should be used. This configuration can be done with transaction S\_DBCACHE\_CONFIG.

Example

The following source code shows an example for a dynamic cache for the database table DEMO\_DDIC\_TYPES.

DEFINE DYNAMIC CACHE demo\_ddic\_dynamic\_cache
  ON demo\_ddic\_types
    {
     int4,
     sum( int8 )
    }
WHERE int1 = 4
SEGREGATE CACHE DATA BY int4 = $1
CREATION CONFIGURABLE DEFAULT OFF;

This cache is generated as SQL view on the database. Client handling is added automatically.

![Figure](dynamic_cache.png)


### abenddic_define_dynamic_cache.htm

---
title: "DDIC - Dictionary DDL for Defining Dynamic Caches"
description: |
  An ABAP Dictionary dynamic cache(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_cache_glosry.htm 'Glossary Entry') is defined as a source-code-based cache in the ABAP development tools for Eclipse (ADT)(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_dynamic_cache.htm"
abapFile: "abenddic_define_dynamic_cache.htm"
keywords: ["do", "if", "try", "abenddic", "define", "dynamic", "cache"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Tuning Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tuning_objects.htm) →  [DDIC - Dynamic Caches](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_dynamic_caches.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Dictionary%20DDL%20for%20Defining%20Dynamic%20Caches%2C%20ABENDDIC_DEFINE_DYNAMIC_CACHE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

DDIC - Dictionary DDL for Defining Dynamic Caches

An ABAP Dictionary [dynamic cache](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_cache_glosry.htm "Glossary Entry") is defined as a source-code-based cache in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). A dynamic cache is defined in a separate piece of [DTDC source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddtdc_source_code_glosry.htm "Glossary Entry") and is saved and transported with this code. A piece of DTDC source code for dynamic caches can define exactly one dynamic cache:

-   [DEFINE DYNAMIC CACHE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_dynamic_cache.htm)

No [name table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenname_table_glosry.htm "Glossary Entry") and no [DDIC runtime object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_runtime_object_glosry.htm "Glossary Entry") are generated for a dynamic cache. Therefore, a dynamic cache cannot be accessed or read with ABAP.

Hints

-   The DTDC source code of dynamic caches has its own editor in [ADT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"), which is documented there. DTDC source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_workbench_glosry.htm "Glossary Entry").
-   DDIC dynamic caches are connected to a [Switch Framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenswitch_framework_glosry.htm "Glossary Entry") and can be toggled on or off.

Continue
[DDIC DDL - DEFINE DYNAMIC CACHE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_dynamic_cache.htm)
