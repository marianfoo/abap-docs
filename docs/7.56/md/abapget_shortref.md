---
title: "GET node - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget-.htm) Syntax GET node LATE FIELDS f1 f2 .... Effect Obsolete: Introduces an event block whose event is raised by a logical database(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_shortref.htm"
abapFile: "abapget_shortref.htm"
keywords: ["do", "if", "try", "data", "abapget", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  G

GET node - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget-.htm)

Syntax

GET node *\[*LATE*\]* *\[*FIELDS f1 f2 ...*\]*.

Effect

Obsolete: Introduces an event block whose event is raised by a [logical database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") when data records of the node node are read.

Additions

-   LATE
    Event if the logical database has read all the data records of a node node.
-   FIELDS f1 f2 ...
    Specifies which fields are read from the logical database.