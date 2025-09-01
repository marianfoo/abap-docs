---
title: "GET node - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget-.htm) Syntax GET node LATE FIELDS f1 f2 .... Effect Obsolete: Introduces an event block whose event is raised by a logical database(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_shortref.htm"
abapFile: "abapget_shortref.htm"
keywords: ["do", "if", "try", "data", "abapget", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  G

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20node%2C%20ABAPGET_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET node - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget-.htm)

Syntax

GET node *\[*LATE*\]* *\[*FIELDS f1 f2 ...*\]*.

Effect

Obsolete: Introduces an event block whose event is raised by a [logical database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") when data records of the node node are read.

Additions   

-   LATE
    Event if the logical database has read all the data records of a node node.
-   FIELDS f1 f2 ...
    Specifies which fields are read from the logical database.