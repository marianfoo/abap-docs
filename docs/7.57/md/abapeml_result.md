  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) →  [ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommon_eml_elements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - RESULT result_tab, ABAPEML_RESULT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

ABAP EML - RESULT result\_tab

Syntax

... RESULT result\_tab ...

Effect

Used to store results of the following operations in an internal table result\_tab:

-   All [READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities_op.htm) operations.
-   A [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) operation executing an [action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenaction_glosry.htm "Glossary Entry").

The internal table result\_tab must be typed with a specific [BDEF derived type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") depending on the operation performed. The use of RESULT is mandatory for all operations except for the modify operation executing an action.

The internal tables comprise nested structures that contain special components. See the details on the components in the documentation for [Components of Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm).

The following table provides an overview on those operations offering a result, what their BDEF derived type is and which components are relevant for the internal tables:

Context

Types

Possible [Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) of Structures in Internal Table result\_tab

[READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities.htm) operations (excluding [functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm))

TABLE FOR READ RESULT bdef\[\\\_assoc\]

%data
%key
%pky
%tky

[READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities.htm) operations executing functions (READ ... EXECUTE)

TABLE FOR FUNCTION RESULT bdef~function

%key
%param
%pky
%tky

[MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) operations executing an action (MODIFY ... EXECUTE)

TABLE FOR ACTION RESULT bdef~action

%cid\_ref
%key
%param
%pky
%tky

Hint

Additional components are possible for all contexts: If [late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_late_numbering_glosry.htm "Glossary Entry") is defined for a BO, the component %pid is available. In case of a draft-enabled BO, the component %is\_draft is available.