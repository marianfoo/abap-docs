---
title: "Syntax"
description: |
  ... FAILED failed_resp MAPPED mapped_resp REPORTED reported_resp ... Effect Used for RAP responses(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_glosry.htm 'Glossary Entry') in the context of nondynamic (i. e. short or long) forms of ABAP EM
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_responses.htm"
abapFile: "abapeml_responses.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "data", "types", "internal-table", "abapeml", "responses"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommon_eml_elements.htm) →  [ABAP EML - response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20response_param%2C%20Nondynamic%20Forms%20of%20ABAP%20EML%20Statements%2C%20ABAPEML_RESPONSES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

response\_param, Nondynamic Forms of ABAP EML Statements

Syntax

... *\[*FAILED failed\_resp*\]*
    *\[*MAPPED mapped\_resp*\]*
    *\[*REPORTED reported\_resp*\]* ...

Effect

Used for [RAP responses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_glosry.htm "Glossary Entry") in the context of nondynamic (i. e. short or long) forms of ABAP EML statements, for example, [MODIFY ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_short.htm) or [MODIFY ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entities_long.htm). All variants can be used together where possible. The operands failed\_resp, mapped\_resp and reported\_resp after the respective ABAP word represent deep structures that must be typed with the [BDEF derived type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm). These structures can be constructed inline using the declaration operators [DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_inline.htm) and [FINAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfinal_inline.htm).

The deep structures contain one internal table as nested component for each entity of the RAP BO. Therefore, all information on all entities of a RAP BO can be retrieved at once.

The nested internal tables are of type [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm) (plus EARLY or LATE depending on the context) and comprise special components. The addition EARLY is the default, even if not explicitly specified. For example, if response parameters are explicitly declared with the type TYPE RESPONSE FOR FAILED, they automatically have the type TYPE RESPONSE FOR FAILED EARLY. The addition LATE is only possible if:

-   [late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm) is defined for a RAP BO.
-   the statement [COMMIT ENTITIES RESPONSE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapemlcommit_entities_long.htm) is used. The operands for storing the responses must be typed with the LATE addition.

The following overview shows the variants of the structured data type, its purpose as well as the nested internal tables that are themselves typed with a BDEF derived type and their special components. See the details on the components in the documentation for [Components of Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm).

Types of Response Structures

Purpose

Types of Nested Internal Tables

[Components of Nested Internal Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm)

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
In case of a [draft-enabled BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_rap_bo_glosry.htm "Glossary Entry"), the component %is\_draft is available.

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

See further information and rules on response parameters in implementations of the [RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") in the Development Guide for the ABAP RESTful Application Programming Model, section [General RAP BO Implementation Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/1040b81372d44ed38b07a409fa0e1769?version=sap_cross_product_abap).

Executable Example

-   The example [ABAP EML - Responses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_responses_abexa.htm) demonstrates the RAP response parameters using modify operations to change a simple managed RAP BO.