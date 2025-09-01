  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Tuning Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_tuning_objects.htm) →  [DDIC - Dynamic Caches](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_dynamic_caches.htm) →  [DDIC - Dictionary DDL for Defining Dynamic Caches](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_dynamic_cache.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE DYNAMIC CACHE, ABENDDICDDL_DEFINE_DYNAMIC_CACHE, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE DYNAMIC CACHE

Syntax

DEFINE DYNAMIC CACHE cache\_name
  ON dbtab
{ projection\_list }
  *\[*WHERE filter\_cond*\]*
  *\[*SEGREGATE CACHE DATA BY filter\_cond*\]*
  *\[*CREATION CONFIGURABLE DEFAULT *{*ON*|*OFF*}**\]*;

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement used to define a [dynamic cache](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_cache_glosry.htm "Glossary Entry") for a [DDIC database table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_db_table_glosry.htm "Glossary Entry").

The name cache\_name of a dynamic cache must comply with the naming conventions for [dictionary types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_types.htm) and can have a maximum of 30 characters. The name is in the namespace of the ABAP Dictionary [data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_types.htm) and must match the name of the dynamic cache source code.

A dynamic cache can be defined for exactly one DDIC database table dbtab, which is specified after ON. Tables with [data aging](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_aging_glosry.htm "Glossary Entry") are not supported. Multiple dynamic caches can be defined for the same database table.

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