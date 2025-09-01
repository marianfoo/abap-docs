  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Components related to keys and RAP BO instance identification](javascript:call_link\('abapderived_types_keys_id.htm'\)) → 

Use of keys and RAP BO instance identifiers in a nutshell

The use of keys and [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") [instance identifiers](javascript:call_link\('abenrap_inst_identifier_glosry.htm'\) "Glossary Entry") within [RAP BO providers](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") and [consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") can be versatile and dependent on the scenario and context, i. e. whether the scenario is a [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenario or not - also considering [drafts](javascript:call_link\('abenbdl_with_draft.htm'\)) - and whether the context is the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry") or the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry"). The following bullet points outline the most important aspects.

Non-late numbering scenarios:

-   RAP interaction phase
    -   [%cid](javascript:call_link\('abapderived_types_cid.htm'\)): RAP BO consumer specifies the content ID %cid in RAP create operations for a [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"), i. e. in ABAP EML requests using [CREATE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)), [CREATE BY](javascript:call_link\('abapmodify_entity_entities_op.htm'\)) or RAP [factory actions](javascript:call_link\('abenbdl_action.htm'\)); %cid should be provided even if there are no other operations referring to it with %cid\_ref; there are also RAP create operations with the addition [AUTO FILL CID](javascript:call_link\('abapmodify_entity_entities_fields.htm'\)) in which the %cid specification for the instances is done automatically
    -   [%cid\_ref](javascript:call_link\('abapderived_types_cid_ref.htm'\)): Has the same value as %cid; used to refer to a RAP BO instance that has been created with %cid as identifier; however, this %cid must exist in the same ABAP EML [MODIFY](javascript:call_link\('abapmodify_entity_entities.htm'\)) request so that the reference works
    -   [%key](javascript:call_link\('abapderived_types_key.htm'\)): Contains the primary key values; since there is no late assignment of key values, %key contains the final key values in both interaction phase and save sequence; Note: If in draft scenarios %key is used instead of %tky, you must ensure to also handle %is\_draft for the RAP BO instances as well
    -   [%tky](javascript:call_link\('abapderived_types_tky.htm'\)): The component group includes %key and %is\_draft, hence, it is predominantly used in draft scenarios; but it is recommended to use %tky also in non-draft scenarios for the keys so as to be prepared for a potential later switch to draft
    -   [%pky](javascript:call_link\('abapderived_types_pky.htm'\)): Another option to refer to the keys; in non-late numbering scenarios %key is, in principal, the same as %pky since %pid is not available; in scenarios without late numbering and without draft, %pky is, in principal, %tky since %is\_draft is not available
    -   The keys might be referred to with ABAP EML as follows (assuming there is one key field whose name is key\_field). All options have the same effect and are shown below to visualize the component groups and diverse options to refer to the key:
        
              MODIFY ENTITY bdef
               UPDATE SET FIELDS WITH VALUE #(
                      "key references
                      "( %pky-%key-key\_field = ... )
                      "( %pky-key\_field = ... )
                      "( %tky-%pky-%key-key\_field = ... )
                      "( %tky-%pky-key\_field = ... )
                      "( %tky-%key-key\_field = ... )
                      "( %tky-key\_field = ... )
                      "( %key-key\_field = ... )
                      "( key\_field = ... )
                      "even more options are possible with BDEF derived types
                      "that include the component group %data
                      "( %data-%key-key\_field = ... )
                      "( %data-key\_field = ... )
                      ).
        
-   RAP save sequence
    -   No change in key handling.

Late numbering scenarios:

-   RAP interaction phase
    -   %cid and %cid\_ref are also available in late numbering scenarios fulfilling the same purpose as in non-late numbering scenarios, however, %pid and %key are the most relevant components in the interaction phase to identify instances since they are used for the final key mapping
    -   [%pid](javascript:call_link\('abapderived_types_pid.htm'\)): Preliminary ID for RAP BO instances; usually created for RAP BO instances in the course of create operations
    -   %key: might be used to include preliminary keys as RAP BO instance identifiers; it must be ensured that the [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) method in the RAP save sequence takes care of mapping the final key values to %key
    -   %pky: This component group contains both %pid and %key and might therefore be used to summarize them
    -   %tky: In late numbering scenarios, the use is very convenient because %tky contains both %pid and %key as well as %pky (the extra reference to %pid and %key via %pky is redundant); in case of drafts, it also contains %is\_draft
    -   %pid and %key can both be filled and used in late numbering scenarios to identify a RAP BO instance or just one of them, however, you must ensure that the combination of %pid and %key is unique
    -   As an example, there might be the following options for preliminary identifiers to be used with ABAP EML (assuming there is one key field whose name is key\_field). All options have the same effect (for %pid or preliminary key values) and are shown below to visualize the component groups and diverse reference options:
        
              MODIFY ENTITY bdef
               UPDATE SET FIELDS WITH VALUE #(
                      "%pid references
                      "( %pid = ... )
                      "( %pky-%pid = ... )
                      "( %tky-%pid = ... )
                      "( %tky-%pky-%pid = ... )
                      "key references
                      "( %pky-%key-key\_field = ... )
                      "( %pky-key\_field = ... )
                      "( %tky-%pky-%key-key\_field = ... )
                      "( %tky-%pky-key\_field = ... )
                      "( %tky-%key-key\_field = ... )
                      "( %tky-key\_field = ... )
                      "( %key-key\_field = ... )
                      "( key\_field = ... )
                      "even more options are possible with BDEF derived types
                      "that include the component group %data.
                      "( %data-%key-key\_field = ... )
                      "( %data-key\_field = ... )
                      ).
        
-   RAP save sequence
    -   The focus is here on the adjust\_numbers method since it is the method that deals with the final key mapping.
    -   Depending on the choice of RAP BO instance identifiers, the following must be mapped to final keys that must be stored in %key: %pid or preliminary key values that have been assigned to %key during the interaction phase
    -   %pid and the key values in %key from the interaction phase are automatically assigned to the following component groups when reaching the adjust\_numbers method:
        
        The component group %tmp gets assigned the preliminary key values contained in %key; in principal, %tmp takes over the role that %key has had in the interaction phase to hold the preliminary key values
        
        [%pre](javascript:call_link\('abapderived_types_pre.htm'\)): This component group includes %pid and %tmp and, thus, all possible preliminary identifiers
        
    -   In a nutshell: %pid and %tmp must be mapped to %key in the adjust\_numbers method; however, in applications, typically only %pid or %tmp are mapped to %key
    -   As an example, there might be the following options how to refer to instances with preliminary identifiers and the final keys within the adjust\_numbers method (assuming there is one key field whose name is key\_field):
        
                  ...
                  APPEND VALUE #( "%pid  = ...
                                  "%pre-%pid  = ...
                                  "%tmp-key\_field  = ...
                                  "%pre-%tmp-key\_field  = ...
                                  "%key-key\_field = ...
                                  "key\_field = ...
                            ) TO mapped-bdef.
                  ...
        

Hint

Using %tky is the most convenient choice for referring to keys in whatever context. It always contains all relevant components for the chosen scenario.

Executable Examples

See various simple examples on using the diverse components in the topic [Examples for BDEF Derived Type Components](javascript:call_link\('abenderived_types_abexas.htm'\)).