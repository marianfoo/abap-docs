  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - Common EML Statements and Operands](javascript:call_link\('abapcommon_eml_elements.htm'\)) →  [ABAP EML - response\_param](javascript:call_link\('abapeml_response.htm'\)) → 

response\_param, Nondynamic Forms of ABAP EML Statements

Syntax

... *\[*FAILED failed*\]*
    *\[*MAPPED mapped*\]*
    *\[*REPORTED reported*\]* ...

Effect

Used to specify response parameters for nondynamic (i. e. short or long) forms of ABAP EML statements, for example, [MODIFY ENTITY](javascript:call_link\('abapmodify_entity_short.htm'\)) or [MODIFY ENTITIES](javascript:call_link\('abapmodify_entities_long.htm'\)) to get information on failures, mapping information and to send error messages. All variants can be used together where possible The parameters failed, mapped and reported after the respective keyword represent deep structures that must be typed with the [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") [TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\)).

The deep structures contain one internal table as nested component for each entity of the RAP BO. Therefore, all information on all entities of a RAP BO can be retrieved at once.

The nested internal tables are of type [TYPE TABLE FOR](javascript:call_link\('abaptype_table_for.htm'\)) (plus EARLY or LATE respectively) and comprise special components.

The addition EARLY is the default, even if not explicitly specified. For example, if response parameters are explicitly declared with the type TYPE RESPONSE FOR FAILED, they automatically have the type TYPE RESPONSE FOR FAILED EARLY. The addition LATE is only possible if [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) is defined for a RAP BO or, by default, if the long form of the COMMIT ENTITIES statement, [COMMIT ENTITIES RESPONSE OF](javascript:call_link\('abapemlcommit_entities_long.htm'\)), is used.

The following overview shows the variants of the structured data type, its purpose as well as the nested internal tables that are themselves typed with a BDEF derived type and their special components. See the details on the components in the documentation for [Components of Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)).

Types of Response Structures

Purpose

Types of Nested Internal Tables

Components of Nested Internal Tables

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
In case of a [draft-enabled BO](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry"), the component %is\_draft is available.

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

The following image shows the Variables tab in the debug mode of [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The variables ls\_report, ls\_map and ls\_fail, are typed with the structured data type TYPE RESPONSE FOR. Once expanded, the nested internal tables for each of the entities contained in the [composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") of DEMO\_MANAGED\_ROOT are revealed. In this case, there are entries for one entity available. See the context of the image in the executable example [ABAP EML - TYPE RESPONSE FOR](javascript:call_link\('abeneml_responses_2_abexa.htm'\)) that demonstrates the response parameters.

![Figure](bdoc_eml_responses.png)

Executable Example

-   The example [ABAP EML - Responses](javascript:call_link\('abeneml_responses_abexa.htm'\)) demonstrates the response parameters FAILED, REPORTED and MAPPED using modify operations to change a simple managed RAP BO.