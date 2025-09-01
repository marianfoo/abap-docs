  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Entity%20Behavior%20Characteristics%2C%20ABENBDL_CHARACTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Entity Behavior Characteristics

Syntax

...  *\[*[persistent table](javascript:call_link\('abenbdl_persistent_table.htm'\))*\]* TableName
     *\[*[draft table](javascript:call_link\('abenbdl_draft_table.htm'\)) DraftTableName*\]*
     *\[*[saving options](javascript:call_link\('abenbdl_saving.htm'\))*\]*
    *{**\[*[etag](javascript:call_link\('abenbdl_etag.htm'\))*\]*
     *\[*[locking](javascript:call_link\('abenbdl_locking.htm'\))*\]*
     *\[*[authorization](javascript:call_link\('abenbdl_authorization.htm'\))*\]**}*
    *|* [syntax\_short\_form](javascript:call_link\('abenbdl_short_syntax.htm'\))
     *\[*[early numbering](javascript:call_link\('abenbdl_early_numb.htm'\))*\]*
     *\[*[late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\))*\]* ...

Effect

This topic gives an overview of all available [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry"). Some are mandatory and others are optional. For managed, unmanaged, and [draft-enabled scenarios](javascript:call_link\('abenbdl_with_draft.htm'\)), different characteristics are available and there is also a difference in which ones are required and which ones can be left out. In some cases, the order is important. For example, total etag must always be specified directly after lock master. These details are described in the respective topics.

-   [persistent table](javascript:call_link\('abenbdl_persistent_table.htm'\))
    
    Specifies the database table TableName for storing the CDS entity's data changes that result from transactional behavior. Only available for [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry").
    
-   [draft table](javascript:call_link\('abenbdl_draft_table.htm'\))
    
    Specifies the database table DraftTableName as [draft table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry") for storing draft instances of data changes. This addition is only available for draft-enabled scenarios using the addition [with draft](javascript:call_link\('abenbdl_with_draft.htm'\)).
    
-   [saving options](javascript:call_link\('abenbdl_saving.htm'\))
    
    The default [save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry") can either be enhanced or switched off and overwritten with a user-defined saving strategy. Can be defined in the [BDEF header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") and then applies to all entities of the business object. It is also possible to define saving options as an entity behavior characteristic. If specified, an implementation in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required. Only available for [managed implementation scenarios](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry").
    
-   [etag](javascript:call_link\('abenbdl_etag.htm'\))
    
    [Optimistic concurrency control](javascript:call_link\('abenoptimistic_conc_control_glosry.htm'\) "Glossary Entry").
    
-   [locking](javascript:call_link\('abenbdl_locking.htm'\))
    
    [Pessimistic concurrency control](javascript:call_link\('abenpessimist_conc_control_glosry.htm'\) "Glossary Entry").
    
-   [authorization](javascript:call_link\('abenbdl_authorization.htm'\))
    
    Defines which [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") under which circumstances are allowed to read or change data of a business object.
    
-   [short\_syntax\_form](javascript:call_link\('abenbdl_short_syntax.htm'\)): The three statements lock dependent by \_assoc, authorization dependent by \_assoc, and etag dependent by \_assoc can be summarized into one statement: (lock, authorization, etag) dependent by \_assoc. For details, see topic [RAP - syntax\_short\_form](javascript:call_link\('abenbdl_short_syntax.htm'\)).
-   [early numbering](javascript:call_link\('abenbdl_early_numb.htm'\))
    
    Early value assignment for the primary key fields. Only available for [managed implementation scenarios](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry").
    
-   [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\))
    
    Late value assignment for the primary key fields. Only available for [unmanaged implementation scenarios](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry").
    

Hint

Each characteristic can occur no more than once in a RAP behavior definition.

Continue
[RAP - persistent table](javascript:call_link\('abenbdl_persistent_table.htm'\))
[RAP - draft table](javascript:call_link\('abenbdl_draft_table.htm'\))
[RAP - Saving Options](javascript:call_link\('abenbdl_saving.htm'\))
[RAP - etag](javascript:call_link\('abenbdl_etag.htm'\))
[RAP - Locking](javascript:call_link\('abenbdl_locking.htm'\))
[RAP - authorization](javascript:call_link\('abenbdl_authorization.htm'\))
[RAP - syntax\_short\_form](javascript:call_link\('abenbdl_short_syntax.htm'\))
[RAP - early numbering](javascript:call_link\('abenbdl_early_numb.htm'\))
[RAP - late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\))