  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) →  [DDIC - Dynamic Caches](javascript:call_link\('abenddic_dynamic_caches.htm'\)) →  [DDIC - Dictionary DDL for Defining Dynamic Caches](javascript:call_link\('abenddic_define_dynamic_cache.htm'\)) → 

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

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement used to define a [dynamic cache](javascript:call_link\('abendynamic_cache_glosry.htm'\) "Glossary Entry") for a [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry").

The name cache\_name of a dynamic cache must comply with the [naming conventions for DDIC data types](javascript:call_link\('abenddic_types_names.htm'\)) and can have a maximum of 30 characters. The name is in the namespace of the [DDIC data types](javascript:call_link\('abenddic_data_types.htm'\)) and must match the name of the [DTDC source code](javascript:call_link\('abenddtdc_source_code_glosry.htm'\) "Glossary Entry").

A dynamic cache can be defined for exactly one DDIC database table dbtab, which is specified after ON. Tables with [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") are not supported. Multiple dynamic caches can be defined for the same database table.

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