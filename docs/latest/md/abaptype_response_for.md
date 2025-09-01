---
title: "TYPE RESPONSE FOR"
description: |
  Syntax ... RESPONSE FOR  FAILED  MAPPED  REPORTED  EARLY  LATE  bdef  ... Effect BDEF derived type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry') used for RAP response parameters(https://help.sap.com/
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm"
abapFile: "abaptype_response_for.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "method", "data", "types", "internal-table", "abaptype", "response", "for"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrpm_derived_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPE%20RESPONSE%20FOR%2C%20ABAPTYPE_RESPONSE_FOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPE RESPONSE FOR

Syntax

... RESPONSE FOR *{* FAILED
                 *|* MAPPED
                 *|* REPORTED
                   *{* *\[*EARLY *|* LATE*\]* *}*
                   bdef *}* ...

Effect

[BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") used for [RAP response parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry") and operands of [ABAP EML statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) for the purpose of providing or storing [RAP responses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_glosry.htm "Glossary Entry").

The BDEF derived types with TYPE RESPONSE FOR ... are basically [deep structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeep_structure_glosry.htm "Glossary Entry") containing one internal table as nested component for each entity of the RAP BO. Therefore, all information on all entities of a RAP BO can be provided and retrieved at once. bdef stands for the source name of a [RAP BO root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry"). The addition EARLY applies to responses from within the [RAP interaction phase](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_int_phase_glosry.htm "Glossary Entry"); the addition LATE applies to responses in the [RAP save sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_save_seq_glosry.htm "Glossary Entry").

Where Used

-   The three predefined [formal parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenformal_parameter_glosry.htm "Glossary Entry") of [RAP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") and [RAP saver methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") mapped, failed and reported - whose names are also reflected in the syntax here - are typed with these BDEF derived types.
    
    In [ABAP behavior pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"), the parameters of the said methods typed with this BDEF derived type are implicitly available. The following images show the F2 help information in [ADT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") for a RAP handler method for which the response parameters have not been explicitly specified:
    
    METHODS create FOR MODIFY
        IMPORTING entities FOR CREATE demo\_unmanaged\_root\_2.
    
    F2 help information in ADT:
    
    ![Figure](type_response_for2.png)
    
    The parameters can also be explicitly specified. When specified explicitly, for example, for a RAP handler method that creates instances and that includes ... FOR MODIFY ... FOR CREATE ..., the syntax can be as follows. Note that for the explicit declaration of the changing parameters, the generic type [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) is used. At runtime, the typed parameters implicitly have the type TYPE RESPONSE FOR ....
    
    METHODS create FOR MODIFY
        IMPORTING entities FOR CREATE bdef
        CHANGING failed TYPE DATA mapped TYPE DATA reported TYPE DATA.
    
-   The operands following the MAPPED, FAILED and REPORTED additions of nondynamic forms of [ABAP EML statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) are typed with these BDEF derived types. Note: The operands following these additions in dynamic ABAP EML statements are internal tables of type ABP\_BEHV\_RESPONSE\_TAB, see [here](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_responses_dyn.htm). The operands store the RAP responses when an ABAP EML statement triggers the calling of a method in the behavior pool. One example is the internally created data object f\_resp in the statement MODIFY ENTITY ... FROM ... FAILED FINAL(f\_resp) ....
-   In ABAP programs, these BDEF derived types can also be used to declare data objects and types, for example, as follows:
    
    DATA f TYPE RESPONSE FOR FAILED demo\_managed\_root.
    TYPES r TYPE RESPONSE FOR REPORTED demo\_managed\_root.
    DATA m TYPE RESPONSE FOR MAPPED demo\_managed\_root.
    

Details on the Syntax

The nested internal tables are of type [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm) (plus EARLY or LATE depending on the context) and comprise special components. The addition EARLY is the default, even if not explicitly specified. For example, if response parameters are explicitly declared with the type TYPE RESPONSE FOR FAILED, they automatically have the type TYPE RESPONSE FOR FAILED EARLY. The addition LATE is only possible if:

-   [late numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_late_numbering.htm) is defined for a RAP BO.
-   the statement [COMMIT ENTITIES RESPONSE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapemlcommit_entities_long.htm) is used. The operands for storing the responses must be typed with the LATE addition.

The following overview shows the variants of the structured data type, its purpose as well as the nested internal tables that are themselves typed with a BDEF derived type and their special components. See the details on the components in the documentation for [Components of Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm).

Types of Response Structures

Purpose

Types of Nested Internal Tables

[Components of Nested Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm)

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
In case of a [draft-enabled BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendraft_rap_bo_glosry.htm "Glossary Entry"), the component %is\_draft is available.

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

Used for returning messages on specific instances, for example, for which failures occurred during the interaction phase. If the addition LATE is used, the messages are provided during the save phase.

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

Hint

The following image shows the Variables tab in the debug mode of [ADT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). The variables ls\_report, ls\_map and ls\_fail are typed with the structured data type TYPE RESPONSE FOR. Once expanded, the nested internal tables for each of the entities contained in the [composition tree](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of DEMO\_MANAGED\_ROOT are displayed. In this case, there are entries for one entity available. See the context of the image in the executable example [ABAP EML - TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_responses_2_abexa.htm) that demonstrates the response parameters.

![Figure](abdoc_eml_responses.png)

Further Information

See further information and rules on response parameters in implementations of the [RAP BO provider](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") in the Development guide for the ABAP RESTful Application Programming Model, section [General RAP BO Implementation Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/1040b81372d44ed38b07a409fa0e1769?version=sap_cross_product_abap).

Executable Example

-   The example [ABAP EML - TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_responses_2_abexa.htm) demonstrates the response parameters with a simple managed RAP BO. To show content for the responses, errors are intentionally produced in the context of an ABAP EML MODIFY statement trying to create new instances.
-   The example [ABAP EML - Responses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_responses_abexa.htm) demonstrates the response parameters using modify operations to change a simple managed RAP BO.

Continue
![Example](exa.gif "Example") [ABAP EML - TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_responses_2_abexa.htm)