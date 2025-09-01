  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP behavior pool, ABENBEHAVIOR_POOL_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

ABAP behavior pool

ABP for short. A special [class pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_pool_glosry.htm "Glossary Entry") for an [ABAP behavior implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_implement_glosry.htm "Glossary Entry"). A behavior pool is based on a [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). The name of the [global class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenglobal_class_glosry.htm "Glossary Entry") of a behavior pool is usually prefixed with BP\_ but does not implement the behavior itself. The [behavior implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_implement_glosry.htm "Glossary Entry") is coded in local [ABP handler classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") and [ABP saver classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class_glosry.htm "Glossary Entry") in the [CCIMP include](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenccimp_glosry.htm "Glossary Entry") of the behavior pool. These classes implement the [unmanaged RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_prov_glosry.htm "Glossary Entry") that is called by the [RAP runtime engine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_runtime_engine_glosry.htm "Glossary Entry") when the [RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") is accessed.

[→ More about](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_behavior_pools.htm)