  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Transactional Queries](javascript:call_link\('abencds_pv_transactional_query.htm'\)) → 

CDS DDL - PROVIDER CONTRACT

Syntax

... PROVIDER CONTRACT *{* TRANSACTIONAL\_QUERY *}* ...
  *|* *{* *}* ...

Alternatives:

[1\. ... PROVIDER CONTRACT](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... *{* *}*](#!ABAP_ALTERNATIVE_2@2@)

Effect

The provider contract specifies the scenario in which a CDS projection view is used. The scenario determines in which runtime a CDS projection view is executed and which features are available. It is recommended to always specify the provider contract to ensure that the appropriate, runtime-specific syntax checks are applied.

It is also possible, but not recommended, to leave out the provider contract. Projection views without provider contract are handled similarly to transactional projection views, but there are some minor differences in the syntax checks applied.

Alternative 1   

... PROVIDER CONTRACT ...

Addition:

[... TRANSACTIONAL\_QUERY](#!ABAP_ONE_ADD@1@)

Effect

Currently, the following provider contracts are available:

-   TRANSACTIONAL\_QUERY

[Child entities](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry") within a [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") inherit their parents' provider contract and it is not allowed to specify a provider contract for a child entity. As soon as a projection view contains a [to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") or a [redirection](javascript:call_link\('abencds_pv_assoc_redirected.htm'\)) to a parent entity, a provider contract must not be set.

Hint

Further provider contracts are planned to be released in the near future.

Addition   

... TRANSACTIONAL\_QUERY

Effect

Specifies a CDS projection view as [transactional query](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry"). Transactional queries are intended for modelling the projection layer of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). A transactional projection view must always be part of a business object. That means it must either be a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") itself, or it must be part of a composition tree that contains a root entity.

The feature set focuses on specializing the [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") of the underlying business object.

The runtime for transactional queries is mainly the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry"), but also the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry").

Alternative 2   

... *{* *}*

Effect

It is possible, but not recommended, to leave out the provider contract. The default provider contract, if no provider contract is set explicitly, is TRANSACTIONAL\_QUERY. The same features are available as for transactional queries and a projection view without provider contract can be used in the same scenarios. However, there are some minor differences in the syntax checks applied. The differences are listed in topic [CDS projection view, no contract](javascript:call_link\('abencds_pv_no_contract.htm'\)).