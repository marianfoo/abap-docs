  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Entity Behavior Characteristics, ABENBDL_CHARACTER, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Entity Behavior Characteristics

Syntax

...  *\[*[persistent table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_persistent_table.htm)*\]* TableName
     *\[*[draft table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_table.htm) DraftTableName*\]*
     *\[*[saving options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm)*\]*
    *{**\[*[etag](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_etag.htm)*\]*
     *\[*[locking](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_locking.htm)*\]*
     *\[*[authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm)*\]**}*
    *|* [syntax\_short\_form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_short_syntax.htm)
     *\[*[early numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_early_numb.htm)*\]*
     *\[*[late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm)*\]* ...

Effect

This topic gives an overview of all available [entity behavior characteristics](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_properties_glosry.htm "Glossary Entry"). Some are mandatory and others are optional. For managed, unmanaged, and [draft-enabled scenarios](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_with_draft.htm), different characteristics are available and there is also a difference in which ones are required and which ones can be left out. In some cases, the order is important. For example, total etag must always be specified directly after lock master. These details are described in the respective topics.

-   [persistent table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_persistent_table.htm)
    
    Specifies the database table TableName for storing the CDS entity's data changes that result from transactional behavior. Only available for [managed RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry").
    
-   [draft table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_table.htm)
    
    Specifies the database table DraftTableName as [draft table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendraft_table_glosry.htm "Glossary Entry") for storing draft instances of data changes. This addition is only available for draft-enabled scenarios using the addition [with draft](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_with_draft.htm).
    
-   [saving options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm)
    
    The default [save sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_save_seq_glosry.htm "Glossary Entry") can either be enhanced or switched off and overwritten with a self-defined saving strategy. Can be defined in the [BDEF header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") and then applies to all entities of the business object. It is also possible to define saving options as an entity behavior characteristic. If specified, an implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is required. Only available for [managed implementation scenarios](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry").
    
-   [etag](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_etag.htm)
    
    [Optimistic concurrency control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoptimistic_conc_control_glosry.htm "Glossary Entry").
    
-   [locking](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_locking.htm)
    
    [Pessimistic concurrency control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpessimist_conc_control_glosry.htm "Glossary Entry").
    
-   [authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm)
    
    Defines which [RAP BO consumers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") under which circumstances are allowed to read or change data of a business object.
    
-   [short\_syntax\_form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_short_syntax.htm): The three statements lock dependent by \_assoc, authorization dependent by \_assoc, and etag dependent by \_assoc can be summarized into one statement: (lock, authorization, etag) dependent by \_assoc. For details, see topic [CDS BDL - short\_syntax\_form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_short_syntax.htm).
-   [early numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_early_numb.htm)
    
    Early value assignment for the primary key fields. Only available for [managed implementation scenarios](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry").
    
-   [late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm)
    
    Late value assignment for the primary key fields. Only available for [unmanaged implementation scenarios](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry").
    

Hint

Each characteristic can occur no more than once in a CDS behavior definition.

Continue
[CDS BDL - persistent table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_persistent_table.htm)
[CDS BDL - draft table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_table.htm)
[CDS BDL - Saving Options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm)
[CDS BDL - etag](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_etag.htm)
[CDS BDL - Locking](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_locking.htm)
[CDS BDL - authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm)
[CDS BDL - syntax\_short\_form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_short_syntax.htm)
[CDS BDL - early numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_early_numb.htm)
[CDS BDL - late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm)