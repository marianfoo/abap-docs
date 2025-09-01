  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: TYPE RESPONSE FOR, ABAPTYPE_RESPONSE_FOR, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

TYPE RESPONSE FOR

Syntax

... RESPONSE FOR *{* FAILED
                 *|* MAPPED
                 *|* REPORTED
                   *{* *\[*EARLY *|* LATE*\]* *}*
                   bdef *}* ...

Effect

ABAP type used to create a structured data type for specifying response parameters for ABAP EML statements to get information on failures (FAILED) and error messages (REPORTED), or to retrieve mapping information (MAPPED). All variants can be used together where possible. bdef is the BDEF name.

The following table shows which responses are possible for the respective ABAP EML statements:

EML statement

FAILED

MAPPED

REPORTED

[MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm)

X

X

X

[READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities.htm)

X

 

X

[COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit_entities.htm)

X

 

X

[GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm)

X

 

X

[SET LOCKS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks_entity.htm)

X

 

X

A variable typed with the respective structured data type represents a deep structure. The deep structure contains one internal table as nested component for each entity of the RAP BO (see the Further Information section further down). Therefore, all information on all entities of a RAP BO can be retrieved at once.

The nested internal tables are of type [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm) (plus EARLY or LATE respectively) and comprise special components.

The addition EARLY is the default, even if not explicitly specified. For example, if response parameters are explicitly declared with the type TYPE RESPONSE FOR FAILED, they automatically have the type TYPE RESPONSE FOR FAILED EARLY. The addition LATE is only possible if [late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) is defined for a RAP BO or, by default, if the long form of the COMMIT ENTITIES statement, [COMMIT ENTITIES RESPONSE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_long.htm), is used.

The following overview shows the variants of the structured data type, its purpose as well as the nested internal tables that are themselves typed with a BDEF derived type and their special components. See the details on the components in the documentation for [Components of Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm).

Types of Response Structures

Purpose

Types of Nested Internal Tables

[Components of Nested Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm)

TYPE RESPONSE FOR FAILED
TYPE RESPONSE FOR FAILED EARLY
TYPE RESPONSE FOR FAILED LATE

Used for logging instances for which an operation has failed during the interaction phase. If the addition LATE is used, the logs are provided during the save phase.

Depending on the structured data type used, the nested internal tables are of the following types:
TYPE TABLE FOR FAILED
TYPE TABLE FOR FAILED EARLY
TYPE TABLE FOR FAILED LATE

%action
%assoc
%cid
%create
%delete
%fail
%key
%op
%pky
%tky
%update
In case of a table typed with the addition LATE, %cid is not available.
If late numbering is defined for a BO, the component %pid is available.
In case of a [draft-enabled BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendraft_rap_bo_glosry.htm "Glossary Entry"), the component %is\_draft is available.

TYPE RESPONSE FOR MAPPED
TYPE RESPONSE FOR MAPPED EARLY
TYPE RESPONSE FOR MAPPED LATE

For modify operations, internal tables are returned that map the key values of created instances to the provided content IDs (%cid). All subsequent operations must use the mapped keys.
The mapping information is available in the interaction phase by default. %cid is then mapped to the real key or to %pid. The addition LATE specifies that the mapping information is available only when saving. In the save phase, %pid is mapped to the real key.

Depending on the structured data type used, the nested internal tables are of the following types:
TYPE TABLE FOR MAPPED
TYPE TABLE FOR MAPPED EARLY
TYPE TABLE FOR MAPPED LATE

Components of a table typed without an addition or with the addition EARLY:
%cid
%key
%pky
%tky
Components of a table typed with the addition LATE:
%key
%pre
%tmp
If late numbering is defined for a BO, the component %pid is available for all additions.
In case of a draft-enabled BO, the component %is\_draft is only available for EARLY.

TYPE RESPONSE FOR REPORTED
TYPE RESPONSE FOR REPORTED EARLY
TYPE RESPONSE FOR REPORTED LATE

Used for returning messages on specific instances for which failures occurred during the interaction phase. If the addition LATE is used, the messages are provided during the save phase.

Depending on the structured data type used, the nested internal tables are of the following types:
TYPE TABLE FOR REPORTED
TYPE TABLE FOR REPORTED EARLY
TYPE TABLE FOR REPORTED LATE

%cid
%element
%global
%key
%msg
%pky
%state\_area
%tky
In case of a table typed with the addition LATE, %cid is not available.
If late numbering is defined for a BO, the component %pid is available.
In case of a draft-enabled BO, the component %is\_draft is available.

Further Information

The following image shows the Variables tab in the debug mode of [ADT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"). The variables ls\_report, ls\_map and ls\_fail, are typed with the structured data type TYPE RESPONSE FOR. Once expanded, the nested internal tables for each of the entities contained in the [composition tree](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of DEMO\_MANAGED\_ROOT are revealed. In this case, there are entries for one entity available. See the context of the image in the executable example [ABAP EML - TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_responses_2_abexa.htm) that demonstrates the response parameters.

![Figure](abdoc_eml_responses.png)

See further information and rules on response parameters in implementations of the [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") in the Development guide for the ABAP RESTful Application Programming Model, section General RAP BO Implementation Contract.

Executable Example

-   The example [ABAP EML - TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_responses_2_abexa.htm) demonstrates the response parameters with a simple managed RAP BO. To show content for the responses, errors are intentionally produced in the context of an ABAP EML MODIFY statement trying to create new instances.
-   The example [ABAP EML - Responses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_responses_abexa.htm) demonstrates the response parameters using modify operations to change a simple managed RAP BO.

Continue
![Example](exa.gif "Example") [ABAP EML - TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_responses_2_abexa.htm)