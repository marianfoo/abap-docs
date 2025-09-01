---
title: "Initializations"
description: |
  The following statements initialize data objects, which means they set the content of a data object to an initial value: -   CLEAR(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclear.htm) -   FREE(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_dataobject.htm
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitializations.htm"
abapFile: "abeninitializations.htm"
keywords: ["delete", "do", "if", "try", "data", "internal-table", "abeninitializations"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Initializations%2C%20ABENINITIALIZATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Initializations

The following statements initialize data objects, which means they set the content of a data object to an initial value:

-   [CLEAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclear.htm)
-   [FREE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_dataobject.htm)

Initialization does not delete the corresponding data objects. Data objects created by declarative statements are only deleted from the memory when exiting a program, together with the [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry"). Objects created dynamically by the statement [CREATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm) are deleted by the [Garbage Collector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). The initialization of reference variables can, however, cause the [Garbage Collector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengarbage_collector_glosry.htm "Glossary Entry") to delete the referenced objects.

Hint

[REFRESH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprefresh_itab.htm) is an obsolete statement used to initialize internal tables.

Continue
[CLEAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclear.htm)
[FREE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_dataobject.htm)