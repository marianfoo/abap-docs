---
title: "Hints"
description: |
  -   If a field of a parent or child entity is marked as readonly in the BDEF(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm 'Glossary Entry'), it cannot be changed and assigned a new value with any of the modify operations(https://help.sap.com/d
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_fields_tab.htm"
abapFile: "abapeml_fields_tab.htm"
keywords: ["delete", "do", "if", "try", "data", "types", "internal-table", "abapeml", "fields", "tab"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommon_eml_elements.htm) → 

ABAP EML - fields\_tab

Internal table that is typed with the required [BDEF derived type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") (TYPE TABLE FOR ...) containing specific components for the communication between a [RAP BO provider](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and [RAP BO consumer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry"). The components are determined by the context in which the internal table is used, i. e. the use and number of the components of the internal table to be specified, for example, for a delete or create operation differ. See the details of the type ([TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm)) and components ([Components of Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm)) in the respective documentation.

The internal table can be constructed in an operand position using [constructor expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), for example with the [value operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_operator_glosry.htm "Glossary Entry") (VALUE) and other [constructor operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expressions.htm) to fill the internal table with instances as input parameters after the respective keyword (for example, FROM).

Hints

-   If a field of a parent or child entity is marked as readonly in the [BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"), it cannot be changed and assigned a new value with any of the [modify operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry"). A modification can only be done using the addition IN LOCAL MODE. See more details in the documentation for [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapin_local_mode.htm).

Example

The following code example shows an internal table that is explicitly declared with a BDEF derived type. It is then used in a MODIFY statement (assuming that create\_root contains values). This is also true for the second example. Yet, the internal table following the statement CREATE SET FIELDS WITH is declared inline using the value operator.

...
DATA create\_root TYPE TABLE FOR CREATE demo\_managed\_root.
MODIFY ENTITY demo\_managed\_root
    CREATE SET FIELDS WITH create\_root.
...
MODIFY ENTITY demo\_managed\_root
    CREATE SET FIELDS WITH VALUE
      #( ( %cid = 'cid1' key\_field = '1' data\_field1\_root = 'aaa'
           data\_field2\_root = 'bbb')
         ( %cid = 'cid2' key\_field = '2' data\_field1\_root = 'ccc'
           data\_field2\_root = 'ddd')
       ).
...