  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Components Related to Keys and RAP BO Instance Identification](javascript:call_link\('abapderived_types_keys_id.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20Keys%20and%20Identifying%20RAP%20BO%20Instances%20in%20a%20Nutshell%2C%20ABAPDERIVED_TYPES_KEYS_IDENTIFIERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion%20for%20improvement:)

Using Keys and Identifying RAP BO Instances in a Nutshell

The following bullet points outline the most important aspects regarding keys and identifying [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") in ABAP EML statements.

Why is it important?

-   The [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") of a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") is composed of one or more [key fields](javascript:call_link\('abenkey_field_glosry.htm'\) "Glossary Entry").
-   These key fields stand for the fields that are specified with key in the underlying [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") of the RAP BO.
-   The primary key uniquely identifies each RAP BO entity instance.
-   After the creation of an instance including the primary key during a [RAP create operation](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry"), the primary key can no longer be changed.
    -   Note that there are different numbering concepts, such as [early](javascript:call_link\('abenrap_early_numbering_glosry.htm'\) "Glossary Entry") and [late numbering](javascript:call_link\('abenlate_numbering_glosry.htm'\) "Glossary Entry"). In the latter concept, newly created entity instances are given their final key only shortly before saving in the database. Until then, the business logic uses a temporary key that has to be replaced.
-   If a data set with a particular primary key already exists in the persistent database table, the saving of a RAP BO instance is rejected because of a duplicate primary key.

How can a RAP BO instance be uniquely identified?

-   It can be done by using a [RAP instance identifier](javascript:call_link\('abenrap_inst_identifier_glosry.htm'\) "Glossary Entry") or [RAP content identifier](javascript:call_link\('abenrap_cont_identifier_glosry.htm'\) "Glossary Entry") or both of them.
-   RAP instance identifier:
    -   It consists of the primary key fields and all relevant [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") components.
    -   To ease the reference to all of these components, special [component groups](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") are available to summarize the components and make them addressable via one single name.
    -   [%key](javascript:call_link\('abapderived_types_key.htm'\)): Contains the primary key fields of a RAP BO instance
    -   [%tky](javascript:call_link\('abapderived_types_tky.htm'\)): Specifies the transactional key. Comprises %key (and, thus, the primary key fields of a RAP BO instance) and more components that are relevant to uniquely identify a RAP BO instance. Among them are [%pid](javascript:call_link\('abapderived_types_pid.htm'\)) (relevant for late numbering scenarios) and the draft indicator [%is\_draft](javascript:call_link\('abapderived_types_is_draft.htm'\)) (relevant for [draft](javascript:call_link\('abenbdl_with_draft.htm'\)) scenarios). In non-late numbering or non-draft scenarios, these extra components are just blank. However, it is recommended that you use %tky in all scenarios since it simplifies a possible later switch, for example, to a draft scenario. In doing so, lots of adaptations to the code regarding the keys and the inclusion of %is\_draft can be avoided.
-   RAP content identifier:
    -   Reflected in the component [%cid](javascript:call_link\('abapderived_types_cid.htm'\)), which is a string of type ABP\_BEHV\_CID for defining a content ID.
    -   Used as a unique and preliminary identifier for RAP BO instances in RAP create operations, especially where no primary key exists for the particular instance.
    -   For newly created instances, the ID can then be used for performing further modifications, referencing to those instances using [%cid\_ref](javascript:call_link\('abapderived_types_cid_ref.htm'\)) (which has the same value as %cid), for example, in RAP operations using [CREATE BY](javascript:call_link\('abapmodify_entity_entities_op.htm'\)), [UPDATE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)) and [DELETE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)), as well as [actions](javascript:call_link\('abenbdl_action.htm'\)) with [EXECUTE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)).
    -   In contrast to the primary key and the preliminary ID %pid for late numbering scenarios, %cid (and %cid\_ref) are only available on a short-term basis for the current ABAP EML request within the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry") in one [RAP transaction](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry").
    -   Note: Specify %cid even if there are no further operations referring to it.
-   Special case: Late numbering
    -   As mentioned above, in late numbering scenarios, newly created entity instances are given their final key only shortly before saving in the database, i. e. you deal with preliminary keys in the RAP interaction phase and the early phase of the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry").
    -   In this case, you can use %key to hold the preliminary keys or use a preliminary ID in the dedicated component [%key](javascript:call_link\('abapderived_types_pid.htm'\)) which is of type ABP\_BEHV\_PID and only available in late numbering scenarios.
    -   Similar to above, to uniquely identify RAP BO instances in late numbering scenarios, you can use either %key or %pid or both of them. In any case, the use of %tky is handy because it includes both components. You must ensure that %tky uniquely identifies the instances overall.
    -   Note: A further component group to refer to the keys is available: [%pky](javascript:call_link\('abapderived_types_pky.htm'\)). %pky contains %pid and %key in late numbering scenarios. In non-late numbering scenarios, it just contains %key. %pky itself is contained in %tky. There are contexts, for example, particular actions, where %tky is not available but %pky is. This way, there is still the option to summarize %pid and %key in one component group in the absence of %tky.

General rule: A RAP BO instance must always be uniquely identifiable by its transactional key (%tky) for internal processing during the RAP interaction phase. %tky always contains all relevant components for the chosen scenario.

Excursion: RAP Concepts

RAP numbering

-   A concept that deals with setting values for primary key fields.
-   There are multiple options for handling the numbering for primary key fields depending on when (early in the RAP interaction phase or late in the RAP save sequence) and by whom (RAP BO consumer, behavior pool, or framework) the primary key values are set.
-   When:
    -   [Early numbering](javascript:call_link\('abenrap_early_numbering_glosry.htm'\) "Glossary Entry"): The final key values are assigned during a RAP create operation in the interaction phase.
    -   [Late numbering](javascript:call_link\('abenrap_late_numbering_glosry.htm'\) "Glossary Entry"): The final key values are assigned during the RAP save sequence (and here only in the RAP saver method [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\))).
-   By whom:
    -   [External numbering](javascript:call_link\('abenrap_ext_numbering_glosry.htm'\) "Glossary Entry"): Key values are provided by the RAP BO consumer. For example, in a create operation, the key values are specified by the RAP BO consumer like other non-key field values.
    -   [Internal numbering](javascript:call_link\('abenrap_int_numbering_glosry.htm'\) "Glossary Entry"): Key values are provided by the RAP BO provider. For example, in a create operation, the key values are not specified in an EML create request by the RAP BO consumer but rather by the RAP BO provider. In case of a managed RAP BO, the key is automatically created by the framework which only works if the key is of a certain type (16-character byte-like [UUID](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry")). In case of an unmanaged RAP BO, the key values are provided in a dedicated handler method which must be user-implemented. Note that late numbering is internal by default since no further RAP BO consumer interaction is possible in the late phase of the RAP save sequence.

Draft

-   The draft concept in RAP allows the content of the transactional buffer to be stored in intermediate storages ([draft table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry")) in order to allow transactions to expand over different ABAP sessions.
-   Like the concepts mentioned above, a RAP BO can be draft-enabled in the BDEF. If enabled, the application allows data modifications and the temporary storage of modifications but does not yet persist them to the database. The users of the application can continue modifying this data later and they might even use a different device from the one where they modified the data previously.
-   The draft indicator %is\_draft is available for RAP BO instance identification. It is used to indicate if a RAP BO instance is a [draft instance](javascript:call_link\('abenrap_draft_instance_glosry.htm'\) "Glossary Entry") or an [active instance](javascript:call_link\('abenrap_active_instance_glosry.htm'\) "Glossary Entry"). Conveniently, the component group %tky contains %is\_draft. %is\_draft can then be addressed via %tky.

Late numbering and identification in the late phase of the RAP save sequence

-   Context: RAP saver method [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) in which the final key values are assigned; the preliminary keys can be included in %key or %pid or both of them.
-   %pid and the preliminary key values in %key are automatically assigned to the following component groups when reaching the adjust\_numbers method:
    -   [%tmp](javascript:call_link\('abapderived_types_tmp.htm'\)): A component group that is assigned the preliminary key values contained in %key. In doing so, %tmp takes over the role that %key has had in the RAP interaction phase to hold the preliminary key values.
    -   %pid remains as is. The component group [%pre](javascript:call_link\('abapderived_types_pre.htm'\)) contains %pid and %tmp and, thus, all preliminary identifiers.
-   In the adjust\_numbers method, the preliminary keys are transformed into the final keys, i. e. the preliminary keys are mapped to %key (which holds the final keys in this context) in the mapped [response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry").
-   Depending on whether you want to use %pid or (the preliminary key values in) %key (which is %tmp here in this method) during the interaction phase or both of them, you must ensure that %pre (since it contains both %pid and %tmp) is completely unique and mapped to the final keys that are to be contained in %key.

Executable Examples

See some simple examples on using the various components in the topic [Examples for BDEF Derived Type Components](javascript:call_link\('abenderived_types_abexas.htm'\)).