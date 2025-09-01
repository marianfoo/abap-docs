---
title: "FREE OBJECT - OLE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfree_object_shortref.htm) Syntax FREE OBJECT ole NO FLUSH. Addition: ... NO FLUSH(#!ABAP_ONE_ADD@1@) Effect This statement releases the memory occupied by the object ole on the current AS Instance(https://he
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfree_object.htm"
abapFile: "abapfree_object.htm"
keywords: ["do", "try", "data", "abapfree", "object"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and OLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenole2.htm) → 

FREE OBJECT - OLE

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfree_object_shortref.htm)

Syntax

FREE OBJECT ole *\[*NO FLUSH*\]*.

Addition:

[... NO FLUSH](#!ABAP_ONE_ADD@1@)

Effect

This statement releases the memory occupied by the object ole on the current [AS Instance](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapplication_server_glosry.htm "Glossary Entry"). The automation object must have been created using the special statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_ole2.htm) for automation objects. After the release, the object is still available on the current automation server, but can no longer be processed in the ABAP program. For the [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_glosry.htm "Glossary Entry") of ole, the description of the statement CREATE OBJECT applies.

When the statement FREE OBJECT is passed to the presentation layer, the entire automation queue collected using the addition NO FLUSH is passed.

System Fields

sy-subrc

Meaning

0

Memory released successfully.

1

Error in communication with SAP GUI.

2

Error in function call in SAP GUI.

Note

An automation object ole created using CREATE OBJECT must also be released using FREE OBJECT to avoid memory bottlenecks and terminations of the application.

Addition

... NO FLUSH

Effect

The meaning of the addition NO FLUSH is included in the description of the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_ole2.htm).

Example

Releases an Excel object.

DATA app TYPE ole2\_object.
CREATE OBJECT app 'Excel.Application' NO FLUSH.
...
FREE OBJECT app NO FLUSH.