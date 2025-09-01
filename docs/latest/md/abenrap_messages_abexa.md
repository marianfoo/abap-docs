  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) →  [Examples for BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20Messages%3A%20Transition%20and%20State%20Messages%2C%20ABENRAP_MESSAGES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

RAP Messages: Transition and State Messages

This example demonstrates [RAP transition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_trans_mes_glosry.htm "Glossary Entry") and [state messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_state_mes_glosry.htm "Glossary Entry") using a [managed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm), [draft-enabled RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendraft_rap_bo_glosry.htm "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_DRAFT\_M.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'Root entity: draft-enabled, managed BO'
define root view entity demo\_draft\_m
  as select from demo\_tab\_root\_4
{
  key key\_field,
      field1,
      field2,
      field3,
      field4,
      @Semantics.systemDateTime.lastChangedAt: true
      crea\_date\_time,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      lchg\_date\_time
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_DRAFT\_M is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_draft\_m unique;
strict ( 2 );
with draft;
define behavior for demo\_draft\_m
persistent table demo\_tab\_root\_4
draft table demo\_tab\_draft
lock master
total etag crea\_date\_time
etag master lchg\_date\_time
authorization master ( global )
{
  create;
  update;
  delete;
  field ( readonly:update ) key\_field;
  validation val on save { field field2; }
  draft action Resume;
  draft action Edit;
  draft action Activate optimized;
  draft action Discard;
  draft determine action Prepare
  {
    validation val;
  }
}

Behavior implementation

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_DRAFT\_M. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. A validation implementation is included. For more information, see the comments in the code.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_messages\_draft\_m DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES: BEGIN OF responses\_struc,
             key        TYPE demo\_draft\_m-key\_field,
             early      TYPE abap\_bool,
             late       TYPE abap\_bool,
             failed     TYPE abap\_bool,
             fail\_cause TYPE string,
             reported   TYPE abap\_bool,
             msg        TYPE string,
             state\_area TYPE string,
           END OF  responses\_struc.
    DATA:
      f\_early         TYPE RESPONSE FOR FAILED EARLY demo\_draft\_m,
      r\_early         TYPE RESPONSE FOR REPORTED EARLY demo\_draft\_m,
      m\_early         TYPE RESPONSE FOR MAPPED EARLY demo\_draft\_m,
      f\_late          TYPE RESPONSE FOR FAILED LATE demo\_draft\_m,
      r\_late          TYPE RESPONSE FOR REPORTED LATE demo\_draft\_m,
      create\_tab      TYPE TABLE FOR CREATE demo\_draft\_m,
      update\_tab      TYPE TABLE FOR UPDATE demo\_draft\_m,
      activate\_tab    TYPE TABLE FOR
                        ACTION IMPORT demo\_draft\_m~activate,
      read\_tab        TYPE TABLE FOR READ IMPORT demo\_draft\_m,
      read\_result\_tab TYPE TABLE FOR READ RESULT demo\_draft\_m,
      responses\_table TYPE TABLE OF responses\_struc WITH EMPTY KEY.
    METHODS:
      select\_db,
      select\_draft\_db,
      retrieve\_early\_responses,
      retrieve\_late\_responses,
      state\_area\_read\_local\_mode.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_messages\_draft\_m IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo: RAP state and transition messages\`
    "The example demonstrates RAP state and transition messages. For
    "this purpose, the validation implementation in the behavior pool
    "includes the checking of the value of a specific field. A state
    "message is returned if the validations fails. A transition message
    "is returned if the validation is successful. Note that, typically,
    "a validation rather returns a state message than a transition
    "message. In this example, the inclusion of both types is
    "intentional to demonstrate the differences between the two message
    "types.
    "The validation is assigned to a draft determine action prepare,
    "i.e. draft data is validated before the transition to active data.
    )->next\_section( \`1) Successful RAP create operation\`
    )->write( \`1a) EML MODIFY CREATE to create instances stored in \` &&
    \`the draft table\` ).
    "Notes on the code/output:
    "- A RAP create operation is carried out. One instance is created.
    "  For the instance, the draft indicator is flagged.
    "- With the COMMIT ENTITIES statement, the instance is persisted
    "  to the draft table.
    "- Various method calls are triggered to retrieve early and late
    "  responses. The entries of both draft and database table are
    "  retrieved and displayed.
    "- At this stage, the entries are available in the draft table
    "  only. No instances have been persisted to the database table
    "  yet. Since no errors have occurred, the FAILED and REPORTED
    "  responses are do not include any entries.
    "- Note: In this example, the FAILED and REPORTED entries are
    "  filtered and stored in a separate internal table for display
    "  purposes.
    "- Note: In the entire example, the late responses are of no
    "  relevance. There are never entries available. They are
    "  just included for the sake of completeness.
    create\_tab = VALUE #( ( %is\_draft = if\_abap\_behv=>mk-on
                            %cid      = \`cid\`
                            key\_field = 1
                            field1    = \`aaa\`
                            field2    = 'bbb'
                            field3    = 2
                            field4    = '3.0' ) ).
    MODIFY ENTITY demo\_draft\_m
      CREATE FIELDS ( key\_field field1 field2 field3 field4 )
      WITH create\_tab
      MAPPED m\_early
      FAILED f\_early
      REPORTED r\_early.
    retrieve\_early\_responses( ).
    COMMIT ENTITIES RESPONSE OF demo\_draft\_m
      FAILED f\_late
      REPORTED r\_late.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred.\` ).
    ENDIF.
    retrieve\_late\_responses( ).
    select\_draft\_db( ).
    select\_db( ).
    out->write( \`1b) activate draft action to persist instances \` &&
    \`to the database\` ).
    "Notes on the code/output:
    "- An EML MODIFY request triggers the activate draft action that
    "  copies the content of the draft database table to the persistent
    "  database table.
    "- When executing the activate action, the validation method is
    "  called. Since the validation is successful and it is implemented
    "  this way, a transition message is returned for the instance
    "  informing that the instance is valid.
    "- The draft table is empty, i.e. the draft instance has been
    "  activated and thus persisted to the database table, which
    "  shows the instance.
    activate\_tab = CORRESPONDING #( create\_tab EXCEPT %cid ).
    "Note: The validation is called when executing the activate action.
    MODIFY ENTITY demo\_draft\_m
      EXECUTE activate AUTO FILL CID WITH activate\_tab
      MAPPED m\_early
      FAILED f\_early
      REPORTED r\_early.
    retrieve\_early\_responses( ).
    COMMIT ENTITIES RESPONSE OF demo\_draft\_m
      FAILED f\_late
      REPORTED r\_late.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred.\` ).
    ENDIF.
    retrieve\_late\_responses( ).
    select\_draft\_db( ).
    select\_db( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->next\_section( \`2) Unsuccessful RAP create operation\`
    )->write( \`2a) EML MODIFY CREATE to create instances stored in \` &&
    \`the draft table\` ).
    "Notes on the code/output:
    "- A RAP create operation is carried out. One instance is to be
    "  created. In this case, the very same instance is used as above.
    "  Consequently, the request fails since an instance with the key
    "  already exists on the  database.
    "- A standard transition message is returned in REPORTED. An entry
    "  exists for FAILED.
    "- There are no entries in the draft table at this stage. The
    "  database table still only contains the successfully created
    "  instance from above.
    "- Consequently, the activate action has no effect since the
    "  instance does not exist in the draft table.
    MODIFY ENTITY demo\_draft\_m
      CREATE FIELDS ( key\_field field1 field2 field3 field4 )
      WITH create\_tab
      MAPPED m\_early
      FAILED f\_early
      REPORTED r\_early.
    retrieve\_early\_responses( ).
    COMMIT ENTITIES RESPONSE OF demo\_draft\_m
      FAILED f\_late
      REPORTED r\_late.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred.\` ).
    ENDIF.
    retrieve\_late\_responses( ).
    select\_draft\_db( ).
    select\_db( ).
    out->write( \`2b) activate draft action to persist instances \` &&
    \`to the database\` ).
    activate\_tab = CORRESPONDING #( create\_tab EXCEPT %cid ).
    "Note: The validation is called when executing the activate action.
    MODIFY ENTITY demo\_draft\_m
      EXECUTE activate AUTO FILL CID WITH activate\_tab
      MAPPED m\_early
      FAILED f\_early
      REPORTED r\_early.
    retrieve\_early\_responses( ).
    COMMIT ENTITIES RESPONSE OF demo\_draft\_m
      FAILED f\_late
      REPORTED r\_late.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred.\` ).
    ENDIF.
    retrieve\_late\_responses( ).
    select\_draft\_db( ).
    select\_db( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->next\_section( \`3) RAP create operation with a valid and \` &&
    \`invalid instance\`
    )->write( \`3a) EML MODIFY CREATE to create instances stored \` &&
    \`in the draft table\` ).
    "Notes on the code/output:
    "- A RAP create operation is carried out. Two instances are to be
    "  created.
    "  In this case, an instance is included for which the validation
    "  is successful.
    "  The validation fails for the other instance.
    "- The draft table entries shows both instances. The output of the
    "  database table retrieval shows the persisted entry from the
    "  operation above.
    "- The EML MODIFY CREATE request does not return any messages. The
    "  validation is not triggered at this stage.
    "- Executing the activate action triggers the calling of the
    "  validation. For the valid instance, the information transition
    "  message is returned. FAILED and REPORTED contain entries. The
    "  error transition message is a standard message coming from the
    "  framework.
    "- The entry in FAILED with fail cause UNSPECIFIC comes from the
    "  implementation in the validation. Note that the state message
    "  that is added to REPORTED in the validation implementation is
    "  not available here for the RAP BO consumer. See the next step
    "  with the EML READ request.
    "- Note: The validation implementation includes the retrieval of
    "  REPORTED responses
    "  after the EML read request. This way, state messages, i.e. the
    "  original values of %state\_area, that are available for specified
    "  keys can be retrieved. It is implemented in the behavior pool in
    "  a way that these REPORTED responses are stored in an internal
    "  which is output here to demonstrate the %state\_area value. At
    "  this stage, there are no state messages in REPORTED.
    DATA(key1) = 2.
    DATA(key2) = 3.
    create\_tab = VALUE #( "valid instance
                          ( %is\_draft = if\_abap\_behv=>mk-on
                            %cid = \`cid1\`
                            key\_field = key1
                            field1    = \`ccc\`
                            field2    = 'ddd'
                            field3    = 3
                            field4    = '4.0' )
                           "invalid instance
                           ( %is\_draft = if\_abap\_behv=>mk-on
                            %cid = \`cid2\`
                            key\_field = key2
                            field1    = \`eee\`
                            field2    = 'X'
                            field3    = 4
                            field4    = '5.0' ) ).
    MODIFY ENTITY demo\_draft\_m
      CREATE FIELDS ( key\_field field1 field2 field3 field4 )
      WITH create\_tab
      MAPPED m\_early
      FAILED f\_early
      REPORTED r\_early.
    retrieve\_early\_responses( ).
    COMMIT ENTITIES RESPONSE OF demo\_draft\_m
      FAILED f\_late
      REPORTED r\_late.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred.\` ).
    ENDIF.
    retrieve\_late\_responses( ).
    select\_draft\_db( ).
    select\_db( ).
    out->write( \`3b) activate draft action to persist \` &&
    \`instances to the database\` ).
    activate\_tab = CORRESPONDING #( create\_tab EXCEPT %cid ).
    "Note: The validation is called when executing the activate action.
    MODIFY ENTITY demo\_draft\_m
      EXECUTE activate AUTO FILL CID WITH activate\_tab
      MAPPED m\_early
      FAILED f\_early
      REPORTED r\_early.
    COMMIT ENTITIES RESPONSE OF demo\_draft\_m
      FAILED f\_late
      REPORTED r\_late.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred.\` ).
    ENDIF.
    retrieve\_early\_responses( ).
    state\_area\_read\_local\_mode( ).
    retrieve\_late\_responses( ).
    select\_draft\_db( ).
    select\_db( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->next\_section( \`4) RAP read operation\` ).
    "Notes on the code/output:
    "- At this stage, the valid instance from above has been persisted
    "  to the database. The invalid instance is still available in the
    "  draft table. It has not yet been persisted.
    "- A RAP read operation is carried out. The derived type
    "  on whose basis the read request is made contains multiple
    "  entries. Two entries for the valid instance and
    "  two for the invalid instance from above. For both instances,
    "  an entry exists where the draft indicator is switched on and
    "  off.
    "  They are intentionally included for demonstration purposes:
    "  - Valid instance:
    "    - draft indicator switched off: Instance is found; has been
    "      persisted
    "      to the database
    "    - draft indicator switched on: Instance is not found; already
    "      persisted
    "      and, therefore, not available in the draft table any more
    "  - Invalid instance:
    "    - draft indicator switched off: Instance is not found; not yet
    "      persisted
    "    - draft indicator switched on: Instance is found; still
    "      available in the draft table
    "- The EML READ request is specified to return the REPORTED
    "  responses. State messages can be retrieved using such an EML
    "  READ request. Therefore, the state message is contained in
    "  REPORTED. Note that the %state\_area value is not relevant for
    "  the RAP BO consumer. Therefore, the predefined value %state is
    "  contained.
    "- Furthermore, it is also demonstrated that transition messages
    "  are not available any more. Unlike transition messages, state
    "  messages are persisted and still available.
    read\_tab = VALUE #( "draft indicator switched off
      ( key\_field = key1 %is\_draft = if\_abap\_behv=>mk-off ) "found
      ( key\_field = key2 %is\_draft = if\_abap\_behv=>mk-off  ) "not found
      "draft indicator switched on
      ( key\_field = key1 %is\_draft = if\_abap\_behv=>mk-on ) "not found
      ( key\_field = key2 %is\_draft = if\_abap\_behv=>mk-on  ) ). "found
    READ ENTITY demo\_draft\_m
      ALL FIELDS WITH read\_tab
      RESULT read\_result\_tab
      FAILED f\_early
      REPORTED r\_early.
    retrieve\_early\_responses( ).
    out->write( \`Result of read operation\` ).
    out->write( read\_result\_tab ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->write( \`5) RAP update operation\` ).
    "Notes on the code/output:
    "- At this stage, the invalid instance is still available in the
    "  draft table.
    "- The RAP update operation corrects the issue that lets the
    "  validation failed.
    "- The execution of the activate action triggers the validation.
    "  This time, the validation is successful. The transition message
    "  informing that the instance is ok is returned. The REPORTED
    "  response in the read request in the validation implementation
    "  includes the state message as well as the original value of
    "  %state\_area. This is demonstrated by displaying the internal
    "  table in which the value was stored.
    "- The corrected instance has been successfully persisted to the
    "  database. The entry is not available in the draft table any
    "  more.
    "Correcting and updating the invalid instance
    update\_tab = VALUE #( ( %is\_draft = if\_abap\_behv=>mk-on
                            key\_field = key2
                            field1    = \`eee\`
                            field2    = 'fff'
                            field3    = 4
                            field4    = '5.0' ) ).
    MODIFY ENTITY demo\_draft\_m
      UPDATE FIELDS ( field1 field2 field3 field4 )
      WITH update\_tab
      FAILED f\_early
      REPORTED r\_early.
    COMMIT ENTITIES RESPONSE OF demo\_draft\_m
      FAILED f\_late
      REPORTED r\_late.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred.\` ).
    ENDIF.
    retrieve\_early\_responses( ).
    state\_area\_read\_local\_mode( ).
    retrieve\_late\_responses( ).
    activate\_tab = CORRESPONDING #( update\_tab EXCEPT %cid ).
    MODIFY ENTITY demo\_draft\_m
      EXECUTE activate AUTO FILL CID WITH activate\_tab
      MAPPED m\_early
      FAILED f\_early
      REPORTED r\_early.
    COMMIT ENTITIES RESPONSE OF demo\_draft\_m
      FAILED f\_late
      REPORTED r\_late.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred.\` ).
    ENDIF.
    retrieve\_early\_responses( ).
    state\_area\_read\_local\_mode( ).
    retrieve\_late\_responses( ).
    select\_draft\_db( ).
    select\_db( ).
  ENDMETHOD.
  METHOD retrieve\_early\_responses.
    IF f\_early IS NOT INITIAL.
      LOOP AT f\_early-demo\_draft\_m ASSIGNING FIELD-SYMBOL(<a>).
        APPEND VALUE #( key        = <a>-key\_field early = abap\_true
                        failed     = abap\_true
                        fail\_cause = <a>-%fail-cause )
         TO responses\_table.
      ENDLOOP.
    ENDIF.
    IF r\_early IS NOT INITIAL.
      LOOP AT r\_early-demo\_draft\_m ASSIGNING FIELD-SYMBOL(<b>).
        APPEND VALUE #( key        = <b>-key\_field
                        early      = abap\_true
                        reported   = abap\_true
                        msg        = |{ <b>-%msg->m\_severity }: | &&
                         |{ <b>-%msg->if\_message~get\_text( ) }|
                        state\_area = <b>-%state\_area )
                      TO responses\_table.
      ENDLOOP.
    ENDIF.
    IF f\_early IS INITIAL AND r\_early IS INITIAL.
      out->write( \`No early responses\` ).
    ELSE.
      out->write( responses\_table ).
    ENDIF.
    CLEAR responses\_table.
  ENDMETHOD.
  METHOD retrieve\_late\_responses.
    IF f\_late IS NOT INITIAL.
      LOOP AT f\_late-demo\_draft\_m ASSIGNING FIELD-SYMBOL(<a>).
        APPEND VALUE #( key        = <a>-key\_field
                        late       = abap\_true
                        failed     = abap\_true
                        fail\_cause = <a>-%fail-cause )
                      TO responses\_table.
      ENDLOOP.
    ENDIF.
    IF r\_late IS NOT INITIAL.
      LOOP AT r\_late-demo\_draft\_m ASSIGNING FIELD-SYMBOL(<b>).
        APPEND VALUE #( key        = <b>-key\_field
                        late       = abap\_true
                        reported   = abap\_true
                        msg        = |{ <b>-%msg->m\_severity }: | &&
                          |{ <b>-%msg->if\_message~get\_text( ) }|
                        state\_area = <b>-%state\_area )
                      TO responses\_table.
      ENDLOOP.
    ENDIF.
    IF f\_late IS INITIAL AND r\_late IS INITIAL.
      out->write( \`No late responses\` ).
    ELSE.
      out->write( responses\_table ).
    ENDIF.
    CLEAR responses\_table.
  ENDMETHOD.
  METHOD select\_db.
    SELECT \*
      FROM demo\_tab\_root\_4
      INTO TABLE @DATA(db\_entries).
    out->write( db\_entries ).
  ENDMETHOD.
  METHOD select\_draft\_db.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
    FROM demo\_tab\_draft INTO TABLE @DATA(draft\_entries).
    out->write( draft\_entries ).
  ENDMETHOD.
  METHOD state\_area\_read\_local\_mode.
    IF bp\_demo\_draft\_m=>state\_area\_table IS INITIAL.
      out->write( \`No entries in internal table for checking \` &&
      \`the state area values after EML read in local mode.\` ).
    ELSE.
      out->write( \`Entries in internal table for checking the \` &&
      \`state area values after EML read in local mode:\` ).
      out->write( bp\_demo\_draft\_m=>state\_area\_table ).
    ENDIF.
    CLEAR bp\_demo\_draft\_m=>state\_area\_table.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    DELETE FROM demo\_tab\_root\_4.                        "#EC CI\_NOWHERE
    DELETE FROM demo\_tab\_draft.                         "#EC CI\_NOWHERE
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The example demonstrates RAP state and transition messages. For this purpose, the validation implementation in the behavior pool includes the checking of the value of a specific field. A state message is returned if the validations fails. A transition message is returned if the validation is successful. Note that, typically, a validation rather returns a state message than a transition message. In this example, the inclusion of both types is intentional to demonstrate the differences between the two message types. The validation is assigned to the draft determine action prepare, i.e. draft data is validated before the transition to active data.

For more information, see the comments in the code.