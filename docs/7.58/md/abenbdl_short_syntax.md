  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Characteristics](javascript:call_link\('abenbdl_character.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20syntax_short_form%2C%20ABENBDL_SHORT_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - syntax\_short\_form

Syntax

(*\[*lock*\]**\[*, authorization*\]**\[*, etag*\]*) dependent by \_assoc

Effect

The following three statements can be summarized in one statement:

-   lock dependent by \_assoc
-   authorization dependent by \_assoc
-   etag dependent by \_assoc

This syntax short form can be used if the [RAP authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry"), [RAP lock master entity](javascript:call_link\('abenrap_lock_ma_ent_glosry.htm'\) "Glossary Entry"), and [RAP ETag master entity](javascript:call_link\('abenrap_etag_ma_ent_glosry.htm'\) "Glossary Entry") are defined in the same entity which is reached via the association \_assoc.

Each of the three components lock, authorization, and etag is optional but at least one of them must be specified within the parentheses.

Example

The following RAP behavior definition of type managed consists of four nodes. The root node is declared as lock master, authorization master, and ETag master entity. The three child nodes use the syntax short form to refer to the root entity for authorization control, locking, and optimistic concurrency control.

managed implementation in class bp\_demo\_rap\_extensible\_root unique;
strict(2);
extensible
{ with determinations on modify;
  with determinations on save;
  with validations on save; }
with draft;
define behavior for DEMO\_RAP\_EXTENSIBLE\_ROOT alias Root
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_exdrf
lock master
total etag Timestamp
authorization master ( instance )
extensible
etag master LastChangedAt
{
  create;
  update;
  delete;
  association \_child { create; with draft; }
  draft action ( authorization : none ) Edit;
  draft action Activate optimized;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare extensible;
  field(readonly:update) KeyField;
  mapping for demo\_dbtab\_root
  {
    KeyField = key\_field;
    DataField = data\_field;
    CharField = char\_field;
    CharField2 = char\_field\_2;
    DecField = dec\_field;
    Timestamp = crea\_date\_time;
    LastChangedAt = lchg\_date\_time;
  }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_CHILD alias Child
persistent table demo\_dbtab\_child
draft table demo\_dbtab\_exchl
(lock, etag, authorization) dependent by \_parent
extensible
{
  update;
  delete;
  field ( readonly ) KeyField;
  association \_parent { with draft; }
  association \_grchld { create; with draft; }
  field(readonly:update) KeyFieldChild;
  mapping for demo\_dbtab\_child
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    DataField = data\_field;
    CharField = char\_field;
  }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_GRCHLD alias GrandChild
persistent table demo\_dbtab\_grchl
draft table demo\_dbtab\_grch
(lock,authorization,etag) dependent by \_GrandParent
extensible
{
  update;
  delete;
  field ( readonly ) KeyField, KeyFieldChild;
  association \_GrandParent { with draft; }
  association \_parent { with draft; }
  association \_child { create; with draft; }
  field(readonly:update) KeyFieldGrchld;
  mapping for demo\_dbtab\_grchl
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    KeyFieldGrchld = key\_field\_grchld;
    DataField = data\_field;
    CharField = char\_field;
  }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_GGCHLD alias GreatGrandChild
persistent table demo\_dbtab\_ggchl
draft table demo\_dbtab\_ggrch
(lock, authorization, etag) dependent by \_GreatGrandParent
extensible
{
  update;
  delete;
  field ( readonly ) KeyField, KeyFieldChild, KeyFieldGrChld;
  association \_GrandParent { with draft; }
  association \_parent { with draft; }
  association \_GreatGrandParent { with draft; }
  field(readonly:update) KeyFieldGgchld;
  mapping for demo\_dbtab\_ggchl
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    KeyFieldGrchld = key\_field\_grchld;
    KeyFieldGgchld = key\_field\_ggchld;
    DataField = data\_field;
    CharField = char\_field;
  }
}