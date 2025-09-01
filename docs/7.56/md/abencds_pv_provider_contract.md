  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_transactional_query.htm) → 

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

[Child entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchild_entity_glosry.htm "Glossary Entry") within a [CDS composition tree](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") inherit their parents' provider contract and it is not allowed to specify a provider contract for a child entity. As soon as a projection view contains a [to-parent association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") or a [redirection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_assoc_redirected.htm) to a parent entity, a provider contract must not be set.

Hint

Further provider contracts are planned to be released in the near future.

Addition   

... TRANSACTIONAL\_QUERY

Effect

Specifies a CDS projection view as [transactional query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry"). Transactional queries are intended for modelling the projection layer of a [RAP business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry"). A transactional projection view must always be part of a business object. That means it must either be a [root entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_entity_glosry.htm "Glossary Entry") itself, or it must be part of a composition tree that contains a root entity.

The feature set focuses on specializing the [RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") of the underlying business object.

The runtime for transactional queries is mainly the [RAP query engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_query_engine_glosry.htm "Glossary Entry"), but also the [RAP transactional engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_transac_engine_glosry.htm "Glossary Entry").

Alternative 2   

... *{* *}*

Effect

It is possible, but not recommended, to leave out the provider contract. The default provider contract, if no provider contract is set explicitly, is TRANSACTIONAL\_QUERY. The same features are available as for transactional queries and a projection view without provider contract can be used in the same scenarios. However, there are some minor differences in the syntax checks applied. The differences are listed in topic [CDS projection view, no contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_no_contract.htm).