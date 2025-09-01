---
title: "ABAP CDS - DEFINE TABLE FUNCTION, element"
description: |
  Syntax ... @element_annot1(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_annotation.htm) @element_annot2(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_annotation.htm) ... KEY name : typing(https:/
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_element.htm"
abapFile: "abencds_f1_return_list_element.htm"
keywords: ["select", "do", "if", "case", "try", "data", "internal-table", "abencds", "return", "list", "element"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_table_function.htm) →  [ABAP CDS - DEFINE TABLE FUNCTION, element\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list.htm) → 

ABAP CDS - DEFINE TABLE FUNCTION, element

Syntax

... *\[*[@element\_annot1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_annotation.htm)*\]*
    *\[*[@element\_annot2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_annotation.htm)*\]*
    ...
      *\[*KEY*\]* name : [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_typing.htm)
    *\[*[@<element\_annot1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_annotation.htm)*\]*
    *\[*[@<element\_annot2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_annotation.htm)*\]* ...

Extras:

[1\. ... @element\_annot ... @<element\_annot](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)

Effect

Specifies an element in the [list of elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry"). name expects a unique element name that complies with the [naming rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_general_syntax_rules.htm). The names of the elements are in the same namespace as the [parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_func_parameter_list.htm) of the table function. Furthermore, name cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The reserved names that cannot be used are specified in the database table TRESE.

Each element must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_typing.htm). This typing determines the data type of the corresponding component of the structured data type represented by the CDS table function and the associated column of the tabular return value result of the associated AMDP function implementation.

It is not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted.

Addition 1

... @element\_annot ... @<element\_annot

Effect

Specifies annotations for the element. The annotations can be specified before the element using [@element\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_annotation.htm) or after the element using [@<element\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_annotation.htm).

Note

An [ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencore_annotation_glosry.htm "Glossary Entry") annotation can be used to assign further technical and semantic attributes to an element in ABAP Dictionary. [Framework-specific annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") can be used to give the element specific semantic attributes for other SAP frameworks.

Addition 2

... KEY

Effect

KEY is used to define the current element as the key element of the current [CDS table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry"). Elements of the [element list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list.htm) can be defined as key elements, which are coherently grouped at the beginning of the list, whereby the client field of a [client-specific](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_handling.htm) CDS table function is ignored. The key elements of the CDS entity are evaluated as follows if they are used as a data source of a [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement in ABAP SQL:

-   By the addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm).

-   In implicit [access control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_control_glosry.htm "Glossary Entry").

If a CDS role defined for a CDS entity is evaluated when the entity is accessed, its key elements must identify a unique row in the results set. If this is not the case, the internal instance of access control can produce duplicate entries or even incorrect results when aggregate functions are used. If a unique key cannot be determined for a CDS entity, no key element should be defined. A different instance of access control is then produced internally, which is less efficient.

Otherwise, the key elements of the CDS entity are used to document the semantics of the data model. The addition KEY is then ignored when the CDS table function is activated and when other accesses are performed in program executions.

Notes

-   In the ABAP SQL syntax check, the key elements are used in places where the key is respected.

-   The key elements are not relevant for the uniqueness of rows within the results set of the CDS table function, which means that exceptions can be raised when making assignments to internal tables with appropriately unique table keys.

Continue
[ABAP CDS - DEFINE TABLE FUNCTION, element\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_annotation.htm)