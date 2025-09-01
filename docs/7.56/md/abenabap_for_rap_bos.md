  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) → 

ABAP for RAP Business Objects

This section describes the ABAP language elements for providing and consuming [RAP business objects (RAP BOs)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry"). A RAP BO is mainly defined by a [CDS Behavior Definition (BDEF)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). The Behavior Definition defines:

-   The [RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry"), which can consist of [CRUD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencrud_glosry.htm "Glossary Entry") operations and other actions.
-   The provisioning type of the RAP BO that can be [managed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") or [unmanaged](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry").

The data content of a RAP BO is stored in a [transactional buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransactional_buffer_glosry.htm "Glossary Entry"). The RAP BO operations work with the transactional buffer and must follow the [REST](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrest_glosry.htm "Glossary Entry") paradigm.

-   For managed RAP BOs, the transactional buffer is provided and handled as a [managed transactional buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_trans_buff_glosry.htm "Glossary Entry") by the RAP BO provider. In non-standard operations of a managed RAP BO, the managed transactional buffer can be accessed by [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") statements.
-   For unmanaged RAP BOs, the transactional buffer as well as the operations of a RAP BO must be provided by [ABAP behavior implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_implement_glosry.htm "Glossary Entry") as an [unmanaged transactional buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_trans_buff_glosry.htm "Glossary Entry"). There are no syntactical constraints on how an unmanaged transactional buffer is provided or handled, but it should fulfill the expectations of the [RAP BO consumers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry").

[RAP BO consumers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") trigger the RAP BO operations. A RAP BO consumer is either the [RAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_runt_framework_glosry.htm "Glossary Entry") that handles requests from outside the [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry") or an ABAP program using [ABAP EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_eml_glosry.htm "Glossary Entry").

ABAP language contains elements for providing RAP BOs and for consuming RAP BOs:

-   The language elements for providing RAP BOs are necessary for [ABAP behavior implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_implement_glosry.htm "Glossary Entry"):
    -   [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") are special class pools for implementing the non-standard RAP BO operations. Classes of an ABP access the transactional buffer of the RAP BO, which is either managed or unmanaged.
    -   In case of a managed transactional buffer, ABAP EML must be used in the behavior implementation for accessing it. There are special EML variants that can be used in behavior implementations only.
-   The language elements for accessing RAP BOs from any ABAP program are provided by the [ABAP Entity Manipulation Language (EML)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaeml_glosry.htm "Glossary Entry"). ABAP EML statements call the operations of a RAP BO that work with the transactional buffer. The operations can be implemented by the managed RAP BO provider or in ABAP behavior implementations (unmanaged).

The following topics document the ABAP language elements for consuming and providing RAP BOs:

-   [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm)
-   [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm)
-   [Other RAP-supporting Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm)

Continue
[ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm)
[ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm)
[Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm)
[RAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_glossary.htm)