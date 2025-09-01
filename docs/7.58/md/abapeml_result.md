---
title: "Syntax"
description: |
  ... RESULT result_tab ... Effect Used to store results of the following operations in an internal table result_tab: -   All READ(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities_op.htm) operations. -   A MODIFY(https://help.sap.com/doc/abapdocu_758_index_htm/
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_result.htm"
abapFile: "abapeml_result.htm"
keywords: ["do", "if", "case", "try", "data", "types", "internal-table", "abapeml", "result"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommon_eml_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20RESULT%20result_tab%2C%20ABAPEML_RESULT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - RESULT result\_tab

Syntax

... RESULT result\_tab ...

Effect

Used to store results of the following operations in an internal table result\_tab:

-   All [READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities_op.htm) operations.
-   A [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm) operation executing an [action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaction_glosry.htm "Glossary Entry").

The internal table result\_tab must be typed with a specific [BDEF derived type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") depending on the operation performed. The use of RESULT is mandatory for all operations except for the modify operation executing an action.

The internal tables comprise nested structures that contain special components. See the details on the components in the documentation for [Components of Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm).

The following table provides an overview on those operations offering a result, what their BDEF derived type is and which components are relevant for the internal tables:

Context

Types

Possible [Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm) of Structures in Internal Table result\_tab

[READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm) operations (excluding [functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_function.htm))

TABLE FOR READ RESULT bdef\[\\\_assoc\]

%data
%key
%pky
%tky

[READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm) operations executing functions (READ ... EXECUTE)

TABLE FOR FUNCTION RESULT bdef~function

%key
%param
%pky
%tky

[MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm) operations executing an action (MODIFY ... EXECUTE)

TABLE FOR ACTION RESULT bdef~action

%cid\_ref
%key
%param
%pky
%tky

Hint

Additional components are possible for all contexts: If [late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_late_numbering_glosry.htm "Glossary Entry") is defined for a BO, the component %pid is available. In case of a draft-enabled BO, the component %is\_draft is available.