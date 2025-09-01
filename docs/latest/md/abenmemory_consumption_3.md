---
title: "Sharing Between Dynamic Data Objects"
description: |
  When reference variables are assigned, only the references are copied. After an assignment, source and target variables point to the same data object or instance of a class (more precisely, to their headers). Sharing also takes place internally in assignments(https://help.sap.com/doc/abapdocu_late
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_3.htm"
abapFile: "abenmemory_consumption_3.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "internal-table", "abenmemory", "consumption"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Sharing%20Between%20Dynamic%20Data%20Objects%2C%20ABENMEMORY_CONSUMPTION_3%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Sharing Between Dynamic Data Objects

When reference variables are assigned, only the references are copied. After an assignment, source and target variables point to the same data object or instance of a class (more precisely, to their headers).

Sharing also takes place internally in [assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassignment_glosry.htm "Glossary Entry") between similar [strings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_glosry.htm "Glossary Entry") and between similar [internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm "Glossary Entry") whose line types do not themselves contain table types. This means that the actual data values are not copied at first. Only the necessary administration entries are copied, so that the target object refers to the same data as the source object.

For strings, a new internal reference is created that points to the existing string header. For internal tables, a new internal reference and a new table header, which refers to the existing [table body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_body_glosry.htm "Glossary Entry"), are created.

Sharing between dynamic data objects is, of course, only active for as long as multiple dynamic data objects are involved, or more than one internal reference refers to the data values. As soon as only one internal reference refers to the data, sharing no longer takes place. Such cases occur, for example, if involved dynamic data objects only exist during the lifetime of a procedure, or if they are recorded as anonymous data objects by the Garbage Collector.

Active sharing between existing dynamic data objects is canceled when either the source object or target object is accessed in change mode (copy-on-write semantics). The actual copy process for the data values then takes place and the references and headers are changed accordingly.

The following figure illustrates the sharing of dynamic data objects. The upper section shows how strings are shared on the left and how internal tables are shared on the right side. The lower section shows how sharing is canceled when the source or target object is changed.

![Figure](abdoc_sharing.gif)

Hints

-   Table sharing usually only occurs for tables whose line types do not themselves contain table types. Otherwise, the prerequisite for "similar tables" is kept deliberately vague. Tables are similar if they at least have the exact same table type, that is the same line type, table category, and keys. There are other table combinations that are also considered to be similar and in which sharing can take place. However, this is an internal optimization measure that may be changed between releases. Therefore, programming should never be based on when table sharing occurs and when it is canceled again.
-   Sharing also occurs during [pass by value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_value_glosry.htm "Glossary Entry") to procedures.
-   Sharing is not canceled by changes to the objects for reference variables that point to the same data object or the same instance of a class.
-   Another type of sharing is the [initial value sharing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry") of [boxed components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboxed_component_glosry.htm "Glossary Entry") for which the initial value is stored only once per AS instance.
-   Sharing is also supported when accessing [shared objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_objects_glosry.htm "Glossary Entry"), for as long as an [area instance version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") is bound to the current [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") using an [area handle](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_handle_glosry.htm "Glossary Entry").